import React from 'react';

import { getPosts } from '../../services';
import PostDetail from '../../components/mini-components/post/PostDetail';


interface Props {
  params: any
  post: any
}

interface PropsParams {
  params: any
  node: {
    slug: any
  }
}

const PostDetails = ({ post }: Props) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            teste
            {/* <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

export async function getStaticProps({ params }: Props) {
  const data = await PostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: PropsParams) => ({ params: { slug } })),
    fallback: true,
  };
}
