"use client";

import { Job } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MapPin, Bookmark, BookmarkCheck, ChevronDown, Star, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="size-10 rounded-lg">
            <AvatarFallback className="rounded-lg bg-muted text-sm font-bold">{job.companyLogo}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-sm">{job.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{job.company} &middot; {job.salary}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Badge variant="secondary" className="text-[11px] font-bold">{job.matchScore}% match</Badge>
                <Button variant="ghost" size="icon" className="size-7">
                  {job.saved ? <BookmarkCheck className="text-primary" /> : <Bookmark />}
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3" />{job.location}</span>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">{job.type}</Badge>
              <span className="text-[10px] text-muted-foreground">{job.postedAt}</span>
              {job.companyInfo && (
                <>
                  <span className="text-muted-foreground/30">|</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Users className="size-3" />{job.companyInfo.size}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Building2 className="size-3" />{job.companyInfo.funding}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                    <Star className="size-3 fill-chart-4 text-chart-4" />{job.companyInfo.rating}
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {job.tags.map((tag) => <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0 h-4">{tag}</Badge>)}
            </div>

            {/* Expandable match reason */}
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="h-7 px-2 mt-2 text-xs text-primary gap-1" />}>
                  <ChevronDown className={cn("transition-transform", open && "rotate-180")} data-icon="inline-start" />
                  {open ? "Hide details" : "Why you match"}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-2 flex flex-col gap-2 animate-in slide-in-from-top-1 duration-200">
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="text-xs text-muted-foreground leading-relaxed">{job.matchReason}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] text-muted-foreground mr-1">Skills match:</span>
                    {job.skillOverlap.map((s) => <Badge key={s} variant="secondary" className="text-[10px] px-1.5 py-0 h-4">{s}</Badge>)}
                    {job.skillGaps.length > 0 && (
                      <>
                        <span className="text-[10px] text-muted-foreground ml-2 mr-1">Gaps:</span>
                        {job.skillGaps.map((s) => <Badge key={s} variant="outline" className="text-[10px] px-1.5 py-0 h-4">{s}</Badge>)}
                      </>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
