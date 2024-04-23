import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'
import { useState } from "react";

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  return(
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft size={24} />
          Voltar
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar}/>
          <label htmlFor="avatar">
            <FiCamera size={24}/>

            <input 
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          type="text"
          icon={FiUser}
          placeholder="Nome de usuário"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/> 

      </Form>
      
    </Container>
  )
}