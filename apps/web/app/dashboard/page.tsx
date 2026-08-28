
import SearchForm from "@/components/dashboard/search/SearchForm";
import SearchJobs from "@/components/dashboard/search/SearchJobs";
import { toArray } from "@/src/lib/format";
import { Box, Tabs, Text } from "@radix-ui/themes";

interface JobFilters {
    jobs: string[],
    periodPublication: string;
    includeTypeJobs: string;
    excludeTypeJobs: string
}

export default async function Dashboard({ searchParams }: PageProps<"/dashboard">) {
    const params = await searchParams;
    const filtros: JobFilters = {
        jobs: toArray(params.jobs),
        periodPublication: (params.period as string) ?? "lastWeek",
        includeTypeJobs: (params.include as string) ?? "remote",
        excludeTypeJobs: (params.exclude as string) ?? "on-site",
    };
    
    return (
        <main className="grid grid-cols-1 md:grid-cols-[15%_1fr] gap-2 md:flex-1">
            <div className="shadow-sm flex flex-col" >
                <h1 className="mt-6 font-mono font-semibold text-xl tracking-widest self-center hidden sm:block">BUSCAR VAGAS</h1>
                <SearchForm></SearchForm>
            </div>         
            <div className="">
            <Tabs.Root defaultValue="jobs">
                <Tabs.List>
                    <Tabs.Trigger value="jobs">Vagas</Tabs.Trigger>
                    <Tabs.Trigger value="appliedJobs">Aplicadas</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="jobs">
                        {filtros.jobs.length > 0 ? (
                            <SearchJobs data={filtros}></SearchJobs>
                        ) : (
                            <p className="">Não tem Filtro</p>
                        )}
                    </Tabs.Content>

                    <Tabs.Content value="appliedJobs">
                        <Text size="2">Access and update your documents.</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
            </div> 
        </main>
    );
}