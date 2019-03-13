import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import "./styles";

class HomePage extends React.Component {
    render () {
        return <App />
    }
}

ReactDOM.render(<HomePage />, document.getElementById("root"));
