'use client'

import React, {useEffect, useState} from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    Link,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Text,
    useToast,
    VStack
} from '@chakra-ui/react';
import {Session} from '@/app/types/session';
import {getCategoryColor, getLevelColor} from "@/app/utils/colors";
import {ExternalLinkIcon, Icon, TimeIcon} from "@chakra-ui/icons";
import {FaHeart, FaMapPin, FaRegHeart} from "react-icons/fa";
import {isFavorite, registerFavorite, toggleFavorite} from "@/app/utils/favorite";
import {formatTime, getTimeDifference} from "@/app/utils/time";
import StatusIndicator, {StatusType} from "@/app/components/StatusIndicator";

interface SingleSessionPageProps {
    session: Session;
}

interface SessionTime {
    start: string;
    end: string;
}

const SingleSessionPage: React.FC<SingleSessionPageProps> = ({session}) => {
    const toast = useToast();

    const [isLoaded, setIsLoaded] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [sessionTime, setSessionTime] = useState<SessionTime>({start: '', end: ''});

    const [status, setStatus] = useState<StatusType>('none');
    const [statusText, setStatusText] = useState<string>('');

    const handleFavorite = async () => {
        setFavorite(!favorite);
        toggleFavorite(session.id.toString());
        const inc = favorite ? -1 : 1;
        toast({
            title: `${favorite ? 'Eliminada de' : 'Agregada a'} tu agenda`,
            description: `${session.id} ha sido ${favorite ? 'eliminada de' : 'agregada a'} tu agenda`,
            status: "success",
            duration: 3000,
            isClosable: true,
        })
        await registerFavorite(session.id.toString(), inc);
    }

    useEffect(() => {
        const calculateStatus = () => {
            const now = new Date();
            if (session.time.start <= now && session.time.end >= now) {
                setStatus('positive');
                const remaining = session.time.end.getTime() - now.getTime();
                setStatusText(`En curso (Tiempo restante ${Math.ceil(remaining / 60000)} minuto${remaining === 1 ? '' : 's'})`);
            } else if (session.time.end < now) {
                setStatus('inactive');
                setStatusText("Finalizada");
            } else if (session.time.start > now) {
                if (session.time.start.getTime() - now.getTime() < 15 * 60 * 1000) {
                    setStatus('intermediary');
                    const timeToStart = session.time.start.getTime() - now.getTime();
                    setStatusText(`Inicia en ${Math.ceil(timeToStart / 60000)} minuto${timeToStart === 1 ? '' : 's'}`);
                } else {
                    setStatus('none');
                    setStatusText("");
                }
            }
        }

        calculateStatus();

        const interval = setInterval(calculateStatus, 60000);

        return () => clearInterval(interval);
    }, [session.time.end, session.time.start]);

    useEffect(() => {
        setFavorite(
            isFavorite(session.id.toString())
        )
        setSessionTime({
            start: formatTime(session.time.start),
            end: formatTime(session.time.end)
        });
        setIsLoaded(true);
    }, [session.id, session.time.end, session.time.start]);

    return (

        <Box borderWidth={1} borderRadius="lg" p={6} bg="white" shadow="md">
            <VStack align="stretch" spacing={4}>
                {status !== "none" && isLoaded && (
                    <HStack justify={"space-between"}>
                        <HStack>
                            <StatusIndicator status={status} pulse={status === "positive"}/>
                            <Text fontSize="sm" color="gray.600">
                                {statusText}
                            </Text>
                        </HStack>
                        {status === "inactive" && session.rateUrl && (
                            <Link href={session.rateUrl} isExternal>
                                <Button size="sm" colorScheme="blue" variant="outline">
                                    Calificar sesión <ExternalLinkIcon mx='2px'/>
                                </Button>
                            </Link>
                        )}
                    </HStack>
                )}
                {
                    !isLoaded && (
                        <Skeleton height='10px'/>
                    )
                }

                <HStack justify={"space-between"}>
                    <VStack alignItems={"start"}>
                        <Badge colorScheme={getCategoryColor(session.category)} alignSelf="flex-start">
                            {session.category}
                        </Badge>
                        <Badge colorScheme={getLevelColor(session.level)} alignSelf="flex-start">
                            {session.level}
                        </Badge>
                    </VStack>
                    <SkeletonCircle isLoaded={isLoaded}>
                        <Button onClick={handleFavorite} colorScheme="red" variant="link"
                                rightIcon={favorite ? <Icon as={FaHeart}/> : <Icon as={FaRegHeart}/>}>
                        </Button>
                    </SkeletonCircle>
                </HStack>

                <Heading as="h1" size="xl" color="gray.700">
                    {session.title}
                </Heading>

                <VStack alignItems={"start"}>
                    <HStack>
                        <Avatar size="md" name={session.speaker} src={session.speakerImage}/>
                        <VStack align="start" spacing={0}>
                            <Text fontWeight="bold">{session.speaker}</Text>
                            <Text fontSize="sm"
                                  color="gray.500">{session.speakerCompany} - {session.speakerLocation}</Text>
                        </VStack>
                    </HStack>
                    {session.coSpeaker && (
                        <HStack>
                            <Avatar size="md" name={session.coSpeaker} src={session.speakerImage}/>
                            <VStack align="start" spacing={0}>
                                <Text fontWeight="bold">{session.coSpeaker}</Text>
                                <Text fontSize="sm"
                                      color="gray.500">{session.coSpeakerCompany} - {session.coSpeakerLocation}</Text>
                            </VStack>
                        </HStack>
                    )}

                </VStack>

                <HStack>
                    <TimeIcon/>
                    {
                        isLoaded ?
                            <Text fontSize="sm" suppressHydrationWarning>
                                {sessionTime.start} - {sessionTime.end} ({getTimeDifference(session.time.start, session.time.end)})
                            </Text>
                            :
                            <SkeletonText noOfLines={1} w="150px"/>
                    }
                </HStack>

                <HStack>
                    <Icon as={FaMapPin}/>
                    <Text fontSize="md" color="gray.700">
                        Sala: {session.room}
                    </Text>
                </HStack>

                <Text fontSize="md">
                    {session.description}
                </Text>

                <Box borderWidth={1} borderRadius="lg">
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Text fontWeight={"bold"}>
                                    ¿Por qué debería asistir?
                                </Text>
                            </AccordionButton>
                            <AccordionPanel>
                                <Text fontSize="md">
                                    {session.cta}
                                </Text>
                                <small>
                                    <i>Generado automáticamente por <b>Claude 3.5 Sonnet</b> en <b>Amazon
                                        Bedrock.</b></i>
                                </small>
                            </AccordionPanel>
                        </AccordionItem>
                        {session.language === "English" && session.descriptionSpanish && (
                            <AccordionItem>
                                <AccordionButton>
                                    <Text fontWeight={"bold"}>
                                        Descripción (Español)
                                    </Text>
                                </AccordionButton>
                                <AccordionPanel>
                                    <Text fontSize="md">
                                        {session.descriptionSpanish}
                                    </Text>
                                    <small>
                                        <i>Traducido automáticamente por <b>Claude 3.5 Sonnet</b> en <b>Amazon
                                            Bedrock.</b></i>
                                    </small>
                                </AccordionPanel>
                            </AccordionItem>
                        )}
                    </Accordion>
                </Box>

                {isLoaded ? (
                    <Button colorScheme={favorite ? 'yellow' : 'blue'} size="md" variant="solid"
                            onClick={handleFavorite}>
                        {favorite ? 'Eliminar de mi agenda' : 'Agregar a mi agenda'}
                    </Button>
                ) : (
                    <Skeleton isLoaded={isLoaded} height='40px'/>
                )
                }
            </VStack>
        </Box>
    );
};

export default SingleSessionPage;