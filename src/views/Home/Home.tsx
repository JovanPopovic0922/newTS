import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Home(){
    return (
       <div className="home">
            <Grid container direction="row"  className="py-5 my-5 button-group" justifyContent="center" alignItems="center" >
                <Grid item className="py-5 my-5 mx-4">
                    <Link to="/papers">
                        <div className="paperChange" />
                    </Link>
                </Grid>
                <Grid item  className="py-5 my-5 mx-3">
                    <Link to="/">
                        <div className="pathChange"></div>
                    </Link>
                </Grid>
                <Grid item  className="py-5 my-5 mx-3">
                    <Link to="/testnet">
                        <div className="testnetChange"></div>
                    </Link>
                </Grid>
                <Grid item className="home-indicator">
                    
                </Grid>
            </Grid>
     </div> 
    )
}