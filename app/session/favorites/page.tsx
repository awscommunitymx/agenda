'use client'
import {Flex, Heading} from "@chakra-ui/react";
import sessions from "@/app/data/sessions";
import {getFavoriteSessions} from "@/app/utils/favorite";
import SessionList from "@/app/components/SessionList";

export default function Page() {
    const favorites = sessions.filter(
        session => getFavoriteSessions().includes(String(session.id))
    )
    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading>
                Mi agenda
            </Heading>
            <SessionList sessions={favorites}/>
        </Flex>
    )
}