import React from 'react'
import { Container,Form,FormButton, FormContent, Icon,FormWrap, FormH1,FormInput,FormLabel,Text } from './SignInElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Buendi</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Ingresá en tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Entrar</FormButton>
                        <Text>Olvidé mi contraseña</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
