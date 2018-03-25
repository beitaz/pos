// eslint-disable-next-line
console.log('Webpacker was worked.')

// Support component names relative to this directory:
// var componentRequireContext = require.context("components", true)
// var ReactRailsUJS = require("react_ujs")
// ReactRailsUJS.useContext(componentRequireContext)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
