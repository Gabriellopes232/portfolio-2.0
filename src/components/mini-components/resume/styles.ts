import styled from 'styled-components';

export const RootSkillCard = styled.div`
  --card-width: 370px;
  --card-height: 170px;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--card-width));
  align-items: stretch;
  grid-template-rows: auto;
  grid-row-gap: 1em;
  grid-column-gap: 4em;

  @media (max-width: 837px) {
    justify-content: center;
    --card-width: 100%;
  }
`;

export const SkillCard = styled.section`
  width: 100%;

  max-width: 500px;

  display: -webkit-inline-box;

  padding: 0.9em 1em;

  background-color: #88888808;

  border-radius: 0.8em;

  section {
    display: grid;
    width: 49.5%;
    height: 100%;
    max-height: 400px;
    margin: 0;

    color: ${(props) => props.theme.colors.text};

    p {
      display: inline-block;
      font-size: 0.8em;
      font-weight: 400;
      line-height: 150%;

      .detail {
        font-weight: 600;
      }
    }

    h5 {
      font-size: 1em;
      font-weight: 600;
    }

    .skill-source {
      width: 100%;
      display: flex;
      background: ${(props) => props.theme.colors.background};

      align-items: center;
      justify-content: center;
      border-radius: 0.9em;
      opacity: 0.5;
      transition-duration: 0.6s;
      transition-property: opacity, color;
      color: ${(props) => props.theme.colors.text};
      cursor: pointer;
      border: none;

      font-size: 0.9em;
      font-weight: 500;
      :hover {
        color: ${(props) => props.theme.colors.links};
        transition: 0.7s;
        opacity: 0.5;
        transform: scale(0.8);
        box-shadow: 0 1px 1px rgba(19, 80, 91, 1), 0 0 0 0 rgba(19, 80, 91, 1),
          0 0 0 1px rgba(19, 80, 91, 1), 0 0 0 2px rgba(19, 80, 91, 1);
      }
    }
  }
`;
