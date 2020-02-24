import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MENU_OPTIONS = [
  {
    id: 1,
    icon: faQrcode,
    name: 'Dashboard',
  },
  {
    id: 2,
    icon: faLink,
    name: 'Shortcuts',
  },
  {
    id: 3,
    icon: faStream,
    name: 'Overview',
  },
  {
    id: 4,
    icon: faCalendarWeek,
    name: 'Events',
  },
  {
    id: 5,
    icon: faQuestionCircle,
    name: 'About',
  },
  {
    id: 6,
    icon: faSlidersH,
    name: 'Services',
  },
  {
    id: 7,
    icon: faEnvelope,
    name: 'Contact',
  },
];

export default MENU_OPTIONS;
