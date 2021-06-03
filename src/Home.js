import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
    <div className='content-wrapper'>

  <div className="w3-sidebar w3-bar-block w3-collapse w3-card"
   style={{width: 200}} id="mySidebar">

    <button className="w3-bar-item w3-button w3-hide-large" onclick="w3_close()">Close ×</button>
    <a href="#" className="w3-bar-item w3-button">Link 1</a>
    <a href="#" className="w3-bar-item w3-button">Link 2</a>
    <a href="#" className="w3-bar-item w3-button">Link 3</a>
  </div>
  <div className="w3-main" style={{marginLeft: 200}}>
    <div className="w3-teal">
      <button className="w3-button w3-teal w3-xlarge" onclick="w3_open()">☰</button>
      <div className="w3-container">
        <h1>My Page</h1>
      </div>
    </div>
  </div>


  <div className="row">
    <div className="col">
        <h1>Motivates</h1>
        <video className="video-fluid z-depth-1" autoPlay loop controls muted >
      <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
    </video>
  
  
  </div>




</div>
</div>



        )
    }
}