import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Content, Writer, Tags, ButtonDelete } from "./styles";
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Header } from "../../components/Header"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"
import { Section } from "../../components/Section"
import { useAuth } from "../../hooks/auth";

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja realmente excluir o filme?')

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <button className="btn" type="button" onClick={handleBack}>
              <FiArrowLeft size={24} />
              Voltar
            </button>

            <div>
              <h1>{data.title}</h1>
              <Rating 
                note={data.rating}
              />
            </div>

            <Writer>
              <img
                className="writer"
                src={avatarUrl}
              />

              <p>Por: {user.name}</p>
              <FiClock />
              <p dateTime={data.created_at}>{data.created_at}</p>
            </Writer>

            <p>
              {data.description}
            </p>

            <Section>
              <Tags>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Tags>
            </Section>

            <ButtonDelete onClick={handleRemove}>
              Excluir filme
            </ButtonDelete>
          </Content>
        </main>
      }
    </Container>
  )
}