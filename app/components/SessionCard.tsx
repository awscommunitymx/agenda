'use client'
import React, {useState} from 'react';
import {Avatar, Badge, Box, Button, Collapse, Flex, HStack, Text, Tooltip, VStack} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon, Icon, InfoIcon, TimeIcon} from '@chakra-ui/icons';
import {Category, Level, SessionCardProps} from "@/app/types/session";
import {FaMapPin} from "react-icons/fa";

const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
};

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'IA/ML':
            return 'blue';
        case 'Operaciones':
            return 'green';
        case 'FinOps':
            return 'purple';
    }
}

const getLevelColor = (level: Level): string => {
    switch (level) {
        case 'Básico':
            return 'green';
        case 'Intermedio':
            return 'blue';
        case 'Avanzado':
            return 'purple';
    }
}

const SessionCard: React.FC<SessionCardProps> = ({session}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleAbstract = () => setIsCollapsed(!isCollapsed);

    const abstractWords = session.description.split(' ');
    const previewLength = Math.ceil(abstractWords.length / 3);

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
                    <VStack align={"start"}>
                        <Badge colorScheme={getCategoryColor(session.category)}>
                            {session.category}
                        </Badge>
                        <Badge colorScheme={getLevelColor(session.level)}>
                            {session.level}
                        </Badge>
                    </VStack>
                    <VStack align={"end"}>
                        <HStack>
                            <TimeIcon/>
                            <Text fontSize="sm" suppressHydrationWarning>
                                {formatTime(session.time.start)} - {formatTime(session.time.end)}
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon as={FaMapPin}/>
                            <Text fontSize="sm" suppressHydrationWarning>
                                {session.room}
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>

                <Text fontSize="xl" fontWeight="semibold">
                    {session.title}
                </Text>

                <VStack align="stretch" spacing={2}>
                    <Collapse startingHeight={isCollapsed ? "4.5em" : "auto"} in={!isCollapsed} animateOpacity>
                        <Text fontSize="md" color="gray.600">
                            {session.description}
                        </Text>
                    </Collapse>
                    {abstractWords.length > previewLength && (
                        <Flex justifyContent={"center"}>
                            <Button
                                onClick={toggleAbstract}
                                size="md"
                                variant="ghost"
                                rightIcon={isCollapsed ? <ChevronDownIcon boxSize={"1.5em"}/> :
                                    <ChevronUpIcon boxSize={"1.5em"}/>}

                                alignSelf="flex-start"
                                color="blue.500"
                                iconSpacing={0}
                            >
                            </Button>
                        </Flex>
                    )}
                </VStack>

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
