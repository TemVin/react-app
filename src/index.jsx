import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import AppRegistration from './pages/AppRegistration';

import "./styles";

class HomePage extends React.Component {
    render () {
        return <AppRegistration />
    }
}

ReactDOM.render(<HomePage />, document.getElementById("root"));
