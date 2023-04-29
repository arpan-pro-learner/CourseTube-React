import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import ChannelDetail from "./Components/ChannelDetail";
import VideoDetail from "./Components/VideoDetail";
import SearchFeed from "./Components/SearchFeed";

import './index.css'


const App = () => {
  return(
     <BrowserRouter>
    <Box sx={{backgroundColor: '#0000'}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetail />}></Route>
        <Route path="/channel/:id" element={<ChannelDetail />}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
  )
 
};

export default App;
