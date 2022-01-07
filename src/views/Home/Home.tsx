import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Home(){
    return (
       <div className="home">
            <Grid container direction="row"  className="py-5" justifyContent="center" alignItems="center" >
                <Grid item id="papers" className="py-5 my-5 mx-3">
                    <Link to="/papers">
                        <div className="link-paper" />
                    </Link>
                </Grid>
                <Grid item id="image" className="py-5 my-5 mx-3">
                    <Link to="/path">
                        <div className="link-path"></div>
                    </Link>
                </Grid>
                <Grid item id="image"  className="py-5 my-5 mx-3">
                    <a className="navbar-brand about-network" target={"_blank"} rel="noreferrer noopener" href="https://desktop-app.testnet2.stages.humanode.io/">
                        <div className="link-testnet"></div>
                    </a>
                </Grid>
                <Grid item className="home-indicator">
                </Grid>
            </Grid>
     </div> 
    )
}