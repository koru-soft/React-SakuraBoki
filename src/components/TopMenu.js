import './TopMenu.css';
import React from 'react';

const topElement = (
    <header>
        <ul className="topMenu">
            <li className="a li">サクラボキ</li>
            {/* <li className="b li">ボキ3級</li>
            <li className="c li">ボキ2級</li>
            <li className="d li">ボキ1級</li> */}
            <li className="c li">ヨザクラモードに切り替える</li>
        </ul>
    </header>
);

const TopMenu = () => {
    return topElement;
}

export default TopMenu;
