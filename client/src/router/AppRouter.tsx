import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Preview from '../pages/Preview';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           
        {/* <Route path="/preview" element={<Preview />} />  */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
