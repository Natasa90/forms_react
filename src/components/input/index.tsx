import { ChangeEvent, FC } from 'react'

interface InputProps { 
    type: string;
    label: string;
    name: string;
    placeholder: string; 
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC <InputProps> = ({type, name, placeholder, label, handleOnChange}) => {
    return (
        <label>{label}
            <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange}/>
        </label>
    )
}