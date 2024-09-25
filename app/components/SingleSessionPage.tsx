'use client'

import React from 'react';
import {Avatar, Badge, Box, Heading, HStack, Text, VStack} from '@chakra-ui/react';
import {Session} from '@/app/types/session';
import {getCategoryColor} from "@/app/utils/colors";

interface SingleSessionPageProps {
    session: Session;
}

const SingleSessionPage: React.FC<SingleSessionPageProps> = ({session}) => {
    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    return (

        <Box borderWidth={1} borderRadius="lg" p={6} bg="white" shadow="md">
            <VStack align="stretch" spacing={4}>
                <Badge colorScheme={getCategoryColor(session.category)} alignSelf="flex-start">
                    {session.category}
                </Badge>

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

                <Text fontSize="lg" suppressHydrationWarning>
                    {formatTime(session.time.start)} - {formatTime(session.time.end)}
                </Text>

                <Text fontSize="md" color="gray.700">
                    Room: {session.room}
                </Text>

                <Text fontSize="md">
                    {session.description}
                </Text>
            </VStack>
        </Box>
    );
};

export default SingleSessionPage;