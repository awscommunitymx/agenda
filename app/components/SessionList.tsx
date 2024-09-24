import React from 'react';
import {Container, VStack} from '@chakra-ui/react';
import {SessionListProps} from "@/app/types/session";
import SessionCard from "@/app/components/SessionCard";


const SessionList: React.FC<SessionListProps> = ({sessions}) => {
    return (
        <Container maxW="container.xl" py={8}>
            <VStack spacing={4} align="stretch">
                {sessions.map((session) => (
                    <SessionCard key={session.id} session={session}/>
                ))}
            </VStack>
        </Container>
    );
};

export default SessionList;