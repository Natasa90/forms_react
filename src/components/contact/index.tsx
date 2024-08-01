import { FC, useState, ChangeEvent } from 'react'
import { Input } from '../input'
import { Survey } from '../survey';
import { SubmitButton } from '../submitButton';

interface programmingLangProps {
    languages: string [];
    answers: string [];
}

export const FormData: FC = () => { 

    const [userName, setUserName] = useState<string>('')
    const updateUserName = (e: ChangeEvent<HTMLInputElement>): void => { 
        const usersUserName = e.target.value; 
        setUserName(usersUserName); 
    }

    const [password, setPassword] = useState<string>('')
    const updatePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersPassword = e.target.value;
        setPassword(usersPassword);
    }

    const [phoneNumber, setPhoneNumber] = useState<number>(0)
    const updatePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersPhone = e.target.value;
        setPhoneNumber(Number(usersPhone)); 
    }

    const [isEmployed, setEmployment] = useState<boolean>(false)
    const updateEmployment = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersEmployment = e.target.checked;
        setEmployment(usersEmployment); 

    }

    const [programmingLang, setProgrammingLang] = useState<programmingLangProps> ({
        languages: [],
        answers: []
    })
    
    const handleChangeLang = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value, checked } = e.target; 
        const { languages } = programmingLang;
        
        if (checked) {
            console.log(`${value} is ${checked}`);
        } 
    }

    const handleSubmit = (): void => {
        console.log(userName)
        console.log(password)
        console.log(phoneNumber)
        console.log(`Employed? ${isEmployed}`)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin:'0 auto', width: '200px', gap: '10px'}}>
            <Input 
                label="User name:" 
                name="userName" 
                placeholder="John Pitt" 
                handleOnChange={updateUserName}
            />
            <Input 
                label="Password:" 
                name="password" 
                placeholder="12345" 
                handleOnChange={updatePassword}
            />
            <Input 
                label="Phone number:" 
                name="phoneNumber" 
                placeholder="7733084424" 
                handleOnChange={updatePhoneNumber}
            />
            <label> Employed: 
                <input type='checkbox' name="agree" onChange={updateEmployment}/>
            </label>
            <div style={{display: 'flex', flexDirection: 'column', width: '300px', gap: '10'}}> 
                <p>Your programming language:</p>
                <Survey 
                    type='checkbox' 
                    value='Python' 
                    id='language' 
                    handleChange={handleChangeLang}
                 />
                <Survey 
                    type='checkbox' 
                    value='JavaScript' 
                    id='language' 
                    handleChange={handleChangeLang}
                />
                <Survey 
                    type='checkbox' 
                    value='C++' 
                    id='language' 
                    handleChange={handleChangeLang}
                />
                <Survey 
                    type='checkbox' 
                    value='Java' 
                    id='language' 
                    handleChange={handleChangeLang}
                />
            </div>
            <SubmitButton onClick={handleSubmit}/>
        </div>
    )
}
