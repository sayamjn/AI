import { Box, Button, Container, Typography } from "@mui/material";
import heroImg from "../../Assests/Images/1398314.jpg";
import { styled } from "@mui/system";
import theme from "../../Theme";



const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ pt: 5, pb: 5 }}>
      <Container maxWidth="lg">
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#687690", fontWeight: '500', mt: 2, mb: 2 }}>
              Welcome to AI Agency
            </Typography>
            <Title variant="h1">
              Building a Smarter Future with AI
            </Title>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iusto!
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "2vmax",mt: 3, backgroundColor: "#0F1B4c", color: "#fff" }}
              href="/about"
            >
              More About Us
            </Button>
          </Box>
          <Box sx={{ flex: "1", margin: "auto" }}>
            <img src={heroImg} alt="AI Agency" style={{ maxWidth: "100%" }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
