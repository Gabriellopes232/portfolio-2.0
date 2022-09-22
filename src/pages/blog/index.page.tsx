import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { FluentThumbDislike24Filled, FluentThumbLike16Filled, GridiconsAlignImageRight } from '../../styles/icons';
import { Container, Date } from './styles';


interface PostsProps {
  slug: string
  frontmatter: any
}
interface Props {
  posts: PostsProps[]
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
      <article>
        <Container>
          <h1>Blog</h1>
          {posts.map(({ slug, frontmatter }: PostsProps) => (
            <div
              key={slug}
              style={{ borderRight: '1px solid #a0a4b863', paddingRight: '2em', borderRightStyle: 'groove' }}
            >
              <ul>
                <Link href={`/posts/${slug}`}>
                  <a>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em' }}>
                      <GridiconsAlignImageRight />
                      <span style={{ fontSize: '1.5em', lineHeight: '1.75em' }}>{frontmatter.title}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Date>Set 16 - 9min</Date>
                      <div style={{ display: 'flex', gap: '4em', marginLeft: '6em' }}>
                        <span><FluentThumbLike16Filled /></span>
                        <span><FluentThumbDislike24Filled /></span>
                      </div>
                    </div>
                  </a>
                </Link>
              </ul>
            </div>
          ))}
          <footer>
            © 2022 - present - www.gabriellopes.dev.com - All Rights Reserved.
          </footer>
        </Container>
      </article>
    </>
  );
}

export default Blog
