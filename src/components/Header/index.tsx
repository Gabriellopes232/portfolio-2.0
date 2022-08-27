import Link from 'next/link';
import { useTheme } from '../../styles/themes/ThemeContext';
import { TablerBrandTwitter, FeInstagram, MdiGithub, DarkModeOutlineRounded, LightModeOutline } from '../../styles/icons';

const Header: React.FC = () => {
    const themeToggle = useTheme();

    return (
        <div style={{
            padding: '1em',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '2%'
        }}>
            <Link href='/'>Profile</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/projects'>Projects</Link>
            <a href="https://twitter.com/Gabriellopesxz" target="_blank" rel="noreferrer"><TablerBrandTwitter /></a>
            <a href="https://www.instagram.com/gabriellopesxz/" target="_blank" rel="noreferrer"><FeInstagram /></a>
            <a href="https://github.com/Gabriellopes232" target="_blank" rel="noreferrer"><MdiGithub /></a>
            <a
                onClick={() => themeToggle?.toggleTheme()}
            >
                {themeToggle?.currentTheme === 'light' ? <DarkModeOutlineRounded /> : <LightModeOutline />}
            </a>
        </div>
    );
};
export default Header
