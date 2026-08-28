import { auth } from "@/auth";
import Header from "@/src/components/dashboard/Header";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {
    const session = await auth();
    return (
        <section className="min-h-screen bg-background">
            {session?.user && (
                <Header user={{name: session.user.name!, email: session.user.email!, img: session.user.image! } }/>
            )}
            {children}
        </section>
    );
}