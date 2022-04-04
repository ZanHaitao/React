// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/panda/.config/yarn/global/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/Page1",
    "exact": true,
    "component": require('@/pages/Page1.js').default
  },
  {
    "path": "/Page2",
    "exact": true,
    "component": require('@/pages/Page2.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
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
