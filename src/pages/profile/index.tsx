import Head from 'next/head';
import Curriculum from '../../components/mini-components/curriculum';
import { Container } from './styles';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile - Gabriel Lopes</title>
      </Head>
      <Container>
        <h1>Gabriel Lopes</h1>
        <p>
          Hello my name is Gabriel and Im 20 years old Im a Software Engineer Jr.
          passionate about technology.
        </p>
        <p>
          Today I work for three years in the area of web development passionate
          about react and its features I seek more and more to evolve and seek
          more and more perfection.
        </p>
        <p>
          I love taking photos and soon I will be evolving more and more in this
          hobby until then you can find me on{' '}
          <a
            href="https://www.instagram.com/gabriellopesxz/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{' '}
          which will be where I will deposit my photos.
        </p>
        <p>
          Find me on{' '}
          <a
            href="https://twitter.com/Gabriellopesxz"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          ,{' '}
          <a
            href="https://github.com/Gabriellopes232"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Mail me at{' '}
          <a href="mailto:gabriel.lopes.nascimento.dev@gmail.com">
            gabriel.lopes.nascimento.dev@gmail.com
          </a>
          .
        </p>

        <Curriculum />

        <footer>© 2022 - present www.gablopes.me - All Rights Reserved.</footer>
      </Container>
    </>
  );
};

export default Profile;
