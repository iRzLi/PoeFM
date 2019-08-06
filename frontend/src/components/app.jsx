import React from 'react';
import Modal from './modal/modal_container';
import SplashComponent from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';


function App() {
    return (
        <>
            <Modal />
            <Switch>
                <Route path="/" component={SplashComponent} />
            </Switch>
        </>
    );
}

export default App;
