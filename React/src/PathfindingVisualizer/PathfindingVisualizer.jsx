import React, {Component} from 'react';
import './styles/PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="navbarDiv">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <ul class="nav navbar-nav">
                <li id="startButtonAStar">
                  <a href="#">A*</a>
                </li>
                <li id="startButtonBFS">
                  <a href="#">Breadth-first Search</a>
                </li>
                <li id="startButtonDFS">
                  <a href="#">Depth-first Search</a>
                </li>
                <li id="startButtonClearBoard">
                  <a href="#">Clear</a>
                </li>
                <li id="startButtonStart">
                  <button
                    id="actualStartButton"
                    class="btn btn-default navbar-btn"
                    type="button">
                    Read Legend then Click to Unlock
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="mainGrid">
          <div id="mainText">
            <div class="start"></div>
            <p>Start</p>
            <div class="target"></div>
            <p>Target</p>
            <div class="wall"></div>
            <p>Wall</p>
          </div>
          <div id="algorithmDescriptor">
            Drag Start &amp; Target to place them
            <br />
            Left click to put &amp; remove walls
          </div>
          <table id="board"></table>
        </div>
      </>
    );
  }
}
