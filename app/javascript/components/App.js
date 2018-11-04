import React from 'react'
import Checkbox from './Checkbox'
import CheckboxList from './CheckboxList'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CheckboxList />
        {/* <Checkbox checked={true} text="My checkbox" /> */}
        {/* <Checkbox checked={false} text="My second checkbox" /> */}
      </React.Fragment>

    )
  }
}
export default App
