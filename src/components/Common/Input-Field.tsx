
type Props = {
    type?: string;
    value?: string;
    placeholder?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
    checked?: boolean;
    text?: string;

};

export default function InputField({type, value,name, placeholder, handleChange,className }: Props) {
    return(
        <input type={type} value={value} name={name} placeholder={placeholder} onChange={handleChange} className={`border rounded-sm ${className}`} />
    )
}

export  function RadioField({text, value,name,checked, handleChange,className }: Props) {
    return(
        <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-gray-600"
            />
            <span className="text-white font-medium italic text-base">{text}</span>
        </div>
    )
}