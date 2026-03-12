"use client";

import { useState, useEffect } from "react";
import { user } from "@/lib/data";

export function WelcomeHero() {
  const [greeting, setGreeting] = useState("Welcome back");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening");
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">
        {greeting}, {user.name.split(" ")[0]}
      </h1>
      <p className="text-muted-foreground mt-1">
        Here&apos;s what&apos;s happening with your job search today.
      </p>
    </div>
  );
}
