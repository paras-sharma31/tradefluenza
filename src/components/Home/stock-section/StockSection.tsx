import HeadingComponent from "@/components/Common/Heading-Component";
import BentoDemo from "./BentoDemo";

export default function StockSection() {
    return (
        <div className="flex flex-col w-full h-full">
            <HeadingComponent className=" text-[#ff5900] text-[120px] leading-[110px] tracking-tight " >
                Checkout <span className="text-white">How your</span>
                <br />
                Stocks  <span className="text-white">are doing</span>
            </HeadingComponent >
            <BentoDemo />
            <HeadingComponent className=" text-white text-[120px] leading-[110px] mt-10" >
                HAVE MORE
                <br />
                <span className="text-[#ff5900]">QUESTIONS</span>
                <br />
                FOR US?
            </HeadingComponent >
            <p className="text-[#ff5900] underline italic text-lg font-normal">Contact an Academy Counselor</p>
        </div>
    )
}