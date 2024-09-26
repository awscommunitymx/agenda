import React from "react";
import {SessionCardProps} from "@/app/types/session";
import SessionCard from "@/app/components/SessionCard";
import SpecialSessionCard from "@/app/components/SpecialSessionCard";

const SessionCardRenderer: React.FC<SessionCardProps> = ({session}) => {
    if (session.isSpecial) {
        return <SpecialSessionCard session={session}/>
    } else {
        return <SessionCard session={session}/>
    }
}

export default SessionCardRenderer;
