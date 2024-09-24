import sessions from "@/app/data/sessions";
import {notFound} from "next/navigation";
import {Session} from "@/app/types/session";
import SingleSessionPage from "@/app/components/SingleSessionPage";

export default async function Page({params}: { params: { id: string } }) {
    const session = await getSessionById(parseInt(params.id));

    if (!session) {
        notFound();
    }

    return <SingleSessionPage session={session}/>;
}

async function getSessionById(id: number): Promise<Session | undefined> {
    return sessions.find(session => session.id === id);
}

export const generateStaticParams = async () => {
    return sessions.map((session) => ({
        id: session.id.toString(),
    }));
}