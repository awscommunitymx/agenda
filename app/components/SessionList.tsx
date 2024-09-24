'use client'
import React, {useMemo, useState} from 'react';
import {Container, VStack} from '@chakra-ui/react';
import {SessionListProps} from "@/app/types/session";
import SessionCard from "@/app/components/SessionCard";
import FilterBar from "@/app/components/FilterBar";

const SessionList: React.FC<SessionListProps> = ({sessions}) => {
    const [trackFilter, setTrackFilter] = useState('');
    const [roomFilter, setRoomFilter] = useState('');

    const sortedSessions = useMemo(() => {
        return [...sessions].sort((a, b) => a.time.start.getTime() - b.time.start.getTime());
    }, [sessions]);


    const filteredSessions = useMemo(() => {
        return sortedSessions.filter(session =>
            (!trackFilter || session.category === trackFilter) &&
            (!roomFilter || session.room === roomFilter)
        ).sort((a, b) => a.time.start.getTime() - b.time.start.getTime());
    }, [sortedSessions, trackFilter, roomFilter]);

    const handleFilterChange = (track: string, room: string) => {
        setTrackFilter(track);
        setRoomFilter(room);
    };

    return (
        <Container maxW="container.xl" py={8}>
            <FilterBar sessions={sortedSessions} onFilterChange={handleFilterChange}/>
            <VStack spacing={4} align="stretch">
                {filteredSessions.map((session) => (
                    <SessionCard key={session.id} session={session}/>
                ))}
            </VStack>
        </Container>
    );
};

export default SessionList;
