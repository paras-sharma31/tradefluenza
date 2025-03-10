import React from 'react';
import Button from '../Common/Button';
import { Check, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { tableData } from '@/lib/const';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { ShinyButton } from '../magicui/shiny-button';
import { AnimatedSubscribeButton } from '../magicui/animated-subscribe-button';


const TabelSection = () => {

    const renderCellContent = (content: string | { main: string[]; additional: string; }, type: string) => {
        if (type === "check" && content === "check") {
            return <Check className="inline-block text-blue-400" size={24} />;
        } else if (type === "complex" && typeof content === "object") {
            return (
                <>
                    {content?.main?.map((line, idx) => (
                        <div key={idx}>{line}</div>
                    ))}
                    <div className="mt-2">{content.additional}</div>
                </>
            );
        }
        return <>{content}</>;
    };

    return (
        <div className="mb-20 mt-10">
            <div className='flex justify-center mb-8'>

                <AnimatedSubscribeButton className="w-56 h-14" style={{border:"1px solid #ff5900", borderRadius:"25px"}} >
                    <span className="group inline-flex items-center">
                         Join Now
                        <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="group inline-flex items-center">
                        <CheckIcon className="mr-2 size-4" />
                    </span>
                </AnimatedSubscribeButton>
            </div>
            <div className="max-w-6xl mx-auto rounded-2xl border overflow-hidden bg-gray-800/50 backdrop-blur">
                <div className="grid grid-cols-3 text-gray-200 p-4 border-b border">
                    <div></div>
                    {tableData.heading.map((item, index) => (
                        <div key={index} className="text-center text-lg">
                            {item.title}
                        </div>
                    ))}
                </div>

                {tableData.rows.map((row, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-3 p-4 ${index !== tableData.rows.length - 1 ? 'border-b border' : ''
                            }`}
                    >
                        <div className="text-orange-500 font-medium">
                            {row.title}
                        </div>
                        <div className="text-center text-gray-400">
                            {renderCellContent(row.otherAcademy, row.type)}
                        </div>
                        <div className="text-center text-gray-400">
                            {renderCellContent(row.havenArk, row.type)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabelSection;