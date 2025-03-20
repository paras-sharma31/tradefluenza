import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";
import { suponserFirstIcons } from "@/lib/const";

const firstRow = suponserFirstIcons.slice(0, suponserFirstIcons.length / 2);
const secondRow = suponserFirstIcons.slice(suponserFirstIcons.length / 2);

const ReviewCard = ({
 icons,
 alt,
}: {
  icons: string;
  alt: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center">
        <div  className="w-[100px] h-[50px] flex items-center- flex-shrink-0">
            <Image src={icons} alt={alt} width={100} height={80} className="object-contain" />
        </div>
      </div>
    </figure>
  );
};

export default function Suponser() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.alt} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.alt } {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
