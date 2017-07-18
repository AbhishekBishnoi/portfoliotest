import React, { Component } from 'react';
import Home from './components/homeComponent/home.js';
import Project from './components/projectComponent/projects.js';
import Skills from './components/projectComponent/skills.js';
import Contact from './components/contactmeComponent/contact.js';
import Header from './components/header.js';
//importing css. so now even if i am working in my sass file for the css scripting, it will only import the minified version of that scss file. this is very helpful in development mode
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <header>
          <div className="head">ABHISHEK BISHNOI</div>
          <div className="detail">Masters of Science - Computer Science</div>
          <nav>
            <ul>
              <li><a href="#"> HOME </a></li>
              <li><a href="#"> PROJECTS </a></li>
              <li><a href="#"> SKILLS </a></li>
              <li><a href="#"> CONTACT ME! </a></li>
            </ul>
          </nav>
      </header>

      <Header />
      </div>
    );
  }
}

export default App;
