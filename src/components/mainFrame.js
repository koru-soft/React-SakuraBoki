import './mainFrame.css';
import React from 'react';
import SideBar from './sideMenu';
import TopContent from '../pageContents/aboutTop';
import Cash from '../pageContents/cash';

const mainFrameElement = (
    <main className="mainWrapper">
        <aside className="sidebar">
            <SideBar />
        </aside>

        <article className="mainArticle">
            <TopContent />
        </article>
    </main>
);

const MainFrame = () => {
    return mainFrameElement;
}

export default MainFrame;