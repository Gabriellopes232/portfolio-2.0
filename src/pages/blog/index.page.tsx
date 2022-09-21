import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import PostDetail from '../../components/mini-components/post/PostDetail';
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
          {posts.map((post) => <PostDetail post={posts} key={post.slug} />)}
          <footer>
            © 2022 - present www.gabriellopes.dev.com - All Rights Reserved.
          </footer>
        </Container>
      </article>
    </>
  );
}

export default Blog
