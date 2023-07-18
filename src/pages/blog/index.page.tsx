import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import {
  GridiconsAlignImageRight,
} from '../../styles/icons';
import { Container } from './styles';

interface PostsProps {
  slug: string;
  frontmatter: any;
}
interface Props {
  posts: PostsProps[];
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog - Gabriel Lopes</title>
      </Head>
      <article>
        <Container>
          <h1>Blog</h1>
          {posts.map(({ slug, frontmatter }: PostsProps) => (
            <div
              key={slug}
              style={{
                borderRight: '1px solid #a0a4b863',
                paddingRight: '2em',
                borderRightStyle: 'groove',
              }}
            >
              <ul>
                <Link href={`/posts/${slug}`}>
                  <a>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5em',
                      }}
                    >
                      <GridiconsAlignImageRight />
                      <span style={{ fontSize: '1.5em', lineHeight: '1.75em' }}>
                        {frontmatter.title}
                      </span>
                    </div>
                  </a>
                </Link>
              </ul>
            </div>
          ))}
          <footer>
            © 2022 - present - www.gablopes.me - All Rights Reserved.
          </footer>
        </Container>
      </article>
    </>
  );
};

export default Blog;
