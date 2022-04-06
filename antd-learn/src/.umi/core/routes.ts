// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/panda/Documents/Code/React/antd-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
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
