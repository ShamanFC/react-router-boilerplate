import React from "react";
import { Route } from "react-router-dom";
import App from "../App";
import Posts from "../components/Posts";

const ReactRouter = () => {

    return (
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route path="/posts" component={Posts} />
        </React.Fragment>
    );
}

export default ReactRouter;