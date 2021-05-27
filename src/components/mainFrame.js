import './mainFrame.css';
import React from 'react';
import SideBar from './sideMenu';
import TopContent from '../pageContents/aboutTop';
import Cash from '../pageContents/cash';
import TopMenu from './TopMenu.js';

const mainFrameElement = (
    <>
    <main className="mainWrapper">
        <SideBar />
    </main>
    </>
);

const MainFrame = () => {
    return mainFrameElement;
}

export default MainFrame;