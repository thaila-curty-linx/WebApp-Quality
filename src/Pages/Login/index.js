import React, { useState, useCallback } from "react";
import * as Yup from "yup";
import Button from "../../Components/Button";
import InputText from "../../Components/InputText";
import { useAuth } from "../../Context/Auth";

import {
  Container,
  PageNameContainer,
  FormContainer,
  Form,
  TextFormContainer,
  TextFormH1,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorPassword();
      setErrorEmail();
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().min(4, "Senha obrigatória"),
        });
        await schema.validate(
          { email, password },
          {
            abortEarly: false,
          }
        );

        await signIn({
          email: email,
          password: password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach((err) => {
            switch (err.path) {
              case "email":
                setErrorEmail("Email inválida");

                break;
              case "password":
                setErrorPassword("Senha inválida");

                break;

              default:
                break;
            }
          });
          return;
        } else {
          switch (error.name) {
            case "email":
              setErrorEmail("Email inválida");

              break;
            case "password":
              setErrorPassword("Senha inválida");

              break;

            default:
              break;
          }
        }
      }
    },
    [email, password, signIn]
  );

  return (
    <Container>
      <PageNameContainer />
      <FormContainer>
        <TextFormContainer>
          <TextFormH1>Seja Bem Vindo</TextFormH1>
          <p>Por favor faça o login para acessar sua conta.</p>
        </TextFormContainer>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <InputText
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={!!errorEmail ? true : false}
            helperText={!!errorEmail ? errorEmail : ""}
          />
          <InputText
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={!!errorPassword ? true : false}
            helperText={!!errorPassword ? errorPassword : ""}
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Login;
