import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'guest_details',
    component: asyncComponent(() => import('./containers/guestDetails')),
  },
];
export default routes;
