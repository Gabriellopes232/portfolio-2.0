import styled from "styled-components";

export const CurriculumText = styled.section`
    display: grid;
    padding-bottom: 2em;
    gap: 3em;
    section {
      display: grid;
      align-content:center;
      text-align: center;
      width: 100%;
      height: 3.5em;
      max-height: 4em;
      margin: 0;
      border-radius: 1em;
      background-color:#88888808;

      p {
          display: inline-block;
          font-size: 1em;
          font-weight: 400;
          line-height: 150%;
         
         .detail {
            font-weight: 600;
         }
      }
      @media (max-width: 450px) {
      width: 100%;
      height: 5em;
      max-height: 100%;
   }
    }
    h3::after{
        display: block;
        content: "";
        width: 15%;
        height: 1px;
        background-color: ${(props) => props.theme.colors.links};
        opacity: 0.5;
        font-style: normal;
        margin-top: 0.8em;
        border-radius: 1em;
    }
`

export const Competencies = styled.section`
    display: grid;
    gap: 3em;
    padding-bottom: 1em;

    h3::after{
        display: block;
        content: "";
        width: 25%;
        height: 1px;
        background-color: ${(props) => props.theme.colors.links};
        opacity: 0.5;
        font-style: normal;
        margin-top: 0.8em;
        border-radius: 1em;
    }
`