"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/registry/new-york/ui/card";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export function CardsChat({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [messages, setMessages] = useState([
    { role: "model", content: "Hi, how can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any | null>(null);

  const handleSubmit = async (messageText: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!messageText.trim()) return;
    setLoading(true);
    
    setMessages((prev) => [...prev, { role: "user", content: messageText }]);
    setInput("");

    try {
      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB-2ct7QLUczVGEsz9e4chOstw0tO4EMog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: messageText }] }] }),
      });

      const data = await res.json();
      if (data?.candidates) {
        setMessages((prev) => [
          ...prev, 
          { role: data.candidates[0]?.content?.role || "model", content: data.candidates[0]?.content?.parts[0]?.text || "No response" }
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "model", content: "Sorry, I didn't understand that." }]);
      }
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: "model", content: "Something went wrong. Try again later." }]);
      console.log(error)
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg">
      <Card className="bg-white rounded-xl shadow-lg w-[400px]">
        <ChatHeader setOpen={setOpen} />
        <CardContent className="p-4 h-[350px] overflow-y-auto">
          <ChatMessages messages={messages} loading={loading} />
        </CardContent>
        <CardFooter className="p-4 border-t">
          <ChatInput 
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            recognitionRef={recognitionRef}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
