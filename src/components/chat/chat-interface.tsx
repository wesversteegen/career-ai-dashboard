"use client";

import { useState, useRef, useEffect } from "react";
import { chatMessages as initialMessages, suggestedPrompts, type ChatMessage } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Send, Sparkles, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: `m${Date.now()}`, role: "user", content: text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const aiMsg: ChatMessage = { id: `m${Date.now() + 1}`, role: "assistant", content: getAIResponse(text), timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Chat header */}
      <Card className="mb-4 shadow-none">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="size-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">CareerAI Assistant</h3>
            <p className="text-xs text-muted-foreground">Your personal job search companion</p>
          </div>
          <Badge variant="secondary" className="ml-auto text-[10px] h-5">Online</Badge>
        </CardContent>
      </Card>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2">
        {messages.map((msg) => (
          <div key={msg.id} className={cn("flex items-start gap-2.5", msg.role === "user" && "flex-row-reverse")}>
            <Avatar className="size-7 shrink-0">
              <AvatarFallback className={cn("text-[10px] font-semibold", msg.role === "assistant" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                {msg.role === "assistant" ? <Sparkles className="size-3" /> : <User className="size-3" />}
              </AvatarFallback>
            </Avatar>
            <Card className={cn("max-w-[80%] shadow-none", msg.role === "user" ? "bg-primary/5 border-primary/10" : "")}>
              <CardContent className="p-3">
                <div className="text-sm leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
                <p className="text-[10px] text-muted-foreground mt-1.5">{msg.timestamp}</p>
              </CardContent>
            </Card>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-2.5">
            <Avatar className="size-7"><AvatarFallback className="bg-primary text-primary-foreground text-[10px]"><Sparkles className="size-3" /></AvatarFallback></Avatar>
            <Card className="shadow-none"><CardContent className="p-3 flex items-center gap-2"><Loader2 className="size-3.5 animate-spin text-primary" /><span className="text-xs text-muted-foreground">Thinking...</span></CardContent></Card>
          </div>
        )}
      </div>

      {/* Suggested prompts */}
      {messages.length <= 5 && (
        <div className="flex flex-wrap gap-1.5 py-3">
          {suggestedPrompts.slice(0, 4).map((prompt) => (
            <Button key={prompt} variant="outline" size="sm" className="text-xs h-7 rounded-full" onClick={() => sendMessage(prompt)}>{prompt}</Button>
          ))}
        </div>
      )}

      <Separator className="my-2" />

      {/* Input */}
      <div className="flex items-center gap-2">
        <Input placeholder="Ask me anything about your job search..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage(input)} className="flex-1" />
        <Button size="icon" disabled={!input.trim()} onClick={() => sendMessage(input)}>
          <Send />
        </Button>
      </div>
    </div>
  );
}

function formatMessage(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("new jobs") || lower.includes("match")) {
    return "I found 8 new roles since we last spoke! Here are the highlights:\n\n1. **Staff AI Engineer at Anthropic** (94% match) - $220k-$310k\n2. **Senior ML Engineer at OpenAI** (91% match) - $245k-$350k\n3. **Senior AI Engineer at Cohere** (89% match) - $185k-$265k\n\nWant me to go deeper on any of these?";
  }
  if (lower.includes("interview") || lower.includes("prep")) {
    return "Let me help you prepare! For your upcoming Anthropic interview, here are likely topics:\n\n1. **LLM Architecture** - Transformer internals, attention mechanisms\n2. **Fine-tuning** - LoRA, RLHF, DPO approaches\n3. **Evaluation** - Benchmark design, red-teaming\n4. **System Design** - Serving LLMs at scale\n\nWant me to run a mock interview on any of these topics?";
  }
  if (lower.includes("salary") || lower.includes("preferences")) {
    return "Your current preferences are:\n- Target role: Staff AI / ML Engineer\n- Salary: $180k-$250k\n- Location: Open to Remote & SF Bay Area\n\nBased on your matches, you could aim higher — the median is $220k. Want to update any of these?";
  }
  if (lower.includes("skill") || lower.includes("learn")) {
    return "Based on your top 24 matches, here\u2019s what would boost your scores most:\n\n1. **CUDA/Triton** (+8% average match) - 40% of roles mention it\n2. **Rust** (+5% average match) - Growing in systems AI\n3. **JAX** (+4% average match) - Key for research roles\n\nThe fastest ROI would be a weekend CUDA project!";
  }
  if (lower.includes("cover letter") || lower.includes("draft")) {
    return "I\u2019d be happy to draft a cover letter! I\u2019ll highlight:\n\n- Your 6 years of ML experience\n- Specific projects with LLMs and fine-tuning\n- Relevant skills matching their requirements\n\nWhich company should I tailor it for?";
  }
  return "Great question! Based on your profile and 24 active matches, I can help with:\n\n- Detailed job analysis and match explanations\n- Interview preparation and mock interviews\n- Salary negotiation strategies\n- Skill gap analysis and learning paths\n- Cover letter and resume optimization\n\nWhat would be most helpful right now?";
}
