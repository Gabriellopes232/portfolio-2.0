import Link from 'next/link';
import { useTheme } from '../../styles/themes/ThemeContext';
import {
  TablerBrandTwitter,
  FeInstagram,
  MdiGithub,
  DarkModeOutlineRounded,
  LightModeOutline,
} from '../../styles/icons';
import { Container, IconButton } from './styles';

const Header: React.FC = () => {
  const themeToggle = useTheme();

  return (
    <Container>
      <Link href="/">Profile</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
      <a
        href="https://twitter.com/Gabriellopesxz"
        target="_blank"
        rel="noreferrer"
        aria-label="link twitter"
      >
        <TablerBrandTwitter />
      </a>
      <a
        href="https://www.instagram.com/gabriellopesxz/"
        target="_blank"
        rel="noreferrer"
        aria-label="link instagram"
      >
        <FeInstagram />
      </a>
      <a
        href="https://github.com/Gabriellopes232"
        target="_blank"
        rel="noreferrer"
        aria-label="link github"
      >
        <MdiGithub />
      </a>
      <IconButton
        type="button"
        aria-label="button theme"
        onClick={() => themeToggle?.toggleTheme()}
      >
        {themeToggle?.currentTheme === 'light' ? (
          <DarkModeOutlineRounded />
        ) : (
          <LightModeOutline />
        )}
      </IconButton>
    </Container>
  );
};
export default Header;
