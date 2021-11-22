import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import Feed from "./pages/Feed/feed";
import Lermais from "./pages/LerMais/lermais";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="edit" element={<Edit />} />
        <Route path="post" element={<Post />} />
        <Route path="lermais" element={<Lermais />} />
      </Routes>
    </Router>
  );
}

export default App;