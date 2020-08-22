import React from "react";
import Styles from "./main-container.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import HomePage from "../Pages/home-page/home-page.component";

//COMPONENTS
import Header from "../Components/Header/header.components";
import Footer from "../Components/Footer/footer.component";

const MainContainer = () =>{
    return(
        <Router>
            <div className={Styles.mainContainer}>
                <Header />
                <Switch>
                    <Route to="/" exact component={HomePage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default MainContainer;