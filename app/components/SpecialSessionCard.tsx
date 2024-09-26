import React, {useEffect, useState} from "react";
import {SessionCardProps} from "@/app/types/session";
import StatusIndicator, {StatusType} from "@/app/components/StatusIndicator";
import {Box, Center, Container, HStack, Skeleton, Text, VStack} from "@chakra-ui/react";
import {Icon, TimeIcon} from "@chakra-ui/icons";
import {formatTime, getTimeDifference} from "@/app/utils/time";
import {FaMapPin} from "react-icons/fa";

const SpecialSessionCard: React.FC<SessionCardProps> = ({session}) => {
    const [isLoaded, setIsLoaded] = useState(false);


    const [status, setStatus] = useState<StatusType>('none');
    const [statusText, setStatusText] = useState<string>('');


    useEffect(() => {
        const calculateStatus = () => {
            const now = new Date();
            if (session.time.start <= now && session.time.end >= now) {
                setStatus('positive');
                const remaining = session.time.end.getTime() - now.getTime();
                setStatusText(`En curso (Tiempo restante ${Math.ceil(remaining / 60000)} minuto${remaining / 60000 == 1 ? '' : 's'})`);
            } else if (session.time.end < now) {
                setStatus('inactive');
                setStatusText("Finalizada");
            } else if (session.time.start > now) {
                if (session.time.start.getTime() - now.getTime() < 15 * 60 * 1000) {
                    setStatus('intermediary');
                    const timeToStart = session.time.start.getTime() - now.getTime();
                    setStatusText(`Inicia en ${Math.ceil(timeToStart / 60000)} minuto${timeToStart / 60000 === 1 ? '' : 's'}`);
                } else {
                    setStatus('none');
                    setStatusText("");
                }
            }
        }

        calculateStatus();
        setIsLoaded(true);

        const interval = setInterval(calculateStatus, 60000);

        return () => clearInterval(interval);
    }, [session.time.end, session.time.start]);


    return (
        <Box
            borderWidth="2px"
            borderRadius="lg"
            borderColor="orange.200"
            overflow="hidden"
            p={4}
            shadow="md"
            _hover={{shadow: 'lg'}}
            transition="all 0.3s"
        >
            <VStack align="stretch" spacing={3}>
                <Container>
                    <Center>
                        <VStack>
                            {status !== "none" && isLoaded && (
                                <HStack justify={"space-between"}>
                                    <HStack>
                                        <StatusIndicator status={status} pulse={status === "positive"}/>
                                        <Text fontSize="sm" color="gray.600">
                                            {statusText}
                                        </Text>
                                    </HStack>
                                </HStack>
                            )}
                            {
                                !isLoaded && (
                                    <Skeleton height='10px'/>
                                )
                            }
                            <Text fontSize="xl" fontWeight="semibold">
                                {session.title} <Icon as={session.icon}/>
                            </Text>
                            <HStack>
                                <HStack>
                                    <TimeIcon/>
                                    {
                                        isLoaded && (
                                            <Text fontSize="sm" suppressHydrationWarning>
                                                {formatTime(session.time.start)} ({getTimeDifference(session.time.start, session.time.end)})
                                            </Text>
                                        )
                                    }
                                    {!isLoaded && (<Skeleton height="10px"/>)}
                                </HStack>

                            </HStack>
                            <HStack>
                                <Icon as={FaMapPin}/>
                                <Text fontSize="sm" suppressHydrationWarning>
                                    {session.room}
                                </Text>
                            </HStack>

                        </VStack>
                    </Center>
                </Container>
            </VStack>
        </Box>
    );
}

export default SpecialSessionCard;
