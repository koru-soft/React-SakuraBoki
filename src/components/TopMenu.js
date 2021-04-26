import './TopMenu.css';
import React, { Component } from 'react';

const topElement = (
    <header>
        <ul className="topMenu">
            <li className="a li">Acc-core</li>
            <li className="b li">BooGi</li>
            <li className="c li">Gatsby</li>
            <li className="d li">Docs</li>
        </ul>
    </header>
);

const TopMenu = () => {
    return topElement;
}

export default TopMenu;