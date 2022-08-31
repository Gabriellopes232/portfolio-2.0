import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 2em;
  margin-left: 3em;
  gap: 10%;
  background: ${(props) => props.theme.colors.background};
  @media (max-width: 450px) {
      justify-content: center;
      margin-left: 5em;
   }
`;
