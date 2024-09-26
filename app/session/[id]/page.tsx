import sessions from "@/app/data/sessions";
import {notFound} from "next/navigation";
import {Session} from "@/app/types/session";
import SingleSessionPage from "@/app/components/SingleSessionPage";

export default async function Page({params}: { params: { id: string } }) {
    const session = await getSessionById(params.id);

    if (!session) {
        notFound();
    }

    return <SingleSessionPage session={session}/>;
}

async function getSessionById(id: string): Promise<Session | undefined> {
    const session = sessions.find(session => session.id === id);
    
    if (session?.isSpecial) {
        return undefined;
    }

    return session;
}

export const generateStaticParams = async () => {
    return sessions.map((session) => ({
        id: session.id.toString(),
    }));
}
