import React, { useState } from "react";
import "./About.css";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import { dotExplain } from "../../constants/dotExplain";    
import { ArrowBackIos } from "@mui/icons-material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function About(){

    const [text, setText] = useState("A public Humanode knowledge base that stores all the information, research and analytics carried out by teams assembled in Formation. It will also act as a base in educational sessions and programs carried out in Humanode;");

    const dotClick = (num : any) => {
      setText(dotExplain[num-1]);
    }

    return (
        <div className="aboutBody">
          <Grid container spacing={3} justifyContent="flex-start" className="my-5 py-5" alignItems="flex-start">
            <Grid item  md={2} className="my-5 py-5"  >
                 <Link to="/home" className="homeBtn" >
                   <ArrowBackIos />  HOME
                 </Link>
             </Grid>
             <Grid container item md={9} xs={12} className="my-1 py-5" justifyContent={"flex-start"} >
                <Grid item md={10} justifyContent={"center"} >
                    <Typography width="350px" className="dot-text" marginLeft="35%" height="70px" fontSize={13} align="left" style={{wordWrap:"break-word"}}>
                        {text}
                    </Typography>
                    <Grid item className="gradient-text"  fontSize={13}>
                       <Typography className="indiv-text" >
                           Sybil-resistance based on de-centralized pseudonymous biometric identities<br/>
                       </Typography>
                       <Typography className="indiv-text" >
                           secure, scalable, efficient, consistent, immutable, and sustainable Substrate mechanism
                       </Typography>
                       <Typography   className="indiv-text">
                           creation, proliferation, and development of a strong and dedicated community of human nodes
                       </Typography>
                       <Typography   className="indiv-text">
                           custom low-latency high-throughput Sybil-resistant consensus protocol
                       </Typography>
                       <Typography className="indiv-text">
                           privacy-preserving biometric processing protocols
                       </Typography>
                       <Typography className="indiv-text">
                           distributed encrypted biometric templates matching
                       </Typography>
                       <Typography className="indiv-text">
                           ZK-proven liveness check
                       </Typography>
                    </Grid>
                </Grid>
                <Grid item md={10} >
                  <svg width="100%" height="100%" className="chart-dot" style={{marginTop:"-7%", marginLeft:"4%"}} viewBox="0 0 1070 437" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M480.874 431.144H479.498V436.216H478.794V425.544H480.858C481.764 425.544 482.511 425.789 483.098 426.28C483.684 426.76 483.978 427.442 483.978 428.328C483.978 429.202 483.695 429.89 483.13 430.392C482.564 430.893 481.812 431.144 480.874 431.144ZM479.498 426.184V430.504H480.906C481.61 430.504 482.175 430.312 482.602 429.928C483.028 429.533 483.242 429.005 483.242 428.344C483.242 427.672 483.023 427.144 482.586 426.76C482.159 426.376 481.562 426.184 480.794 426.184H479.498ZM499.214 436.216H498.414L494.958 431.176H494.638V436.216H493.934V425.544H495.47C496.441 425.544 497.193 425.725 497.726 426.088C498.462 426.6 498.83 427.362 498.83 428.376C498.83 428.962 498.686 429.49 498.398 429.96C498.11 430.418 497.657 430.754 497.038 430.968C496.633 431.106 496.195 431.176 495.726 431.176L499.214 436.216ZM494.638 426.184V430.536H495.662C496.419 430.536 497.011 430.344 497.438 429.96C497.875 429.576 498.094 429.042 498.094 428.36C498.094 427.464 497.779 426.845 497.15 426.504C496.777 426.29 496.233 426.184 495.518 426.184H494.638ZM509.419 425.544H510.123V436.216H509.419V425.544ZM522.021 427C523.087 425.933 524.399 425.4 525.957 425.4C527.514 425.4 528.826 425.933 529.893 427C530.959 428.066 531.493 429.368 531.493 430.904C531.493 432.44 530.959 433.741 529.893 434.808C528.826 435.864 527.514 436.392 525.957 436.392C524.389 436.392 523.071 435.864 522.005 434.808C520.949 433.741 520.421 432.44 520.421 430.904C520.421 429.368 520.954 428.066 522.021 427ZM522.533 434.36C523.45 435.288 524.591 435.752 525.957 435.752C527.322 435.752 528.463 435.288 529.381 434.36C530.298 433.421 530.757 432.269 530.757 430.904C530.757 429.528 530.298 428.376 529.381 427.448C528.463 426.509 527.322 426.04 525.957 426.04C524.591 426.04 523.45 426.509 522.533 427.448C521.615 428.376 521.157 429.528 521.157 430.904C521.157 432.269 521.615 433.421 522.533 434.36ZM547.074 436.216H546.274L542.818 431.176H542.498V436.216H541.794V425.544H543.33C544.3 425.544 545.052 425.725 545.586 426.088C546.322 426.6 546.69 427.362 546.69 428.376C546.69 428.962 546.546 429.49 546.258 429.96C545.97 430.418 545.516 430.754 544.898 430.968C544.492 431.106 544.055 431.176 543.586 431.176L547.074 436.216ZM542.498 426.184V430.536H543.522C544.279 430.536 544.871 430.344 545.298 429.96C545.735 429.576 545.954 429.042 545.954 428.36C545.954 427.464 545.639 426.845 545.01 426.504C544.636 426.29 544.092 426.184 543.378 426.184H542.498ZM557.278 425.544H557.982V436.216H557.278V425.544ZM573.88 426.184H571.112V436.216H570.408V426.184H567.64V425.544H573.88V426.184ZM585.988 436.216V431.656L582.484 425.544H583.284L586.356 430.936L589.492 425.544H590.292L586.692 431.656V436.216H585.988Z" fill="white"/>
                    <path d="M16.3516 371.076V373.188H5.67956V371.076C5.67956 369.444 6.17556 368.132 7.16756 367.14C7.69023 366.617 8.29823 366.233 8.99156 365.988C9.6849 365.732 10.3622 365.604 11.0236 365.604C11.6742 365.604 12.3462 365.727 13.0396 365.972C13.7222 366.217 14.3302 366.607 14.8636 367.14C15.8556 368.132 16.3516 369.444 16.3516 371.076ZM6.31956 372.484H15.7116V371.092C15.7116 369.684 15.2796 368.543 14.4156 367.668C13.5409 366.783 12.4102 366.34 11.0236 366.34C9.64756 366.34 8.52223 366.783 7.64756 367.668C6.76223 368.553 6.31956 369.695 6.31956 371.092V372.484ZM5.67956 355.297V354.593H16.3516V355.297H5.67956ZM5.67956 339.399H6.31956V343.015H10.1916V339.495H10.8316V343.015H16.3516V343.719H5.67956V339.399ZM5.67956 324.899H6.31956V328.515H10.1916V324.995H10.8316V328.515H16.3516V329.219H5.67956V324.899ZM5.67956 314.719V314.015H16.3516V314.719H5.67956ZM6.92756 294.597H7.85556C7.32223 295.056 6.91156 295.6 6.62356 296.229C6.3249 296.848 6.17556 297.504 6.17556 298.197C6.17556 299.552 6.65023 300.688 7.59956 301.605C8.5489 302.522 9.70623 302.981 11.0716 302.981C11.8289 302.981 12.5222 302.837 13.1516 302.549C13.7809 302.25 14.2929 301.866 14.6876 301.397C15.0716 300.917 15.3702 300.4 15.5836 299.845C15.7862 299.29 15.8876 298.736 15.8876 298.181C15.8876 297.584 15.7596 296.965 15.5036 296.325C15.2369 295.685 14.8262 295.109 14.2716 294.597H15.1996C16.0849 295.6 16.5276 296.784 16.5276 298.149C16.5276 299.728 15.9889 301.05 14.9116 302.117C13.8342 303.184 12.5436 303.717 11.0396 303.717C9.50356 303.717 8.20223 303.178 7.13556 302.101C6.0689 301.024 5.53556 299.717 5.53556 298.181C5.53556 296.773 5.99956 295.578 6.92756 294.597ZM5.67956 284.297V283.593H12.3516C12.9169 283.593 13.3702 283.567 13.7116 283.513C14.0422 283.449 14.3569 283.327 14.6556 283.145C15.1036 282.868 15.4236 282.5 15.6156 282.041C15.7969 281.572 15.8876 281.113 15.8876 280.665C15.8876 280.217 15.7969 279.764 15.6156 279.305C15.4236 278.836 15.1036 278.463 14.6556 278.185C14.3569 278.004 14.0422 277.887 13.7116 277.833C13.3702 277.769 12.9169 277.737 12.3516 277.737H5.67956V277.033H12.3516C13.0129 277.033 13.5409 277.071 13.9356 277.145C14.3302 277.22 14.7142 277.385 15.0876 277.641C16.0476 278.303 16.5276 279.311 16.5276 280.665C16.5276 282.02 16.0476 283.028 15.0876 283.689C14.7142 283.945 14.3302 284.111 13.9356 284.185C13.5409 284.26 13.0129 284.297 12.3516 284.297H5.67956ZM5.67956 266.157V265.453H15.7116V262.477H16.3516V266.157H5.67956ZM6.31956 248.101V250.869H16.3516V251.573H6.31956V254.341H5.67956V248.101H6.31956ZM16.3516 235.994H11.7916L5.67956 239.498V238.698L11.0716 235.626L5.67956 232.49V231.69L11.7916 235.29H16.3516V235.994Z" fill="white"/>
                    <path d="M10.5 161.2V431.2" stroke="url(#paint0_linear_291_39941)" strokeOpacity="0.2" strokeMiterlimit="10" strokeDasharray="5 5"/>
                    <path d="M1069.6 431.2H10.5" stroke="url(#paint1_linear_291_39941)" strokeOpacity="0.2" strokeMiterlimit="10" strokeDasharray="5 5"/>
                    <path onClick={()=>dotClick(1)} d="M71.8018 191.3C75.3364 191.3 78.2021 188.435 78.2021 184.9C78.2021 181.365 75.3364 178.5 71.8018 178.5C68.2671 178.5 65.4023 181.365 65.4023 184.9C65.4023 188.435 68.2671 191.3 71.8018 191.3Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(2)} d="M106.701 336.4C110.236 336.4 113.101 333.534 113.101 330C113.101 326.465 110.236 323.6 106.701 323.6C103.167 323.6 100.301 326.465 100.301 330C100.301 333.534 103.167 336.4 106.701 336.4Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(3)} d="M141.502 355.1C145.037 355.1 147.902 352.234 147.902 348.7C147.902 345.165 145.037 342.3 141.502 342.3C137.967 342.3 135.102 345.165 135.102 348.7C135.102 352.234 137.967 355.1 141.502 355.1Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(4)} d="M176.4 242.4C179.935 242.4 182.8 239.534 182.8 236C182.8 232.465 179.935 229.6 176.4 229.6C172.866 229.6 170 232.465 170 236C170 239.534 172.866 242.4 176.4 242.4Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(5)} d="M211.201 220.8C214.736 220.8 217.601 217.935 217.601 214.4C217.601 210.865 214.736 208 211.201 208C207.667 208 204.801 210.865 204.801 214.4C204.801 217.935 207.667 220.8 211.201 220.8Z"  fill="transparent"  stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(6)} d="M246.002 220.8C249.537 220.8 252.402 217.935 252.402 214.4C252.402 210.865 249.537 208 246.002 208C242.467 208 239.602 210.865 239.602 214.4C239.602 217.935 242.467 220.8 246.002 220.8Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(7)} d="M280.9 211.3C284.435 211.3 287.3 208.435 287.3 204.9C287.3 201.365 284.435 198.5 280.9 198.5C277.366 198.5 274.5 201.365 274.5 204.9C274.5 208.435 277.366 211.3 280.9 211.3Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(8)} d="M315.701 313C319.236 313 322.101 310.135 322.101 306.6C322.101 303.066 319.236 300.2 315.701 300.2C312.167 300.2 309.301 303.066 309.301 306.6C309.301 310.135 312.167 313 315.701 313Z" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(9)} d="M350.601 273.5C354.135 273.5 357.001 270.635 357.001 267.1C357.001 263.566 354.135 260.7 350.601 260.7C347.066 260.7 344.201 263.566 344.201 267.1C344.201 270.635 347.066 273.5 350.601 273.5Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(10)} d="M385.4 319.5C388.935 319.5 391.8 316.635 391.8 313.1C391.8 309.566 388.935 306.7 385.4 306.7C381.866 306.7 379 309.566 379 313.1C379 316.635 381.866 319.5 385.4 319.5Z" stroke="white" fill="transparent" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(11)} d="M420.302 361.5C423.836 361.5 426.702 358.635 426.702 355.1C426.702 351.566 423.836 348.7 420.302 348.7C416.767 348.7 413.902 351.566 413.902 355.1C413.902 358.635 416.767 361.5 420.302 361.5Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(12)} d="M455.101 283.3C458.635 283.3 461.501 280.435 461.501 276.9C461.501 273.365 458.635 270.5 455.101 270.5C451.566 270.5 448.701 273.365 448.701 276.9C448.701 280.435 451.566 283.3 455.101 283.3Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(13)} d="M490.002 323.6C493.537 323.6 496.402 320.734 496.402 317.2C496.402 313.665 493.537 310.8 490.002 310.8C486.467 310.8 483.602 313.665 483.602 317.2C483.602 320.734 486.467 323.6 490.002 323.6Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(14)} d="M524.802 260.7C528.336 260.7 531.202 257.835 531.202 254.3C531.202 250.766 528.336 247.9 524.802 247.9C521.267 247.9 518.402 250.766 518.402 254.3C518.402 257.835 521.267 260.7 524.802 260.7Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(15)} d="M559.701 239.2C563.236 239.2 566.101 236.335 566.101 232.8C566.101 229.266 563.236 226.4 559.701 226.4C556.167 226.4 553.301 229.266 553.301 232.8C553.301 236.335 556.167 239.2 559.701 239.2Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(16)} d="M594.502 279.9C598.037 279.9 600.902 277.034 600.902 273.5C600.902 269.965 598.037 267.1 594.502 267.1C590.967 267.1 588.102 269.965 588.102 273.5C588.102 277.034 590.967 279.9 594.502 279.9Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(17)} d="M629.302 351.3C632.836 351.3 635.702 348.435 635.702 344.9C635.702 341.365 632.836 338.5 629.302 338.5C625.767 338.5 622.902 341.365 622.902 344.9C622.902 348.435 625.767 351.3 629.302 351.3Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(18)} d="M664.201 319.5C667.736 319.5 670.601 316.635 670.601 313.1C670.601 309.566 667.736 306.7 664.201 306.7C660.667 306.7 657.801 309.566 657.801 313.1C657.801 316.635 660.667 319.5 664.201 319.5Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(19)}  d="M699.002 254.3C702.537 254.3 705.402 251.435 705.402 247.9C705.402 244.365 702.537 241.5 699.002 241.5C695.467 241.5 692.602 244.365 692.602 247.9C692.602 251.435 695.467 254.3 699.002 254.3Z"  fill="white"/>,
                    <path onClick={()=>dotClick(20)} d="M733.9 279.9C737.435 279.9 740.3 277.034 740.3 273.5C740.3 269.965 737.435 267.1 733.9 267.1C730.366 267.1 727.5 269.965 727.5 273.5C727.5 277.034 730.366 279.9 733.9 279.9Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(21)} d="M768.701 313C772.236 313 775.101 310.135 775.101 306.6C775.101 303.066 772.236 300.2 768.701 300.2C765.167 300.2 762.301 303.066 762.301 306.6C762.301 310.135 765.167 313 768.701 313Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(22)} d="M803.601 286.3C807.135 286.3 810.001 283.435 810.001 279.9C810.001 276.365 807.135 273.5 803.601 273.5C800.066 273.5 797.201 276.365 797.201 279.9C797.201 283.435 800.066 286.3 803.601 286.3Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(23)} d="M838.4 242.4C841.935 242.4 844.8 239.534 844.8 236C844.8 232.465 841.935 229.6 838.4 229.6C834.866 229.6 832 232.465 832 236C832 239.534 834.866 242.4 838.4 242.4Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(24)} d="M873.302 204.8C876.836 204.8 879.702 201.935 879.702 198.4C879.702 194.865 876.836 192 873.302 192C869.767 192 866.902 194.865 866.902 198.4C866.902 201.935 869.767 204.8 873.302 204.8Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(25)} d="M908.101 204.8C911.635 204.8 914.501 201.935 914.501 198.4C914.501 194.865 911.635 192 908.101 192C904.566 192 901.701 194.865 901.701 198.4C901.701 201.935 904.566 204.8 908.101 204.8Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(26)} d="M943.002 207.6C946.537 207.6 949.402 204.734 949.402 201.2C949.402 197.665 946.537 194.8 943.002 194.8C939.467 194.8 936.602 197.665 936.602 201.2C936.602 204.734 939.467 207.6 943.002 207.6Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(27)} d="M977.802 207.6C981.336 207.6 984.202 204.734 984.202 201.2C984.202 197.665 981.336 194.8 977.802 194.8C974.267 194.8 971.402 197.665 971.402 201.2C971.402 204.734 974.267 207.6 977.802 207.6Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(28)} d="M1012.6 207.6C1016.14 207.6 1019 204.734 1019 201.2C1019 197.665 1016.14 194.8 1012.6 194.8C1009.07 194.8 1006.2 197.665 1006.2 201.2C1006.2 204.734 1009.07 207.6 1012.6 207.6Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>,
                    <path onClick={()=>dotClick(29)} d="M1047.5 276.9C1051.04 276.9 1053.9 274.034 1053.9 270.5C1053.9 266.965 1051.04 264.1 1047.5 264.1C1043.97 264.1 1041.1 266.965 1041.1 270.5C1041.1 274.034 1043.97 276.9 1047.5 276.9Z" fill="transparent" stroke="white" strokeMiterlimit="10"/>
                    <defs>
                    <linearGradient id="paint0_linear_291_39941" x1="10.4175" y1="432.988" x2="-63.8377" y2="411.214" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.239583" stopColor="white" stopOpacity="0"/>
                        <stop offset="0.723958" stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_291_39941" x1="1070" y1="431.012" x2="11.0022" y2="431" gradientUnits="userSpaceOnUse">
                        <stop offset="0.213542" stopColor="white"/>
                        <stop offset="0.4375" stopColor="white" stopOpacity="0"/>
                        <stop offset="0.5625" stopColor="white" stopOpacity="0"/>
                        <stop offset="0.760417" stopColor="white"/>
                    </linearGradient>
                    </defs>
                   </svg>
                </Grid>
                <Grid item xs={12} md={2}  >
                    <div className="about-cross">
                        <Typography letterSpacing={"4px !important"}>
                            PATH IN DETAIL
                        </Typography>
                        <ArrowBackIos sx={{fontSize:50}}/>
                    </div>
                 </Grid>
                <Grid item className="home-indicator">
                            
                 </Grid>
             </Grid>
          </Grid>
        </div>
    )
}

export default About;