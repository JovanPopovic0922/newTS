import React from "react";
import "./Path.css";
import { Button, Grid, Stack, Typography} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SideHead from "../../assets/mobile/img/background/side-head.png"
import { Box } from "@mui/system";

function Path(){
    return (
        <div className="path-content">
            <Grid container spacing={5} className="my-5 py-5" >
            <img className = "side-head" src={SideHead} alt="sidehead"></img>
                <Grid item md={1}>
                    <Link to="/home"  className="homeBtn">
                        <ArrowBackIos />  HOME
                    </Link>
                </Grid>
                <Grid item md={11}></Grid>
                <Grid item md={12}  className="my-5 py-5" >
                    <p>111</p>
                    <p>222</p>
                    <p>333</p>
                </Grid>
                <Grid item xs={12} className="path-cross" component ={ Link } to="/home" >
                        <Typography className="path-cross-text">
                            PATH
                        </Typography><br/>
                        <CloseOutlinedIcon sx={{fontSize:50}}/>
                </Grid>
                < Grid  className="home-indicator">
                    
                </Grid>
            </Grid>
        </div> 
    )
}
export default Path;


// <Grid item md={11}></Grid>
// <Grid container  md={12} item justifyContent={"center"} alignItems={"flex-start"}>
//     <Stack alignItems="center" spacing={4}  className="path-item-group">
//         <Grid item>
//             <Typography className="title-path">
//                 TESTNET
//             </Typography>
//             <Typography className="subtitle-path" >
//                 OCT 2021
//             </Typography>
//         </Grid>
//         <Grid item >
//             <div className="vector-div"></div>
//         </Grid>  
//         <Grid item className="mx-3">
//             <Typography className="title-path" >
//                 MAINNET
//             </Typography>
//             <Typography className="subtitle-path">
//                 JUN 2022
//             </Typography>
//         </Grid>
//         <Grid item >
//             <div className="vector-div-toogle"></div>
//         </Grid>
//     </Stack>
// </Grid>
// <Grid item md={12} className="item-decen" justifyContent={"center"} >
//     <Typography className="title-path" >
//     <h2 className="decen-one">FULL DECENTRALIZATION</h2> 
//     <h2 className="decen-two">FULLY <h2  style={{marginLeft:"8%"}}>DECENTRALIZED</h2></h2>
    
//     </Typography>
//     <Typography className="subtitle-path text-jun" >
//         JUN 2026
//     </Typography>
//     <Button component={Link}  to="/seemore" variant="outlined" className="seemoreBtn"  color="inherit">
//         <span className="">See More</span>
//     </Button>
// </Grid>


