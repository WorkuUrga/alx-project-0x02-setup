import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; 
import { PostProps } from '@/interfaces';

const PostsPage = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;