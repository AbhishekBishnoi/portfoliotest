import React, { Component } from 'react';
import Home from './homeComponent/home.js';
import Project from './projectComponent/projects.js';
import Skills from './projectComponent/skills.js';
import Contact from './contactmeComponent/contact.js';
//importing css. so now even if i am working in my sass file for the css scripting, it will only import the minified version of that scss file. this is very helpful in development mode

class Header extends Component {
  render() {
    return (
      <div className="contain">
          <div className= "photo">
                <img src="PIC.jpg" width="500" height="500"  />
          </div>
          <div className="textarea">
              <Home />
              <Project />
              <Skills />
              <Contact />
          </div>
      </div>
    );
  }
}

export default Header ;
