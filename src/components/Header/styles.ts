import styled from "styled-components";

export const Container = styled.div`
    padding: 1em;
    display: flex;
    justify-content: flex-end;
    gap: 2%;
    @media (max-width: 450px) {
      gap:5%;
      justify-content: initial;
      margin-left: 4em;
   }
`