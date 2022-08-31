import styled from "styled-components";

export const CurriculumText = styled.section`
    display: grid;
    padding-bottom: 2em;
    gap: 3em;

    h3::after{
        display: block;
        content: "";
        width: 15%;
        height: 1px;
        background-color: ${(props) => props.theme.colors.links};
        opacity: 0.5;
        font-style: normal;
        margin-top: 0.8rem;
        border-radius: 1rem;
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
        background-color: ${(props) => props.theme.colors.boxshadow};
        opacity: 0.5;
        font-style: normal;
        margin-top: 0.8rem;
        border-radius: 1rem;
    }
`