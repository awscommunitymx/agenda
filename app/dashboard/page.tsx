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
        , [])

    return (
        <VStack w={"100%"}>
            <Heading>
                Sesiones favoritas
            </Heading>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={events}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="event_id" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false}
                           tickFormatter={(value) => Math.round(value).toString()}
                           domain={[0, 'dataMax']}
                           allowDecimals={false}/>
                    <Tooltip
                        contentStyle={{
                            background: '#f1f5f9',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                        labelStyle={{color: '#0f172a', fontWeight: 'bold'}}
                        formatter={(value) => [value, 'Count']}
                    />
                    <Bar dataKey="favorite_count" fill="#3b82f6" radius={[4, 4, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </VStack>
    );
}
