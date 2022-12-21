import React, { Component } from "react";
import { createRoot } from 'react-dom/client';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h1>hello world!</h1>
        </div>
    );
  }
}

const app = document.getElementById("app");
const root = createRoot(app)
root.render(<App/>);