import { Badge, Progress } from "@radix-ui/themes";

interface SearchJobs {
    jobs: string[],
    periodPublication: string;
    includeTypeJobs: string;
    excludeTypeJobs: string
}
export default async function SearchJobs({data}:{data: SearchJobs}) {
    return (
        <main className="flex flex-col gap-4">
            <section className="shadow rounded-xl bg-brand-gradient-soft flex flex-col gap-2 py-6 px-6 m-6">
                <div className="flex flex-col gap-2">
                    <p className="font-mono font-bold text-xl">Filtros</p>
                    <div className="flex gap-2">
                        {data.jobs.map((job) => (
                            <Badge key={job} highContrast={true} variant="outline" color="crimson">{job}</Badge>
                        ))}
                    </div>

                </div>
                <div className="">
                    <div className="">
                        <p className="">Vagas</p>
                        <p className="">10</p>
                    </div>
                    <Progress />
                </div>
            </section>

        </main>
    );
}