import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myHubPlugin, MyHubPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myHubPlugin)
  .addPage({
    element: <MyHubPage />,
    title: 'Root Page',
    path: '/my-hub',
  })
  .render();
