import React from "react";
import "./Papers.css";
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Papers() {
    return (
           <div className="papers">
                <Grid container spacing={3} justifyContent="flex-start" className="my-5 py-5" alignItems="flex-start">
                    <Grid item  md={2} className="my-5 py-5"  >
                        <Link to="/home" className="homeBtn" >
                              <ArrowBackIos />  HOME
                        </Link>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid container item md={8} xs={12} >
                        <Grid container item xs={12} sm={12} md={4} alignItems="flex-start" className="my-5 py-5 text-stack" >
                            <Stack alignItems="flex-start" marginTop ={{xs:"-15%", sm:"0%", md:"0%"}}  marginLeft={{xs:"35%", sm:"0%", md:"0%"}}  spacing={{xs : 1, sm : 3, md : 3}} >
                                <Typography className = "header-one">PAPERS:</Typography>
                                <Typography letterSpacing={"8px"}>WHITEPAPER</Typography>
                                <Typography letterSpacing={"8px"}>LIGHTPAPER</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} className="my-5 py-5 text-stack">
                            <Stack alignItems="flex-start" marginTop ={{xs:"-30%", sm:"0%", md:"0%"}}  marginLeft={{xs:"35%", sm:"0%", md:"0%"}}  spacing={{xs : 1, sm : 3, md : 3}}>
                                <Typography className = "header-two">TL;DR:</Typography>
                                <Typography letterSpacing={"8px"}>ONE-PAGER</Typography>
                                <Typography letterSpacing={"8px"}>FACTSHEET</Typography>
                                <Typography letterSpacing={"8px"}>DECK</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
           </div>
    )
}

export default Papers;