import { INavData } from '@coreui/angular';

export const AdminnavItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    title: true,
    name: 'Go To'
  },
  {
    name: 'Products',
    url: '/dashboard',
  },
  {
    name: 'Users',
    url: '/pages/viewusers',
  },
  
  {
    name: 'Users Orders',
    url: '/pages/vieworders',
  },
];

export const UsernavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Products',
    url: '/dashboard',
  },
  
  {
    name: 'Orders',
    url: '/vieworder',
  },
];
