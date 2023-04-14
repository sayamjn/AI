import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../../Assests/Images/7103025.jpg";

const About = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    height:"100%",
    borderRadius:"15px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    padding:theme.spacing(10,0),
    [theme.breakpoints.down("md")]: {
      flexDirection:"column",
      alignItems:"center",
      padding:theme.spacing(5,3),
      width:"90%"
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      padding:"0"
    },
  }));

  const CustomImage = styled("img")(({ theme }) => ({
    maxWidth: "70%",
    borderRadius: "15px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
    },
  }));

  const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <TitleBox>
          <Typography sx={{fontSize:"48px",color:"#17275f",fontWeight:"bold"}}>
            About Us
          </Typography>
          <Typography sx={{fontSize:"24px",color:"#6c757d",fontWeight:"medium", mt:3}}>
            Our mission is to revolutionize businesses through AI technology.
          </Typography>
        </TitleBox>
        <CustomImage src={homeIllustration} alt="homeIllustration" />
      </CustomContainer>
    </CustomBox>
  );
};

export default About;
