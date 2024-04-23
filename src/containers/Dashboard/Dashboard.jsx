import { Box, Typography } from "@mui/material";
import OverviewChart from "./OverviewChart";
import Creat from "./Create";
function Dashboard() {
  return (
    <Box>
        
      <Typography sx={styles.pageTitle} variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
        <OverviewChart/>
        <Creat/>
    </Box>
  );
}

/** @type {import ("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    marginBottom: "2px",
    paddingBottom: "5px",
    marginTop:"22px"
  },
 
};
export default Dashboard; 