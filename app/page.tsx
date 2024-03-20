import Menu from '@/components/menu';
import SocialMedia from '@/components/social-media';
import { Container } from './page.styled';

const Home = () => {
  return (
    <Container>
      <SocialMedia />
      <Menu />
    </Container>
  );
};

export default Home;
