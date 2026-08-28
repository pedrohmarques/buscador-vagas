import { Badge, Progress } from "@radix-ui/themes";

interface SearchJobs {
    jobs: string[],
    periodPublication: string;
    jobType: string[];
}
export default async function SearchJobs({data}:{data: SearchJobs}) {
    return (
        <main className="flex flex-col gap-4">
            <section className="rounded-lg border border-border bg-card p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold">Filtros aplicados</h3>
                        <p className="text-sm text-primary">0 de 8 vagas</p>
                    </div>
                    <div className="flex gap-2">
                        {data.jobs.map((job) => (
                            <Badge key={job} highContrast={true} variant="soft">{job}</Badge>
                        ))}
                        <Badge highContrast={true} variant="soft">{data.periodPublication}</Badge>
                        {data.jobType.map((type) => (
                            <Badge key={type} highContrast={true} variant="soft">{type}</Badge>
                        ))}
                    </div>
                </div>
                <Progress />
            </section>

        </main>
    );
}