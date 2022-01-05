import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";

export default function Home(){
    return (
       <div className="home">
            <Grid container direction="row"  className="py-5 my-5 button-group" justifyContent="center" alignItems="center" >
                <Grid item className="py-5 my-3 mx-4">
                    <a href="/papers">
                        <div className="paperChange" />
                    </a>
                </Grid>
                <Grid item  className="py-5 my-3 mx-3">
                    <a href="/">
                        <div className="pathChange"></div>
                    </a>
                </Grid>
                <Grid item  className="py-5 my-3 mx-3">
                    <a href="/testnet">
                        <div className="testnetChange"></div>
                    </a>
                </Grid>
                <Grid item className="home-indicator">
                    
                </Grid>
            </Grid>
     </div> 
    )
}