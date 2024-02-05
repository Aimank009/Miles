import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />

      <Box
        sx={{
          height: "100%",
          width: "calc(101vw - 740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/*Conversation*/}

        <Conversation />
      </Box>
      <Contact/>
    </Stack>
  );
};

export default GeneralApp;
