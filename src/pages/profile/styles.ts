import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 2em;
  margin-left: 5em;
  gap: 10%;
  background: ${(props) => props.theme.colors.background};
`;
