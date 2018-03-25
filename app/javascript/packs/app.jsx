// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import PropTypes from 'prop-types'
import HelloWorld from 'components/HelloWorld';

const App = props => (
  <HelloWorld greeting={props.name}/>
)

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}

export default App
