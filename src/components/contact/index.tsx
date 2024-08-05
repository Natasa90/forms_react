import { FC, useState, ChangeEvent } from 'react'
import { Input } from '../input'
import { Survey } from '../survey'
import { SubmitButton } from '../submitButton';

interface UserLangProps {
    languages: string [];
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

    const [userLang, setUserLang] = useState<UserLangProps>({languages: []}); 

    const updateUserLang = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target; 
        const { languages } = userLang; 
        
        if (checked) {
            setUserLang({
                languages: [...languages, value] 
            })
        }else {
            setUserLang({
                languages: languages.filter(lan => lan !== value)
            })
        }
    }

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false); 

    const handleSubmitted = () => {
        setIsSubmitted(true); 
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin:'0 auto', width: '200px', gap: '10px'}}>
            <form>
            <Input 
                type='text'
                label="User name:" 
                name="userName" 
                placeholder="John Pitt" 
                handleOnChange={updateUserName}
            />
            <Input 
                type='text'
                label="Password:" 
                name="password" 
                placeholder="12345" 
                handleOnChange={updatePassword}
            />
            <Input 
                type='text'
                label="Phone number:" 
                name="phoneNumber" 
                placeholder="7733084424" 
                handleOnChange={updatePhoneNumber}
            />
             <Input 
                type='checkbox'
                label="Employed?" 
                name="isEmployed" 
                placeholder="" 
                handleOnChange={updateEmployment}
            />
            <div style={{display: 'flex', flexDirection: 'column', margin:'0 auto', width: '200px', gap: '10px'}}>
                <Survey
                    type='checkbox'
                    value='Javascript'
                    id = '1'
                    handleChange={updateUserLang}
                />
                <Survey
                    type='checkbox'
                    value='Java'
                    id = '2'
                    handleChange={updateUserLang}
                />
                <Survey
                    type='checkbox'
                    value='Python'
                    id = '3'
                    handleChange={updateUserLang}
                />
                <Survey
                    type='checkbox'
                    value='C++'
                    id = '4'
                    handleChange={updateUserLang}
                />
            </div>
            </form>
            <SubmitButton onClick={handleSubmitted}/>
            {isSubmitted && (
                <div>
                    <h3>Submitted Form:</h3>
                    <p>Your name: {userName}</p>
                    <p>Your password: {password}</p>
                    <p>Your phone number: {phoneNumber}</p>
                    <p>Employed: {isEmployed ? 'yes' : 'no'}</p>
                    <p>Languages learnt: {userLang.languages.map((lang) => <li>{lang}</li>)}</p>
                </div>
            )}
        </div>
    )
}
