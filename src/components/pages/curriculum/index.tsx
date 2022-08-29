import SkillsContainer from "../resume/skill";

const Curriculum: React.FC = () => {
    return (
        <div>
            <section>
                <h3>Curriculum Vitae</h3>
                <p>
                    See here my skills, my curriculum and my knowledge
                </p>
            </section>
            <div>
                <h3>Index</h3>
                <span>
                    <a href="">Competencies</a>
                </span>
                <span>
                    <a href="">Experience</a>
                </span>
                <span>
                    <a href="">Education</a>
                </span>
                <span>
                    <a href="">Download my CV</a>
                </span>
            </div>

            <section>
                <h3>#Competencies</h3>
                <SkillsContainer />
            </section>
        </div>
    );
};
export default Curriculum
