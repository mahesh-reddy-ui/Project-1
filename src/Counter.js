import React, { Component } from 'react'
export default class Counter extends Component {
    state = {
        count:0
    }
    onClickHandler = ()=> {
        this.setState(({count}) => { return {  
                count: count+1
        }})
    }

  render() {
    return (
      <div>
      <button onClick={this.onClickHandler}>Click{this.state.count}</button>
      </div>
    )
  }
}
