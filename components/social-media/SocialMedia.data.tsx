import Email from '../icons/Email';
import Github from '../icons/Github';
import Instagram from '../icons/Instagram';
import LinkedIn from '../icons/LinkedIn';
import { NavItemProps } from './SocialMedia.types';

const nav: NavItemProps[] = [
  {
    title: 'Instagram',
    icon: <Instagram />,
    href: 'https://instagram.com/peter.stuhlmann',
  },
  {
    title: 'LinkedIn',
    icon: <LinkedIn />,
    href: 'https://linkedin.com/in/peter-stuhlmann',
  },
  {
    title: 'Github',
    icon: <Github />,
    href: 'https://github.com/peter-stuhlmann',
  },
  {
    title: 'E-Mail',
    icon: <Email />,
    href: 'mailto:info@peter-stuhlmann.de',
  },
];

export default nav;
