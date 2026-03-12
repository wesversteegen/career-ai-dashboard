"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ChatFabProps {
  onOpenChat: () => void;
  isVisible: boolean;
}

export function ChatFab({ onOpenChat, isVisible }: ChatFabProps) {
  if (!isVisible) return null;

  return (
    <Button
      onClick={onOpenChat}
      size="icon"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 size-12 rounded-full shadow-lg z-50"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <Sparkles />
    </Button>
  );
}
