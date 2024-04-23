import { Container } from "./styles";
import { VscStarFull, VscStarEmpty } from "react-icons/vsc"

export function Rating({ note, noteEmpty }){
  let noteStar =[]

  for(let i = 1; i <= 5; i++){
    if(i <= note){
      noteStar.push(<VscStarFull key={i} />)
    } else {
      noteStar.push(<VscStarEmpty key={i} />)
    }
  }

  return (
    <Container noteEmpty={noteEmpty}>
      {noteStar}
    </Container>
  )
}