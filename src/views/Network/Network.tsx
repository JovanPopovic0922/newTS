import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom"
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import "./Network.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ArrowBackIos } from "@mui/icons-material";


function Network(){
    return (
        <div className="network-content">
          <Grid container spacing={3} justifyContent="flex-start" className="my-2 py-3" alignItems="flex-start">
             <Grid item   md={2}  className="my-5 py-5"  >
                 <Link to="/home" className="homeBtn" >
                   <ArrowBackIos />  HOME
                 </Link>
             </Grid>
             <Grid container item  md={10}    className={"py-5 my-5 text-content"}>
                <Grid container item md={3}  alignItems="center" className=" item-group-community" >
                    <Stack  alignItems="flex-start" >
                        <Typography className = "title-community">COMMUNITY:</Typography>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://twitter.com/humanode_io">TWITTER</a>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://t.me/humanode">TELEGRAM</a>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://www.reddit.com/r/humanode">REDDIT</a>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://github.com/humanode-network">GITHUB</a>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://www.youtube.com/channel/UCluI64-yFeEv8DmBucI74eQ">YOUTUBE</a>
                    </Stack>
                </Grid>
                <Grid item  md={3} className="item-group-update" >
                    <Stack alignItems="flex-start" >
                        <Typography className = "title-updates">UPDATES:</Typography>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://blog.humanode.io/">BLOG</a>
                        <a target={"_blank"} rel="noreferrer noopener" href="https://forum.humanode.io/" >FORUM</a>
                    </Stack>
                </Grid>
                <Grid item md={3}  className="item-group-whereto"  >
                    <Stack alignItems="flex-start" >
                        <Typography  className = "title-whereto">WHITE TO:</Typography>
                        <a target={"_blank"} rel="noreferrer noopener" href="mailto:core@humanode.io" className="text-core-font">CORE@HUMANODE.IO</a>
                    </Stack>
                </Grid>
                <Grid item  sm={3} md={2} className="network-cross"  >
                        <Typography className="title-bottom" letterSpacing={5}>
                             NETWORK
                        </Typography><br/>
                        <CloseOutlinedIcon sx={{fontSize:50}}/>
                </Grid>
                <Grid item className="home-indicator">
                    
                </Grid>
             </Grid>
          </Grid>
        </div>
    )
}

export default Network;
