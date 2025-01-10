import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const UsersPage = ({ users }: { users: UserProps[] }) => {
  return (
    <div>
      <Header />
      <h1>Users Page</h1>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={`${user.address.street}, ${user.address.city}`}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps() = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;