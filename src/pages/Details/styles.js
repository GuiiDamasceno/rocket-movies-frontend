import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 95vh;

  margin-bottom: 30px;

  display: grid;
  grid-template-areas: 
  "header"
  "content";

  >main{
    padding: 0 40px;

    grid-area: content;
    overflow-y: auto;
    
    .descript{
    display: -webkit-box;
    overflow-wrap: break-word;
    -webkit-box-orient: vertical;
  }
  }

  > main::-webkit-scrollbar {
    width: 8px;
    }
  
  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  @media(min-width: 700px){
    main{
      grid-area: content;

      width: 100%;
      max-width: 1137px;

      margin: 0 auto;

      grid-area: content;
      overflow-y: auto;
      padding: 34px 10px;
  }
}

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  .btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK};
    gap: 8px;
    margin-top: 40px;
  }

  >div {
    margin-top: 20px;
    margin-bottom: 24px;
    
    display: flex;
    align-items: center;
    gap: 19px;
  }

  .tags{
    display: flex;
    flex-wrap: wrap;
  }

  > button:first-child{
    align-self: start;
  }

  > h1{
    font-weight: 500;
    padding-top: 20px;
  }

  > p{
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 30px;

    text-align: justify;
  }
`

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin-bottom: 40px;

  > .writer{
    display: flex;
    align-items: center;

    width: 20px;
    height: 20px;

    border-radius: 50%;
  }

  >svg{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 15px;

    margin-left: 10px;
  }
`

export const Tags = styled.div`
  font-weight: 400;

  display: flex;
  gap: 5px;
`

export const ButtonDelete = styled.button`
  width: 40%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};

  color: ${({ theme }) => theme.COLORS.PINK};

  height: 30px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;

  font-weight: 500;

  &:disabled{
    opacity: 0.5;
  }
`