'use client'

import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    SkeletonCircle,
    SkeletonText,
    Text,
    VStack
} from '@chakra-ui/react';
import {Session} from '@/app/types/session';
import {getCategoryColor, getLevelColor} from "@/app/utils/colors";
import {Icon, TimeIcon} from "@chakra-ui/icons";
import {FaHeart, FaMapPin, FaRegHeart} from "react-icons/fa";
import {isFavorite, toggleFavorite} from "@/app/utils/favorite";

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

    const handleFavorite = () => {
        setFavorite(!favorite);
        toggleFavorite(session.id.toString());
    }

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: 'America/Monterrey'});
    };

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
                                {sessionTime.start} - {sessionTime.end}
                            </Text>
                            :
                            <SkeletonText noOfLines={1} w="100px"/>
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
            </VStack>
        </Box>
    );
};

export default SingleSessionPage;