import React from "react";
import "./Testnet.css";
import { Button, Grid, Stack, Typography} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Testnet(){
    return (
        <div className="testnet">
            <Grid container spacing={5} className="my-5 py-5" >
                <Grid item md={1}>
                    <Link to="/home"  className="homeBtn">
                        <ArrowBackIos />  HOME
                    </Link>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid container md={8} item   className="mx-5 px-5 ">
                    <Stack alignItems="center" spacing={4}  direction={{xs:"column", sm:"column", md:"row"}} className="w-full testnet-item-group">
                        <Grid item  >
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}}>
                                TESTNET
                            </Typography>
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}}  style={{opacity:"37%"}} >
                                OCT 2021
                            </Typography>
                        </Grid>
                        <Grid item >
                            <div className="vector-div"></div>
                        </Grid>
                        <Grid item >
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}} >
                                MAINNET
                            </Typography>
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}} style={{opacity:"37%"}} >
                                JUN 2022
                            </Typography>
                        </Grid>
                        <Grid item >
                            <div className="vector-div-toogle"></div>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item md={8} className="testnet-full-group" marginTop={"120px"} >
                    <Typography letterSpacing={{xs: 5,sm:5, md:16}}>
                        FULL DECENTRALIZATION
                    </Typography>
                    <Typography letterSpacing={{xs: 5,sm:5, md:10}}  style={{opacity:"37%"}} >
                        JUN 2026
                    </Typography>
                    <Button variant="outlined" style={{width:"250px", height:"70px",marginTop:"10px"}} color="inherit">
                        <span className="">See More</span>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={2} className="path-cross"  >
                        <Typography   letterSpacing={5}>
                             PATH
                        </Typography><br/>
                        <CloseOutlinedIcon sx={{fontSize:50}}/>
                </Grid>
                <Grid  className="home-indicator">
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default Testnet;


// <Grid item>
// <Grid container item className="my-5 py-3 testnet-item-group" direction={{ sm:"column", md:"row"}}  justifyContent="center">
//     <Grid item >
//         <Typography letterSpacing={{xs: 5,sm:5, md:10}}>
//             TESTNET
//         </Typography>
//         <Typography letterSpacing={{xs: 5,sm:5, md:10}} lineHeight={"4"} style={{opacity:"37%"}} >
//             OCT 2021
//         </Typography>
//     </Grid>
//     <Grid item >
//         <div className="vector-div"></div>
//     </Grid>
//     <Grid item xs >
//         <Typography letterSpacing={{xs: 5,sm:5, md:10}} >
//             MAINNET
//         </Typography>
//         <Typography letterSpacing={{xs: 5,sm:5, md:10}} lineHeight={"4"} style={{opacity:"37%"}} className="opacity-20" >
//             JUN 2022
//         </Typography>
//     </Grid>
//     <Grid item >
//         <div className="vector-div-toogle"></div>
//     </Grid>
// </Grid>
// </Grid>
// <Grid item md={12} alignItems={"center"} marginTop={"-50px"} justifyContent={"center"} >
// <Typography letterSpacing={{xs: 5,sm:5, md:15}}>
//     FULL DECENTRALIZATION
// </Typography>
// <Typography  letterSpacing={{xs: 5,sm:5, md:10}}  style={{opacity:"37%"}} >
//     JUN 2026
// </Typography>
// <Button variant="outlined" style={{width:"250px", height:"70px"}} color="inherit">
//     <span className="">See More</span>
// </Button>
// </Grid>
// <Grid item xs={12} md={2}  >
// <div className="path-cross">
//     <Typography letterSpacing={10}>
//         PATH
//     </Typography>
//     <CloseOutlinedIcon sx={{fontSize:50}}/>
// </div>
// </Grid>
// <Grid item className="home-indicator">

// </Grid>