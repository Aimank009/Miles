import {
    Box,
    Grid,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Typography,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  import { ArrowLeft, CaretLeft, X } from "phosphor-react";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { ToggleSidebar, UpdateSidebarType } from "../Redux/slices/app";
  import { faker } from "@faker-js/faker";
  import { SHARED_DOCS, SHARED_LINKS } from "../data";
  import { DocMsg, LinkMsg } from "./conversation/MessageType";
import Message from "./conversation/Message";
  
  const StarredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
   
    return (
      <Box sx={{ width: 320, height: "100vh" }}>
        <Stack sx={{ height: "100%" }}>
          <Box
            sx={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              width: "100%",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background,
            }}
          >
            <Stack
              sx={{ height: "100%", p: 2 }}
              direction={"row"}
              alignItems={"center"}
              spacing={2}
            >
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <CaretLeft />
              </IconButton>
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
          </Box>
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            <Message/>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default StarredMessages;
  