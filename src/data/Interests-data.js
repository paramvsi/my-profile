import { FaCameraRetro, FaPlaneDeparture, FaMusic } from 'react-icons/fa';

export const InterestList = [
  {
    name: 'Photography',
    icon: (
      <FaCameraRetro
        style={{ color: '#15181c', width: '100px', height: 'auto' }}
      />
    ),
  },
  {
    name: 'Travelling',
    icon: (
      <FaPlaneDeparture
        style={{ color: '#15181c', width: '100px', height: 'auto' }}
      />
    ),
  },
  {
    name: 'Music',
    icon: (
      <FaMusic style={{ color: '#15181c', width: '100px', height: 'auto' }} />
    ),
  },
];
