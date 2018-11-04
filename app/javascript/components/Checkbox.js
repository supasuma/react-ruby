import React from 'react'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: true};
  }

  handleChange(){
    this.setState(state => {
      isChecked: !state.isChecked
    })
  }

  render() {
    return (
      <label>
          <input
            type="checkbox"
            onChange={()=>this.handleChange()}
            defaultChecked={this.props.checked}
          />
          {this.props.name}
        </label>
    )
  }
}

export default Checkbox
