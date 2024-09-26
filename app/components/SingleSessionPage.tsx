'use client'

import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Text,
    VStack
} from '@chakra-ui/react';
import {Session} from '@/app/types/session';
import {getCategoryColor, getLevelColor} from "@/app/utils/colors";
import {Icon, TimeIcon} from "@chakra-ui/icons";
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
    const [isLoaded, setIsLoaded] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [sessionTime, setSessionTime] = useState<SessionTime>({start: '', end: ''});

    const [status, setStatus] = useState<StatusType>('none');
    const [statusText, setStatusText] = useState<string>('');

    const handleFavorite = async () => {
        setFavorite(!favorite);
        toggleFavorite(session.id.toString());
        const inc = favorite ? -1 : 1;
        await registerFavorite(session.id.toString(), inc);
    }

    useEffect(() => {
        const calculateStatus = () => {
            const now = new Date();
            if (session.time.start <= now && session.time.end >= now) {
                setStatus('positive');
                setStatusText("En curso");
            } else if (session.time.end < now) {
                setStatus('inactive');
                setStatusText("Finalizada");
            } else if (session.time.start > now) {
                if (session.time.start.getTime() - now.getTime() < 15 * 60 * 1000) {
                    setStatus('intermediary');
                    setStatusText("Empezando pronto");
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
                    <Flex justifyItems={"start"}>
                        <HStack>
                            <StatusIndicator status={status} pulse={status === "positive"}/>
                            <Text fontSize="sm" color="gray.600">
                                {statusText}
                            </Text>

                        </HStack>
                    </Flex>
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

                <Heading as="h1" size="xl" color="blue.600">
                    {session.title}
                </Heading>

                <VStack alignItems={"start"}>
                    <HStack>
                        <Avatar size="md" name={session.speaker} src={session.speakerImage}/>
                        <VStack align="start" spacing={0}>
                            <Text fontWeight="bold">{session.speaker}</Text>
                            <Text fontSize="sm" color="gray.500">Speaker</Text>
                        </VStack>
                    </HStack>
                    {session.coSpeaker && (
                        <HStack>
                            <Avatar size="md" name={session.coSpeaker} src={session.speakerImage}/>
                            <VStack align="start" spacing={0}>
                                <Text fontWeight="bold">{session.coSpeaker}</Text>
                                <Text fontSize="sm" color="gray.500">Co-Speaker</Text>
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
                        Room: {session.room}
                    </Text>
                </HStack>

                <Text fontSize="md">
                    {session.description}
                </Text>

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