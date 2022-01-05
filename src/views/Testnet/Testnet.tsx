import React from "react";
import "./Testnet.css";
import { Button, Grid, Stack, Typography} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Testnet(){
    return (
        <div className="testnet">
            <Grid container>
                <Grid item  md={2} className="my-5 py-5"  >
                    <Link to="/home" className="homeBtn" >
                    <ArrowBackIos />  HOME
                    </Link>
                </Grid>
                <Grid item md={7} className={"mx-5"}>
                    <Stack  alignItems="center"  className="w-full py-5 my-5 testnet-item-group">
                        <Grid container className="my-5 py-3" direction={{ sm:"column", md:"row"}}  justifyContent="center">
                            <Grid item xs={12} md={4} >
                                <Typography letterSpacing={{xs: 5,sm:5, md:10}}>
                                    TESTNET
                                </Typography>
                                <Typography letterSpacing={{xs: 5,sm:5, md:10}} lineHeight={"4"} style={{opacity:"37%"}} className="opacity-20" >
                                    OCT 2021
                                </Typography>
                            </Grid>
                            <Grid item xs={12} justifyContent={"center"} md={3}  marginTop={{sm:"-10px", md:"-33px"}} >
                                <div className="vector-div"></div>
                            </Grid>
                            <Grid item >
                                <Typography letterSpacing={{xs: 5,sm:5, md:10}} >
                                    MAINNET
                                </Typography>
                                <Typography letterSpacing={{xs: 5,sm:5, md:10}} lineHeight={"4"} style={{opacity:"37%"}} className="opacity-20" >
                                    JUN 2022
                                </Typography>
                            </Grid>
                            <Grid item xs={12} justifyContent={"center"} md={3}  marginTop={{sm:"-10px", md:"-33px"}} >
                                <div className="vector-div-toogle"></div>
                            </Grid>
                        </Grid>
                        <Typography letterSpacing={{xs: 5,sm:5, md:16}}  marginTop={"-50px"} className="" >
                            FULL DECENTRALIZATION
                        </Typography>
                        <Typography letterSpacing={{xs: 5,sm:5, md:10}}  lineHeight={"4"} style={{opacity:"37%"}} className="opacity-20 pb-4" >
                            JUN 2026
                        </Typography>
                        <Button variant="outlined" style={{width:"250px", height:"70px"}} color="inherit">
                            <span className="px-16">See More</span>
                        </Button>
                    </Stack>
                    <Grid item xs={12} md={2}  >
                           <div className="path-cross">
                                 <Typography letterSpacing={10}>
                                     PATH
                                 </Typography>
                                <CloseOutlinedIcon sx={{fontSize:50}}/>
                             </div>
                         </Grid>
                         <Grid item className="home-indicator">
                            
                         </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Testnet;
