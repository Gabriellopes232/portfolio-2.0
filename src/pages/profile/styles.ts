import styled from 'styled-components';

export const Container = styled.div`
   padding: 2em;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 5em;
   @media (max-width: 450px) {
         justify-content: center;
      }
`;
