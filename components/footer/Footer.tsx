import Link from 'next/link';
import { Container } from './Footer.styled';

type NavItemProps = {
  text: string;
  href: string;
};

const nav: NavItemProps[] = [
  {
    text: 'Impressum',
    href: '/impressum',
  },
  {
    text: 'Datenschutz',
    href: '/datenschutz',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div>
        <Link href={'/'}>Peter R. Stuhlmann, {currentYear}</Link>
      </div>
      <ul>
        {nav.map((navItem: NavItemProps) => (
          <li key={navItem.href}>
            <Link href={navItem.href}>{navItem.text}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Footer;
