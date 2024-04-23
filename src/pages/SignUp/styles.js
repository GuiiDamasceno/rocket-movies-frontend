import styled from 'styled-components'
import backgroundImg from '../../assets/bg_image.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }

  > h2{
    font-size: 24px;
    margin: 48px 0;
  }

  > p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > a{
    display: flex;
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    justify-content: center;

    gap: 8px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`


