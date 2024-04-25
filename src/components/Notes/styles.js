import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 16px;

  display: -webkit-box;
  -webkit-box-orient: vertical;

  padding: 32px;
  margin-bottom: 16px;

  text-align: left;
  gap: 8px;

  >h1 {
    flex: 1;
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  span{
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 10px;
  }

  p{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    display: -webkit-box;
    overflow-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`