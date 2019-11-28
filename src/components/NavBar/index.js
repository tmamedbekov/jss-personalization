import React from 'react';
//import { Text } from '@sitecore-jss/sitecore-jss-react';

const NavBar = (props) => (
  <div>
  <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">SFF stands for Sitecore Front-end Friends. SFF's mission is to spread awareness about front-end development with the Sitecore Experience Platform, make front-end developers more involved in developing Sitecore applications, as well connecting people to make new friends. We have a strong focus on Sitecore JavaScript Services (JSS), and we are also interested in Sitecore Experience Accelerator (SXA), SPEAK 3, Sitecore Sidekick, and other front-end related technologies.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/groups/12276759/" className="text-white">Follow on Twitter</a></li>
                <li><a href="https://twitter.com/sffcommunity/" className="text-white">Join LinkedIn Group</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-info shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#hi" className="navbar-brand d-flex align-items-center">
            <strong>Personalization Demo</strong>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarHeader" 
            aria-controls="navbarHeader" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
  </div>
  </header>
  </div>
);

export default NavBar;
