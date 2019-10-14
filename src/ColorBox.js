import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let newOpacity = this.props.opacity
    if(newOpacity !== 1){
      newOpacity = parseFloat(newOpacity).toFixed(1)
    }

    if (this.props.opacity > 0.1) {
      return (
          <div className="color-box" style={{opacity: newOpacity}}>
              <ColorBox opacity={newOpacity - 0.1} />
          </div>
      );
    } else {
        return null;
    }
  }
  
}
