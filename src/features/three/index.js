import React from 'react'
import { getMenuSub } from 'services/utils'
import { Icon } from 'antd'
import Screen from './screen'
import CreatingAScene from './creating-a-scene'
import WebglBuffergeometry from './webgl_buffergeometry'

const routes = {
  path: '/three',
  name: 'Three.js',
  childRoutes: [
    { 
      path: 'creating-a-scene', 
      name: 'Creating a scene', 
      component: CreatingAScene, 
      description: 'Creating a scene'
    },
    { 
      path: 'webgl_buffergeometry', 
      name: 'buffergeometry', 
      component: WebglBuffergeometry, 
      description: 'buffergeometry'
    },
  ]
}

export default routes

export const menuSub = getMenuSub(routes, {
    key:   `three`, 
    icon:  <Icon type="appstore-o" />
  })