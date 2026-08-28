
import SearchForm from "@/src/components/dashboard/search/SearchForm";
import SearchJobs from "@/src/components/dashboard/search/SearchJobs";
import { toArray } from "@/src/lib/format";
import { Box, Tabs, Text } from "@radix-ui/themes";

interface JobFilters {
    jobs: string[],
    periodPublication: string;
    jobType: string[];
}

export default async function Dashboard({ searchParams }: PageProps<"/dashboard">) {
    const params = await searchParams;
    const filtros: JobFilters = {
        jobs: toArray(params.jobs),
        periodPublication: (params.period as string) ?? "lastWeek",
        jobType: toArray(params.jobType)
    };
    
    return (
        <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-lg border border-border bg-card p-4 md:sticky md:top-20" >
                <h1 className="text-base font-semibold">Buscar Vagas</h1>
                <SearchForm></SearchForm>
            </aside>
            <main className="space-y-3">
                {filtros.jobs.length > 0 ? (
                    <SearchJobs data={filtros}></SearchJobs>
                ) : (
                    <p className="">Não tem Filtro</p>
                )} 
            </main>
        </main>
    );
}