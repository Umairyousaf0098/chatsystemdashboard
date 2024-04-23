import { AppBar, Typography, Box, Toolbar } from "@mui/material";

function AppHeader() {
    return ( <AppBar position="sticky" sx={styles.appBar}>
         <Toolbar>
            <Box>
                <Typography variant="h6" sx={styles.typographyStyle}>NAME</Typography>
            </Box>
         </Toolbar>
    </AppBar>);
}


 /** @type {import ("@mui/material").SxProps} */

 const styles ={
    appBar: {
        bgcolor: 'neutral.light'
    },
    typographyStyle: {
        color: '#000000',
        ml: 8
    } ,
    
 }
 export default AppHeader;