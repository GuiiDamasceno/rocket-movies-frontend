import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => 
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => 
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};


  border-radius: 10px;
  padding: 0 16px;

  >button{
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    color:${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
  }
`