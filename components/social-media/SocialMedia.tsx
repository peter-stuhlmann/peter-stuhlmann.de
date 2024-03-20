import Link from 'next/link';

import { Container } from './SocialMedia.styled';
import nav from './SocialMedia.data';
import { NavItemProps } from './SocialMedia.types';

const SocialMedia = () => {
  return (
    <Container>
      {nav.map((navItem: NavItemProps) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {navItem.icon}
        </Link>
      ))}
    </Container>
  );
};

export default SocialMedia;
