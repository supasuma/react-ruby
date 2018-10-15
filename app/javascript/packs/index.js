// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import App from '../components/App.js'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // Adding our new component
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
