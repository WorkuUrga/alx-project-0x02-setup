import { ButtonProps } from '../../interfaces';

const Button = ({ size, shape, children }: ButtonProps & { children: React.ReactNode }) => (
  <button className={`${size} ${shape}`}>
    {children}
  </button>
);

export default Button;
