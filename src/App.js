import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
class App extends Component {

    setRoute = (routes)=>{
        var result = null;

        if(routes.length > 0){
            result = routes.map((route,index)=>{
                return(
                    <Route key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}>

                    </Route>
                )
            });
        }
        return <Switch>{result}</Switch>
    }
    render(){
        return (
            <Router>
                {this.setRoute(routes)}
            </Router>
        );
    }
}

export default App;
