import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi"

import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText"
import { MovieItem } from "../../components/MovieItem"
import { Section } from "../../components/Section"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  async function handleNewMovie(){
    if(!title) {
      return alert('Por favor digite o título.')
    }

    if(newTag){
      return alert('Você não adicionou o marcador.')
    }

    if(Number(rating) < 1 || Number(rating) > 5){
      return alert('O rating deve ser entre 1 e 5')
    }

    console.log(rating)

    await api.post('/notes', {
      title,
      rating,
      description,
      tags,
    })

    alert('Novo filme adicionado!')
    navigate('/')
  }

  function handleDeleteMovie(){
    const deleteMovie = window.confirm('Deseja excluir o filme e voltar à página principal?')
    if(deleteMovie){
      navigate('/')
    }
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </ButtonText>

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              <MovieItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
            </div>
          </Section>

          <div>
            <Button
              title="Excluir filme"
              onClick={handleDeleteMovie}
            />

            <Button
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>


        </Form>
      </main>
    </Container>
  )
}