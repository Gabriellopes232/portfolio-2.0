import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 2em;
  justify-items: initial;
  margin-left: 15em;
  gap: 25%;
  background: ${(props) => props.theme.colors.background};
`;
