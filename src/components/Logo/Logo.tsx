import React from "react";
import { Grid } from "@material-ui/core";
import "./Logo.css"

import { APP_NAME } from "../../lib/global";

export default function Logo(){

   return(
      <Grid container direction="column"  justifyContent="center" alignItems="center">
          <Grid item>
             <div className="logo-image"></div>
          </Grid>
          <Grid item>
              {APP_NAME}
          </Grid>
      </Grid>
   )
}