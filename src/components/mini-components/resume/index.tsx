import { ReactNode } from 'react';
import {
  BxBxlTailwindCss,
  FileIconsStyledcomponents,
  IonLogoReact,
  TeenyiconsNextjsOutline,
} from '../../../styles/icons';
import { RootSkillCard, SkillCard } from './styles';

export const SkillsContainer: React.FC = () => {
  interface SkillsProps {
    id: number;
    skill: string;
    experience: number;
    projectsCount: number;
    reference: string;
    icon: ReactNode;
  }
  const skills: SkillsProps[] = [
    {
      id: 1,
      skill: 'NextJs',
      experience: 2.0,
      projectsCount: 4,
      reference: 'https://nextjs.org/',
      icon: <TeenyiconsNextjsOutline />,
    },
    {
      id: 2,
      skill: 'ReactJs',
      experience: 3,
      projectsCount: 5,
      reference: 'https://reactjs.org//',
      icon: <IonLogoReact />,
    },
    {
      id: 3,
      skill: 'StyledComponents',
      experience: 2.0,
      projectsCount: 5,
      reference: 'https://styled-components.com/',
      icon: <FileIconsStyledcomponents />,
    },
    {
      id: 4,
      skill: 'TailwindCss',
      experience: 2.0,
      projectsCount: 1,
      reference: 'https://tailwindcss.com/',
      icon: <BxBxlTailwindCss />,
    },
  ];
  return (
    <>
      <RootSkillCard>
        {skills.map((skill) => (
          <SkillCard key={skill.reference}>
            <section>
              <h4>{skill.skill}</h4>
              <p>Exp.years: {skill.experience}</p>
              <p>Projects count: {skill.projectsCount}</p>
            </section>
            <section>
              <a
                href={skill.reference}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-source"
                aria-label="links stacks tecnology"
              >
                {skill.icon}
              </a>
            </section>
          </SkillCard>
        ))}
      </RootSkillCard>
    </>
  );
};
