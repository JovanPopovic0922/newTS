import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import "./Network.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ArrowBackIos } from "@mui/icons-material";


function Network(){
    return (
        <div className="networkBody">
          <Grid container spacing={3} justifyContent="flex-start" className="my-5 py-5" alignItems="flex-start">
             <Grid item  md={2} className="my-5 py-5 homeBtn"  >
                 <a href="/home"  >
                   <ArrowBackIos />  HOME
                 </a>
             </Grid>
             <Grid item md={1}></Grid>
             <Grid container item sm={12} md={9}    className={"py-5 my-5 text-content"}>
                <Grid container item xs={12}  md={3} alignItems="center" className=" text-group-community" >
                    <Stack alignItems="flex-start"   spacing={{xs : 1, sm : 2, md : 3}} >
                        <Typography className = "header-one">COMMUNITY:</Typography>
                        <Typography letterSpacing={"8px"}>TWITTER</Typography>
                        <Typography letterSpacing={"8px"}>TELEGRAM</Typography>
                        <Typography letterSpacing={"8px"}>REDDIT</Typography>
                        <Typography letterSpacing={"8px"}>GITHUB</Typography>
                        <Typography letterSpacing={"8px"}>YOUTUBE</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={3}  md={2}  className="text-group-update" >
                    <Stack alignItems="flex-start" spacing={{xs : 1, sm : 2, md : 3}}>
                        <Typography className = "header-two">UPDATES:</Typography>
                        <Typography letterSpacing={"8px"}>BLOG</Typography>
                        <Typography letterSpacing={"8px"}>FORUM</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={3} md={3}  className="text-group-whereto"  >
                    <Stack alignItems="flex-start" spacing={{xs : 1, sm : 3, md : 3}}>
                        <Typography  className = "header-three">WHITE TO:</Typography>
                        <Typography fontSize={{xs:"10px", sm:"16px"}} letterSpacing={{xs:"5px", sm:"8px"}}>CORE@HUMANODE.IO</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={3} md={2} className="network-cross"  >
                        <Typography   letterSpacing={5}>
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
