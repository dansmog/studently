import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
            <nav>
                <ul class="menu d-flex twitter" role="navigation">
                    <li><a href=""><i className="icons icon-chart"></i>&nbsp;Dashboard</a></li>
                    <li><a href=""><i className="icons icon-people"></i>Students</a></li>
                    <li className="menu__bird"><a href=""><i className="fa fa-twitter"></i>studently</a></li>
                    <li className="btn__add"><a href=""><i className="icons icon-plus"></i>new Student</a></li>
                    <li><a href=""><i className="icons icon-logout"></i>&nbsp;Log out</a></li>
                </ul>
            </nav>
        </div>
      </header>
    );
  }
}
