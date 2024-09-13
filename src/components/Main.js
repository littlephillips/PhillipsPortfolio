import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


// pages 
const LandingPage = lazy(() => import('../pages/HomePage/LandingPage'));
const ResumePage = lazy(() => import('../pages/Resume/ResumePage'))
const ProjectPage = lazy(() => import('../pages/Project/ProjectPage'))


function Main() {
    return (
        <div>
        <Suspense fallback={<div>...</div>}>      
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/projects" element={<ProjectPage />} />
            <Route exact path="/resume" element={<ResumePage />} />
            </Routes>
        </Suspense>
        </div>
    );
}

export default Main;
