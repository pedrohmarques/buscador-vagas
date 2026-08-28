export function parseJobs(input: string): string[] {
    return input
      .trim()                              
      .split(/\s+/)                        
      .filter(Boolean)                     
      .map((term) => term.split("-").join(" "));
  }

export function toArray(v: string | string[] | undefined): string[] {
    return v === undefined ? [] : [v].flat();
}