import React from 'react';
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from './styled';
import LoginLogo from '..//../assets/img/LoginLogo.png';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { goToSignUp } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <ScreenContainer>

            <LogoImage src={LoginLogo} />

            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail:"}
                        margin={"normal"}
                        fullWidth
                    />
                    <TextField
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha:"}
                        fullWidth
                        margin={"normal"}
                    />
                    <Button type={"submit"} fullWidth variant={"contained"} margin={"dense"} color={"secondary"}>Login</Button>
                </form>
            </InputsContainer>

            <SignUpButtonContainer>
                <Button type={"submit"} fullWidth variant={"filled"} margin={"dense"} color={"secondary"} onClick={() => goToSignUp(history)}>Não possui uma conta?</Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage