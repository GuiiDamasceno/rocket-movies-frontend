import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  >main{
    padding: 0 40px;
    height: 100vh;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 8px;
    }
  
  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  section{
    width: 100%;
    padding: 40px;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 700px){

    >section{
      width: 100%;
      max-width: 1137px;

      margin: 0 auto;
    }
    
    > main{
      width: 100%;
      height: 100vh;
      
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
