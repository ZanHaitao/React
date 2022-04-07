// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/panda/Documents/Code/React/antd-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default,
        "title": "首页",
        "wrappers": [require('@/wrappers/PrivatePage.js').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default,
        "title": "登录"
      },
      {
        "path": "/student/add",
        "exact": true,
        "component": require('@/pages/student/add.js').default,
        "title": "添加学生",
        "wrappers": [require('@/wrappers/PrivatePage.js').default]
      },
      {
        "path": "/student",
        "exact": true,
        "component": require('@/pages/student/index.js').default,
        "title": "学生列表",
        "wrappers": [require('@/wrappers/PrivatePage.js').default]
      },
      {
        "path": "/student/:id",
        "exact": true,
        "component": require('@/pages/student/[id].js').default,
        "title": "修改学生",
        "wrappers": [require('@/wrappers/PrivatePage.js').default]
      },
      {
        "path": "/test-avatar",
        "exact": true,
        "component": require('@/pages/test-avatar.js').default
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
