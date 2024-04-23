import React from "react";
import { OutlinedInput } from "@mui/material";
import {Container,Typography,Box,TextField,Select,MenuItem,Button,FormControl,InputLabel,} from "@mui/material";
const BizInfo = () => {
  const [fullName, setFullName] = React.useState("Chandan");
  const [id, setId] = React.useState("Chandan@coditas.com");
  const [country, setCountry] = React.useState("India");
  const [lastName, setLastName] = React.useState("Mishra");
  const [userID, setUserID] = React.useState("Chandan_m");
  const [state, setState] = React.useState("Maharashtra");
  const [city, setCity] = React.useState("Pune");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [referenceCode, setReferenceCode] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  const handleResetAll = () => {
    // Reset all form fields
    setFullName("");
    setId("");
    setCountry("");
    setLastName("");
    setUserID("");
    setState("");
    setCity("");
    setPhoneNumber("");
    setReferenceCode("");
  };

  return (
    <Box border="1px solid #ACACAC" borderRadius="5px" paddingBottom="80px" marginTop="20px" marginRight= "100px" position="relative">
    <Container maxWidth="lg" style={{marginTop: "40px"}}>
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={styles.headingTypo}
        >
          Basic Details
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ flex: 1, marginRight: "10px" }}>
            <TextField
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
              //sx={styles.bottomBorder}
            />
            <TextField
              label="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
            />
            <FormControl fullWidth margin="normal" variant="standard" >
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="India">Pakistan</MenuItem>
                {/* Add more country options here */}
              </Select>
            </FormControl>
          </Box>
          <Box style={{ flex: 1, marginLeft: "10px" }}>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
            />
            <TextField
              label="User ID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
            />
            <Box
              style={{display: "flex",alignItems: "center",marginLeft: "1px"  }}
            >
              <FormControl fullWidth margin="normal" variant="standard" style={{ marginRight: "20px" }} >
                <InputLabel>State</InputLabel>
                <Select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <MenuItem value="Maharashtra" >Maharashtra</MenuItem>
                  {/* Add more state options here */}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" variant="standard" >
                <InputLabel>City</InputLabel>
                <Select value={city} onChange={(e) => setCity(e.target.value)}>
                  <MenuItem value="Pune">Pune</MenuItem>
                  {/* Add more city options here */}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between", }} sx={styles.PRborder}>
          <Box style={{ flex: 1, marginRight: "10px" }}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
            />
          </Box>
          <Box style={{ flex: 1, marginLeft: "10px", }}>
            <TextField
              label="Reference Code"
              value={referenceCode}
              onChange={(e) => setReferenceCode(e.target.value)}
              fullWidth
              margin="normal"
              variant="standard" 
            />
          </Box>
        </Box>
        
          <Button sx={{position: "absolute",bottom: "10px",right: "20px",  }}
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            style={{position: "absolute", bottom: "20px", right: "63px"}}
          >
            Continue
          </Button>
      </form>
      <Typography variant="body2" sx={styles.resetAllText} onClick={handleResetAll}>
        Reset All
      </Typography>
    </Container>
    </Box>
  );
};
/** @type {import ("@mui/material").SxProps} */

const styles = {
  headingTypo: {
    color: "#4169E1",
    borderBottom: "1px solid #ACACAC",
    paddingBottom: "5px",
  },
  bottomBorder: {
    borderBottom: "1px solid #ACACAC",
  },
  PRborder:{
    borderBottom: "1px solid #ACACAC",
    paddingBottom: "20px",
  },
  resetAllText: {
    position: "absolute",
    marginTop: "30px",
    cursor: "pointer",
    color: "#ACACAC", // Change color as needed
  },
};
export default BizInfo;
