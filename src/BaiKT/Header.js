import React, { Component } from 'react';

class News extends Component {

    render() {
        return (
            <div>
            <div className="header-dark">
              <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container"><a className="navbar-brand" href="#">ROSÉ NEWs</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                  <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav">
                      <li className="nav-item" role="presentation"><a className="nav-link" href="#">HOME</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="#">HOT NEWS</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="#">ABOUT US</a></li>
                      <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">NEWS</a>
                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">EDUCATION</a><a className="dropdown-item" role="presentation" href="#">IDOLS</a><a className="dropdown-item" role="presentation" href="#">SPORT</a><a className="dropdown-item" role="presentation" href="#">FASHION</a></div>
                      </li>
                    </ul>
                    <form className="form-inline mr-auto" target="_self">
                      <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search" /></label><input className="form-control search-field" type="search" name="search" id="search-field" placeholder='Search' /></div>
                    </form><span className="navbar-text"><a href="#" className="login">Log In</a></span><a className="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
                </div>
              </nav>
            </div>
          </div>
      
        );
    }
}

export default News;