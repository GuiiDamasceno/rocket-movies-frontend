import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }
  
  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  .tags{
    display: flex;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};

    padding: 12px;
    border-radius: 8px;

    margin-bottom: 24px;
    margin-top: 24px;

    gap: 24px;
  }

    @media(min-width: 700px){
      > main{
      width: 100%;
      height: 100%;
      max-width: 1137px;

      margin: 0 auto;

      grid-area: content;
      overflow-y: auto;

    }
  }
`
export const Form = styled.form`
  padding: 0 40px;
  margin: 46px auto;

  > header{
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;

    button{
      width: max-content;
      color: ${({ theme }) => theme.COLORS.PINK};

      background: none;
      border: none;
      
      display: flex;
      align-items: center;
      text-align: center;
      gap: 8px;
      margin-bottom: 30px;
    }

    h1{
      font-weight: 500;
      font-size: 36px;
    }
  }

  >div{
    display: flex;
    gap: 40px;

    button:nth-child(1){
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  textarea{
    margin-top: 24px;
  }

  

`