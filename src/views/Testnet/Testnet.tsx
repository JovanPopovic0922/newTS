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
                <Grid item md={11}></Grid>
                <Grid container md={12}  item justifyContent={"center"} alignItems={"flex-start"}>
                    <Stack alignItems="center" spacing={4}  className="w-full testnet-item-group">
                        <Grid item>
                            <Typography lineHeight={{xs:"0px",sm:"0px",md:"50px"}} letterSpacing={{xs: 5,sm:5, md:10}}>
                                TESTNET
                            </Typography>
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}}  lineHeight={{xs:'40px', sm:'40px', md:"15px"}}  style={{opacity:"37%"}} >
                                OCT 2021
                            </Typography>
                        </Grid>
                        <Grid item >
                            <div className="vector-div"></div>
                        </Grid>  
                        <Grid item className="mx-3">
                            <Typography lineHeight={{xs:"0px",sm:"0px",md:"50px"}} letterSpacing={{xs: 5,sm:5, md:10}} >
                                MAINNET
                            </Typography>
                            <Typography letterSpacing={{xs: 5,sm:5, md:10}}  lineHeight={{xs:'40px', sm:'40px', md:"15px"}}   style={{opacity:"37%"}} >
                                JUN 2022
                            </Typography>
                        </Grid>
                        <Grid item >
                            <div className="vector-div-toogle"></div>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item md={12} className="" justifyContent={"center"} alignItems={"flex-start"}  >
                    <Typography lineHeight={{xs:"0px",sm:"0px",md:"50px"}} letterSpacing={{xs: 5, sm:5, md:12}}>
                       <h2 className="decen-one">FULL DECENTRALIZATION</h2> 
                       <h2 className="decen-two">FULLY <h2  style={{marginLeft:"8%"}}>DECENTRALIZED</h2></h2>
                       
                    </Typography>
                    <Typography className="text-jun" letterSpacing={{xs: 5,sm:5, md:10}} lineHeight={{xs:'40px', sm:'40px', md:"15px"}} >
                        JUN 2026
                    </Typography>
                    <Button variant="outlined" className="seemoreBtn"  color="inherit">
                        <span className="">See More</span>
                    </Button>
                </Grid>
                <Grid item xs={12} className="path-cross"  >
                        <Typography className="path-cross-text" letterSpacing={10}>
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
export default Testnet;