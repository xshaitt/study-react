import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}

function Home({match}) {
    console.log(match)
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
//普通组件不用解释

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                {/*    加``这个符号我倒是不知道啥意思，先放着吧*/}
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            {/*这个相当于定义了一个泛型匹配的路由*/}
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
            {/*定义了一个子路由的根路由*/}
        </div>
    );
}

function Topic({ match }) {
    console.log(match)
    return (
        <div>
            <h3>qqq{match.params.topicId}qqq</h3>
        </div>
    );
}

export default BasicExample;