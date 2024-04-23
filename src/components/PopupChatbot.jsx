import React from 'react';
import { Box, Button } from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { styled } from '@mui/system';
const StyledDialog = styled(Dialog)
({
    borderRadius: "38px",
  '& .MuiPaper-root': { // Target the Paper component inside Dialog
    borderRadius: "38px !important", 
  }// Important to override default Material-UI styles
});

const StyledDialogTitle = styled(DialogTitle)({
  background: "#4169E1",
  color: "white",
});

const StyledDialogContent = styled(DialogContent)({
  /* Add your custom styles for DialogContent here */
  
});

export default function PopupChatbot({ openPopup, setOpenPopup }) {
    // .MuiDialog-paperScrollPaper
  return (
    <Dialog style={{borderRadius:20}} open={openPopup} onClose={() => setOpenPopup(false)} maxWidth="md" >
      <StyledDialogTitle>
        <Box>
          Chatbots
        </Box>
      </StyledDialogTitle>
      <StyledDialogContent dividers>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#4169E1",
            textTransform: "none",
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '50px',
            marginRight: '200px',
            marginLeft: '200px',
            marginBottom: '50px',
          }}
          onClick={() => setOpenPopup(true)}
        >
          <Box sx={{ marginRight: "5px" }}>Create New Chatbot</Box>
          <img
            src="../src/assets/avatars/plus.png"
            alt="icon"
            style={{ marginLeft: "25px" }} // Adjusted margin style
          />
        </Button>
      </StyledDialogContent>
    </Dialog>
  );
}
