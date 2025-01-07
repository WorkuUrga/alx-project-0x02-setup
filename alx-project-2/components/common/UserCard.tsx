import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address }: UserProps) => (
  <div>
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{address}</p>
  </div>
);

export default UserCard;
