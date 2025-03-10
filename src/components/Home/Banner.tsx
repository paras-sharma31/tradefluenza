import HeadingComponent from "../Common/Heading-Component";
import { TypingAnimation } from "../magicui/typing-animation";

export default function BannerSection() {
  return (
    <div>
      <HeadingComponent className="text-[#ff5900] leading-[130px]">
        <TypingAnimation startOnView={true} className="text-[140px] font-medium">
            INDIA'S LARGEST
        </TypingAnimation>
          <>
            <p className="text-white">STOCK TRADING COMMUNITY</p>
          </>
      </HeadingComponent>

      <p className="text-white font-sans tracking-wide text-lg">
        Gain all the knowledge you need to be the best trader.
        <span className="text-[#ff5900]"> Trusted by over 20,000 Traders across the country.</span>
      </p>
    </div>
  );
}
