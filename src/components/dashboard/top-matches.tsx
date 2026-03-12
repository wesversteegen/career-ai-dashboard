"use client";

import { jobs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MapPin, ArrowRight } from "lucide-react";

export function TopMatches() {
  const topJobs = jobs.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Matches</CardTitle>
        <CardDescription>AI-selected roles based on your profile</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            View all <ArrowRight className="size-3" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {topJobs.map((job, i) => (
          <div key={job.id}>
            {i > 0 && <Separator className="mb-4" />}
            <div className="flex items-start gap-3">
              <Avatar className="size-10 rounded-lg">
                <AvatarFallback className="rounded-lg bg-muted text-sm font-bold">{job.companyLogo}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium text-sm">{job.title}</h3>
                  <Badge variant="secondary" className="shrink-0 text-xs font-semibold tabular-nums">
                    {job.matchScore}%
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{job.company} &middot; {job.salary}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" />{job.location}
                  </span>
                  <Badge variant="outline" className="text-[10px] h-4">{job.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{job.matchReason}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {job.skillOverlap.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[10px] h-4">{skill}</Badge>
                  ))}
                  {job.skillGaps.slice(0, 2).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-[10px] h-4">+{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
