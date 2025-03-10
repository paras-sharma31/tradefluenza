'use client'
import { b } from "motion/react-client";
import HeadingComponent from "../Common/Heading-Component";
import InputField, { RadioField } from "../Common/Input-Field";
import Select from 'react-select'
import React, { useEffect } from "react";
import { fetchStates } from "@/services/Services";
import Button from "../Common/Button";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";


export default function ContactFormSection() {
    const [options, setOptions] = React.useState([])
    useEffect(() => {
        try {
            fetchStates().then((data) => {
                setOptions(data.map((state: any) => ({ value: state, label: state })))
            })
        } catch (error) {
        }
    }, [])

    return (
        <div className="flex flex-col my-5">
            <HeadingComponent className="text-[#ff5900] text-[140px] leading-[120px]">
                FINANCIAL
                <br />
                <span className="text-white">
                    LITERACY
                </span>
            </HeadingComponent>
            <div>
                <p className="text-white tracking-wider text-[18px] landing-[24px] pr-[10px] mb-2 ">
                    We aim to educate people about the Importance of Financial
                    Literacy and help them setup their Personal Portfolios.
                    < br />
                    <span className="underline text-[#ff5900]">We also collaborate</span> with colleges to host webinars for
                    Students to support their journey to Financial Independence.
                </p>
                <p className="text-[#ff5900] text-xl font-medium">Receive Free E-books, Trader’s Cheat Sheets and Weekly Stock Market Round-ups from our experts.</p>
            </div>
            <form action="">
                <div className="flex gap-5 flex-col py-6">
                    <InputField
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="p-2 bg-[#222] italic"
                    />
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Please provide a valid email address"
                        className="p-2 bg-[#222] italic"
                    />
                    <InputField
                        type="number"
                        name="mobile"
                        placeholder="Mobile Number"
                        className="p-2 bg-[#222] italic"
                    />
                    <Select
                        options={options}
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "#222",
                            }),
                            container: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "#222",
                            }),
                            singleValue: (baseStyles) => ({
                                ...baseStyles,
                                color: "#fff",
                            }),
                            placeholder: (baseStyles) => ({
                                ...baseStyles,
                                color: "#fff",
                            }),
                            menu: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "#222",
                            }),
                            option: (baseStyles, { isSelected }) => ({
                                ...baseStyles,
                                backgroundColor: isSelected ? "#444" : "#222",
                                color: "#fff",
                                ":hover": {
                                    backgroundColor: "#555",
                                },
                            }),
                        }}
                        placeholder="Select State"
                    />
                    <label htmlFor="" className="text-base font-medium">How many years of trading experience do you have?</label>
                    <RadioField
                        text="No Experience"
                        value="option2"
                        name="radioGroup"
                    />
                    <RadioField
                        text="Less Than 1 Year"
                        value="option2"
                        name="radioGroup"
                    />
                    <RadioField
                        text="5 - 10 Years"
                        value="option2"
                        name="radioGroup"
                    />
                    <RadioField
                        text="10+ Years"
                        value="option2"
                        name="radioGroup"
                    />
                    <AnimatedSubscribeButton className="w-56 h-14" style={{border:"1px solid #ff5900", borderRadius:"25px",  margin: '60px auto 17px'}} >
                    <span className="group inline-flex items-center">
                         Submit Form                      
                        <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="group inline-flex items-center">
                        <CheckIcon className="mr-2 size-4" />
                    </span>
                </AnimatedSubscribeButton>
                </div>
            </form>
        </div>
    )
}