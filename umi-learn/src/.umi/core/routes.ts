// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/panda/Documents/Code/React/umi-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.js').default
      },
      {
        "path": "/detail/:id",
        "exact": true,
        "component": require('@/pages/detail/[id].js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/page",
        "routes": [
          {
            "path": "/page",
            "exact": true,
            "component": require('@/pages/page/index.js').default
          },
          {
            "path": "/page/page1",
            "exact": true,
            "component": require('@/pages/page/page1.js').default
          },
          {
            "path": "/page/page2",
            "exact": true,
            "component": require('@/pages/page/page2.js').default
          }
        ],
        "component": require('@/pages/page/_layout.js').default
      },
      {
        "component": require('@/pages/404.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
