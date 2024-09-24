'use client'
import SessionList from "@/app/components/SessionList";
import sessions from "@/app/data/sessions";


export default function Page() {


    return (
        <>
            <SessionList sessions={sessions}/>
        </>
    )
}