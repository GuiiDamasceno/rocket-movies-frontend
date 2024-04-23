import styled from 'styled-components'

export const Container = styled.div`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 8px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`