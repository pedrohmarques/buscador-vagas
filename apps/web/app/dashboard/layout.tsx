import { auth } from "@/auth";
import Header from "@/components/dashboard/Header";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {
    const session = await auth();
    if(!session?.user) redirect('/')
    return (
        <section className="flex flex-col h-screen">
            <Header user={{name: session.user.name!, email: session.user.email!, img: session.user.image! } }/>
            {children}
        </section>
    );
}