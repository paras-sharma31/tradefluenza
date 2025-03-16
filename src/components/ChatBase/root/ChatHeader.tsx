import { Avatar, AvatarFallback, AvatarImage } from "@/components/registry/new-york/ui/avatar";
import { Button } from "@/components/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/registry/new-york/ui/tooltip";
import { X } from "lucide-react";

const ChatHeader = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="flex items-center bg-white rounded-t-xl border-b p-4">
      <Avatar>
        <AvatarImage src="/avatars/01.png" alt="Paras Sharma" />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <div className="ml-3">
        <p className="text-sm font-medium">Paras Sharma</p>
        <p className="text-sm text-gray-500">sharmaparas388@gmail.com</p>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline" className="ml-auto rounded-full h-10 w-10" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={10}>Close</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ChatHeader;
