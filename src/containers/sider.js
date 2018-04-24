import React from 'react'
import { Sider } from 'components'
import { Icon, Tooltip } from 'antd'
import * as menuSubs from 'features/menuSub'

export default ({ location }) => (
  <Sider 
    {...{ location, menuSubs }}
    footer={ (collapsed) => (
      <Tooltip 
        title={(
          <div>
            <Icon type="github" style={{ fontSize: '16px', marginRight: 10 }} />
            <span>github/thondery</span>
          </div>
        )}
        >
        <a href="https://github.com/thondery/kenont-react-admin-example" target="_blank">
          <Icon type="github" style={!collapsed ? { fontSize: '16px' } : null} />
          {!collapsed && <span>github/thondery</span>}
        </a>
      </Tooltip>
    )}
  />
)