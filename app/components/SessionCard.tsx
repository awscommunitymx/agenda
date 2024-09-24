import React from 'react';
import {Avatar, Badge, Box, HStack, Text, Tooltip, VStack} from '@chakra-ui/react';
import {InfoIcon, TimeIcon} from '@chakra-ui/icons';
import {SessionCardProps} from "@/app/types/session";

const SessionCard: React.FC<SessionCardProps> = ({session}) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            shadow="md"
            _hover={{shadow: 'lg'}}
            transition="all 0.3s"
        >
            <VStack align="stretch" spacing={3}>
                <HStack justify="space-between">
                    <Badge colorScheme={session.track === 'Technical' ? 'blue' : 'green'}>
                        {session.track}
                    </Badge>
                    <HStack>
                        <TimeIcon/>
                        <Text fontSize="sm">{session.time}</Text>
                    </HStack>
                </HStack>

                <Text fontSize="xl" fontWeight="semibold">
                    {session.title}
                </Text>

                <Text fontSize="md" color="gray.600">
                    {session.description}
                </Text>

                <HStack spacing={2}>
                    <Avatar size="sm" name={session.speaker} src={session.speakerImage}/>
                    <Text fontWeight="medium">{session.speaker}</Text>
                    <Tooltip label={`Room ${session.room}`} aria-label="Room information">
                        <InfoIcon/>
                    </Tooltip>
                </HStack>
            </VStack>
        </Box>
    );
};

export default SessionCard;