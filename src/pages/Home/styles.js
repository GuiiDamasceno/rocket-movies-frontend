import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: grid;
  grid-template-areas: 
  "header"
  "head"
  "content";

  .app{
    padding: 0 40px;
    
    height: 85vh;

    -webkit-box-orient: vertical;
    overflow-x: hidden;
    
  }

  section{
    grid-area: head;
    width: 100%;
    padding: 40px 0;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }

  main{
    height: 70vh;
    overflow-y: auto;
    padding: 0 20px 0 0;
  }


  main::-webkit-scrollbar {
    width: 8px;
    }
  
  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  @media(min-width: 700px){

    section{
      width: 100%;
      max-width: 1137px;

      margin: 0 auto;
    }
    
    main{
      width: 100%;
      
      overflow-y: auto;
      max-width: 1137px;

      margin: 0 auto;
    }
  }
`
export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 32px;
  border-radius: 8px;
`
