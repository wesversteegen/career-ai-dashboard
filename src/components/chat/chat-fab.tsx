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
      className="fixed bottom-6 right-6 size-12 rounded-full shadow-lg"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <Sparkles />
    </Button>
  );
}
