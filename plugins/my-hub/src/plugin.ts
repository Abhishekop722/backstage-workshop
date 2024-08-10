import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myHubPlugin = createPlugin({
  id: 'my-hub',
  routes: {
    root: rootRouteRef,
  },
});

export const MyHubPage = myHubPlugin.provide(
  createRoutableExtension({
    name: 'MyHubPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
