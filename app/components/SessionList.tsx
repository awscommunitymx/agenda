'use client'
import React, {useEffect, useMemo, useState} from 'react';
import {Alert, Container, Divider, Heading, VStack} from '@chakra-ui/react';
import {Session, SessionListProps} from "@/app/types/session";
import SessionCard from "@/app/components/SessionCard";
import FilterBar from "@/app/components/FilterBar";

const SessionList: React.FC<SessionListProps> = ({sessions}) => {
    const [currentSessions, setCurrentSessions] = useState<Session[]>(sessions);
    const [pastSessions, setPastSessions] = useState<Session[]>([]);

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

    useEffect(() => {
        const filterSessions = () => {
            const now = new Date();
            const current = filteredSessions.filter((session) => session.time.end > now);
            const past = filteredSessions.filter((session) => session.time.end <= now);

            setCurrentSessions(current);
            setPastSessions(past);
        }

        filterSessions();

        // Filter sessions every minute
        const interval = setInterval(filterSessions, 60000);

        return () => clearInterval(interval);
    }, [filteredSessions]);

    const handleFilterChange = (newFilters: Record<string, string[]>) => {
        setFilters(newFilters);
    };

    return (
        <Container maxW="container.xl" py={8}>
            <FilterBar sessions={sortedSessions} onFilterChange={handleFilterChange}/>
            <VStack spacing={4} align="stretch">
                {filteredSessions.length === 0 &&
                    <Alert status="warning">
                        No se encontraron sesiones
                    </Alert>
                }
                {currentSessions.map((session) => (
                    <SessionCard key={session.id} session={session}/>
                ))}
            </VStack>
            <VStack spacing={4} align="stretch" marginTop={"30px"}>
                {pastSessions.length > 0 &&
                    <>
                        <Divider/>
                        <Heading as="h2" size="lg">
                            Sesiones finalizadas
                        </Heading>
                    </>
                }
                {pastSessions.map((session) => (
                    <SessionCard key={session.id} session={session}/>
                ))}
            </VStack>
        </Container>
    );
};

export default SessionList;
