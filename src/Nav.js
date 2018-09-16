import React, { Component } from 'react';
import logo from './img/logo.png';
import home from './img/Home.PNG';
import jobs from './img/Jobs.PNG';
import social from './img/social.PNG';
import messaging from './img/Messaging.PNG';
import notification from './img/Notification.PNG';
import myHead from './img/myHead.PNG';
import work from './img/work.PNG';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { fasfaSearch } from '@fortawesome/react-fontawesome';
// library.add(fasfaSearch);

class navBar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="searchbar">
          <img className="logo" src={logo} style={logo.png} alt="linkedin blue logo" />
          <input type="text" placeholder="Search" />
        </div>
        <nav>
          <a href="#"><img src={home} style={home.PNG} alt="Home Icon" /></a>
          <a href="#"><img src={social} style={social.PNG} alt="Jobs Icon" /></a>
          <a href="#"><img src={jobs} style={jobs.PNG} alt="Jobs Icon" /></a>
          <a href="#"><img src={messaging} style={messaging.PNG} alt="Messaging Icon" /></a>
          <a href="#"><img src={notification} style={Notification.PNG} alt="Notification Icon" /></a>
        </nav>
        <div className="myHead">
          <a href="#"><img src={myHead} alt="my profile avatar" style={myHead.PNG} /></a>
        </div>
        <div className="work">
          <a href="#"><img src={work} style={work.PNG} alt="work tab" /></a>
        </div>
      </header>
    );
  }
}

export default navBar;