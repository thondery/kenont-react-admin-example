// ------------------------------------
// Screen -- CreatingAScene
// ------------------------------------
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CoreLayout from 'containers/layout'
import * as THREE from 'three'
import { Button } from 'antd'

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, 1200 / 800, 0.1, 1000)
var renderer = new THREE.WebGLRenderer()
renderer.setSize(1200, 800)
var geometry = new THREE.BoxGeometry( 1, 1, 1 )
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
var cube = new THREE.Mesh( geometry, material )
scene.add( cube )
camera.position.z = 5

@connect(
  state => ({
    auth:     state.Passport.auth
  }),
)
export default class CreatingAScene extends PureComponent {
  
  constructor (props) {
    super(props)
    this.state = {
      animateStop: false
    }
    this._threeView = null
    this._animateID = null
  }

  componentDidMount () {
    if (this._threeView) {
      this._threeView.appendChild(renderer.domElement)
      this.animate()
    }
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this._animateID)
    this._animateID = null
  }
  
  render() {
    const { location, auth } = this.props
    const options = {
      location,
      breadcrumb: [
        { name: '主页', link: '/' },
        { name: 'Three.js' },
        { name: 'Creating a scene' }
      ]
    }
    return (
      <CoreLayout {...options}>
        <div
          ref={ view => this._threeView = view }
          style={{ width: '100%', height: '100%' }}
          />
        <Button
          onClick={this.handleAnimateStop}
          >
          {this.state.animateStop ? 'Play' : 'Stop'}
        </Button>
      </CoreLayout>
    )
  }

  handleAnimateStop = () => {
    this.setState({ animateStop: !this.state.animateStop }, () => {
      if (this.state.animateStop) {
        window.cancelAnimationFrame(this._animateID)
        this._animateID = null
      }
      else {
        this._animateID = requestAnimationFrame( this.animate )
      }
    })
  }

  animate = () => {
    this._animateID = requestAnimationFrame( this.animate )
    cube.rotation.x += 0.1
    cube.rotation.y += 0.1
    renderer.render(scene, camera)
  }
}