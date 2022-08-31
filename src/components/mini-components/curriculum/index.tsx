import SkillsContainer from "../resume/skill";
import { Competencies, CurriculumText } from "./styles";

const Curriculum: React.FC = () => {
    interface curriculumProps {
        id: number
        title: string
        text: string
    }
    const curr: curriculumProps[] = [
        {
            id: 1,
            title: 'Curriculum Vitae',
            text: 'See here my skills, my curriculum and my knowledge'
        },
    ]
    return (
        <div>
            {curr.map(arr => (
                <CurriculumText key={arr.id}>
                    <h3>{arr.title}</h3>
                    <p>
                        {arr.text}
                    </p>
                    <a href="./public/resume.pdf" download='resume.pdf'> - Download/See my resume as a PDF</a>
                </CurriculumText>
            ))}
            <Competencies>
                <h3>Competencies</h3>
                <SkillsContainer />
            </Competencies>
        </div>
    );
};
export default Curriculum