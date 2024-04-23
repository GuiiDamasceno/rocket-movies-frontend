import { Container, NewMovie } from "./styles";

import { Notes } from "../../components/Notes";
import { Header } from "../../components/Header";

import { FiPlus } from "react-icons/fi"
import { useEffect, useRef, useState } from "react";
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  const refTimer = useRef(null)

  const navigate = useNavigate()

  const handleSearch = (search) => {
    if (refTimer.current) {
      clearTimeout(refTimer.current)
    }

    refTimer.current = setTimeout(() => {
      setSearch(search)
    }, 500)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes();
  }, [search])

  return (
    <Container>

      <Header onSearch={handleSearch} />


      <section title="Meus Filmes">
        <h1>Meus Filmes</h1>

        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </section>

      <main>
        {
          notes.map((note) => (
            <Notes
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
      </main>

    </Container>
  )
}