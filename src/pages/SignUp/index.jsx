import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from "react";

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!')
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      })
  }

  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          type="text"
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />

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

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/"> 
          <FiArrowLeft size={24}/> 
          Voltar para login
        </Link>
      </Form>

      <Background />

    </Container>
  )
}