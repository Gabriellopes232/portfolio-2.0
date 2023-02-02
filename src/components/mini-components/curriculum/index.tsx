import { SkillsContainer } from "../resume";
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
                    <h2>{arr.title}</h2>
                    <p>
                        {arr.text}
                    </p>
                    <a href='curriculo.pdf' download='curriculo.pdf'> - Download/See my resume as a PDF</a>
                </CurriculumText>
            ))}
            <Competencies>
                <h3>Competencies</h3>
                <SkillsContainer />
            </Competencies>

            <CurriculumText>
                <h3>Experience</h3>
                <section>
                    <p>
                        Intern - Lw Tecnologia - Fullstack Development - Apr 2022 - Nov 2022
                    </p>
                </section>
                <section>
                    <p>
                        Developer Jr - Reserve Systems - Fullstack Development - Nov 2022 - Jan 2023
                    </p>
                </section>
            </CurriculumText>
            <CurriculumText>
                <h3>Education</h3>
                <section>
                    <p>
                        Escola Técnica Estadual de Santa Cruz - ETESC/FAETEC - Computer Technician  Mar 2019 - Dez 2021
                    </p>
                </section>
                <section>
                    <p>
                        Centro de Ensino Superior - UNICESUMAR - Technologist Systems analysis and development - Mar 2022 - Present
                    </p>
                </section>
            </CurriculumText>
        </div>
    );
};
export default Curriculum
