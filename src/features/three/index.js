import React from 'react'
import { getMenuSub } from 'services/utils'
import { Icon } from 'antd'
import Screen from './screen'
import CreatingAScene from './creating-a-scene'

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
  ]
}

export default routes

export const menuSub = getMenuSub(routes, {
    key:   `three`, 
    icon:  <Icon type="appstore-o" />
  })