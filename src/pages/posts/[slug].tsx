import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

interface Props {
  params: {
    slug: any
  }
}

interface Teste {
  frontmatter: any
  content: any
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params: { slug } }: Props) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}
export default function PostPage({ frontmatter, content }: Teste) {
    return (
      <div className='prose mx-auto'>
        <p>{frontmatter.title}</p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  }