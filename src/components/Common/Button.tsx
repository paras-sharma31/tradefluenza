
export default function Button({ title , className }:{ title: string, className?: string }){
    return (
        <button className={`border-[#aff000] border text-[#aff000]  px-20 py-3 rounded-md ${className}`}>{title}</button>
    )
}