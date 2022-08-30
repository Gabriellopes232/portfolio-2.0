import { ReactNode } from "react"
import { BxBxlTailwindCss, FileIconsStyledcomponents, IonLogoReact, MdiTailwind, TeenyiconsNextjsOutline } from "../../../styles/icons"
import { RootSkillCard, SkillCard } from "./styles"

const SkillsContainer: React.FC = () => {
    interface SkillsProps {
        id: number
        skill: string
        experience: number
        projectsCount: number
        reference: string
        icon: ReactNode
    }
    const skills: SkillsProps[] = [
        {
            id: 1,
            skill: 'NextJs',
            experience: 0.6,
            projectsCount: 2,
            reference: 'https://nextjs.org/',
            icon: <TeenyiconsNextjsOutline />
        },
        {
            id: 2,
            skill: 'ReactJs',
            experience: 1.5,
            projectsCount: 5,
            reference: 'https://reactjs.org//',
            icon: <IonLogoReact />
        },
        {
            id: 3,
            skill: 'StyledComponents',
            experience: 1.0,
            projectsCount: 5,
            reference: 'https://styled-components.com/',
            icon: <FileIconsStyledcomponents />
        },
        {
            id: 4,
            skill: 'TailwindCss',
            experience: 0.6,
            projectsCount: 1,
            reference: 'https://tailwindcss.com/',
            icon: <BxBxlTailwindCss />
        }
    ]
    return (
        <>
            <RootSkillCard >
                {skills.map(skill => (
                    <SkillCard key={skill.reference}>
                        <section>
                            <h5>{skill.skill}</h5>
                            <p>Exp.years: {skill.experience}</p>
                            <p>Projects count: {skill.projectsCount}</p>
                        </section>
                        <section>
                            <a href={skill.reference}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='skill-source'>
                                {skill.icon}
                            </a>
                        </section>
                    </SkillCard>
                ))}
            </RootSkillCard >
        </>
    )
}

export default SkillsContainer