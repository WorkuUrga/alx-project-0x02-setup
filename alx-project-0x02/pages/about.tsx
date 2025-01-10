import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About = () => (
  <div>
    <Header />
    <Button size="small" shape="rounded-sm">Small Button</Button>
    <Button size="medium" shape="rounded-md">Medium Button</Button>
    <Button size="large" shape="rounded-full">Large Button</Button>
  </div>
);

export default About;
