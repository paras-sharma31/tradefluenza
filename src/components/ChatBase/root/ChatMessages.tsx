import { Play, StopCircle } from "lucide-react";
import { useState } from "react";

const ChatMessages = ({ messages, loading }: { messages: any[]; loading: boolean }) => {
  const [currentSpeakingIndex, setCurrentSpeakingIndex] = useState<number | null>(null);
  const utteranceRef = useState<SpeechSynthesisUtterance | null>(null);

  const speakText = (text: string, index: number) => {
    if (currentSpeakingIndex === index) {
      stopSpeaking();
      return;
    }
    stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.onstart = () => setCurrentSpeakingIndex(index);
    utterance.onend = () => setCurrentSpeakingIndex(null);
    window.speechSynthesis.speak(utterance);
      // utteranceRef.current = utterance;
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setCurrentSpeakingIndex(null);
  };

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
            message.role === "user" ? "ml-auto bg-orange-500 text-white rounded-md" : "bg-gray-100 text-gray-900"
          }`}
        >
          {message.content}
          {message.role !== "user" && (
            <button onClick={() => speakText(message.content, index)} className="text-gray-500 hover:text-gray-700 mt-1">
              {currentSpeakingIndex === index ? <StopCircle className="h-4 w-4 inline" /> : <Play className="h-4 w-4 inline" />} {currentSpeakingIndex === index ? "Stop" : "Listen"}
            </button>
          )}
        </div>
      ))}
      {loading && (
        <div className="p-4 ">
          <div className="loader" />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
