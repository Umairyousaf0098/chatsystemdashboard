import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Sidebar, MenuItem, Menu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal, ModalHeader } from "reactstrap";
import PopupChatbot from "./PopupChatbot";
import { useState } from "react";

function SideNav() {

  const theme = useTheme();
  const [openPopup, setOpenPopup] =useState(false);

  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      <Menu>
        <MenuItem>
          <Stack spacing={6} direction="row">
            <Button
              variant="contained"
              sx={{ bgcolor: "#4169E1", textTransform: "none" }}
              onClick={() => setOpenPopup(true)}
            >
              <Box sx={{ marginRight: "5px" }}>Create New Chatbot</Box>
              <img
                src="../src/assets/avatars/plus.png"
                alt="icon"
                style={{ marginleft: "25px" }}
              />
            </Button>
          </Stack>
        </MenuItem>

        <Menu
          menuItemStyle={{
            button: ({ active }) => {
              return {
                backgroundColor: active
                  ? theme.palette.neutral.medium
                  : undefined,
              };
            },
          }}
        ></Menu>

        <MenuItem active component={<Link to="/" />}>
          <box style={{ display: "flex", alignItems: "center" }}>
            <img src="/src/assets/avatars/dashboard.svg" alt="voice" />
            <Typography variant="body2" sx={{ ml: 2.5 }}>
              DashBoard
            </Typography>
          </box>
        </MenuItem>

        <MenuItem active component={<Link to="/Voice" />}>
          <box style={{ display: "flex", alignItems: "center" }}>
            <img src="/src/assets/avatars/voice.svg" alt="voice" />
            <Typography variant="body2" sx={{ ml: 2.5 }}>
              Voice
            </Typography>
          </box>
        </MenuItem>

        <MenuItem active component={<Link to="/BizInfo" />}>
          <box style={{ display: "flex", alignItems: "center" }}>
            <img src="/src/assets/avatars/bizInfo.svg" alt="biz" />
            <Typography variant="body2" sx={{ ml: 2.5 }}>
              Biz Info
            </Typography>
          </box>
        </MenuItem>

        <MenuItem active component={<Link to="/ContantBank" />}>
          <box style={{ display: "flex", alignItems: "center" }}>
            <img src="/src/assets/avatars/contantBank.svg" alt="contant bank" />
            <Typography variant="body2" sx={{ ml: 2.5 }}>
              Contant Bank
            </Typography>
          </box>
        </MenuItem>
      </Menu>
      <PopupChatbot
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      />   
    </Sidebar>
  );
}
export default SideNav;
