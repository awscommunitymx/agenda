'use client'

import {useEffect, useState} from "react";
import {baseUri} from "@/app/utils/favorite";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Heading, VStack} from "@chakra-ui/react";

interface EventInfo {
    event_id: string;
    favorite_count: number;
}

export default function Page() {
    const [events, setEvents] = useState<EventInfo[]>([]);

    useEffect(() => {
            const fetchEvents = async () => {
                const response = await fetch(baseUri, {method: 'GET', mode: 'cors'});
                const data = await response.json();
                setEvents(data);
            }
            fetchEvents().catch(console.error);
        }
    )

    return (
        <VStack w={"100%"}>
            <Heading>
                Sesiones favoritas
            </Heading>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={events}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="event_id"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="favorite_count" fill="#8884d8"/>
                </BarChart>
            </ResponsiveContainer>
        </VStack>
    );
}