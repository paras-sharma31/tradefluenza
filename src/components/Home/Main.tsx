import Suponser from "../Common/Suponser";
import AboutUs from "./AboutUs";
import BannerSection from "./Banner";
import ContactFormSection from "./ContactFormSection";
import StockSection from "./stock-section/StockSection";
import TabelSection from "./TabelSection";
import VideoSection from "./VideoSection";

export default function Main() {
    return (
        <div className="w-3/4 text-white lex justify-center flex-col items-center mx-auto pb-10">
           <BannerSection />
           <VideoSection />
           <Suponser />
           <TabelSection />
           <AboutUs />
           <ContactFormSection />
           <StockSection />
        </div>
    )
}