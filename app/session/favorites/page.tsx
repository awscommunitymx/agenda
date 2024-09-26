'use client'
import {Flex, Heading} from "@chakra-ui/react";
import sessions from "@/app/data/sessions";
import {getFavoriteSessions} from "@/app/utils/favorite";
import SessionList from "@/app/components/SessionList";
import {useEffect, useState} from "react";
import {Session} from "@/app/types/session";

export default function Page() {
    const [favorites, setFavorites] = useState<Session[]>([])

    useEffect(() => {
            setFavorites(sessions.filter(
                session => getFavoriteSessions().includes(String(session.id))
            ) || [])
        }, []
    )

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading>
                Mi agenda
            </Heading>
            <SessionList sessions={favorites} inAgendaPage={true}/>
        </Flex>
    )
}

