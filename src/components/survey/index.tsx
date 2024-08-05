import { FC, ChangeEvent } from 'react'

interface SurveyProps {
    type: string; 
    value: string;
    id: string; 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Survey: FC <SurveyProps> = ({type, value, id, handleChange}) => {
    return (
    <label>{value}
        <input type={type} value={value} id={id} onChange={handleChange}/>
    </label>
    )
}