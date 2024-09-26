'use client'
import React, {useMemo, useState} from 'react';
import {Container, VStack} from '@chakra-ui/react';
import {Session, SessionListProps} from "@/app/types/session";
import SessionCard from "@/app/components/SessionCard";
import FilterBar from "@/app/components/FilterBar";

const SessionList: React.FC<SessionListProps> = ({sessions}) => {

    const sortedSessions = useMemo(() => {
        return [...sessions].sort((a, b) => a.time.start.getTime() - b.time.start.getTime());
    }, [sessions]);


    const [filters, setFilters] = useState<Record<string, string[]>>({});

    const filteredSessions = useMemo(() => {
        return sortedSessions.filter((session) => {
            return Object.entries(filters).every(([key, values]) => {
                // @ts-expect-error key is a string
                return values.length === 0 || values.includes(session[key as keyof Session]);
            });
        });
    }, [sortedSessions, filters]);

    const handleFilterChange = (newFilters: Record<string, string[]>) => {
        setFilters(newFilters);
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
