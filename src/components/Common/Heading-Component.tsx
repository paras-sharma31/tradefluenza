import { Bebas_Neue } from "next/font/google";

interface IHeadingComponentProps {
    children: React.ReactNode;
    className?: string;
}
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
})

export default function HeadingComponent({ children, className }: IHeadingComponentProps) {
    return (
        <h1  className={`${className} ${bebasNeue.className} text-start text-[140px]`}>
            <span>
                {children}
            </span>
        </h1>
    );
}
