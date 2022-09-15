import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

interface Props {
    posts: any
}

interface Teste {
    slug: any
    frontmatter: any
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

const Blog = ({posts}:Props) => {
        return (
          <article>
          <Container>
            {posts.map(({ slug, frontmatter }: Teste) => (
              <div
                key={slug}
                className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
              >
                <Link href={`/posts/${slug}`}>
                  <a>
                    <Image
                      width={650}
                      height={340}
                      alt={frontmatter.title}
                      src={`/${frontmatter.socialImage}`}
                    />
                    <h1 className='p-4'>{frontmatter.title}</h1>
                  </a>
                </Link>
              </div>
            ))}
          </Container>
          </article>
        );
      }

export default Blog
