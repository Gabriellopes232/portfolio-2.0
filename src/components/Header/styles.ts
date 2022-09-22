import styled from "styled-components";

export const Container = styled.div`
    padding: 1em;
    display: flex;
    justify-content: flex-end;
    gap: 2%;
    @media (max-width: 450px) {
      gap:5%;
      margin-left: 5em;
      justify-content: center;
   }
`
export const IconButton = styled.button`
   border:none;
   background:none;
   color: ${(props) => props.theme.colors.links};
   cursor:pointer;
`