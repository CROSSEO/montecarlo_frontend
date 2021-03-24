import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-shop-4',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
    subs: [
      {
        icon: 'simple-icon-chart',
        label: 'menu.reports',
        to: `${adminRoot}/dashboard/reports`,
      },
    ],
  },
  {
    id: 'businessPlan',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.business-plan',
    to: `${adminRoot}/business-plan`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-plus',
        label: 'menu.newplan',
        to: `${adminRoot}/business-plan/newplan`,
      },
      {
        icon: 'simple-icon-cloud-upload',
        label: 'menu.upload',
        to: `${adminRoot}/business-plan/upload`,
      },
    ],
  },
];
export default data;
