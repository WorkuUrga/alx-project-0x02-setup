import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; // Ensure you have this component
import { PostProps } from '@/interfaces'; // Make sure PostProps interface is defined

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

// Fetch data using getStaticProps
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