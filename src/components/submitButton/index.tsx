import { ChangeEvent, FC } from 'react'

interface SubmitButtonProps {
    onClick: () => void
}


export const SubmitButton: FC <SubmitButtonProps> = ({onClick}) => {
    return (
        <button onClick={onClick}  style={{width: '100px', height: '30px', color: 'black'}}>Submit</button>
    )
}