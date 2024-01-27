import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />
      {/*Conversation*/}
      <Box sx={{height:"100%",width:"calc(100vw-420px)",backgroundColor:"#000"}}>

      </Box>
    </Stack>
  );
};

export default GeneralApp;
