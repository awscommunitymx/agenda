'use client'
import React, {useEffect, useState} from 'react';
import {Avatar, Badge, Box, Button, Collapse, Flex, HStack, Text, Tooltip, VStack} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon, Icon, InfoIcon, TimeIcon} from '@chakra-ui/icons';
import {SessionCardProps} from "@/app/types/session";
import {FaHeart, FaMapPin, FaRegHeart} from "react-icons/fa";
import {isFavorite, toggleFavorite} from "@/app/utils/favorite";
import {getCategoryColor, getLevelColor} from "@/app/utils/colors";

const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
};

const SessionCard: React.FC<SessionCardProps> = ({session}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const [favorite, setFavorite] = useState(false);

    const toggleAbstract = () => setIsCollapsed(!isCollapsed);

    const abstractWords = session.description.split(' ');
    const previewLength = Math.ceil(abstractWords.length / 3);

    const handleFavorite = () => {
        setFavorite(!favorite);
        toggleFavorite(session.id.toString());
    }

    useEffect(() => {
        setFavorite(
            isFavorite(session.id.toString())
        )
    }, [session.id]);

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

                <HStack justify={"space-between"}>
                    <HStack spacing={2}>
                        <Avatar size="sm" name={session.speaker} src={session.speakerImage}/>
                        <Text fontWeight="medium">{session.speaker}</Text>
                        <Tooltip label={`Room ${session.room}`} aria-label="Room information">
                            <InfoIcon/>
                        </Tooltip>
                    </HStack>
                    <Button onClick={handleFavorite} colorScheme="red" variant="link"
                            rightIcon={favorite ? <Icon as={FaHeart}/> : <Icon as={FaRegHeart}/>}>
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default SessionCard;
