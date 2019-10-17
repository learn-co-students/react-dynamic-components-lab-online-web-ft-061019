import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let newOpacityValue = this.props.opacity

    if(newOpacityValue >= .2){
      return (
        <div className="color-box" style={{opacity: newOpacityValue}}>
          <ColorBox opacity={newOpacityValue - .1} />
        </div>
      )
    } else {
      return null
    } 
  }
}
