import React from "react";
import "./Papers.css";
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Papers() {
    return (
           <div className="papers">
                <Grid container justifyContent="flex-start" className="my-3 py-5" alignItems="flex-start">
                    <Grid item  spacing={3} md={2} className="my-5 py-5"  >
                        <Link to="/home" className="homeBtn" >
                              <ArrowBackIos />  HOME
                        </Link>
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid container  item md={8} xs={12} className="my-5 py-5">
                        <Grid container item xs={12} sm={4} md={2} alignItems="flex-start" >
                            <Stack alignItems="flex-start"  spacing={{xs:0, sm:0, md:2}} className="item-papers" >
                                <Typography className = "title-papers" >PAPERS:</Typography>
                                <a target={"_blank"} href="https://papers.humanode.io/whitepaper.pdf" rel="noreferrer noopener" >WHITEPAPER</a>
                                <a target={"_blank"} href="https://papers.humanode.io/whitepaper.pdf" rel="noreferrer noopener">LIGHTPAPER</a>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2} >
                            <Stack alignItems="flex-start" spacing={{xs:0, sm:0, md:2}} className="item-tldr">
                                <Typography className = "title-tldr">TL;DR:</Typography>
                                <a target={"_blank"}  rel="noreferrer noopener" href="https://papers.humanode.io/one-pager.pdf">ONE-PAGER</a>
                                <a target={"_blank"}  rel="noreferrer noopener" href="https://papers.humanode.io/factsheet.pdf">FACTSHEET</a>
                                <a target={"_blank"}  rel="noreferrer noopener" href="https://papers.humanode.io/deck.pdf">DECK</a>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item   sm={3} md={2} className="papers-cross"  >
                        <Typography className="title-bottom" letterSpacing={5}>
                             PAPERS
                        </Typography><br/>
                        <CloseOutlinedIcon sx={{fontSize:50}}/>
                    </Grid>
                    <Grid item className="home-indicator">
                        
                    </Grid>
                </Grid>
           </div>
    )
}

export default Papers;