import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";

const GeneralApp = () => {
  const theme=useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />

      <Box
        sx={{
          height: "100%",
          width: "calc(101vw - 420px)",
          backgroundColor:theme.palette.mode === "light" ? "#fff":theme.palette.background.default,
        }}
      >
        {/*Conversation*/}

        <Conversation/>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
