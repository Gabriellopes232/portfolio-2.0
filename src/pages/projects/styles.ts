import styled from 'styled-components';

export const Container = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5em;
  h4::after{
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.links};
    opacity: 0.5;
    font-style: normal;
    margin-top: 0.8em;
  }
`;

export const UpcomingProject = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap:5em;
  flex-direction:column ;
  align-items: center;
`;

export const ContainerLinksProjects = styled.div`
  display: flex;
  gap: 10em;
  @media (max-width: 450px) {
      flex-direction: column;
      gap: 5em;
  }
`

export const ContentCard = styled.section`
  display: flex;
  gap: 5%;
  width: 100%;
  align-items: center;
`;

export const TextCard = styled.section`
  display: grid;
  gap: 5%;
  align-items: center;
`;

export const LinkProject = styled.a`
  color: ${(props) => props.theme.colors.links};
  padding: 0.8em 1em;
  width: 100%;
  &:hover {
    background: #88888808;
    border-radius: 0.5em;
    transition: 0.7s;
    opacity: 0.9;
    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 4px 10px rgba(102, 102, 102, 0.1),
          0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 5px rgba(102, 102, 102, 0.1),
          0 0 0 10px rgba(102, 102, 102, 0.1);
      }

      50% {
        transform: scale(1.1);
        box-shadow: 0 4px 6px rgba(102, 102, 102, 0.1),
          0 0 0 4px rgba(102, 102, 102, 0.1),
          0 0 0 6px rgba(102, 102, 102, 0.1), 0 0 0 10px rgba(102, 102, 102, 0);
      }
      100% {
        transform: scale(1.2);
      }
    }
    @media (max-width: 450px) {
      justify-content: center;
   }
  }
`;
