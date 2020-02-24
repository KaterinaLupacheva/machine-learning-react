import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MENU_OPTIONS = [
  {
    icon: faQrcode,
    name: 'Dashboard',
  },
  {
    icon: faLink,
    name: 'Shortcuts',
  },
  {
    icon: faStream,
    name: 'Overview',
  },
  {
    icon: faCalendarWeek,
    name: 'Events',
  },
  {
    icon: faQuestionCircle,
    name: 'About',
  },
  {
    icon: faSlidersH,
    name: 'Services',
  },
  {
    icon: faEnvelope,
    name: 'Contact',
  },
];

export default MENU_OPTIONS;
