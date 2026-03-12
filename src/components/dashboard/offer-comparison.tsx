"use client";

import { activeOffers } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, DollarSign, MapPin, Calendar, Gift, CheckCircle2, AlertCircle } from "lucide-react";

function formatCurrency(n: number) {
  return `$${(n / 1000).toFixed(0)}k`;
}

export function OfferComparison() {
  const offer = activeOffers[0];
  if (!offer) return null;

  // Days until deadline
  const deadline = new Date("2026-03-18");
  const now = new Date();
  const daysLeft = Math.max(0, Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="size-4 text-chart-1" />
          Active Offer
        </CardTitle>
        <CardDescription>Review and compare your offer</CardDescription>
        <CardAction>
          <Badge variant={daysLeft <= 3 ? "destructive" : "secondary"} className="text-xs gap-1">
            <Clock className="size-3" />
            {daysLeft} days left
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Company header */}
          <div className="flex items-center gap-3">
            <Avatar className="size-10 rounded-lg">
              <AvatarFallback className="rounded-lg bg-muted text-sm font-bold">{offer.companyLogo}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{offer.role}</h3>
              <p className="text-sm text-muted-foreground">{offer.company} &middot; {offer.location}</p>
            </div>
          </div>

          <Separator />

          {/* Compensation breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-lg border bg-muted/30 p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Base</p>
              <p className="text-lg font-semibold tabular-nums">{formatCurrency(offer.baseSalary)}</p>
            </div>
            <div className="rounded-lg border bg-muted/30 p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Equity/yr</p>
              <p className="text-lg font-semibold tabular-nums">{formatCurrency(offer.equity / 4)}</p>
            </div>
            <div className="rounded-lg border bg-muted/30 p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Signing</p>
              <p className="text-lg font-semibold tabular-nums">{formatCurrency(offer.signingBonus)}</p>
            </div>
            <div className="rounded-lg border bg-primary/5 p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Comp</p>
              <p className="text-lg font-semibold tabular-nums text-primary">{formatCurrency(offer.totalComp)}</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="size-4 shrink-0" />
              <span>Annual bonus: <span className="text-foreground font-medium">{offer.annualBonus}</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="size-4 shrink-0" />
              <span>Equity: <span className="text-foreground font-medium">{offer.equitySchedule}</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              <span>{offer.remote}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>{offer.pto}</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-1.5">
            {offer.benefits.map((b) => (
              <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
            ))}
          </div>

          {/* Market context */}
          <div className="rounded-lg border bg-muted/30 p-3 flex items-start gap-2">
            <AlertCircle className="size-4 text-chart-1 mt-0.5 shrink-0" />
            <div className="text-sm text-muted-foreground">
              This offer is in the <span className="text-foreground font-medium">top 15%</span> for Senior ML roles in SF.
              The base is above median ($220k), and total comp is competitive with FAANG offers.
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1" size="sm">Accept Offer</Button>
            <Button variant="outline" size="sm">Negotiate</Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">Ask AI for advice</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
