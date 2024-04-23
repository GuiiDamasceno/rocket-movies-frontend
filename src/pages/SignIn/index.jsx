import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input 
          type="email" 
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock}
          placeholder="Senha" 
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />

    </Container>
  )
}