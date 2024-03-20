import Link from 'next/link';
import Image from 'next/image';

import { Container } from './Menu.styled';
import nav from './Menu.data';
import { NavItemProps } from './Menu.types';

const Menu = () => {
  return (
    <Container>
      {nav.map((navItem: NavItemProps) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={navItem.image.src}
            alt={navItem.image.alt}
            width={335}
            height={(335 / 16) * 9}
            placeholder="blur"
            blurDataURL={navItem.image.placeholder}
          />
          <div>{navItem.title}</div>
        </Link>
      ))}
    </Container>
  );
};

export default Menu;
