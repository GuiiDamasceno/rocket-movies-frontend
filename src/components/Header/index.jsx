import { Container, Brand, Profile, Logout } from "./styles";
import { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Input } from "../Input"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ onSearch }) {
  const [search, setSearch] = useState("")
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const handleSearch = (value) => {
    setSearch(value)
    onSearch(value)
  }

  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>

      <Input
        type='text'
        placeholder='Pesquisar'
        icon={FiSearch}
        onChange={(e) => handleSearch(e.target.value)}
        value={search}
      />

      <div className="prof">
        <Profile to="/profile">

          <strong>{user.name}</strong>

          <img src={avatarUrl} alt={user.name} />
        </Profile>

        <Logout onClick={handleSignOut}>sair</Logout>

      </div>
    </Container>
  );
}