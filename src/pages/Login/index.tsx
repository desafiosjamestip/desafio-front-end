import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { FormStyle, DivStyle, ImageStyle, InputStyle, ButtonStyle} from './style'


function Login(){
    const navigate = useNavigate();
    const [changeVisibity, setChangeVisibility] = useState(false)

    const schema = yup.object().shape({
        email: yup.string().email().required("E-mail Obrigatório!").matches(/teste@gmail.com/),
        password: yup.string().required("Senha Obrigatória!").matches(/123456/),
    })    
    
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    
    const handleLogin = (data: object) => {
        localStorage.setItem('@userToken', JSON.stringify('AXBHYEN1912093U9HFU3I'));
        
        navigate("/dashboard")
    }

    const visibility = () => {
        console.log(changeVisibity)
        setChangeVisibility(!changeVisibity)
    }

    return (
        <FormStyle onSubmit={handleSubmit(handleLogin)}>
            <h1>Seja Bem-vindo!</h1>
            <DivStyle>
                <InputStyle type="text" placeholder="E-mail" {...register('email')}/>
            </DivStyle>
            <DivStyle>
                <InputStyle type={changeVisibity ? "text" : "password"} placeholder="Senha" {...register('password')}/>
                <ImageStyle onClick={visibility} src={changeVisibity ? "https://w7.pngwing.com/pngs/910/805/png-transparent-eye-key-look-password-security-see-view-minimalisticons-icon-thumbnail.png" : "https://w7.pngwing.com/pngs/221/536/png-transparent-eye-password-see-view-minimalisticons-icon-thumbnail.png"} alt="" />
            </DivStyle>
            <ButtonStyle type="submit">Log In</ButtonStyle>           
        </FormStyle>
    )
}

export default Login