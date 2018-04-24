import React from 'react'
import { Sider } from 'components'
import { Icon } from 'antd'
import * as menuSubs from 'features/menuSub'

export default ({ location }) => (
  <Sider 
    {...{ location, menuSubs }}
    footer={ (collapsed) => (
      <a href="https://github.com/thondery/kenont-react-admin-example" target="_blank">
        <Icon type="github" style={!collapsed ? { fontSize: '16px' } : null} />
        {!collapsed && <span>github/thondery</span>}
      </a>
    )}
  />
)