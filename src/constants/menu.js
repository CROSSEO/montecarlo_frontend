import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'simple-icon-pie-chart',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
    subs: [
      {
        icon: 'simple-icon-chart',
        label: 'menu.reports',
        to: `${adminRoot}/dashboard/reports`,
        subs: [
          {
            icon: 'simple-icon-chart',
            label: 'menu.reports',
            to: `${adminRoot}/dashboard/reports`,
          },
        ],
      },
    ],
  }, // END menu Dashboard
  {
    id: 'businessPlan',
    icon: 'iconsminds-light-bulb-2',
    label: 'menu.business-plan',
    to: `${adminRoot}/business-plan`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-three-arrow-fork',
        label: 'menu.business-plan',
        to: `${adminRoot}/business-plan`,
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
      }, // End bussiness Plan
      {
        icon: 'iconsminds-three-arrow-fork',
        label: 'menu.business-model',
        to: `${adminRoot}/business-plan`,
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
      }, // End bussiness Model
      {
        icon: 'iconsminds-three-arrow-fork',
        label: 'menu.project-invest',
        to: `${adminRoot}/business-plan`,
        subs: [
          {
            icon: 'simple-icon-plus',
            label: 'menu.newplan',
            to: `${adminRoot}/business-plan/newplan`,
          },
        ],
      }, // End project investment
    ],
  }, // END Menu Business Plan
  {
    id: 'riskanalysis',
    icon: 'iconsminds-folders',
    label: 'menu.risk-analisys',
    to: `${adminRoot}/dashboard`,
    subs: [
      {
        icon: 'simple-icon-graph',
        label: 'menu.financial-statements',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'simple-icon-graph',
        label: 'menu.economic-indicators',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'simple-icon-graph',
        label: 'menu.sensitivity-analysis',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-loading-3',
        label: 'menu.monte-carlo-simulation',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'simple-icon-graph',
        label: 'menu.investment-overview',
        to: `${adminRoot}/dashboard/reports`,
      },
    ],
  }, // END Menu Risk Analysis
  {
    id: 'fundingsources',
    icon: 'simple-icon-rocket',
    label: 'menu.funding-sources',
    to: `${adminRoot}/dashboard`,
    subs: [
      {
        icon: 'iconsminds-coins',
        label: 'menu.commuity-support',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-handshake',
        label: 'menu.investors',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-embassy',
        label: 'menu.regional-support',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-bank',
        label: 'menu.bank-financing',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-money-bag',
        label: 'menu.crowdfunding',
        to: `${adminRoot}/dashboard/reports`,
      },
    ],
  }, // END menu Funding sources
  {
    id: 'applicationssupport',
    icon: 'simple-icon-briefcase',
    label: 'menu.applications-support',
    to: `${adminRoot}/dashboard`,
    subs: [
      {
        icon: 'simple-icon-plus',
        label: 'menu.new-applications',
        to: `${adminRoot}/dashboard/reports`,
      },
      {
        icon: 'iconsminds-testimonal',
        label: 'menu.applications-consult',
        to: `${adminRoot}/dashboard/reports`,
      },
    ],
  }, // END menu Applications
  {
    id: 'news',
    icon: 'iconsminds-newspaper',
    label: 'menu.news',
    to: `${adminRoot}/dashboard`,
  }, // END menu News
];
export default data;
