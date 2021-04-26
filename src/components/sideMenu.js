import './sideMenu.css';
import React from 'react';

const sideBarElement = (
    <React.Fragment>
        <h2 className="titleColor">Acc-coreについて</h2>
        <ul className="sideMenu">
            <li className="sideList">簿記の仕組み</li>
            <li className="sideList">試算表</li>
            <li className="sideList">確定申告</li>
            <li className="sideList">決算</li>
        </ul>

        <h2 className="titleColor">計算</h2>
        <ul className="sideMenu">
            <li className="sideList">現金</li>
            <li className="sideList">預金</li>
            <li className="sideList">売掛金・買掛金</li>
            <li className="sideList">手形</li>
            <li className="sideList">その他債権債務</li>
            <li className="sideList">固定資産</li>
            <li className="sideList">有価証券</li>
            <li className="sideList">リース取引</li>
            <li className="sideList">研究開発費</li>
            <li className="sideList">引当金</li>
            <li className="sideList">外貨建取引</li>
            <li className="sideList">税効果会計</li>
            <li className="sideList">連結会計</li>
        </ul>

        <h2 className="titleColor">理論</h2>
        <ul className="sideMenu">
            <li className="sideList">企業会計原則</li>
            <li className="sideList">損益会計</li>
            <li className="sideList">資産会計</li>
            <li className="sideList">負債会計</li>
            <li className="sideList">純資産会計</li>
            <li className="sideList">棚卸会計</li>
            <li className="sideList">固定資産会計</li>
            <li className="sideList">リース取引会計</li>
            <li className="sideList">財務諸表理論</li>
        </ul>
    </React.Fragment>
);

const SideBar = () => {
    return sideBarElement;
}

export default SideBar;