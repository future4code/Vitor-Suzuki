import React from 'react';
import { ScreenContainer, LogoImage, InputsContainer } from './styled';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {BASE_URL} from '../../constants/urls'
import axios from 'axios';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { signUp } from '../../services/users';

const SignUpPage = ({setLoginButton}) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setLoginButton)
    }


    return (
        <ScreenContainer>
            <InputsContainer>
                <LogoImage>Faça seu cadastro!</LogoImage>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        variant={"outlined"}
                        type={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome:"}
                        fullWidth
                        margin={"normal"}
                    />
                    <TextField
                        variant={"outlined"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail:"}
                        margin={"normal"}
                        fullWidth
                    />
                    <TextField
                        variant={"outlined"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha:"}
                        fullWidth
                        margin={"normal"}
                    />
                    <Button type={"submit"} fullWidth variant={"contained"} margin={"dense"} color={"primary"}>FAZER CADASTRO</Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default SignUpPage