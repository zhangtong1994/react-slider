import React from 'react';
import Img1 from '../images/a.jpg';
import Img2 from '../images/b.jpg';
import Img3 from '../images/c.jpg';

class Slider extends React.Component{
  constructor(){
    super();
    this.state = {
      index : 0
    }
  }
  turn(){
    if(this.state.index<2){
      this.setState({
        index: this.state.index + 1
      })
    }else{
      this.setState({
        index: 0
      })
    }


  }
  componentDidMount(){
     this.interval = setInterval(this.turn.bind(this),1000)
  }
  pausePlay(){
    clearInterval(this.interval);
  }
  scroll(option){
    this.pausePlay()
    let x = this.state.index + option;
    if(x<0){
      x=2
      }
    if(x>2){
      x=0
    }
    this.setState({
      index:x
    })

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
        <div>
          <span className='arrow left'
          onClick={this.scroll.bind(this,-1)}>&lt;</span>
          <span className='arrow right'
          onClick={this.scroll.bind(this,1)}>&gt;</span>
        </div>
      </div>

    )
  }
}
export default Slider;
