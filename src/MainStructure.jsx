import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home.jsx';

import './MainStructure.css';
import ProjectPage from './components/projects/ProjectPage.jsx';

const MainStructure = () => {
    return (
      <div className="main-structure">
        <div className="main-structure__body">
          <BrowserRouter>
                <Routes>
                  <Route path="/" index element={<Home/>} />
                  <Route path="/dock-street" element={<ProjectPage/>} />
                  <Route path="/bowery-street" element={<ProjectPage/>} />
                  <Route path="/penrhyn-road" element={<ProjectPage/>} />
                  <Route path="/bfi" element={<ProjectPage/>} />
                  <Route path="/crown-street" element={<ProjectPage/>} />
                  <Route path="/iq" element={<ProjectPage/>} />
                  <Route path="/navarino-grove" element={<ProjectPage/>} />
                  <Route path="/florin-court" element={<ProjectPage/>} />
                  <Route path="/glenshaw-mansions" element={<ProjectPage/>} />
                  <Route path="*" element={<Home/>} />
                </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }

export default memo(MainStructure);
