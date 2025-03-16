import { Button } from "@/components/registry/new-york/ui/button";
import { Input } from "@/components/registry/new-york/ui/input";
import { Send, AudioLines } from "lucide-react";

const ChatInput = ({
  input,
  setInput,
  handleSubmit,
  isRecording,
  setIsRecording,
  recognitionRef,
}: {
  input: string;
  setInput: (val: string) => void;
  handleSubmit: (message: string) => void;
  isRecording: boolean;
  setIsRecording: (val: boolean) => void;
  recognitionRef: React.MutableRefObject<any>;
}) => {
  const startRecording = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => setIsRecording(true);
    recognitionRef.current.onend = () => setIsRecording(false);

    recognitionRef.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      handleSubmit(transcript);
    };
    recognitionRef.current.start();
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }} className="flex w-full items-center space-x-2">
      <Input
        id="message"
        placeholder="Type your message..."
        className="flex-1 rounded-full border-gray-200"
        autoComplete="off"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Button onClick={startRecording} className={`rounded-full ${isRecording ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}>
        <AudioLines className="h-5 w-5" />
      </Button>
      <Button type="submit" disabled={!input.trim()} className="rounded-full bg-orange-200 hover:bg-orange-300">
        <Send className="h-5 w-5 text-orange-500" />
      </Button>
    </form>
  );
};

export default ChatInput;
