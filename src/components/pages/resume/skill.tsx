import { RootSkillCard, SkillCard } from "./styles"

const SkillsContainer: React.FC = () => {
    interface SkillsProps {
        id: number
        skill: string
        experience: number
        projectsCount: number
        reference: string
    }
    const skills: SkillsProps[] = [
        {
            id: 1,
            skill: 'NextJs',
            experience: 0.6,
            projectsCount: 2,
            reference: 'https://nextjs.org/',
        },
        {
            id: 2,
            skill: 'ReactJs',
            experience: 1.5,
            projectsCount: 5,
            reference: 'https://reactjs.org//',
        },
        {
            id: 3,
            skill: 'StyledComponents',
            experience: 1.0,
            projectsCount: 5,
            reference: 'https://styled-components.com/',
        },
        {
            id: 4,
            skill: 'TailwindCss',
            experience: 0.6,
            projectsCount: 1,
            reference: 'https://tailwindcss.com/',
        }
    ]
    return (
        <>
            <RootSkillCard >
                {skills.map(skill => (
                    <SkillCard key={skill.reference}>
                        <sub>
                            <h5>{skill.skill}</h5>
                            <span>Exp.years: {skill.experience}</span>
                            <span>Projects count: {skill.projectsCount}</span>
                        </sub>
                        <sub>
                            <a href={skill.reference}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='skill-source'>
                                reference:
                            </a>
                        </sub>
                    </SkillCard>
                ))}
            </RootSkillCard >
        </>
    )
}

export default SkillsContainer