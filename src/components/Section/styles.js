import styled from 'styled-components';

export const Container = styled.section`
  margin: 1px 0 20px;

  > h2 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
  
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    padding-top: 10px;
  }

`;