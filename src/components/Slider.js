import React from 'react';
import Img1 from '../images/a.jpg';
import Img2 from '../images/b.jpg';
import Img3 from '../images/c.jpg';

class Slider extends React.Component{
  constructor(){
    super();
    this.state = {
      index : 2
    }
  }
  turn(){
    if(this.state.index>0){
      this.setState({
        index: this.state.index - 1
      })
    }else{
      this.setState({
        index: 2
      })
    }

   console.log(this.state.index)
  }
  componentDidMount(){
     this.interval = setInterval(this.turn.bind(this),1000)
  }
  pausePlay(){
    clearInterval(this.interval);
  }
  render(){
    let styles = {
      ul:{
        left:-this.state.index*100 + '%'
      }
    }
    return(
      <div className = 'box'>
        <ul style={styles.ul}
        onMouseOver = {this.pausePlay.bind(this)}
        onMouseOut = {this.componentDidMount.bind(this)}>
          <li><img src = {Img1} /></li>
          <li><img src = {Img2} /></li>
          <li><img src = {Img3} /></li>
        </ul>
      </div>
    )
  }
}
export default Slider;
