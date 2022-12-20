import React, { Component } from 'react'

class BubbleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data : props.data
      }
    }

  render() {
    return (
      this.state.bubbleData.getRenderComponant()
    )
  }
}

export default BubbleComponent