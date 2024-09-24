'use client'
import Nav from "@/app/components/Nav";
import {Session} from "@/app/types/session";
import SessionList from "@/app/components/SessionList";

export default function Page() {
    const sessions: Session[] = [
        {
            id: 1,
            title: "Introduction to React",
            description: "Learn the basics of React and its core concepts.",
            speaker: "Jane Doe",
            speakerImage: "https://example.com/jane-doe.jpg",
            time: "9:00 AM - 10:30 AM",
            track: "Technical",
            room: "101"
        },
    ];

    return (
        <>
            <Nav/>
            <SessionList sessions={sessions}/>
        </>
    )
}