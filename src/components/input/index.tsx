import { ChangeEvent, FC } from 'react'

interface InputProps { 
    label: string;
    name: string;
    placeholder: string; 
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC <InputProps> = ({name, placeholder, label, handleOnChange}) => {
    return (
        <label>{label}
            <input name={name} placeholder={placeholder} onChange={handleOnChange}/>
        </label>
    )
}