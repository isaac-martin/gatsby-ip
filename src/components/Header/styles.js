import styled from 'styled-components';

export const Header = styled('header')`
  padding: 1rem 0;
  color: ${props => props.theme.palette.primary};
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`;
