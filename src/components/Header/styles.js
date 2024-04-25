import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: max-content;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: space-between;

  padding: 15px 40px;

  gap: 50px;

  @media(max-width: 700px){
    gap: 10px;
    padding: 15px 10px;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;


export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  strong {
    display: flex;
    width: max-content;
    margin-right: 8px;
    font-size: 16px;
    line-height: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 40px;

    @media(max-width: 700px){
      display: flex;
      width: auto;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-size: 14px;
  line-height: 16px;

  position: absolute;
  top: 50px;
  right: 112px;

  @media(max-width: 700px){
      top: 60px;
      right: auto;
    }
`;