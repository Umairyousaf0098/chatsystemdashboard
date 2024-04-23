import React, { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  OutlinedInput,
} from "@mui/material";
const MyComponent = () => {
  const [task, setTask] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = () => {
    // Handle submission here
    console.log("Submitted task:", task);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to top, #E8E8FE, #FFFFFF)",
      }}
    >
      <Typography variant="h5" style={{ color: "black", marginBottom: "5px" }}>
        What do you want to create?
      </Typography>
      <Grid container direction="column" alignItems="center" justifyContent="center"spacing={2}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} sx={{ width: "70%", marginBottom: '10px'}}>
          <TextField  
            label="Specify a writing task"
            value={task}
            onChange={handleTaskChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  
                  style={{ marginLeft: "10px",backgroundColor: '#CDCDFF', }}
                > 
                Start<img src="../../src/assets/avatars/btn.png" alt="icon"  />  
                </Button>
              ),
            }}
            sx={{ borderRadius: "26px" }} />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "70%", height: "45%" }}
      >
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: "16px" }}>
            <CardHeader
              title="Video Ad"
              sx={{ marginBottom: 0, paddingBottom: 0 }}
            />
            <CardContent
              sx={{ marginTop: "-2px", paddingTop: 0, paddingBottom: 0 }}
            >
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: "16px" }}>
            <CardHeader
              title="Product"
              sx={{ marginBottom: 0, paddingBottom: 0 }}
            />
            <CardContent
              sx={{ marginTop: "-2px", paddingTop: 0, paddingBottom: 0 }}
            >
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: "16px" }}>
            <CardHeader
              title="Linkedin Article"
              sx={{ marginBottom: 0, paddingBottom: 0 }}
            />
            <CardContent
              sx={{ marginTop: "-2px", paddingTop: 0, paddingBottom: 0 }}
            >
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: "16px" }}>
            <CardHeader
              title="Linkedin Article"
              sx={{ marginBottom: 0, paddingBottom: 0 }}
            />
            <CardContent
              sx={{ marginTop: "-2px", paddingTop: 0, paddingBottom: 0 }}
            >
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyComponent;
