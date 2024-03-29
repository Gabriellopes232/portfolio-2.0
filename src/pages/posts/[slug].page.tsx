import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

interface Props {
  params: {
    slug: string;
  };
}

interface ContentPosts {
  frontmatter: any;
  content: string;
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
export default function PostPage({ frontmatter, content }: ContentPosts) {
  return (
    <>
      <Head>
        <title>Posts - Gabriel Lopes</title>
      </Head>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '5em',
          padding: '2em',
        }}
      >
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '5em',
            width: '100%',
            maxWidth: '50em'
          }}
        />
      </div>
    </>
  );
}
