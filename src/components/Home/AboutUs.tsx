import Image from "next/image";
import HeadingComponent from "../Common/Heading-Component";

export default function AboutUs() {
    return (
        <>
            <div className="flex w-full">
                <div className="w-2/3">
                    <HeadingComponent className="text-[#ff5900] text-[90px] leading-[80px]">
                        EXPLORE MASTERCLASS
                    </HeadingComponent>
                    <span className="text-xl">
                        Masterclass has over 200 hours of Live Training spread across 9
                        Curated Modules and Practical Live Market Assistance.
                        <br />
                        Masterclass is all you need to become a Professional Day Trader.
                    </span>
                    <p className="text-[#ff5900] underline italic text-lg font-semibold">learn more</p>
                </div>
                <div className="w-1/3">
                    <Image src={'/images/bea_Asset.png'} alt="" width={300} height={200} />
                </div>
            </div>
            <div className="flex gap-5 w-full py-10" >
                <div className="w-1/2 border-b relative">
                <div className="absolute right-5 z-[-10]">
                    <Image 
                        src="/images/Community.png"  
                        alt="Traders Community"
                        className="bg-transparent"
                        width={180}
                        height={180}
                        objectFit="cover"
                        sizes="(max-width: 479px) 81vw, 180px"                    
                        />
                    <div className="absolute inset-0 bg-[#000000c7]"></div>
                </div>
                    <HeadingComponent className="text-[80px] font-normal leading-[70px] text-white">
                        OUR <span className="text-[#ff5900]">TRADER'S <br />
                            COMMUNITY</span>
                    </HeadingComponent>
                    <ul className="text-[16px] font-normal text-white">
                        <li className="mr-[70px] leading-[26px]">Interact with more than 4000 Traders across India.</li>
                        <li className="mr-[70px] leading-[26px]"> Clear your doubts with mentors within seconds.</li>
                        <li className="mr-[70px] landing-[26px]">Receive Trading Performance Coaching & Feedbacks from Experts.</li>
                    </ul>
                    <p className="text-[#f06500] underline italic text-lg font-semibold py-5">learn more</p>
                </div>
                <div className="w-1/2 border-b">
                    <HeadingComponent className="text-[80px] font-normal leading-[70px] text-white">
                        Student <br />
                        <span className="text-[#f2e205]">scholarship</span>
                    </HeadingComponent>
                    <ul className="text-[16px] font-normal text-white">
                       <li className="landing-[26px]">Avail 25% Discount.</li>
                       <li className="landing-[26px]">Simple Verification process.</li>
                        <li className="landing-[26px ]">No hidden Terms & Conditions.</li>
                    </ul>
                    <p className="text-[#f2e205] underline italic text-lg font-semibold py-5">learn more</p>
                </div>
            </div>
        </>

    )
}