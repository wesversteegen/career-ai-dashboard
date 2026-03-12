"use client";

import { useState, useMemo } from "react";
import { jobs } from "@/lib/data";
import { JobCard } from "./job-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search, ArrowUpDown } from "lucide-react";

const typeFilters = ["All", "Remote", "Hybrid", "On-site"] as const;

export function JobList() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("match");

  const filtered = useMemo(() => {
    let result = [...jobs];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((j) => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.tags.some((t) => t.toLowerCase().includes(q)));
    }
    if (typeFilter !== "All") result = result.filter((j) => j.type === typeFilter);
    if (sortBy === "match") result.sort((a, b) => b.matchScore - a.matchScore);
    return result;
  }, [search, typeFilter, sortBy]);

  return (
    <div className="flex flex-col gap-4">
      {/* Search + filter bar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search roles, companies, or skills..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <ToggleGroup value={[typeFilter]} onValueChange={(v) => { if (v.length > 0) setTypeFilter(v[v.length - 1]); }} className="border rounded-lg p-0.5">
          {typeFilters.map((t) => (
            <ToggleGroupItem key={t} value={t} variant="outline" size="sm" className="text-xs h-8 px-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground border-0">
              {t}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-semibold">{filtered.length}</span> roles found
        </p>
        <div className="flex items-center gap-1 text-xs">
          <ArrowUpDown className="size-3 text-muted-foreground" />
          {[{ key: "match", label: "Match Score" }, { key: "salary", label: "Salary" }, { key: "recent", label: "Recent" }].map((s) => (
            <Button key={s.key} variant={sortBy === s.key ? "secondary" : "ghost"} size="sm" className="h-7 text-xs px-2" onClick={() => setSortBy(s.key)}>
              {s.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Job cards */}
      <div className="flex flex-col gap-2">
        {filtered.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
