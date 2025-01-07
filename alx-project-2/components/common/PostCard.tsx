import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => (
  <div>
    <h3>{title}</h3>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;
