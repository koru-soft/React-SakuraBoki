import React, { Component } from 'react';
import './title.css';

const Title = (props) => {
    return (
        <React.Fragment>
    <h2 className="title">{ props.title }</h2>
    {/* <img src="https://dplhqivlpbfks.cloudfront.net/box_resize/1220x1240/7673efd5-2217548.jpg" width="100%"></img> */}
    <img src="https://cdn.pixabay.com/photo/2016/11/07/00/00/maze-1804499__340.jpg" width="100%"></img>
    <p class="introduction">
        <div>会計は、巨大な迷路です。</div>
        <div>会計を学び始めた者の前には、幾通りもの道が示されます。</div>
        <div>そんな複雑怪奇な会計という発明品について、少しでも理解の助けとなるようなサービスを提供したい。</div>
        <div>そんな想いから本サイトを立ち上げました。</div>
    </p>
    <img src="https://cdn.pixabay.com/photo/2016/10/24/23/12/doors-1767564__340.png" width="100%"></img>
    <p class="introduction">
        <div>学べば学ぶほど、新しい会計処理が眼前に現れます。</div>
        <div>臆することなく、選択して下さい。</div>
        <div>正解は1つではないからです。</div>
    </p>
    </React.Fragment>
    );
}

export default Title;