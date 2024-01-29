import {useTheme } from "@mui/material/styles";

import {
 
  Box,
 
  Stack,
  
} from "@mui/material";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";




const Conversation = () => {
    const theme = useTheme()
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
     <Header/>
      {/* Messages */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* Chat Footer */}
     <Footer/>
    </Stack>
  );
};

export default Conversation;
