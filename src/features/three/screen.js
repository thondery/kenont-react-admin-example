// ------------------------------------
// Screen -- Home
// ------------------------------------
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CoreLayout from 'containers/layout'

@connect(
  state => ({
    auth:     state.Passport.auth
  }),
)
export default class Home extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    
  }
  
  render() {
    const { location, auth } = this.props
    const options = {
      location,
      breadcrumb: [
        { name: '主页', link: '/' },
        { name: 'Three.js' }
      ]
    }
    return (
      <CoreLayout {...options}>
        sss
      </CoreLayout>
    )
  }
}