import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 2em;
  margin-left: 3em;
  gap: 10%;
  background: ${(props) => props.theme.colors.background};
  @media (max-width: 450px) {
      gap:10%;
      justify-content: center;
   }
`;

export const UpcomingProject = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const LinksTips = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Lastest = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const ContentCard = styled.section`
  display: flex;
  gap: 5%;
  align-items: center;
`;

export const TextCard = styled.section`
  display: grid;
  gap: 5%;
  align-items: center;
`;

export const LinkProject = styled.a`
  color: ${(props) => props.theme.colors.links};
  width: 20em;
  padding: 0.8em 1em;
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
  }
`;
