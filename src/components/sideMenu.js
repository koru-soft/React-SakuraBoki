import './sideMenu.css';
import React, { Component, useState } from 'react';
import Title from './title';
import SakuraTopImage from './サクラボキ.mp4';
import YozakuraTopImage from './ヨザクラモード.mp4';
import TrialBalanceImg from './貸借対照表と損益計算書のつながり.jpg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Link as ScrollLink, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { BiFoodMenu } from "react-icons/bi";


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜HOME画面コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */
const Home = () => {
    return(
        <>
            <video src={ SakuraTopImage } autoPlay muted playsInline className="top-image-size"></video>
            <section className="font-color">
                <h1 className="intro">サクラボキとは</h1>
                <div>サクラボキは、独学で日商簿記３級、２級、１級、そして税理士試験や公認会計士試験に向けた学習を志した全ての人を応援する無料学習サイトです。</div>
            </section>

            <section className="font-color">
                <h1 className="intro">難易度選択について</h1>
                <div>各コンテンツには「ボキ３級」「ボキ２級」「ボキ１級」といったレベル選択が出来るようになっています。</div>
                <br />
            <div>現在の級の内容を理解出来たら、より高い級のページに挑戦してみましょう！</div>
            </section>

            <section className="font-color">
                <h1 className="intro">サクラモードとヨザクラモードについて</h1>
                <div>サクラモードでは、理論を学ぶことが出来ます。内容が理解出来るまで繰り返し読んでみて下さい。</div>
                <br />
                <div>ヨザクラモードでは、問題演習を行うことが出来ます。繰り返し問題を解くことで、本番での対応力を養いましょう！</div>
            </section>
        </>
    );
}

const HomeYozakura = () => {
    return(
        <>
            <video src={ YozakuraTopImage } autoPlay muted playsInline className="top-image-size"></video>
            <section className="yozakura-font-color">
                <h1 className="yozakura-intro">ヨザクラモードとは</h1>
                <div>ヨザクラモードは、演習問題に取り組むためのモードです。</div>
                <div>サクラモードで学んだことを実践し、試験本番までに簿記力を強化して行きましょう！</div>
            </section>

            <section className="yozakura-font-color">
                <h1 className="yozakura-intro">難易度選択について</h1>
                <div>各コンテンツには「ボキ３級」「ボキ２級」「ボキ１級」といったレベル選択が出来るようになっています。</div>
                <br />
            <div>現在の級の内容を理解出来たら、より高い級の問題にチャレンジしてみましょう。</div>
            </section>

            <section className="yozakura-font-color">
                <h1 className="yozakura-intro">電卓機能について</h1>
                <div>ヨザクラモードでは、電卓が標準装備されています。</div>
                <div>問題に取り組むに当たっては、メニューからcalculatorをクリックし、計算に取り組んでみましょう！</div>
            </section>
        </>
    );
}

const home = () => {
    return (
        <main className="mainArticle sakura-color">
            <aside>
                <Home />
            </aside>
        </main>
    );
}

const homeYozakura = () => {
    return (
        <main className="mainArticle yozakura-color">
            <aside>
                <HomeYozakura />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜HOME画面コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜ボキのシクミコンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//ボキのシクミのコンポーネント
const Bookkeeping = () => {
    return(
        <>
            <section className="font-color">
	    	<Element name="bookkeeping1" className="element" >
	    		<h1 className="intro">簿記が必要な理由</h1>
	    	</Element>
                <div>これから簿記を学習していく前に、そもそも何故簿記は必要になるのでしょうか？という点について、考えてみましょう。</div>
                <br />
                <div>■　個人事業主の場合　■</div>
                <div>フリーランスで働く人や飲食店の経営者など、独立して働く人達のことを一般的に個人事業主と呼びます。</div>
                <br />
                <div>日本では、儲けたお金に対して、<span className="underline font-color2">所得税</span>という税金がかかるため、なんらかの方法で１年間にいくら儲けたのか？について記録をしておかなければいけません。</div>
                <br />
                <div>会社員の場合、１年間にいくら儲けたかは給与明細や源泉徴収票を確認すれば問題ないですが、個人事業主の場合は、そのような資料がないことが多いため、そうはいきません。
                    日々発生する領収書や請求書（<span className="underline font-color2">証憑</span>）を保管し、収支を何かに記録しておかないといけないのです。</div>

                <br />
                <div>■　法人の場合　■</div>
                <div>会社は法律上、人格を与えられ法人と呼ばれます。</div>
	    	    <div>人であるため、個人事業主同様１年間に儲けたお金から税金（<span className="underline font-color2">法人税</span>）が発生することになります。</div>
                <br />
                <div>また、株式会社であれば会社の業績を株主に報告する義務が発生します。これらの義務を履行するためには、なんらかの方法で１年間の収支を記録しておかなければならないのです。</div>

	    	<Element name="bookkeeping2" className="element" >
	    		<h1 className="intro">簿記とは</h1>
	    	</Element>
                <div>１年間のお金の動き（<span className="underline font-color2">取引</span>）を、帳簿と呼ばれるものに記録することを、略して<span className="underline font-color2">簿記</span>と呼びます。</div>
				<div>したがって、「<span className="underline font-color2">お金の動きをいかに描写するか</span>」が簿記のテーマとなります。</div>
                <br />
				<div>世の中には演劇、音楽、動画、執筆など様々な表現手段がありますが、簿記はお金に特化した表現手段の1つなのです。</div>

	    	<Element name="bookkeeping3" className="element" ></Element>
                <h1 className="intro">複式簿記とは</h1>
                <div>お金の動きを原因と結果の因果関係に分解して記録する方法のことを、<span className="underline font-color2">複式</span>と呼び、この方法によって記録した帳簿のことを<span className="underline font-color2">複式簿記</span>と呼びます。</div>
	    		<br />
				<div>例えば、現金100円を使ってチョコレートを買った時、以下のような分解が出来ます。</div>
                <br />
                <div>最終的に発生したもの（結果）：チョコレート</div>
                <div>何故、その結果は発生したのか（原因）：現金100円を使ったため</div>
                <br />
                <div>そして、簿記ではお金の動きを記録する際、「最終的に発生したもの（結果）」は左側に、「何故、その結果は発生したのか（原因）」は右側に書くことにしました。例えば、以下のように記録していきます。</div>
                <br />
                <table border="1" cellspacing="0" className="table-color">
                    <tr>
                        <th className="table-size table-align">最終的に発生したもの（結果）</th>
                        <th className="table-size table-align">何故、その結果は発生したのか（原因）</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">チョコレート</td>
                        <td className="table-size table-align">現金</td>
                    </tr>
                </table>
                <br />
	    	<div>なお、複式簿記は明治時代には
	    		<ruby>
				<rb>二重扣ノ式</rb>
				<rp>（</rp>
				<rt>にじゅうこうのしき</rt>
				<rp>）</rp>
				</ruby>
	   		と呼ばれていました。
	    	</div>
	    
                <Element name="bookkeeping4" className="element" >
                	<h1 className="intro">仕訳とは</h1>
                </Element>    
	    	<div>お金の動きに関して、その因果を記録する仕組みを<span className="underline font-color2">仕訳</span>と呼びます。</div>
	    	<br />
            	<div>先程、「最終的に発生したもの（結果）」は左側に、「何故、その結果は発生したのか（原因）」は右側に書くということをお伝えしましたが、左側のことを<span className="underline font-color2">借方</span>、右側のことを<span className="underline font-color2">貸方</span>と呼びます。</div>
	    	<br />
            	<div>したがって、先程の表は簿記では以下のような表記となります。</div>
	    	<br />
            	<table border="1" cellspacing="0" className="table-color">
                    <tr>
                        <th className="table-size table-align">借方</th>
                        <th className="table-size table-align">貸方</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">チョコレート</td>
                        <td className="table-size table-align">現金</td>
                    </tr>
                </table>
	    	<br />
	    	<div>借方と貸方についてですが、その名前から「何かを借りたのか？」「何かを貸したのか？」を想像してしまい、仕訳の仕組みが理解出来なくなってしまう方がいらっしゃるかもしれません。</div>
	    	<div>借方と貸方に、借りるという意味や貸したという意味はないということを認識しておいて下さい。</div>
	    	<br />
            	<div>背景として、簿記の仕組みは明治時代に輸入されてきました。当時、翻訳にあたったのが福沢諭吉になります。</div>
	    	<br />
            	<div>『帳合之法』では、簿記の翻訳について、相当苦労したことが記載されております。</div>
	    	<div>簿記自体、もともとイタリアで生まれた仕組みになるため、その翻訳作業の中で西洋の語感を日本語へ翻訳する作業が必要でした。</div>
	    	<br />
            	<div>西洋流の言葉であった借を「出」、貸を「入」というような日本語風の言葉へ変換することも考えていましたが、当時、すでに西洋では左側を借、右側を貸とする記帳方法が普及してしまっており、日本だけその記帳方法を使うことをやめてしまうと世界の潮流から外れてしまうという恐れがありました。</div>
	    	<br />
            	<div>そこで、「日本語の語感には合わない」が、西洋で使われている言葉や記帳方法をそのまま流用することで文明開化を促進する、ということが行われました。これが現在も使われている借方、貸方という言葉の背景になります。</div>
	    	
	    	<Element name="bookkeeping5" className="element" ></Element>
	    	<h1 className="intro">勘定科目とは</h1>
	    	<div>お金の動きを、誰もが同じように記録でき、また、誰もが帳簿を見れば同じ理解を得られるようにするためにはどうすれば良いでしょうか？</div>
	    	<br />
            	<div>これを実現するため、お金の動きのうち、共通の性質のみを抜き出してわかりやすく記録するために生まれた分類項目の総称を<span className="underline font-color2">勘定科目</span>と呼びます。</div>
            	<br />
            	<div>例えば、さきほどの「チョコレート」というものは、簿記では「消耗品」や「消耗品費」という扱いになります。そのため、記録を行う時に「チョコレート」と記録はせず、「消耗品」や「消耗品費」として記録を行います。</div>
	    	<br />
            	<div>もし、この仕組みがなければ、各自がそれぞれの実態に合わせて具体的な取引内容を記録していくことになりますが、全員がその内容をみて共通の理解が出来るかというと、そうではありません。</div>
	    	<div>また、取引内容の説明を追加すれば理解は出来るかもしれませんが、1年間に発生したすべてのお金の動きに注釈を付けていては、管理コストが非常に高くなります。</div>
	    	<br />
            	<div>そこで、「チョコレート」「鉛筆」「ノート」など、何か物を購入するという行為に関して、共通する性質は「使ったらなくなる」ことであると考え、具体的に何を購入したかは問わず、その性質で記録することにしたのです。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
                    <tr>
                        <th className="table-size table-align">借方</th>
                        <th className="table-size table-align">貸方</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">消耗品費</td>
                        <td className="table-size table-align">現金</td>
                    </tr>
                </table>
	    	<br />
	    	
	    	<Element name="bookkeeping6" className="element" >
	    		<h1 className="intro">貨幣的評価の公準とは</h1>
	    	</Element>
	    	<div>物の価値は何で測定すればよいでしょうか？</div>
	    	<br />
            	<div>結論として、簿記では物の価値を貨幣によって評価し、計算を行います。特に企業の経済活動を記録するにあたって、その活動内容を貨幣によって記録することを定めたルールのことを<span className="underline font-color2">貨幣的評価の公準</span>と呼びます。</div>
	    	<br />
            	<div>これにより、「お金を動かした」という経済活動を記録することが出来るようになるのです。</div>
	    	<br />
            	<div>仕訳では、勘定科目の右側に金額を記載します。これで仕訳の完成です！</div>
	    	<br />
            	<table border="1" cellspacing="0" className="table-color">
                    <tr>
                        <th className="table-size table-align">借方</th>
                        <th className="table-size table-align">貸方</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">消耗品費 100</td>
                        <td className="table-size table-align">現金 100</td>
                    </tr>
                </table>
                <br />
	    	<div>なお、金額の右に単位は記載しません。数字は世界共通語ですが、貨幣単位は世界共通語ではないからです。</div>
	    	
	    	<Element name="bookkeeping7" className="element" >
	    		<h1 className="intro">貸借平均の原理とは</h1>
	    	</Element>
	    	<div>仕訳において、借方に記入された金額の合計と貸方に記入された金額の合計は一致するという原則のことを<span className="underline font-color2">貸借平均の原理</span>と呼びます。</div>
		<br />
	    	<div>なぜ一致するのかというと、仕訳はお金が動いたという事実を、因果という2つの側面から見たことを表すものになるため、動いた金額は変わらないからです。</div>
	    	<br />
			<div>例えば、現金100円を使ってチョコレートを買ったという例について、以下の仕訳を見て下さい。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
                    <tr>
                        <th className="table-size table-align">借方</th>
                        <th className="table-size table-align">貸方</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">消耗品費 10,000</td>
                        <td className="table-size table-align">現金 100</td>
                    </tr>
                </table>
	    	<br />
	    	<div>これは、現金100円を使って10,000円のチョコレートを買ったという仕訳になります。金額が一致していないのでおかしいですね。</div>
	    	
	    	<Element name="bookkeeping8" className="element" >
	    		<h1 className="intro">会計期間の公準とは</h1>
	    	</Element>
	    	<div>確定申告や決算では事業の活動期間を、人為的に一定期間で区切ります。この期間のことを<span className="underline font-color2">会計期間</span>と呼びます。</div>
	    	<div>会計を進めるにあたっては、必ずこの期間の設定が必要になり、一般的には1年間で設定することが原則です。</div>
	    	<br />
	    	<div>この期間を設定することで、会計の連続性が担保出来るようになります。会計は突然辞めることも、突然0に戻して1から始めるということも出来ません。</div>
	    	<div>会計が始まるときは事業がスタートする時であり、会計が終わるときは会社が事業を畳む時になるのです。</div>
	    	<br />
	    	<div>なお、会計期間の公準は別名、<span className="underline font-color2">継続企業の公準</span>と呼ばれます。企業は半永久的に活動を続けるという前提のことを指します。</div>
	    	<br />
	    	<div>以上の方法で、1年間のお金の動きを仕訳という方法で記録していくことで、最終的に貸借対照表や損益計算書を作成していくことが、ボキの仕組みの基礎となります。</div>
	    </section>
        </>
    );
}

const bookkeeping = () => {
    return (
        <>
        <main className="mainArticle">
            <aside>
                <aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping1" spy={true} smooth={true} duration={500} >簿記が必要な理由</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping2" spy={true} smooth={true} duration={500} >簿記とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping3" spy={true} smooth={true} duration={500} >複式簿記とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping4" spy={true} smooth={true} duration={500} >仕訳とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping5" spy={true} smooth={true} duration={500} >勘定科目とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping6" spy={true} smooth={true} duration={500} >貨幣的評価の公準とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping7" spy={true} smooth={true} duration={500} >貸借平均の原理とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="bookkeeping8" spy={true} smooth={true} duration={500} >会計期間の公準とは</ScrollLink></li>
	    	　　　</ul>
                </aside>
                <Bookkeeping />
            </aside>
        </main>
        </>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜勘定科目の種類コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const KindOfAccount = () => {
	return(
		<>
			<section className="font-color">
	    	<Element name="kind-of-account1" className="element" >
	    		<h1 className="intro">簿記の五要素に該当する勘定科目</h1>
	    	</Element>
                <div>勘定科目は原則、資産、負債、純資産、収益、費用のうち、いずれかの性質に属します。</div>
				<div>このような考え方を<span className="underline font-color2">簿記の五要素</span>と呼び、これらの五要素に分類された勘定科目は、それぞれ貸借対照表と損益計算書を形作ります。</div>
				<br />
				<div>しかし、全ての勘定科目がこの五要素に分類されるとは限りません。</div>
				<div>以下、この五要素以外の性質にて分類される勘定科目となります。</div>
			<Element name="kind-of-account2" className="element" >
				<h1 className="intro">評価勘定</h1>
	    	</Element>
                <div>特定の資産、負債、純資産をマイナスにするための勘定科目を<span className="underline font-color2">評価勘定</span>と呼びます。</div>
				<div>代表的な評価勘定として、以下の勘定科目があります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
						<th className="table-size table-align">評価勘定名</th>
						<th className="table-size table-align">概要</th>
				    </tr>
				    <tr>
						<td className="table-size table-align">貸倒引当金</td>
						<td className="table-size table-align">売掛金のマイナスを表す</td>
				    </tr>
					<tr>
						<td className="table-size table-align">減価償却累計額</td>
						<td className="table-size table-align">固定資産のマイナスを表す</td>
				    </tr>
					<tr>
						<td className="table-size table-align">引出金</td>
						<td className="table-size table-align">資本金のマイナスを表す</td>
				    </tr>
				</table>
				<br />
				<div>このような勘定を用意することで、定位置に配置したにもかかわらず、逆位置に配置した時と同じ意味合いを持たせることが出来るようになるということがポイントです。</div>
				<br />
				<div>例えば、資産は通常、借方に配置すると増加を表しますが、評価勘定の場合には借方に配置したにもかかわらず、資産の減少を表すことになります。</div>
			
			<Element name="kind-of-account3" className="element" >
				<h1 className="intro">混合勘定</h1>
			</Element>
				<div>資産・負債の性質と収益・費用の性質を合わせ持つ勘定科目を<span className="underline font-color2">混合勘定</span>と呼びます。</div>
				<br />
				<div>例えば、仕事で使うボールペンを購入した場合、このボールペンの購入代金には、ボールペンという物理的な資産としての性質と、経費という費用としての性質が二重で備わっています。</div>
				<div>そこで、会計ではどちらの性質を先に計上しても、最終的に同じような会計処理となるよう、「消耗品」という資産勘定と、「消耗品費」という費用勘定の2種類を事前に用意することで、このような状況に対応しようとしました。</div>
				<br />
				<div>資産としての性質を先に計上する方法を<span className="underline font-color2">資産処理法</span>、費用としての性質を先に計上する方法を<span className="underline font-color2">費用処理法</span>と呼びます。</div>
				<br />
				<div>しかしながら、計上方法によってはどちらの方法を採用するかによって、計上される金額に差額が発生することがあります。</div>
				<div>そのため、このような勘定の存在は複式簿記の欠陥として知られています。</div>
		
			<Element name="kind-of-account4" className="element" >
				<h1 className="intro">対照勘定</h1>
			</Element>
				<div>2種類の勘定科目がペアの関係となっており、同じ金額で同時に発生し同時に消滅する勘定科目を<span className="underline font-color2">対照勘定</span>と言います。</div>
				<br />
				<div>簿記上の取引ではないけれど記録しておきたい事柄を記録するために利用します。</div>
				<div>代表的な評価勘定として、以下の勘定科目があります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
						<th className="table-size table-align" colspan="2">ペアの勘定科目</th>
						
				    </tr>
				    <tr>
						<td className="table-size table-align">試用販売未収金</td>
						<td className="table-size table-align">試用仮売上</td>
				    </tr>
					<tr>
						<td className="table-size table-align">割賦販売未収金</td>
						<td className="table-size table-align">割賦仮売上</td>
				    </tr>
					<tr>
						<td className="table-size table-align">保証債務見返</td>
						<td className="table-size table-align">保証債務</td>
				    </tr>
					<tr>
						<td className="table-size table-align">裏書義務見返</td>
						<td className="table-size table-align">裏書義務</td>
				    </tr>
					<tr>
						<td className="table-size table-align">割引義務見返</td>
						<td className="table-size table-align">割引義務</td>
				    </tr>
					<tr>
						<td className="table-size table-align">保証債務見返</td>
						<td className="table-size table-align">保証債務</td>
				    </tr>
					<tr>
						<td className="table-size table-align">保管有価証券</td>
						<td className="table-size table-align">預り有価証券</td>
				    </tr>
					<tr>
						<td className="table-size table-align">貸付有価証券</td>
						<td className="table-size table-align">有価証券</td>
				    </tr>
					<tr>
						<td className="table-size table-align">保管有価証券</td>
						<td className="table-size table-align">借入有価証券</td>
				    </tr>
				</table>
				<br />

			<Element name="kind-of-account5" className="element" >
				<h1 className="intro">未決算勘定</h1>
			</Element>
				<div>適切に処理するための勘定科目や金額が決まっていないときに一時的に使う勘定科目を<span className="underline font-color2">未決算勘定</span>と言います。</div>
				<br />
				<div>これらの勘定科目は一時的に計上されるもののため、最終的な確定申告や決算書の中には表示されません。</div>
				<div>代表的な勘定科目に以下のものがあります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
						<th className="table-size table-align">未決算勘定</th>
						<th className="table-size table-align">概要</th>
				    </tr>
				    <tr>
						<td className="table-size table-align">現金過不足</td>
						<td className="table-padding-1">現金の帳簿残高と実残高に差があるものの、原因が不明な場合に、一時的に処理するために利用します。</td>
				    </tr>
					<tr>
						<td className="table-size table-align">火災未決算</td>
						<td className="table-padding-1">火災保険の保険料の金額が確定するまでの期間、一時的に処理するために利用します。</td>
				    </tr>
				</table>
				<br />
			<Element name="kind-of-account6" className="element" >
				<h1 className="intro">決算勘定</h1>
			</Element>
				<div>決算のときに帳簿を締切るために設定される勘定を<span className="underline font-color2">決算勘定</span>と言います</div>
				<div>例えば、損益という勘定科目がこれに該当します。</div>
		</section>
		</>
	);
}

const kindOfAccount = () => {
    return (
        <>
        <main className="mainArticle">
            <aside>
                <aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account1" spy={true} smooth={true} duration={500} >簿記の五要素に該当する勘定科目</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account2" spy={true} smooth={true} duration={500} >評価勘定</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account3" spy={true} smooth={true} duration={500} >混合勘定</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account4" spy={true} smooth={true} duration={500} >対照勘定</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account5" spy={true} smooth={true} duration={500} >未決算勘定</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="kind-of-account6" spy={true} smooth={true} duration={500} >決算勘定</ScrollLink></li>
	    	　　　</ul>
                </aside>
                <KindOfAccount />
            </aside>
        </main>
        </>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜勘定科目の種類コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//勘定科目のコンポーネント
const AccountGrade3 = () => {
	return (
		<>
			<section className="font-color">
			<Element name="accountGrade3-1" className="element" >
				<h1 className="intro">勘定科目の分類について</h1>
			</Element>
			<div>お金の動きのうち、共通の性質のみを抜き出してわかりやすく記録するために生まれた分類項目の総称を<span className="underline font-color2">勘定科目</span>と呼びます。</div>
			<div>この「共通の性質」は、大きく分けると5種類に分かれていきます。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-size-30 table-align">分類の名前</th>
					<th className="table-align">概要</th>
				</tr>

				<tr>
					<td className="table-align">資産</td>
					<td className="table-align">売ったらお金になるという性質をもつ財産</td>
				</tr>
				<tr>
					<td className="table-align">負債</td>
					<td className="table-align">いずれ引き渡す義務があるという性質をもつ財産</td>
				</tr>
				<tr>
					<td className="table-align">純資産</td>
					<td className="table-align">自分で用意したという性質をもつ財産</td>
				</tr>
				<tr>
					<td className="table-align">収益</td>
					<td className="table-align">事業活動により獲得したお金</td>
				</tr>
				<tr>
					<td className="table-align">費用</td>
					<td className="table-align">事業活動で発生したお金</td>
				</tr>
			</table>
				<br />

				<Element name="accountGrade3-2" className="element" >
					<h1 className="intro">勘定科目の定位置について</h1>
				</Element>
				<div>勘定科目の各分類は、以下の位置が定位置となり、この分類がそのまま貸借対照表や損益計算書を形造ります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color"><tr><th className="table-size table-align">最終的に発生したもの（結果）</th><th className="table-size table-align">何故、その結果は発生したのか（原因）</th></tr><tr><td className="table-size table-align" rowspan="2">資産<br />（売ったらお金になるもの）</td><td className="table-size table-align">負債<br />（他人から借りた）</td></tr><tr><td className="table-size table-align">純資産<br />（自分で用意した）</td></tr><tr><td className="table-size table-align">費用<br />（事業活動で発生したお金）</td><td className="table-size table-align">収益<br />（事業活動により獲得したお金）</td></tr></table>
				<br />
				<div>それぞれの勘定科目が増加した場合にはその定位置に、減少した場合には逆の位置に配置を行います。</div>
				<div>それでは、各分類の詳細を見ていきましょう。</div>
		
				<Element name="accountGrade3-3" className="element" >
					<h1 className="intro">資産とは</h1>
				</Element>
				<div>売ったらお金になるという性質をもった財産のことを<span className="underline font-color2">資産</span>と呼びます</div>
				<div>ほとんどのものは売ったらお金になりますので、資産と言えるでしょう。</div>
				<div>例えば、現金はそのままで資産になりますし、株式なども売ればお金になるので資産です。</div>
                		<br />
				<div>資産は定位置が借方になるので、資産が増えたら仕訳の左側に、資産が減ったら仕訳の右側に記入していきます。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方</th>
					<th className="table-size table-align">貸方</th>
				    </tr>

				    <tr>
					<td className="table-size table-align">資産の増加</td>
					<td className="table-size table-align">資産の減少</td>
				    </tr>
				</table>

				<Element name="accountGrade3-4" className="element" >
					<h1 className="intro">負債とは</h1>
				</Element>
				<div>業務で使うお金のうち、返済の必要性をもった財産を<span className="underline font-color2">負債</span>と呼びます</div>
				<div>例えば、借金がこれに該当します。</div>
                		<br />
				<div>負債は定位置が貸方になるので、負債が増えたら仕訳の右側に、負債が減ったら仕訳の左側に記入していきます。</div>		
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方</th>
					<th className="table-size table-align">貸方</th>
				    </tr>

				    <tr>
					<td className="table-size table-align">負債の減少</td>
					<td className="table-size table-align">負債の増加</td>
				    </tr>
				</table>

				<Element name="accountGrade3-5" className="element" >
					<h1 className="intro">純資産とは</h1>
				</Element>
				<div>業務で使うお金のうち、自分で用意したという性質をもつ財産を<span className="underline font-color2">純資産</span>と呼びます。</div>
				<div>「自分で用意した」というのは、具体的には次の2つのお金を意味しています。これらは、負債のように他人から資産を得たのではなく、自身の力によって生み出した資産になります。</div>
				<br />
				<div>①事業を開始する際に、仕事で使うと決めた自分のお金</div>
				<div>②事業活動を通して、獲得したお金</div>
                		<br />
				<div>純資産は定位置が貸方になるので、純資産が増えたら仕訳の右側に、純資産が減ったら仕訳の左側に記入していきます。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方</th>
					<th className="table-size table-align">貸方</th>
				    </tr>

				    <tr>
					<td className="table-size table-align">純資産の減少</td>
					<td className="table-size table-align">純資産の増加</td>
				    </tr>
				</table>		
		
				<Element name="accountGrade3-6" className="element" >
					<h1 className="intro">収益とは</h1>
				</Element>
				<div>事業活動により獲得したお金を<span className="underline font-color2">収益</span>と呼びます</div>
				<div>例えば、売上がこれに該当します。</div>
                		<br />
				<div>収益は定位置が貸方になるので、収益が増えたら仕訳の右側に、収益が減ったら仕訳の左側に記入していきます。</div>	
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方</th>
					<th className="table-size table-align">貸方</th>
				    </tr>

				    <tr>
					<td className="table-size table-align">収益の減少</td>
					<td className="table-size table-align">収益の増加</td>
				    </tr>
				</table>	
		
				<Element name="accountGrade3-7" className="element" >
					<h1 className="intro">費用とは</h1>
				</Element>
				<div>事業活動で発生したお金を<span className="underline font-color2">費用</span>と呼びます</div>
				<div>例えば、仕入がこれに該当します。</div>
				<br />
				<div>費用は定位置が借方になるので、費用が増えたら仕訳の左側に、費用が減ったら仕訳の右側に記入していきます。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方</th>
					<th className="table-size table-align">貸方</th>
				    </tr>

				    <tr>
					<td className="table-size table-align">費用の増加</td>
					<td className="table-size table-align">費用の減少</td>
				    </tr>
				</table>
			</section>
		</>
	);
}

const AccountGrade2 = () => {
	return (
		<>
			<section className="font-color">
				<Element name="accountGrade2-1" className="element" >
					<h1 className="intro">勘定科目の大分類、中分類、小分類とは</h1>
				</Element>
				<div>勘定科目は大きく、資産、負債、純資産、収益、費用に分類されることを簿記3級では学びました。 それぞれの分類は、その性質によってさらにそれぞれ細かい分類に分かれていきます。</div>
				
				<Element name="accountGrade2-2" className="element" >
					<h1 className="intro">正規営業循環基準と1年基準とは</h1>
				</Element>
				<div>一般的に、「お金を得る」という営みは「材料を仕入れる→商品を製造する→商品を販売する→現金を回収する」というサイクルを繰り返すことで実現されます。</div>
				<div>このサイクルのことを<span className="underline font-color2">営業サイクル</span>と呼び、このサイクルの中で発生した資産か負債かどうかを元に、資産や負債を区別する基準のことを、<span className="underline font-color2">正規営業循環基準</span>と呼びます。</div>
				<br />
				<div>また、これとは別に発生した資産や負債が1年以内に現金化、費用化されるかどうかで資産や負債に区別する基準があり、これを<span className="underline font-color2">1年基準</span>と呼びます。</div>
				<div>現行の会計ルールでは、まず正規営業循環基準が優先して適用され、これに該当しないものは1年基準で判定するという流れで勘定科目を分類していくことになります。</div>
			
				<Element name="accountGrade2-2" className="element" >
					<h1 className="intro">流動資産とは</h1>
				</Element>
				<div>1年以内に現金化できる可能性のある資産のことで、「材料を仕入れる→商品を製造する→商品を販売する→現金を回収する」というサイクルの中で生じる資産や1年以内に現金に換金される資産を<span className="underline font-color2">流動資産</span>と呼びます。</div> 
				<div>例えば、売掛金は商品を販売したものの、いまだ代金が回収されていないものに対して、その回収の権利を表します。これらは期日がくれば現金化できることから、流動資産に含まれます。</div>
				
				<Element name="accountGrade2-3" className="element" >
					<h1 className="intro">固定資産とは</h1>
				</Element>
				<div>土地や建物、車など、長期間にわたって事業を行うために所有するもので、1年を超えて所有する資産や投資目的で長期間保有したりするような資産を固定資産と呼びます。</div>
				
				<Element name="accountGrade2-4" className="element" >
					<h1 className="intro">繰延資産とは</h1>
				</Element>
				<div>本来費用として計上が必要な支払いが発生した際に、将来の収益に貢献するという理由で資産に計上することとなった資産を繰延資産と呼びます。</div>
				
				<Element name="accountGrade2-5" className="element" >
					<h1 className="intro">流動負債とは</h1>
				</Element>
				<div>1年以内に返済が必要な債務を<span className="underline font-color2">流動負債</span>と呼びます。</div>
				
				<Element name="accountGrade2-6" className="element" >
					<h1 className="intro">固定負債とは</h1>
				</Element>
				<div>1年を超えて返済が必要な債務を<span className="underline font-color2">固定負債</span>と呼びます。</div>		
		
				<Element name="accountGrade2-7" className="element" >
					<h1 className="intro">売上高とは</h1>
				</Element>
				<div>企業がサービスや商品を提供することで獲得した、本業の売上金額の総額を<span className="underline font-color2">売上高</span>と呼びます。</div>
				<div>1年間に入ってきたすべてのお金というイメージで問題ないでしょう。損益計算書の一番上に表示されます。</div>		
		
				<Element name="accountGrade2-8" className="element" >
					<h1 className="intro">営業外収益とは</h1>
				</Element>
				<div>企業が本業以外の活動で経常的に獲得する収益のことを、<span className="underline font-color2">営業外収益</span>と呼びます。 例えば、配当金の受取や利息の受取、為替差益などがあります。</div>
			
				<Element name="accountGrade2-9" className="element" >
					<h1 className="intro">特別利益とは</h1>
				</Element>
				<div>企業が本業以外の活動で臨時的に獲得する収益のことを、<span className="underline font-color2">特別利益</span>と呼びます。 例えば、固定資産の売却益、保険差益などがあります。</div>
				
				<Element name="accountGrade2-10" className="element" >
					<h1 className="intro">売上原価とは</h1>
				</Element>
				<div>商品の仕入れや製造にかかった費用を<span className="underline font-color2">売上原価</span>と呼びます。</div>
		
				<Element name="accountGrade2-10" className="element" >
					<h1 className="intro">売上総利益とは</h1>
				</Element>
				<div>売上高から売上原価を引いた金額を<span className="underline font-color2">売上総利益</span>と呼びます。</div>
				<div>例えば、アイスクリームを40円で仕入れ、100円で販売したとします。 この時、最終的に獲得した利益が売上総利益です。 以下の計算式にて求めることが出来ます。</div>
				<div>売上高ー売上原価＝売上総利益</div> 
				<div>100円ー40円＝60円</div>
				
				<Element name="accountGrade2-11" className="element" >
					<h1 className="intro">販売費及び一般管理費とは</h1>
				</Element>
				<div>商品を販売するために直接かかる費用を<span className="underline font-color2">販売費</span>と呼びます。 また、事業を行う上で管理にかかる費用を<span className="underline font-color2">一般管理費</span>と呼び、この両者の合計額を<span className="underline font-color2">販売費及び一般管理費</span>と呼びます。 一般的に経費と呼ばれます。</div>
				
				<Element name="accountGrade2-12" className="element" >
					<h1 className="intro">営業外費用とは</h1>
				</Element>
				<div>企業が本業以外の活動で経常的に発生する費用のことを、<span className="underline font-color2">営業外費用</span>と呼びます。 例えば、利息の支払、有価証券の売却損などがあります。</div>
				
				<Element name="accountGrade2-13" className="element" >
					<h1 className="intro">特別損失とは</h1>
				</Element>
				<div>企業が本業以外の活動で臨時的に発生した費用のことを、<span className="underline font-color2">特別損失</span>と呼びます。 例えば、固定資産の売却損、除却損、圧縮損などがあります。</div>
				
				<Element name="accountGrade2-14" className="element" >
					<h1 className="intro">法人税等とは</h1>
				</Element>
				<div>会社の利益に応じて、課税される法人税、法人住民税、法人事業税をまとめて<span className="underline font-color2">法人税等</span>と呼びます。</div>
		
			</section>
		</>
	);
}

const AccountGrade1 = () => {
	return (
		<>
			<section className="font-color">
				<Element name="accountGrade1-1" className="element" >
					<h1 className="intro">財務会計の概念フレームワークとは</h1>	
				</Element>
				<div>財務会計の基礎にある前提や概念を体系化したものを<span className="underline font-color2">財務会計の概念フレームワーク</span>と呼びます。</div>
				<br />
				<div>世の中には様々な取引が存在するため、中には既存の会計ルール（企業会計原則）では対応が出来ない想定外の事象が発生することがあります。</div>
				<div>こういった場合に、発生したお金の動きをどのように解釈・処理していけばよいか、の指針を示してくれるものが概念フレームワークになります。</div>
				<br />
				<div>なお、このフレームワークは現行のIFRS（国際会計基準）の基礎ともなっている考え方です。</div>
				
				<Element name="accountGrade1-2" className="element" >
					<h1 className="intro">資産とは</h1>
				</Element>
				<div>資産とは、<span className="underline font-color2">過去の取引または事象の結果として、報告主体が支配している経済的資源をいう</span></div>
				<br />
				
				<Element name="accountGrade1-3" className="element" >
					<h1 className="intro">負債とは</h1>
				</Element>
				<div>負債とは、<span className="underline font-color2">過去の取引または事象の結果として、報告主体が支配している経済的資源を放棄もしくは引き渡す義務、またはその同等物をいう</span></div>
				<br />
				
				<Element name="accountGrade1-4" className="element" >
					<h1 className="intro">純資産とは</h1>
				</Element>
				<div>純資産とは、<span className="underline font-color2">資産と負債の差額をいう。</span></div>
				<br />
				
				<Element name="accountGrade1-5" className="element" >
					<h1 className="intro">収益とは</h1>
				</Element>
				<div>収益とは、<span className="underline font-color2">純利益または少数株主損益を増加させる項目であり、特定期間の期末までに生じた資産の増加や負債の減少に見合う額のうち、投資のリスクから解放された部分である</span></div>
				<br />
				
				<Element name="accountGrade1-6" className="element" >
					<h1 className="intro">費用とは</h1>
				</Element>
				<div>費用とは、<span className="underline font-color2">純利益または少数株主損益を減少させる項目であり、特定期間の期末までに生じた資産の減少や負債の増加に見合う額のうち、投資のリスクから解放された部分である</span></div>
			</section>
		</>
	);
}

const accountGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/account-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/account-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/account-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-1" spy={true} smooth={true} duration={500} >勘定科目の分類について</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-2" spy={true} smooth={true} duration={500} >勘定科目の定位置について</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-3" spy={true} smooth={true} duration={500} >資産とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-4" spy={true} smooth={true} duration={500} >負債とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-5" spy={true} smooth={true} duration={500} >純資産とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-6" spy={true} smooth={true} duration={500} >収益とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade3-7" spy={true} smooth={true} duration={500} >費用とは</ScrollLink></li>
	    	　　　</ul>
                </aside>
                <AccountGrade3 />
            </aside>
        </main>
    );
}

const accountGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/account-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/account-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/account-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-1" spy={true} smooth={true} duration={500} >勘定科目の大分類、中分類、小分類について</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-2" spy={true} smooth={true} duration={500} >正規営業循環基準と1年基準とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-2" spy={true} smooth={true} duration={500} >流動資産とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-3" spy={true} smooth={true} duration={500} >固定資産とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-4" spy={true} smooth={true} duration={500} >繰延資産とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-5" spy={true} smooth={true} duration={500} >流動負債とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-6" spy={true} smooth={true} duration={500} >固定負債とは</ScrollLink></li>
            		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-7" spy={true} smooth={true} duration={500} >売上高とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-8" spy={true} smooth={true} duration={500} >営業外収益とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-9" spy={true} smooth={true} duration={500} >特別利益とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-10" spy={true} smooth={true} duration={500} >売上原価とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-11" spy={true} smooth={true} duration={500} >販売費及び一般管理費とは</ScrollLink></li>        
	    	    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-12" spy={true} smooth={true} duration={500} >営業外費用とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-13" spy={true} smooth={true} duration={500} >特別損失とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade2-14" spy={true} smooth={true} duration={500} >法人税等とは</ScrollLink></li>
	             </ul>
                </aside>
                <AccountGrade2 />
            </aside>
        </main>
    );
}

const accountGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/account-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/account-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/account-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-1" spy={true} smooth={true} duration={500} >財務会計の概念フレームワークとは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-2" spy={true} smooth={true} duration={500} >資産とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-3" spy={true} smooth={true} duration={500} >負債とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-4" spy={true} smooth={true} duration={500} >純資産とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-5" spy={true} smooth={true} duration={500} >収益とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="accountGrade1-6" spy={true} smooth={true} duration={500} >費用とは</ScrollLink></li>
                    </ul>
                </aside>
                <AccountGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜勘定科目一覧表コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//勘定科目一覧表のコンポーネント
const AccountsListGrade3 = () => {
	return(
		<>
			<section className="font-color">
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-size-15 table-align">大分類</th>
					<th className="table-size-15 table-align">中分類</th>
					<th className="table-size-20 table-align">勘定科目名</th>
					<th className="table-size table-align">勘定科目の概要</th>
					
				</tr>

				<tr>
					<td className="table-align" rowspan="20">資産</td>
					<td className="table-align">流動資産</td>
					<td className="table-align">現金</td>
					<td className="table-padding-1">紙幣や硬貨などのお金、郵便小為替</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">小口現金</td>
					<td className="table-size table-padding-1">少額の支払いのための現金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">当座預金</td>
					<td className="table-size table-padding-1">銀行に預け入れ当座預金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">普通預金</td>
					<td className="table-size table-padding-1">いつでも自由に入出金が可能な銀行預金のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">売掛金</td>
					<td className="table-size table-padding-1">得意先に掛け売りしたときの代金を請求する権利</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">商品</td>
					<td className="table-size table-padding-1">在庫商品</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">貯蔵品</td>
					<td className="table-size table-padding-1">まとめて購入した封筒、便せん、パンフレットなどの消耗品などで期末に未使用のもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">前払費用</td>
					<td className="table-size table-padding-1">家賃、保守料、会費、損害保険料などの支払金額のうち、翌年以降にかかる前払部分</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">前払金</td>
					<td className="table-size table-padding-1">商品の仕入や諸経費の前渡金、手付金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">短期貸付金</td>
					<td className="table-size table-padding-1">貸付金で1年以内に返済の予定されているもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">立替金</td>
					<td className="table-size table-padding-1">一時的に立て替えた金額</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">受取手形</td>
					<td className="table-size table-padding-1">通常の営業取引において対価として受け取った約束手形や為替手形などの手形債権のこと</td>
				</tr>
				
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">仮払金</td>
					<td className="table-size table-padding-1">現金等の支出はあったが相手勘定科目が確定していない場合または相手勘定科目は確定しているが金額が確定していない場合に一時的に処理しておく勘定科目。後日、勘定科目や金額が確定した段階で振替処理をする</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">建物</td>
					<td className="table-size table-padding-1">店舗、事務所、工場、倉庫、車庫、社宅など、事業活動に供するために所有する建物のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">土地</td>
					<td className="table-size table-padding-1">事業活動に供するために所有する敷地をいい、事務所・店舗・工場・社宅などの敷地のほか、資材置場、駐車場、運動場などの土地を含むもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">車両運搬具</td>
					<td className="table-size table-padding-1">事業活動に供するために所有するもので、鉄道車両、乗用車、トラック、バス、オートバイ、フォークリフト、クレーン車、トロッコなどの陸上運搬具のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">工具器具備品</td>
					<td className="table-size table-padding-1">事業活動に供するために所有するもので、工作用具、応接セット、机、イス、コピー機、ファックス、電話設備、キャビネット、エアコン、冷蔵庫、パソコン、観賞用の植物、自動販売機、書画、こっとうなどのこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">ソフトウェア</td>
					<td className="table-size table-padding-1">10万円以上のパソコンソフト</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">長期前払費用</td>
					<td className="table-size table-padding-1">家賃、保守料、会費、損害保険料などの支払金額のうち、1年以上を超えた前払部分</td>
				</tr>
				<tr>
					<td className="table-size table-align">繰延資産</td>
					<td className="table-size table-align">開業費</td>
					<td className="table-size table-padding-1">個人事業主の場合、開業の準備にかかった費用。法人の場合、会社設立後（設立登記手続終了後）から営業を開始するまでの期間に支払った諸費用</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="7">負債</td>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">買掛金</td>
					<td className="table-size table-padding-1">商品や原材料の仕入れなどの営業取引に基づいて発生した、まだ支払いされていない債務のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">クレジットカード</td>
					<td className="table-size table-padding-1">後から銀行口座より引き落としが発生する未払金扱いの勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">支払手形</td>
					<td className="table-size table-padding-1">通常の営業取引において債務の支払いのために生じた約束手形や為替手形などの手形債務のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">未払金</td>
					<td className="table-size table-padding-1">本来の営業活動以外の場合において債務が確定していて未払いのもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">未払費用</td>
					<td className="table-size table-padding-1">一定の契約に基づき継続して役務の提供を受ける場合に、すでに提供された役務に対して未だその対価の支払が終わらないもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">前受金</td>
					<td className="table-size table-padding-1">商品や製品などの売上を行った場合に代金の一部または全部を前もって受け取ったとき、その前受けした金額を管理するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">仮受金</td>
					<td className="table-size table-padding-1">現金等の受入れはあったが相手勘定科目が確定していない場合や相手勘定科目は確定しているが金額が未確定の場合に一時的に処理しておく勘定科目。後日、勘定科目や金額が確定した段階で振替処理をする</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="2">純資産</td>
					<td className="table-size table-align">純資産</td>
					<td className="table-size table-align">資本金</td>
					<td className="table-size table-padding-1">株主などの出資者から出資してもらった金額のうち法律で定めたもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">純資産</td>
					<td className="table-size table-align">元入金</td>
					<td className="table-size table-padding-1">個人事業主における元手のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="3">収益</td>
					<td className="table-size table-align">売上高</td>
					<td className="table-size table-align">売上高</td>
					<td className="table-size table-padding-1">商品や製品の販売、サービスの提供など、企業の主たる営業活動によって獲得した収益のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">営業外収益</td>
					<td className="table-size table-align">受取利息</td>
					<td className="table-size table-padding-1">預貯金、国債･地方債・社債などの有価証券、貸付金などから得る利子</td>
				</tr>
				<tr>
					<td className="table-size table-align">営業外収益</td>
					<td className="table-size table-align">雑収入</td>
					<td className="table-size table-padding-1">営業外収益のうち、科目的にも金額的にも重要性の乏しいものについて処理するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="10">費用</td>
					<td className="table-size table-align">売上原価</td>
					<td className="table-size table-align">仕入高</td>
					<td className="table-size table-padding-1">販売目的の商品を仕入れるのに要した購入費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">消耗品費</td>
					<td className="table-size table-padding-1">事務用消耗品や工具器具備品、車両運搬具等で、取得価額が10万円未満または使用可能期間が1年未満のものを消費することによって発生する費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">交際費</td>
					<td className="table-size table-padding-1">取引先や営業先とのお付き合いを円滑に行うために飲食店で接待する費用や、お中元やお歳暮、お土産などの贈答品等の購入のために支出した費用</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">通信費</td>
					<td className="table-size table-padding-1">電話代、はがき代、郵便切手代、郵便小包や宅配便などの配送料金、ファックス代、インターネット関連代、freeeなどのクラウドソフト利用料、有料放送の視聴料など、通信のために要した費用を処理する勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">水道光熱費</td>
					<td className="table-size table-padding-1">水道代、電気代、ガス代、燃料代などの費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">車両費</td>
					<td className="table-size table-padding-1">ガソリン代、高速料金、洗車、車検、修理代金、自動車保険料等、車に関する支払いを仕訳するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">法定福利費</td>
					<td className="table-size table-padding-1">企業（事業主）が社会保険料として負担する役員・従業員の福利厚生のために納付することが法律で義務づけられている費用を処理する勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">減価償却費</td>
					<td className="table-size table-padding-1">固定資産の取得価額を耐用年数の各期間に費用として配分したもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">給料手当</td>
					<td className="table-size table-padding-1">社員に対して、毎月支払う給料のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">支払手数料</td>
					<td className="table-size table-padding-1">銀行の振込手数料、売買契約の仲介者に対して支払う手数料等を表す勘定科目</td>
				</tr>
                	</table>
		</section>
		</>
	);
}

const AccountsListGrade2 = () => {
	return(
		<>
			<section className="font-color">
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-size-15 table-align">大分類</th>
					<th className="table-size-15 table-align">小分類</th>
					<th className="table-size-20 table-align">勘定科目名</th>
					<th className="table-size table-align">勘定科目の概要</th>
					
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="30">資産</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売買目的有価証券</td>
					<td className="table-size table-padding-1"></td>
				</tr>
		
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">満期保有目的債権</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社株式</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">その他有価証券</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">不渡手形</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債権</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰越商品</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">建設仮勘定</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">貯蔵品</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">火災未決算</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">営業外受取手形</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">のれん</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">諸資産</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア仮勘定</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">前払保険料</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">長期前払保険料</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">リース資産</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">別段預金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮払消費税</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮払法人税等</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未収還付消費税</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰延税金資産</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">支店</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特許権</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">クレジット売掛金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕掛品</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">創立費</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">開業費</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="19">負債</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債務</td>
					<td className="table-size table-padding-1"></td>
				</tr>	
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特別修繕引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品保証引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">退職給付引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">返品調整引当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">保証債務</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">営業外支払手形</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">諸負債</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">リース債務</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払リース料</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払配当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払法人税等</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮受消費税</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払消費税</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰延税金負債</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">本店</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="9">純資産</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">資本金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">資本準備金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">株式申込証拠金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">利益準備金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">別途積立金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主持分</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">新築積立金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰越利益剰余金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">その他有価証券評価差額金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="16">収益</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">受取配当金</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券利息</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">受取利息</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券売却益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券評価益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式売却益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社売却益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">保険差益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">役務収益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕入割引</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">国庫補助金受贈益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">工事負担金受贈益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">為替差益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">雑益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主に帰属する当期純利益</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="34">費用</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券評価損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社株式売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">手形売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">債権売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債権売却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕引当金繰入</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品保証引当金繰入</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">退職給付費用</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻引当金繰入</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与引当金繰入</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">返品調整引当金繰入</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">火災損失</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上原価</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">役務原価</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割引</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕入割戻</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">棚卸減耗損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品評価損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産圧縮損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産除却損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産廃棄損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕費</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">のれん償却</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特許権償却</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">研究開発費</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア償却</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">支払リース料</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">株式交付費</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">追徴法人税等</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">為替差損</td>
					<td className="table-size table-padding-1"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主に帰属する当期純損失</td>
					<td className="table-size table-padding-1"></td>
				</tr>
                	</table>
		</section>
		</>
	);
}

const AccountsListGrade1 = () => {
	return(
		<>
			<section className="font-color">
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-size table-align">大分類</th>
					<th className="table-size table-align">小分類</th>
					<th className="table-size table-align">勘定科目名</th>
					<th className="table-size table-align">勘定科目の概要</th>
					
				</tr>

				<tr>
					<td className="table-size table-align" rowspan="20">資産</td>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">積送品</td>
					<td className="table-size table-align">委託販売のために発送した商品</td>
				</tr>
                	</table>
		</section>
		</>
	);
}


const accountsListGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/accounts-list-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/accounts-list-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/accounts-list-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <AccountsListGrade3 />
            </aside>
        </main>
    );
}

const accountsListGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/accounts-list-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/accounts-list-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/accounts-list-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <AccountsListGrade2 />
            </aside>
        </main>
    );
}

const accountsListGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/accounts-list-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/accounts-list-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/accounts-list-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <AccountsListGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜試算表コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//試算表のコンポーネント
const TrialBalance = () => {
	return (
		<>
			<section className="font-color">
			<Element name="trialBalance1" className="element" >
				<h1 className="intro">試算表とは</h1>
			</Element>
			<div>損益計算書や貸借対照表など、確定申告や決算の際に必要な集計表を<span className="underline font-color2">試算表</span>と呼びます。</div>
			<div>このセクションでは、貸借対照表と損益計算書を解説していきます。</div>
				
			<Element name="trialBalance2" className="element" >
				<h1 className="intro">貸借対照表とは</h1>
			</Element>
			<div>ある時点での財政状態を示す一覧表のことを<span className="underline font-color2">貸借対照表</span>と呼びます。</div>
			<div>勘定科目の分類のうち、「資産」「負債」「純資産」に該当する勘定科目がこの表に集計されます。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color"><tr><th className="table-size table-align">最終的に発生したもの（結果）</th><th className="table-size table-align">何故、その結果は発生したのか（原因）</th></tr><tr><td className="table-size table-align" rowspan="2">資産<br />（売ったらお金になるもの）</td><td className="table-size table-align">負債<br />（他人から借りた）</td></tr><tr><td className="table-size table-align">純資産<br />（自分で用意した）</td></tr></table>
			<br />
			<div>なお、最終的に発生したもの（結果）のことを<span className="underline font-color2">運用形態</span>、何故、その結果は発生したのか（原因）ということを<span class="underline font-color2">調達源泉</span>と呼びます。</div>
			<div>つまり、手元にある財産を左側、その財産をどのように入手したのか？ということを右側に書くということを認識していれば問題ないでしょう。</div>

			<Element name="trialBalance3" className="element" >
				<h1 className="intro">損益計算書とは</h1>
			</Element>
			<div>1年間において、収益と費用がいくら発生したのかを明らかにし、最終的にいくらの利益または損失がでているのかを把握するための表を<span className="underline font-color2">損益計算書</span>と呼びます。</div>
			<div>勘定科目の分類のうち、「収益」「費用」に該当する勘定科目がこの表に集計されます。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color"><tr><th className="table-size table-align">最終的に発生したもの（結果）</th><th className="table-size table-align">何故、その結果は発生したのか（原因）</th></tr><tr><td className="table-size table-align">費用<br />（事業活動で発生したお金）</td><td className="table-size table-align">収益<br />（事業活動により獲得したお金）</td></tr><tr><td className="table-size table-align">利益<br />（収益が費用よりも多かった場合）</td><td className="table-size table-align">損失<br />（収益が費用よりも少なかった場合）</td></tr></table>
			<br />
			<div>収益や費用は因果関係を考えることが難しいかもしれません。</div>
			<div>まず、初めに費用が発生します。なぜその費用が発生したかというと、「収益を獲得した」という事業活動の結果があったからと考えると良いかと思います。</div>

			<Element name="trialBalance4" className="element" >
				<h1 className="intro">損益計算書と貸借対照表のつながりについて</h1>
			</Element>
			<div>純資産は①事業を開始する際に、仕事で使うと決めた自分のお金、そして②事業活動を通して、獲得したお金の合計額になります。</div>
			<div>したがって、損益計算書で計算した「利益」「損失」が、貸借対照表の純資産の項目に金額として合算されていきます。</div>
			<br />
			    <img src={ TrialBalanceImg } alt="貸借対照表と損益計算書のつながり" className="img-size"></img>
			    <br />	
			<div>学習が進むと、この接続が完全に一致しない例に遭遇するかもしれません。</div>
			<br />
			<div>損益計算書で計算された損益と、貸借対照表における純資産の増減額が完全一致する関係を<span className="underline font-color2">クリーン・サープラス関係</span>と呼びます。</div>
			<div>公認会計士試験の財務会計分野にて、出題されることのある論点となります。</div>
		</section>
		</>
	);
}


const trialBalance = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="trialBalance1" spy={true} smooth={true} duration={500} >試算表とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="trialBalance2" spy={true} smooth={true} duration={500} >貸借対照表とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="trialBalance3" spy={true} smooth={true} duration={500} >損益計算書とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="trialBalance4" spy={true} smooth={true} duration={500} >損益計算書と貸借対照表のつながりについて</ScrollLink></li>
                    </ul>
                </aside>
                <TrialBalance />
            </aside>
        </main>
    );
}



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜確定申告コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//確定申告のコンポーネント
const FinalTaxReturn = () => {
	return(
		<>
		　　　<section className="font-color">
			<Element name="finalTaxReturn1" className="element" >
				<h1 className="intro">確定申告とは</h1>
			</Element>
			<div>個人事業主が1年間の損益を算出し、所得税の金額を確定させることを<span className="underline font-color2">確定申告</span>と呼びます。</div>
			<div>このセクションでは、確定申告までの簡単な流れを抑えることが目的となります。</div>
		
			<Element name="finalTaxReturn2" className="element" >
				<h1 className="intro">控除とは</h1>
			</Element>
			<div>1年間の損益は、1年間に獲得した収益から、1年間に発生した費用を引いた金額になります。</div>
			<div>ただし、この損益に対して直接税率がかかるというものではなく、この金額からさらに各種の控除を引いた金額に対して、税率がかかってくるという仕組みです。</div>
			<div>そもそもどうしてこのような仕組みがあるのでしょうか？次の例を見て下さい</div>
			<br />
			<div>①健康な独身男性/年収400万</div>
			<div>②健康だが養っている妻や子供がいる既婚男性/年収400万</div>
			<div>③病気で療養中の男性/年収400万</div>
			<br />
			<div>もし、この3名に同じ税金を課してしまった場合、②や③の男性と①の男性を比較すると、税金の負担度合いに不公平性が生じてしまいます。</div>
			<div>そこで、控除という仕組みが登場します。1年間の損益から、更に一定の金額を引くことができ、この金額に対して税率をかけることで、公平性を担保しようとしているのです。</div>
			<div>所得税額=(1年間に獲得した収益-1年間に発生した費用-所得控除)-税額控除</div>
	
			<Element name="finalTaxReturn3" className="element" >
				<h1 className="intro">所得控除とは</h1>
			</Element>
			<div>納税者の個人的事情に起因する様々な納税の不公平性を緩和するため、1年間の所得から、さらに一定の金額を差し引くことの出来る仕組みを<span className="underline font-color2">所得控除</span>と呼びます。</div>
			<br />
			<div>例えば、病気で療養中の男性は、一定の金額を医療費として控除することが出来ます。その結果、所得税の計算の元になる金額は400万ではなく、400万から医療費控除で認められた金額を引いた金額になるのです。</div>
			<div>2021年現在、所得控除は全部で14種類あります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
			    <tr>
				<th className="table-size table-align">所得控除の種類</th>
				<th className="table-size table-align">目的</th>
				<th className="table-size table-align">概要</th>
			    </tr>

			    <tr>
				<td className="table-size table-align">基礎控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			    </tr>
			　　<tr>
				<td className="table-size table-align">配偶者控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			    </tr>
			　　　<tr>
				<td className="table-size table-align">配偶者特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			    </tr>
			<tr>
				<td className="table-size table-align">扶養控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">医療費控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">寄付金控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">社会保険料控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">生命保険料控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">地震保険料控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">小規模企業共済等掛金控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">ひとり親控除・寡婦控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">勤労学生控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">障害者控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			<tr>
				<td className="table-size table-align">雑損控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align"></td>
			</tr>
			</table>	
		
			<Element name="finalTaxReturn4" className="element" >
				<h1 className="intro">税額控除とは</h1>
			</Element>
			<div>最終的に算出された所得税の金額から、さらに一定額を直接差し引くことの出来る仕組みを<span className="underline font-color2">税額控除</span>と呼びます。</div>
			<div>2021年現在、所得控除は全部で14種類あります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
			    <tr>
				<th className="table-size table-align">所得控除の種類</th>
				<th className="table-size table-align">目的</th>
				<th className="table-size table-align">概要</th>
			    </tr>

			    <tr>
				<td className="table-size table-align">配当控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">国内株式の配当金について総合課税を選択して確定申告をした場合に、配当金に一定率を掛けた金額が所得税・住民税から控除されること</td>
			    </tr>
			　　<tr>
				<td className="table-size table-align">外国税額控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">外国で生じた所得のうち、日本の所得税と類似した性質のものがその外国で課税されている場合に、二重課税にならないよう設けられている制度</td>
			    </tr>
			　　　<tr>
				<td className="table-size table-align">政党等寄付金特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">政党などに対する寄付金とは、政治資金規正法に定められた政党や政治資金団体へ、同法が定める政治活動のために支出うお金のこと。</td>
			    </tr>
			<tr>
				<td className="table-size table-align">認定NPO法人等寄付金特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">認定されているNPO法人等のＮＰＯ活動の為に、一定の寄付金を支払った場合に受けられます</td>
			</tr>
			<tr>
				<td className="table-size table-align">公益社団法人等寄付金特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">学校法人や公益社団法人、公益財団法人、社会福祉法人や更生保護法人という公益法人等に、一定の条件をクリアして寄付金を支払った場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">住宅借入金等特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">住宅借入金などをもって住宅の取得や増改築などを行い、その取得年中に当該住宅を住居として利用した場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">住宅耐震改修特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">1981年5月以前に建てられて現在も住居として利用している家屋に、耐震改修をした場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">住宅特定改修特別税額控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">段差をなくすためや省エネの為の増改築改修工事で、定められた条件を満たす場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">認定住宅新築等特別税額控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">認定長期優良住宅の新築または、建築後未入居未使用の認定長期優良住宅の取得、低炭素建築物である家屋の新築または、建築後未入居未使用の低炭素建築物の取得があった場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">中小企業者が新しく機械等を購入、取得したときの所得税額に対する特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">青色申告者である中小企業者が、新品の特定機械装置などを購入、取得し、事業に利用した場合に受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">中小企業者が経営力向上設備等を購入、取得したときの所得税額に対する特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">青色申告者である中小企業者が、新品の経営力向上設備等などを購入、取得し、事業に利用した場合受けられる</td>
			</tr>
			<tr>
				<td className="table-size table-align">試験研究費の総額に係る所得税額の特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">必要経費に認められる試験研究費を所得税額から控除</td>
			</tr>
			<tr>
				<td className="table-size table-align">エネルギー環境負荷低減推進設備等を取得した場合の所得税額の特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">青色申告者で、新品のエネルギー環境負荷低減推進設備などを取得し、事業に利用した場合で、特別償却の適用を受けていないときに適用</td>
			</tr>
			<tr>
				<td className="table-size table-align">雇用者給与等支給額が増加した場合の所得税額の特別控除</td>
				<td className="table-size table-align"></td>
				<td className="table-size table-align">青色申告者で国内の雇用者への給与支給額が規定の額以上増えた場合に金額を控除できるもの</td>
			</tr>
			</table>
			
		     </section>
		</>
	);
}


const finalTaxReturn = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="finalTaxReturn1" spy={true} smooth={true} duration={500} >確定申告とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="finalTaxReturn2" spy={true} smooth={true} duration={500} >控除とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="finalTaxReturn3" spy={true} smooth={true} duration={500} >所得控除とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="finalTaxReturn4" spy={true} smooth={true} duration={500} >税額控除とは</ScrollLink></li>
                    </ul>
                </aside>
                <FinalTaxReturn />
            </aside>
        </main>
    );
}


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜決算コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//決算のコンポーネント
const TheEndOfTheFiscalPeriod = () => {
	return(
		<>
			<section className="font-color">
			<Element name="theEndOfTheFiscalPeriod1" className="element" >
				<h1 className="intro">決算とは</h1>
			</Element>
			<div>企業が1年間の損益を算出し、株主への報告や法人税の金額を確定させることを<span className="underline font-color2">決算</span>と呼びます。</div>
			<br />
			<div>損益計算書と貸借対照表を作成するところまでは個人事業主と共通しますが、株主向けの決算書と、税務署へ提出する決算書では適用する法律が変わるところに注意して下さい。</div>
			<div></div>
		
			<Element name="theEndOfTheFiscalPeriod2" className="element" >
				<h1 className="intro">トライアングル体制とは</h1>
			</Element>
			<div>日本の会計制度は、その目的別に①商法・会社法、②租税法、③金融商品取引法の3つから成り立っています。これを<span className="underline font-color2">トライアングル体制</span>と呼びます。</div>
			<br />
			<table border="1" cellspacing="0"><tr><th className="table-size table-align">法の名称</th><th className="table-size table-align">概要</th></tr><tr><td className="table-size table-align">商法・会社法</td><td className="table-size table-align">Lorem Ipsum</td></tr><tr><td className="table-size table-align">租税法</td><td className="table-size table-align">Lorem Ipsum</td></tr><tr><td className="table-size table-align">金融商品取引法</td><td className="table-size table-align">Lorem Ipsum</td></tr></table>
			<br />
			</section>
		</>
	);
}


const theEndOfTheFiscalPeriod = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="theEndOfTheFiscalPeriod1" spy={true} smooth={true} duration={500} >決算とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="theEndOfTheFiscalPeriod2" spy={true} smooth={true} duration={500} >トライアングル体制とは</ScrollLink></li>
                    </ul>
                </aside>
                <TheEndOfTheFiscalPeriod />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜現金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//現金のコンポーネント
const CashGrade3 = () => {
    return (
        	<>
    			<section className="font-color">
				<Element name="cashGrade3-1" className="element" >
					<h1 className="intro">現金とは</h1>	
				</Element>
	    			<div><span className="underline font-color2">現金</span>とは、100円玉や1000円札など「事業で利用するための」硬貨や紙幣の事です。</div>
	    			<br />
					<div>簿記の3級試験で問われることはないですが、特に実務では「プライベート」の現金と混同してしまわないよう注意して下さい。</div>
	    			<br />
					<div>確定申告や決算は「事業で利用するための」現金が計上対象となります。そのため、ここでいう現金は（事業用）現金のこととなります。</div>
					<div>この区別を明確にしておかないと、後に現金の残高ズレという問題を引き起こすこととなります。</div>
	    			<br />
	    			<div>例えば、現金100円を使ってチョコレートを買ったという支払いは以下のような仕訳となります。</div>
	    			<br />
                    <table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">消耗品費 100</td>
					<td className="table-size table-align">現金 100</td>
				    </tr>
				</table>
                    <br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>現金100円を使ってチョコレートを買った</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：チョコレート100円</div>
					<div>なぜ発生したか（貸方）：現金100円を使ったから</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：一般的にチョコレートは消費するという性質をもち、かつ販売費及び一般管理費として経費処理されることが多い。よって消耗品費として処理。</div>
					<div>なぜ発生したか（貸方）：現金はそのまま現金という勘定科目で処理するので、現金。</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：消耗品費という費用が増加するので借方に消耗品費を計上します。</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を計上します。</div>
	    			</div>
	    			<br />
	    			<div>それでは次に、普通預金口座から現金を10,000円引き出した場合の仕訳を見てみましょう。</div>
                    <br />
                <table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">現金 10,000</td>
					<td className="table-size table-align">普通預金 10,000</td>
				    </tr>
				</table>
				    <br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>普通預金口座から現金を10,000円引き出した</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金10,000円</div>
					<div>なぜ発生したか（貸方）：銀行から10,000円を下ろしたから</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金はそのまま現金という勘定科目で処理するので、現金。</div>
					<div>なぜ発生したか（貸方）：普通預金口座からお金を下ろしたので、普通預金という勘定科目で処理。</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：銀行から現金を下ろしたので現金という資産が増加します。よって借方に現金を配置します。</div>
					<div>なぜ発生したか（貸方）：普通預金という資産が減少するので、貸方に普通預金を計上します。</div>
	    			</div>
{/* // 	    			<div>最後に、試験では問われないですが、実務で間違いが多いプライベート現金の処理を見ていきます。</div>
// 				<table border="1" cellspacing="0" className="journal">
// 				    <caption className="question">個人事業主がプライベートの現金100円で、コーラを買った。</caption>
// 				    <tr>
// 					<th>借方（運用形態）</th>
// 					<th>貸方（調達源泉）</th>
// 				    </tr>
// 				    <tr>
// 					<td>消耗品費（＝コーラ）　100</td>
// 					<td>事業主借　100</td>
// 				    </tr>
// 				</table>

// 				<div>なぜ上のような仕訳になるかというと、そもそも「現金」という勘定科目は「事業で利用するための」現金を表します。確定申告や決算は、事業で発生した収支が記録の対象となりますので、プライベート利用分の現金は明確に分ける必要があります。</div>
// 				<div>もし、プライベートの現金で事業用の支払をしてしまった場合、上記のように事業主勘定科目を使って調整が必要となります。</div> */}
	    		</section>
	    
	    		<section className="font-color">
				<Element name="cashGrade3-2" className="element" >
					<h1 className="intro">通貨代用証券とは</h1>	
				</Element>
	    			<div>会計の世界では、上記の他にも、いつでも通貨に換金できる価値を持つ証券も現金として扱います。</div>
				<div>これを<span className="underline font-color2">通貨代用証券</span>と言います。</div>
	    			<br />
				<div>簿記3級では以下の通貨代用証券が範囲となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size-30 table-align">通貨代用証券の名前</th>
					<th className="table-size-70 table-align">どんなもの？</th>
				    </tr>
				    <tr>
					<td className="table-size-30 table-align">他人振出小切手</td>
					<td className="table-size-70 table-padding-1">他人から受け取った小切手です。銀行に持っていくと現金に換金出来ることから、現金として扱います。</td>
				    </tr>
				    <tr>
					<td className="table-size-30 table-align">送金小切手</td>
					<td className="table-size-70 table-padding-1">銀行が送金手段として振出してくれる小切手です。銀行に持っていくと現金に換金出来ることから、現金として扱います。</td>
				    </tr>
				    <tr>
					<td className="table-size-30 table-align">郵便為替証書</td>
					<td className="table-size-70 table-padding-1">郵便局が送金手段として振出してくれる証書です。郵便局に持っていくと現金に換金出来ることから、現金として扱います。</td>
				    </tr>
				</table>
				<br />
				<div>それでは、例として小切手の回収の仕訳を確認してみましょう。</div>
	    			<div>例えばA社は、B社に対する売掛金10,000円を回収し、同社振出の小切手を受け取ったという場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">現金 10,000</td>
					<td className="table-size table-align">売掛金 10,000</td>
				    </tr>
				</table>
	    			<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>A社は、B社に対する売掛金10,000円を回収し、同社振出の小切手を受け取った</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：10,000円分の小切手</div>
					<div>なぜ発生したか（貸方）：B社に対する売掛金10,000円を小切手の形で回収したから</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：小切手は銀行に持っていくと現金に換金出来ることから、現金として処理。</div>
					<div>なぜ発生したか（貸方）：売掛金というお金を受け取る権利を行使したため、売掛金として処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：小切手という名の通貨代用証券が増加するので、資産の増加になります。よって借方に現金を配置します。</div>
					<div>なぜ発生したか（貸方）：売掛金というお金をあとから受け取る権利がなくなります。資産の減少になりますので、貸方に売掛金を配置します。</div>
	    			</div>
	    		</section>
	    
	    		<section className="font-color">
				<Element name="cashGrade3-3" className="element" >
					<h1 className="intro">小切手とは</h1>	
				</Element>
	    			<div>例えば、誰かにお金をあげたいと考えます。</div>
				<div>一番シンプルな方法は、お金を現金の形で手渡しすることです。</div>
	    			<br />
				<div>では、仮に1,000,000,000,000円を渡すとしたらどうしますか？また、相手が遠隔地にいたらどうしますか？</div>
				<div>手渡しも可能ではあるのですが、わざわざ現地まで大量の現金を抱えて持っていくのはいろいろなリスクが伴います。</div>
	    			<br />
				<div>ここで登場するのが<span className="underline font-color2">小切手</span>です。以下のようなメリットがあります。</div>
				<div>①小切手という紙を発行するだけでお金を渡すことができます</div>
				<div>②お金を渡したい相手が銀行口座を持っていなくても関係ありません</div>
				<div>③その他の文書類と同封して送付出来ます</div>
				<br />
	    		</section>
	    
	    		<section className="font-color">
				<Element name="cashGrade3-4" className="element" >
					<h1 className="intro">小口現金とは</h1>	
				</Element>
	    			<div>一般的に、会社では盗難や紛失、横領等のリスクに対応するため、現金は手元に保管せず、振込や小切手を用いて支払いを行います。</div>
	    			<div>しかしながら、コピー代や交通費など、日常の取引の中には必ず現金で支払いが求められるものがあることから、ある程度の現金は手元に置いておく必要があります。</div> 
	    			<div>こういった日々生じる細かい支払いに備え、予め経理担当者が支払いを担当する者（用度係）に前渡しする少額の現金を<span className="underline font-color2">小口現金</span>と言います。</div>
	    			<br />
	    			<div>さて、小口現金の管理方法は2種類に分かれます。 各部署からの支払報告を受け、用度係に一定の見積もり金額を小口現金として前渡ししておき、その中から日常の支払いを行う仕組みを<span className="underline font-color2">定額資金前渡法（インプレスト・システム）</span>と呼びます。</div>
	    			<div>一方、見積もり等は行わず、手元の現金が少なくなった場合に都度支給を行う方法を<span className="underline font-color2">随時補給法</span>と呼びます。</div>
	    			<br />
	    			<div>資金管理の面から見ると、定額資金前渡法の方が資金繰りしやすいことから、前者の方が管理方法として優れているとされています。</div>
				<br />
	    		</section>
	    
	    		<section className="font-color">
				<Element name="cashGrade3-5" className="element" >
					<h1 className="intro">現金の残高ズレについて</h1>	
				</Element>
	    			<div>帳簿上の現金の残高と、実際の現金の残高が異なってしまう現象を現金の残高ズレと呼びます。</div>
	    			<br />
	    			<div>試験ではあまり意識しないですが、実務では特に重要な論点になります。というのも、現金は取引の履歴が残りにくいので、調査に時間がかかってしまうためです。</div>
				<div>例えば、現金でアイスクリームを購入したことが原因でズレが発生していた場合、アイスクリームを買ったというレシートがなければ原因が判明しません。</div>
	    			<div>一方、銀行口座などでは残高の増減が電子管理されているので、ズレが発生してもすぐに調査を行うことが出来ます。</div>
	    			<br />
	    			<div>なお、簿記の試験ではこのズレを<span className="underline font-color2">現金過不足</span>という勘定科目で処理します。</div>
	    			<div>現金残高の不一致の原因がわからないときに、その原因がわかるまでの間、これを一時的に処理するための未決算勘定科目です。</div>
	    			<div>そのため現金過不足が発生した場合、まずは原因を調査し、判明した場合には正確な内容に振替を行い、判明しなかった場合には雑収入や雑損失で処理することになります。</div>
	    			<br />
	    			<div>例えば、現金の帳簿残高が12,000円、実際の現金の残高が10,000円であった場合、まずは以下の仕訳を組みます。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">現金過不足 2,000</td>
					<td className="table-size table-align">現金 2,000</td>
				    </tr>
				</table>
	    			<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>現金の帳簿残高が10,000円、実際の現金の残高が12,000円であった</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金の2,000円の残高ズレ</div>
					<div>なぜ発生したか（貸方）：現金の帳簿残高が実際の残高と比較すると、2,000円少なかったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：残高ズレ分を一時的に処理するため、現金過不足という未決算勘定科目で処理</div>
					<div>なぜ発生したか（貸方）：現金の残高ズレになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：原因判明までの期間、一時的に処理を行うため借方に現金過不足を計上します。</div>
					<div>なぜ発生したか（貸方）：帳簿残高の現金を2,000円減少させるためには、貸方に現金という資産を計上します。</div>
	    			</div>
	    			<br />
	    			<div>次に、現金過不足の調査の結果、一部の原因が通信費1,500円の計上漏れだったと判明した場合、以下の仕訳を組みます。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">通信費 1,500</td>
					<td className="table-size table-align">現金過不足 1,500</td>
				    </tr>
				</table>
	    			<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>現金過不足の調査の結果、原因が通信費1,500円の計上漏れだったと判明した</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：通信費1,500円</div>
					<div>なぜ発生したか（貸方）：現金の残高ズレが発生したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：通信費の計上漏れであるので、通信費で処理</div>
					<div>なぜ発生したか（貸方）：現金の残高ズレを処理するため、現金過不足で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：通信費という費用が増加するので、借方に通信費を計上します。</div>
					<div>なぜ発生したか（貸方）：すでに借方に計上されていた現金過不足と相殺するため、貸方に現金過不足を計上します。</div>
	    			</div>
	    			<br />
	    			<div>現金過不足の調査の結果、500円分は原因が不明だったとします。</div>
	    			<div>現金化不足は原因が判明するまでの一時的な勘定科目なので、その原因が不明であってもいつまでも帳簿上に残しておくことは出来ません。</div>
				<br />
	    			<div>そこで、決算日においても原因がわからない現金過不足に関しては、雑収入や雑損失に振替えます。</div>
	    			<div>このように期中に一時的に計上した勘定科目に対して、決算時にその整理を行うための仕訳を、<span className="underline font-color2">決算整理仕訳</span>と呼びます。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-size table-align">借方（運用形態）</th>
					<th className="table-size table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-size table-align">雑損失 500</td>
					<td className="table-size table-align">現金過不足 500</td>
				    </tr>
				</table>
	    			<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
	    				<br />
	    				<div>現金過不足の調査の結果、500円分は原因が不明だった</div>
	    				<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：500円の謎の支出</div>
					<div>なぜ発生したか（貸方）：500円の現金過不足の原因が不明であったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：謎の原因がわからなかったので、雑損失で処理</div>
					<div>なぜ発生したか（貸方）：現金の残高ズレが発生していたので、現金過不足で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：雑損失という費用が増加するので、借方に雑損失を計上します。</div>
					<div>なぜ発生したか（貸方）：すでに借方に計上されていた現金過不足と相殺するため、貸方に現金過不足を計上します。</div>
	    			</div>
	    		</section>
        </>
    );
}

const CashGrade2 = () => {
    return (
		<>
		    <section className="font-color">
			<Element name="cashGrade2-1" className="element" >
				<h1 className="intro">株式配当金領収証とは</h1>	
			</Element>
			<div>株式を持っていると、業績に応じて配当金をもらうことが出来ます。</div>
			<div>ただし、この配当金は通貨の形で手元に送られてくるわけではなく、<span className="underline font-color2">株式配当金領収証</span>という紙の形で送られてきて、これを銀行で換金することで通貨と交換出来る性質を持っています。</div>
			<div>株式配当金領収証は常に現金と交換出来る価値を持っている、すなわち通貨代用証券であることから、現金として処理を行います。</div>
		    </section>
	    
	    	    <section className="font-color">
			<Element name="cashGrade2-2" className="element" >
				<h1 className="intro">期限到来済公社債利札とは</h1>	
			</Element>
			<div>公社債を持っていると、期限に応じて利息をもらうことが出来ます。</div>
			<div>ただし、この利息は通貨の形で手元に送られてくるわけではなく、<span className="underline font-color2">利札</span>という証券の形で送られてきて、これを銀行で換金することで通貨と交換出来る性質を持っています。</div>
			<div>期限到来済公社債利札は常に現金と交換出来る価値を持っている、すなわち通貨代用証券であることから、現金として処理を行います。</div>
			<div>逆に、期限未到来公社債利札は銀行に持っていっても現金と交換することが出来ません。そのため、期限未到来公社債利札は受け取っても仕訳はしないことが原則となっています。</div>
		    </section>
        	</>
    );
}

const CashGrade1 = () => {
    return (
        <>
		<section className="font-color">
			<Element name="cashGrade1-1" className="element" >
				<h1 className="intro">その他の通貨代用証券について</h1>	
			</Element>
			<div>簿記１級以上の試験では、様々な通貨代用証券が登場します。</div>
            <br />
		    	<table border="1" cellspacing="0" className="table-color">
			<tr>
			    <th className="table-size-30 table-align">通貨代用証券の名前</th>
			    <th className="table-align">どんなもの？</th>
			</tr>
			<tr>
			    <td className="table-align">預金手形</td>
			    <td className="table-align">預金者に対して銀行が降り出す手形。銀行が支払人となる証券。</td>
			</tr>
			<tr>
			    <td className="table-align">振替貯金払出証書</td>
			    <td className="table-align">郵便振替貯金の払出が出来る証書。</td>
			</tr>
			<tr>
			    <td className="table-align">一覧払手形</td>
			    <td className="table-align">受取人が支払人に呈示した日が満期となる手形。</td>
			</tr>
			<tr>
			    <td className="table-align">国庫金支払通知書</td>
			    <td className="table-align">官公庁から税金の還付がある場合などに発行される支払通知書。</td>
			</tr>
		    	</table>
		</section>
        </>
    );
}

const cashGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
                <div className="level_change_wrapper">
                    <Link to="/cash-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/cash-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/cash-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade3-1" spy={true} smooth={true} duration={500} >現金とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade3-2" spy={true} smooth={true} duration={500} >通貨代用証券とは</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade3-3" spy={true} smooth={true} duration={500} >小切手とは</ScrollLink></li>
	    		<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade3-4" spy={true} smooth={true} duration={500} >小口現金とは</ScrollLink></li>
	    	    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade3-5" spy={true} smooth={true} duration={500} >現金の残高ズレについて</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <CashGrade3 />
            </aside>
        </main>
    );
}

const cashGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
                <div className="level_change_wrapper">
                    <Link to="/cash-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/cash-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/cash-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade2-1" spy={true} smooth={true} duration={500} >株式配当金領収証とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade2-2" spy={true} smooth={true} duration={500} >期限到来済公社債利札とは</ScrollLink></li>
	    	    </ul>
                </aside>
                <CashGrade2 />
            </aside>
        </main>
    );
}

const cashGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
                <div className="level_change_wrapper">
                    <Link to="/cash-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/cash-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/cash-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="cashGrade1-1" spy={true} smooth={true} duration={500} >その他の通貨代用証券について</ScrollLink></li>
	    	    </ul>
                </aside>
                <CashGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜現金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜預金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */
//預金のコンポーネント
const SavingsGrade3 = () => {
    return (
    <>
        <section className="font-color">
		<Element name="savingsGrade3-1" className="element" >
			<h1 className="intro">預金とは</h1>	
		</Element>
		<div>預金は銀行口座に預け入れた現金を処理するための勘定科目です。口座種別ごとに勘定科目が変わります。</div>
		<br />
		<div>原則、1年基準で分類を行い、1年以内に満期が到来する預金は流動資産、1年を超えて満期の到来する預金は固定資産として処理します。</div>
		<br />
		<div>ただし、口座に預け入れた日から満期日まで1年以内かという考え方ではなく、決算日から満期日までが1年以内か否かで判断しますので注意して下さい。</div>
		<br />
        <table border="1" cellspacing="0" className="table-color">
		<tr>
		    <th className="table-size-30 table-align">預金の名前</th>
		    <th className="table-align">どんなもの？</th>
		</tr>
		<tr>
		    <td className="table-align">当座預金</td>
		    <td className="table-align">銀行との当座取引契約に基づいて随時引き出せる無利息の預金</td>
		</tr>
		<tr>
		    <td className="table-align">普通預金</td>
		    <td className="table-align">いつでも預け入れ、払い戻しが可能な預金</td>
		</tr>
		<tr>
		    <td className="table-align">通知預金</td>
		    <td className="table-align">引き出す時に予め数日前頃より通知することが必要な預金</td>
		</tr>
		<tr>
		    <td className="table-align">定期預金</td>
		    <td className="table-align">予め満期日を設定し、満期日までは降ろせない預金</td>
		</tr>
		<tr>
		    <td className="table-align">別段預金</td>
		    <td className="table-align">経過的・一時的に金融機関に預け入れた預金</td>
		</tr>
		</table>
 	</section>
  
	<section className="font-color">
			<Element name="savingsGrade3-2" className="element" >
				<h1 className="intro">普通預金の会計処理</h1>	
			</Element>
			<div>普通預金契約により開設された口座を管理するための勘定科目を、<span className="underline font-color2">普通預金</span>と呼びます。</div>
	    		<div>例えば、現金10,000円を普通預金口座に預け入れた場合、以下の仕訳になります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">普通預金 10,000</td>
					<td className="table-align">現金 10,000</td>
				    </tr>
				</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
	    		<br />
				<div>現金10,000円を普通預金口座に預け入れた</div>
	    		<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：普通預金口座の10,000円の残高増加</div>
				<div>なぜ発生したか（貸方）：現金を預け入れたため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：普通預金口座の残高増加なので、普通預金で処理</div>
				<div>なぜ発生したか（貸方）：現金を預け入れたので、現金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：普通預金という資産が増加しますので、借方に普通預金を計上します。</div>
				<div>なぜ発生したか（貸方）：現金という資産が減少しますので、貸方に現金を計上します。</div>
			</div>
 	</section>

	<section className="font-color">
		<Element name="savingsGrade3-3" className="element" >
			<h1 className="intro">定期預金の会計処理</h1>	
		</Element>
		<div>預け入れはいつでも出来るものの、引き出しは満期時のみ可能な預金口座を定期預金口座と呼び、これを処理する勘定科目を<span className="underline font-color2">定期預金</span>と呼びます。</div>
		<div>例えば、現金10,000円を定期預金口座に預け入れた場合、以下の仕訳になります。</div>
	    <br />
		<table border="1" cellspacing="0" className="table-color">
			    <tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			    </tr>
			    <tr>
				<td className="table-align">定期預金 10,000</td>
				<td className="table-align">現金 10,000</td>
			    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
	    			<br />
				<div>現金10,000円を定期預金口座に預け入れた</div>
	    			<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：定期預金口座の10,000円の残高増加</div>
				<div>なぜ発生したか（貸方）：現金を預け入れたため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：定期預金口座の残高増加なので、定期預金で処理</div>
				<div>なぜ発生したか（貸方）：現金を預け入れたので、現金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：定期預金という資産が増加しますので、借方に定期預金を計上します。</div>
				<div>なぜ発生したか（貸方）：現金という資産が減少しますので、貸方に現金を計上します。</div>
			</div>
 	</section>
       
	<section className="font-color">
		<Element name="savingsGrade3-4" className="element" >
			<h1 className="intro">当座預金の会計処理</h1>	
		</Element>
		<div>預金を引き出す場合に、小切手を用いる口座を当座預金口座と言い、これを処理する勘定科目を<span className="underline font-color2">当座預金</span>と呼びます。</div>
	    	<br />
			<div>例えば、小切手で支払いを行った場合、当座預金の残高が減少することになります。この時、自身が振り出した小切手のことを<span className="underline font-color2">自己振出小切手</span>と呼びます。</div>
	    	<div>したがって、交際費10,000円を小切手を振り出して支払った場合、以下の仕訳になります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">交際費 10,000</td>
					<td className="table-align">当座預金 10,000</td>
				    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
	    			<br />
				<div>交際費10,000円を小切手を振り出して支払った</div>
	    			<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：10,000円の交際費</div>
				<div>なぜ発生したか（貸方）：10,000円の自己振出小切手を振出したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：交際費の支払いになるので、交際費で処理</div>
				<div>なぜ発生したか（貸方）：自己振出小切手の振出しになるので、当座預金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：交際費という費用が増加するので、借方に交際費を配置</div>
				<div>なぜ発生したか（貸方）：当座預金という資産が減少するので、貸方に当座預金を配置</div>
			</div>
			<br />
	    		<div>一方、小切手を受け取った場合には「誰が」振り出した小切手を受け取ったかで処理が分かれます。</div>
	    		<div>まず、自身が振り出した小切手がめぐりめぐって自分のところへ戻ってきた場合には、当座預金が増加したとして処理を行います</div>
	    		<div>例えば、売掛金の回収時に、以前自分が振り出した小切手を10,000円受け取った場合、以下の仕訳になります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">当座預金 10,000</td>
					<td className="table-align">売掛金 10,000</td>
				    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
	    			<br />
	    			<div>売掛金の回収時に、以前自分が振り出した小切手を10,000円受け取った</div>
	    			<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：自己振出小切手10,000円の回収</div>
				<div>なぜ発生したか（貸方）：売掛金を回収したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：自己振出小切手の回収になるので、当座預金で処理</div>
				<div>なぜ発生したか（貸方）：売掛金の回収になるので、売掛金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：小切手を管理する資産口座の残高が増加するので、借方に当座預金を配置します。</div>
				<div>なぜ発生したか（貸方）：売掛金という資産が減少するので、貸方に売掛金を配置します。</div>
			</div>
			<br />
	    		<div>他人が振り出した小切手のことを<span className="underline font-color2">他人振出小切手</span>と呼びます。</div>
	    		<div>他人振出小切手は通貨代用証券になるため、現金の増加で処理を行います。</div>
	    		<div>例えば、売掛金の回収時に、他人が振り出した小切手を10,000円受け取った場合、以下の仕訳になります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">現金 10,000</td>
					<td className="table-align">売掛金 10,000</td>
				    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
	    			<br />
				<div>売掛金の回収時に、他人が振り出した小切手を10,000円受け取った</div>
	    			<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：他人振出小切手10,000円の回収</div>
				<div>なぜ発生したか（貸方）：売掛金を回収したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：他人振出小切手という通貨代用証券の増加になるので、現金で処理</div>
				<div>なぜ発生したか（貸方）：売掛金の回収になるので、売掛金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：通貨代用証券という資産が増加するので、借方に現金を配置します。</div>
				<div>なぜ発生したか（貸方）：売掛金という資産が減少するので、貸方に売掛金を配置します。</div>
			</div>
	    </section>
	    
	    <section className="font-color">
		<Element name="savingsGrade3-5" className="element" >
			<h1 className="intro">当座借越の会計処理</h1>	
		</Element>
		<div>当座預金の残高を超えた支払いが発生した場合に、予め契約を結んでおくことで銀行が借入限度額まで支払いに応じてくれる契約のことを<span className="underline font-color2">当座借越</span>と呼びます。</div>
	    	<br />
		<div>例えば、当座預金残高が10,000円しかなかったものの、15,000円の買掛金の支払いを小切手で行ったとします。</div>
		<div>口座にお金が入っていないので、支払いは出来ないはずですが、予め当座借越契約を結んでおけばオーバーした分は銀行側が支払ってくれるのです。今回は10,000円で設定をしましょう。</div>
		<br />
	    	<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				</tr>
				<tr>
					<td className="table-align" rowspan="2">買掛金 15,000</td>
					<td className="table-align">当座預金 10,000</td>
				</tr>
				<tr>
					<td className="table-align">当座借越 5,000</td>
				</tr>
			</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
	    		<br />
			<div>当座預金残高が10,000円しかなかったものの、15,000円の買掛金の支払いを小切手で行った。ただし、事前に10,000円の当座借越契約を結んでいた</div>
	    		<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：買掛金15,000円の支払い</div>
			<div>なぜ発生したか（貸方）：小切手を振り出し、かつ不足分を銀行からの借り入れで対応した</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：買掛金の支払いになるので、買掛金で処理</div>
			<div>なぜ発生したか（貸方）：残高内は当座預金、オーバー分は銀行への負債になるため、当座借越で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：買掛金という負債の支払いになるので、借方に配置し、負債を減少させます。</div>
			<div>なぜ発生したか（貸方）：当座預金という資産の残高10,000円が減るので、貸方に当座預金を配置します。また、オーバー分を銀行からの負債で対応するので、当座借越という負債を貸方に配置します。</div>
		</div>
		<br />
		<div>最後に、期首日の時点で行う再振替仕訳について言及します。</div>
		<div>当座借越は決算時に銀行への負債として計上しますが、翌期の期首日時点にて、再び当座預金残高へ残高を戻します。</div>
		<div>あくまで当座借越としての管理は決算時のみになるのです。</div>
	    	<br />
		<table border="1" cellspacing="0" className="table-color">
			    <tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			    </tr>
			    <tr>
				<td className="table-align">当座借越 5,000</td>
				<td className="table-align">当座預金 5,000</td>
			    </tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
	    		<br />
			<div>前期末に計上した当座借越を、翌期首に再振替した</div>
	    		<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：当座借越の相殺</div>
			<div>なぜ発生したか（貸方）：当座預金残高のマイナス残高</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：前期計上の当座借越の相殺のための仕訳とることから、当座借越で処理</div>
			<div>なぜ発生したか（貸方）：当座預金のマイナス残高を表すことから、当座預金で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：当座借越という負債が減少するので、借方に当座借越を配置</div>
			<div>なぜ発生したか（貸方）：当座預金という資産が減少するので、貸方に当座預金を配置</div>
		</div>
	    </section>
    	</>
    );
}

const SavingsGrade2 = () => {
    return (
    <>
        <Title title="Lorem Ipusum"/>
        <section>
            <article>
            	Lorem Ipusum
            </article>
        </section>
    </>
    );
}

const SavingsGrade1= () => {
    return (
    <>
        <Title title="Lorem Ipusum"/>
        <section>
            <article>
            	Lorem Ipusum
            </article>
        </section>
    </>
    );
}

const savingsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/savings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/savings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/savings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="savingsGrade3-1" spy={true} smooth={true} duration={500} >預金とは</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="savingsGrade3-2" spy={true} smooth={true} duration={500} >普通預金の会計処理</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="savingsGrade3-3" spy={true} smooth={true} duration={500} >定期預金の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="savingsGrade3-4" spy={true} smooth={true} duration={500} >当座預金の会計処理</ScrollLink></li>
                    	<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="savingsGrade3-5" spy={true} smooth={true} duration={500} >当座借越の会計処理</ScrollLink></li>	    	    
	    	    </ul>
            </aside>
            <SavingsGrade3 />
            </aside>
        </main>
    );
}

const savingsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/savings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/savings-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/savings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <SavingsGrade2 />
            </aside>
        </main>
    );
}

const savingsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/savings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/savings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/savings-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <SavingsGrade1 />
            </aside>
        </main>
    );
}
/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜預金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜商品売買コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */
//商品売買のコンポーネント
const TradingsGrade3 = () => {
    return (
        <>
			<section className="font-color">
				<Element name="tradings-grade3-1" className="element" >
					<h1 className="intro">三分法とは</h1>	
				</Element>

				<div>商品売買が発生した際、仕入、売上、繰越商品の3つの勘定科目を用いて記帳する方法を<span className="underline font-color2">三分法</span>と呼びます。</div>
				<br />
				<div>記帳が簡単なため、スーパーなど大量の商品の仕入や売上を管理する必要がある事業では、この記帳方法が一般的です。</div>
				<div>ただし、決算整理をしないといくらで商品を仕入れたのかという原価が把握出来ないため、利益の把握がしにくいというデメリットがあります。</div>
				<br />
				<div>もう1つの商品売買の記帳方法に分記法がありますが、試験において重要性が高いのは三分法で、特別な指示がない限り三分法による記帳が前提となります。</div>
	    		<br />
				<div>なお、仕入の際にかかった運賃などの費用を<span className="underline font-color2">仕入諸掛り</span>と呼び、一般的には仕入に含めて計上を行います。</div>
				<div>一方、売上が上がり商品を発送することになった際の費用を<span className="underline font-color2">売上諸掛り</span>と呼びますが、こちらは<span className="underline font-color2">発送費</span>という費用勘定科目で処理を行います。</div>
	    		<br />
				<div>例えば販売用の商品を10,000円仕入れ、代金は現金で払った。ただし、運賃が別途200円発生したという場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
						    <tr>
							<th className="table-align">借方（運用形態）</th>
							<th className="table-align">貸方（調達源泉）</th>
						    </tr>
						    <tr>
							<td className="table-align">仕入 10,200</td>
							<td className="table-align">現金 10,200</td>
						    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>販売用の商品を10,000円仕入れ、代金は現金で払った。ただし、運賃が別途200円発生した</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：仕入10,000円の支払いおよび、運賃200円の支払い</div>
					<div>なぜ発生したか（貸方）：現金10,200円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：仕入の支払いになるので、支払で処理。また運賃は仕入諸掛りになるため、仕入に含めて処理。</div>
					<div>なぜ発生したか（貸方）：現金で支払ったので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：仕入という費用が増加するので、借方に仕入を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>一方、商品を販売している側は売上があがります。例えば商品10,000円を販売したため売上が上がり、代金は現金で受け取った。ただし、運賃が200円発生したため、現金で支払った。という場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金 9,800</td>
						<td className="table-align">売上 10,000</td>
					</tr>
	    				<tr>
						<td className="table-align">発送費 200</td>
						<td className="table-align"></td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>商品10,000円を販売したため売上が上がり、代金は現金で受け取った。ただし、運賃が200円発生した。</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金10,000円の増加と発送費200円の発生</div>
					<div>なぜ発生したか（貸方）：売上が10,000円分上がったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の増加になるため、現金で処理、一方運賃に関しては、運送費用になるので発送費で処理</div>
					<div>なぜ発生したか（貸方）：売上の増加になるため、売上で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産の増加になるため、借方に現金を配置。一方、発送費用については費用の増加になるので借方に発送費を配置</div>
					<div>なぜ発生したか（貸方）：売上という収益の増加になるため、貸方に売上を配置</div>
				</div>
			</section>
			
	    		<section className="font-color">
				<Element name="tradings-grade3-2" className="element" >
					<h1 className="intro">発生主義とは</h1>	
				</Element>
				<div>請求書を4月に発行し、入金が5月に発生した場合、売上は4月に計上すべきでしょうか？ それとも5月に計上すべきでしょうか？</div>
				<br />
				<div>実際に現金が動いた日付で収支を計上することを<span className="underline font-color2">現金主義</span>と言います。</div>
				<div>この考え方に基づく会計処理を方針とする場合、売上の計上日は5月になります。</div>
				<br />
				<div>しかしながら、実際の現金残高の増減のみを記録していては、今後いくらお金を受け取れるのか、いくら支払いがあるのかなどの予定等がわからず、資金繰りが出来ません。</div>
				<br />
				<div>そこで、会計では原則、お金を受け取る権利（債権）が発生した日付や、お金を支払う義務（債務）が発生した日付で収支を計上します。これを<span className="underline font-color2">発生主義</span>と呼びます。</div>
				<div>この考え方に基づく会計処理を方針とするならば、売上の計上日は4月になります。</div>
			</section>

			<section className="font-color">
				<Element name="tradings-grade3-3" className="element" >
					<h1 className="intro">掛取引とは</h1>	
				</Element>
				<div>取引の代金をその場で精算せず、後日精算する取引のことを<span className="underline font-color2">掛取引</span>といいます。</div>
				<br />
				<div>例えば、請求書を4月に発行し、入金が5月になるというケースでは、本来、4月の請求書発行のタイミングで入金も同時に行われるはずです。</div>
				<div>しかしながら、商取引が発達していくにつれ、信用を媒介に取引を行うという慣行が出来ました。そのため、現行の商取引では入金のタイミングを遅らせることが出来ます。</div>
				<br />
				<div>今では当たり前になっているこのような慣行も、物々交換の時代にはあまり考えられない取引でした。</div>
				<div>このような商慣行の発達に対応すべく、複式簿記が誕生していきます。</div>
				<br />
				<div>なお、仕入を行ったものの後払いにした場合、「あとでお金を払わなければいけない」という債務が生じます。これを<span className="underline font-color2">買掛金</span>といいます。 </div>
				<br />
				<div>一方、売上が上がったものの、お金の回収が後になった場合、「あとでお金を受けとることが出来る」という債権が生じます。これを<span className="underline font-color2">売掛金</span>と言います。</div>
				<br />
	    			<div>例えば販売用の商品を10,000円仕入れ、代金は掛けとした場合、以下の仕訳となります。</div>
	    			<br />
				<table border="1" cellspacing="0" className="table-color">
						    <tr>
							<th className="table-align">借方（運用形態）</th>
							<th className="table-align">貸方（調達源泉）</th>
						    </tr>
						    <tr>
							<td className="table-align">仕入 10,000</td>
							<td className="table-align">買掛金 10,000</td>
						    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>販売用の商品を10,000円仕入れ、代金は掛けとした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：仕入10,000円の支払い</div>
					<div>なぜ発生したか（貸方）：あとで10,000円を支払わなければならないという義務</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：仕入の支払いになるので、支払で処理</div>
					<div>なぜ発生したか（貸方）：掛けでの支払いとしたので、買掛金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：仕入という費用が増加するので、借方に仕入を配置</div>
					<div>なぜ発生したか（貸方）：買掛金という負債が増加するので、貸方に買掛金を配置</div>
				</div>
				<br />
	    			<div>なお、買掛金は借金のようなものになるので、後日お金を支払わなければなりません。さきほどの例にて現金で支払いをした場合、以下の仕訳になります。</div>
	    			<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">買掛金 10,000</td>
						<td className="table-align">現金 10,000</td>
					</tr>
				</table>
				<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>買掛金10,000円を現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：あとでお金を支払わなければならないという義務（買掛金）10,000円の支払い</div>
					<div>なぜ発生したか（貸方）：現金10,000円で支払ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：買掛金の支払いになるので、買掛金で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：買掛金という負債が減少するので、借方に買掛金を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
	    			<br />
	    			<div>続いて、掛けで商品を販売した場合の仕訳を見ていきましょう。商品10,000円を販売したため売上が上がり、代金は掛けとした場合、以下の仕訳となります。</div>
	    			<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">売掛金 10,000</td>
						<td className="table-align">売上 10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>商品10,000円を販売したため売上が上がり、代金は掛けとした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：あとで10,000円分受け取れる権利</div>
					<div>なぜ発生したか（貸方）：10,000円の売上が上がったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：商品売買による債権が発生したので、売掛金で処理</div>
					<div>なぜ発生したか（貸方）：商品売買による売上が発生したので、売上で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：売掛金という資産が増加するので、借方に売掛金を配置</div>
					<div>なぜ発生したか（貸方）：売上という収益が増加するので、貸方に売上を配置</div>
				</div>
				<br />
	    			<div>なお、売掛金はあとでお金をうけとれる権利になるので、後日権利を使ってお金を受け取ることが出来ます。さきほどの例にて現金でお金を受け取った場合、以下の仕訳になります。</div>
	    			<br />
				<table border="1" cellspacing="0" className="table-color">
						    <tr>
							<th className="table-align">借方（運用形態）</th>
							<th className="table-align">貸方（調達源泉）</th>
						    </tr>
						    <tr>
							<td className="table-align">現金 10,000</td>
							<td className="table-align">売掛金 10,000</td>
						    </tr>
				</table>
				<br />
	    			<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>売掛金10,000円を現金で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金10,000円の受取り</div>
					<div>なぜ発生したか（貸方）：10,000円分のお金をうけとれる権利を行使したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の受取りになるので、現金で処理</div>
					<div>なぜ発生したか（貸方）：お金をうけとれる権利の行使になすので、売掛金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：売掛金という資産が減少するので、貸方に売掛金を配置</div>
				</div>
	    		</section>
	    
	    		<section className="font-color">
				<Element name="tradings-grade3-4" className="element" >
					<h1 className="intro">混同しやすい債権・債務</h1>
	    				<div>それでは、次に売掛金・買掛金と混同しやすい勘定科目を見ていきます。</div>
                		<br />
						<div>先ほど、売掛金はあとでお金を受取れる権利（債権）、買掛金はあとでお金を支払わなければならない義務（債務）と紹介しましたが、正確には「主たる営業活動で生じた債権かどうか」によって、以下のような区別があります。</div>
					<br />
					<table border="1" cellspacing="0" className="table-color">
						<tr>
							<th className="table-align">混同しやすい債権</th>
							<th className="table-align">債権の概要</th>
						</tr>
						<tr>
							<td className="table-align">売掛金</td>
							<td className="table-align">取引先との間の通常の営業取引によって生じた未収金</td>
						</tr>
	    					<tr>
							<td className="table-align">未収入金</td>
							<td className="table-align">通常の営業取引以外の取引によって生じた未収金</td>
						</tr>
					</table>
					<br />
	    				<table border="1" cellspacing="0" className="table-color">
						<tr>
							<th className="table-align">混同しやすい債務</th>
							<th className="table-align">債務の概要</th>
						</tr>
						<tr>
							<td className="table-align">買掛金</td>
							<td className="table-align">取引先との間の通常の営業取引によって生じた未払金</td>
						</tr>
	    					<tr>
							<td className="table-align">未払金</td>
							<td className="table-align">通常の営業取引以外の取引によって生じた未払金</td>
						</tr>
					</table>
					<br />
	    				<div>例えば、販売業を営んでいる事業者が掛で売上を上げた場合、売掛金という債権が発生します。</div>
	    				<div>しかしながら、例えば不要になったコピー機を100,000円で売りに出し、後払いで決済が発生した場合、メインとしている事業からの売上とは異なるため、売掛金ではなく未収入金として処理を行います。</div>
						<br />
					<table border="1" cellspacing="0" className="table-color">
						    <tr>
							<th className="table-align">借方（運用形態）</th>
							<th className="table-align">貸方（調達源泉）</th>
						    </tr>
						    <tr>
							<td className="table-align">未収入金 100,000</td>
							<td className="table-align">工具器具備品 100,000</td>
						    </tr>
					</table>
					<br />
					<div className="explanation-wrapper">
						<div>■　仕訳の手順　■</div>
						<br />
						<div>不要になったコピー機を100,000円で売りに出し、後払いで決済が発生した</div>
						<br />
						<div>①因果分析</div>
						<div>最終的に発生したもの（借方）：あとで100,000円分受け取れる権利</div>
						<div>なぜ発生したか（貸方）：100,000円のコピー機を販売したため</div>
						<br />
						<div>②勘定科目の割当</div>
						<div>最終的に発生したもの（借方）：メイン以外の事業による債権が発生したので、未収入金で処理</div>
						<div>なぜ発生したか（貸方）：コピー機の販売になるため、工具器具備品で処理</div>
						<br />
						<div>③勘定科目の配置</div>
						<div>最終的に発生したもの（借方）：未収入金という資産が増加するので、借方に未収入金を配置</div>
						<div>なぜ発生したか（貸方）：工具器具備品という資産が減少するので、貸方に工具器具備品を配置</div>
					</div>
	    			</Element>
			</section>
	    
	    		<section className="font-color">
				<Element name="tradings-grade3-5" className="element" >
					<h1 className="intro">分記法とは</h1>	
				</Element>
				<div>本論点は2021年より簿記3級の範囲外となりました。</div>
	    			<div>しかしながら、概要だけは把握しておくと売上原価対立法など、簿記2級以降の商品売買の仕訳の理解を助けてくれるので、紹介します。</div>
	    			<br />
				<div>商品売買が発生した際、商品、商品売買益の勘定科目を用いて記帳する方法を <span className="underline font-color2">分記法</span>と呼びます。</div>
				<br />
				<div>原価部分を商品、販売時の利益と原価部分との差額を商品売買益として処理するので、都度原価の算出が必要となり手間がかかる分、利益の把握が容易な記帳方法です。</div>
				<br />
				<div>不動産の販売事業など、少量かつ高額な商品の仕入や売上を管理する必要がある事業で用いられることがあります。</div>
	    			<br />
				<div>例えば販売用の商品を10,000円仕入れ、代金は現金で払ったとした場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
						    <tr>
							<th className="table-align">借方（運用形態）</th>
							<th className="table-align">貸方（調達源泉）</th>
						    </tr>
						    <tr>
							<td className="table-align">商品 10,000</td>
							<td className="table-align">現金 10,000</td>
						    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>販売用の商品を10,000円仕入れ、代金は現金で払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：商品10,000円の支払い</div>
					<div>なぜ発生したか（貸方）：現金10,000円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：商品の購入の支払いになるので、商品で処理</div>
					<div>なぜ発生したか（貸方）：現金で支払ったので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：商品という資産が増加するので、借方に商品を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>一方、商品を販売している側は売上があがります。例えば10,000円で仕入れた商品を15,000円で販売し、代金は現金で受け取ったという場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align" rowspan="2">現金 15,000</td>
						<td className="table-align">商品 10,000</td>
					</tr>
					<tr>
						<td className="table-align">商品売買益 5,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>10,000円で仕入れた商品を15,000円で販売し、代金は現金で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金15,000円の増加</div>
					<div>なぜ発生したか（貸方）：商品10,000円分を販売したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の増加になるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：商品という資産の減少になるので、商品で処理。また、仕入分と販売時の差額は収益になるので、商品売買益で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産の増加になるため、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：商品という資産が減少するので、貸方に商品を商品を配置。また、商品売買益という収益が増加するので、貸方に商品売買益を配置</div>
				</div>
			</section>
        </>
    );
}

const TradingsGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const TradingsGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const tradingsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
            </div>
			<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="tradings-grade3-1" spy={true} smooth={true} duration={500} >三分法とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="tradings-grade3-2" spy={true} smooth={true} duration={500} >発生主義とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="tradings-grade3-3" spy={true} smooth={true} duration={500} >掛取引とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="tradings-grade3-4" spy={true} smooth={true} duration={500} >混同しやすい債権・債務</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="tradings-grade3-5" spy={true} smooth={true} duration={500} >分記法とは</ScrollLink></li>	    	    
	    	    </ul>
            </aside>
            <TradingsGrade3 />
            </aside>
        </main>
    );
}

const tradingsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/tradings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/tradings-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <TradingsGrade2 />
            </aside>
        </main>
    );
}

const tradingsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/tradings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/tradings-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <TradingsGrade1 />
            </aside>
        </main>
    );
}
/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜商品売買コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜手形コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//手形のコンポーネント
const PromissoryNotesGrade3 = () => {
    return (
        <>
		<section className="font-color">
			<Element name="promissory-notes-grade3-1" className="element" >
				<h1 className="intro">手形とは</h1>	
			</Element>
	    	<div><span className="underline font-color2">手形</span>とは、記載された金額を記載された期日までに支払うことを約束した書類です。</div>
			<br />
			<div>誰か発行したか（振出）、受け取るのは誰か、いくらの金額をやり取りするか、いつまでに支払うかなどの情報が書いてあり、商品売買の代金のやり取りで用いられます。</div>
			<br />
			<div>法律上、約束手形と為替手形に分類されますが、簿記3級では約束手形が範囲とされています。</div>
	    	<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">法律上の手形の名前</th>
					<th className="table-align">手形の概要</th>
				</tr>
				<tr>
					<td className="table-align">約束手形</td>
					<td className="table-padding-1">一定の日に一定の場所で一定の金額を支払うために取り交わされる証書のこと。手形を振出す人と受取る人の2名が登場する手形。</td>
				</tr>
				<tr>
					<td className="table-align">為替手形</td>
					<td className="table-padding-1">手形を振出す人と、手形に書かれている金額を支払う人、受取る人の3名が登場する手形。取引先の異なる売掛金と買掛金を同時に相殺するために用いる。</td>
				</tr>
			</table>
			<br />
	    		<div>一方、手形には、簿記上の分類もあります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">会計上の手形の名前</th>
					<th className="table-align">手形の概要</th>
				</tr>
				<tr>
					<td className="table-align">受取手形</td>
					<td className="table-padding-1">手形に書かれている金額をもらうことができる権利のこと。換金すればお金がもらえるので資産。</td>
				</tr>
				<tr>
					<td className="table-align">支払手形</td>
					<td className="table-padding-1">手形に書かれている金額を支払わなければならない義務のこと。お金を支払わなければならないので負債。</td>
				</tr>
			</table>
			<br />
		</section>
	    
	    	<section className="font-color">
			<Element name="promissory-notes-grade3-2" className="element" >
				<h1 className="intro">約束手形の会計処理</h1>	
			</Element>
	    	<div>指定された日付に、指定した金額を支払うことを約束した証書のことを<span className="underline font-color2">約束手形</span>と呼びます。</div>
			<br />
			<div>例えば販売用の商品を10,000円仕入れ、代金は約束手形を振り出して渡したという場合、以下の仕訳となります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">仕入 10,000</td>
						<td className="table-align">支払手形 10,000</td>
					    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>販売用の商品を10,000円仕入れ、代金は約束手形を振り出して渡した</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：販売用商品10,000円の支払い</div>
				<div>なぜ発生したか（貸方）：手形の振り出しにより支払った</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：販売用商品の支払いになるので、仕入で処理</div>
				<div>なぜ発生したか（貸方）：手形の振り出しにより支払ったので、支払手形で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：仕入という費用が増加するので、借方に仕入を配置</div>
				<div>なぜ発生したか（貸方）：支払手形という負債が増加するので、貸方に支払手形を配置</div>
			</div>
			<br />
	    	<div>一方、商品10,000円を販売し、代金を約束手形で受取ったという場合、以下の仕訳となります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
				</tr>
				<tr>
				<td className="table-align">受取手形 10,000</td>
				<td className="table-align">売上 10,000</td>
				</tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>商品10,000円を販売し、代金を約束手形で受取った</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：10,000円分の約束手形</div>
				<div>なぜ発生したか（貸方）：商品10,000円分を販売し、売上が上がったため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：約束手形の受取になるので、受取手形で処理</div>
				<div>なぜ発生したか（貸方）：販売による10,000円の売上の発生になるので、売上で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：受取手形という資産が増加するため、借方に受取手形を配置</div>
				<div>なぜ発生したか（貸方）：売上という収益が増加するため、貸方に売上を配置</div>
			</div>
		</section>
	    
	    	<section className="font-color">
			<Element name="promissory-notes-grade3-3" className="element" >
				<h1 className="intro">電子記録債権・電子記録債務の会計処理</h1>	
			</Element>
			<div>電子債権記録機関に必要事項を電子記録することで発生する債権、債務を<span className="underline font-color2">電子記録債権</span>または<span className="underline font-color2">電子記録債務</span>といいます。</div>
			<br />
	    		<div>電子記録債権（または債務）は手形の代替手段として機能することが想定されているため、会計処理は手形のルールに準じて処理することとなっています。</div>
			<br />
	    		<div>このような債権が存在するメリットとして、例えば手形は紛失や盗難の危険があるのに対し、電子記録債権（または債務）は電子データになるため、物理的な紛失や盗難のリスクを抑えるこが出来るという点があります。</div>
			<br />
			<div>他にも、手形は印紙税がかかるのに対し、電子記録債権（または債務）であれば印紙の貼付が不要のため、印紙税を節約することが出来るといった点もポイントになります。</div>
			<br />
			<div>それでは仕訳を見ていきましょう。</div>
	    		<div>10,000円の売掛金の回収のため、取引銀行を通じ、債権の発生記録の請求を行い、得意先の承諾を得て、電子記録に係る債権が生じたという場合、以下の仕訳となります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">電子記録債権 10,000</td>
						<td className="table-align">売掛金 10,000</td>
					    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>10,000円の売掛金の回収のため、取引銀行を通じ、債権の発生記録の請求を行い、得意先の承諾を得て、電子記録に係る債権が生じた</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：10,000円分の電子記録された債権</div>
				<div>なぜ発生したか（貸方）：売掛金が10,000円分発生していたため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：電子記録に係る債権になるため、電子記録債権で処理</div>
				<div>なぜ発生したか（貸方）：事前に存在していた売掛金の振替になるため、売掛金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：電子記録債権という資産が増加するため、借方に電子記録債権を配置</div>
				<div>なぜ発生したか（貸方）：売掛金という資産が減少するため、貸方に売掛金を配置</div>
			</div>
	    	</section>
	    	
	    	<section className="font-color">
			<Element name="promissory-notes-grade3-4" className="element" >
				<h1 className="intro">手形借入金・手形貸付金とは</h1>	
			</Element>
			<div>お金の貸し借りに用いる手形のことを、<span className="underline font-color2">金融手形</span>と呼び、通常の商取引と区別して処理が必要となります。</div>
			<br />
			<div>約束手形を振り出して借金を行ったという場合<span className="underline font-color2">手形借入金</span>、約束手形を振り出してお金を貸した場合<span className="underline font-color2">手形貸付金</span>という勘定科目にて処理を行います。</div>
			<br />
			<div>例えば、約束手形を振り出して200,000円の借金を行い、現金を得たという場合、以下の仕訳となります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
				</tr>
				<tr>
				<td className="table-align">現金 200,000</td>
				<td className="table-align">手形借入金 200,000</td>
				</tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>約束手形を振り出して200,000円の借金を行い、現金を得た</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：200,000円の現金</div>
				<div>なぜ発生したか（貸方）：借用証書の代わりに約束手形を振り出したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：現金の獲得になるため、現金で処理/div>
				<div>なぜ発生したか（貸方）：約束手形の振り出しになるため、手形借入金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：現金という資産が増加するため、借方に現金を配置</div>
				<div>なぜ発生したか（貸方）：手形借入金という負債が増加するため、貸方に手形借入金を配置</div>
			</div>
	    		<br />
			<div>続いて、約束手形を振り出して200,000円の現金融資を行ったという場合、以下の仕訳となります。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
				</tr>
				<tr>
				<td className="table-align">手形貸付金 200,000</td>
				<td className="table-align">現金 200,000</td>
				</tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>約束手形を振り出して200,000円の現金融資を行った</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：借用証書の代わりに振り出した約束手形</div>
				<div>なぜ発生したか（貸方）：現金を支払ったため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：約束手形の振り出しによる融資となるため、手形貸付金で処理/div>
				<div>なぜ発生したか（貸方）：現金での支払いとなるため、現金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：手形貸付金という資産が増加するため、借方に手形貸付金を配置</div>
				<div>なぜ発生したか（貸方）：現金という資産が減少するため、貸方に現金を配置</div>
			</div>
	    	</section>
        </>
    );
}

const PromissoryNotesGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
		<section>
		    <article>
		    <div>電子債権記録機関に必要事項を電子記録することで発生する債権を電子記録債権といいます。</div>
		    <div>手形は紛失や盗難の危険があるのに対し、電子記録債権は電子データになるため、物理的な紛失や盗難のリスクを抑えることができます。</div>
		    <div>また、手形は印紙税がかかるのに対し、電子記録債権であれば印紙の貼付が不要のため、印紙税を節約することが出来ます。</div>

		    <table border="1" cellspacing="0" className="journal">
			<caption className="question">得意先に対する売掛金￥1,000について、電子記録債権の発生記録が行われた。</caption>
			<tr>
			    <th>借方（運用形態）</th>
			    <th>貸方（調達源泉）</th>
			</tr>
			<tr>
			    <td>電子記録債権 1,000</td>
			    <td>売掛金 1,000</td>
			</tr>
		    </table>
		    <div>電子記録債権は、債権者または債務者が電子債権記録機関に発生記録の請求を行い、同機関がその記録を行うことによって発生します。債権者は電子記録債権、債務者は電子記録債務で処理します。</div>
		    <div>売掛金が電子記録債権になったので、これを売掛金勘定から電子記録債権勘定へ振り替えます。</div>

			<table border="1" cellspacing="0" className="journal">
			<caption className="question">電子記録債権￥1,000について、支払期日が到来し、当座預金口座に振り込まれた。</caption>
			<tr>
			    <th>借方（運用形態）</th>
			    <th>貸方（調達源泉）</th>
			</tr>
			<tr>
			    <td>当座預金　1,000</td>
			    <td>電子記録債権　1,000</td>
			</tr>
		    </table>
			<div>債務者が債権者に支払いを行い、電子債権記録機関がその記録を行うことによって、電子記録債権（債務）は消滅します。</div>
		    </article>
        	</section>
	    
	    <Title title="手形借入金・手形貸付金とは"/>
        <section>
            <article>
            <div>お金を貸し借りした場合、一般的にはその証拠として借用証書というものを受け渡ししますが、借用証書の代わりに約束手形をやり取りする場合があります。</div>
            <div>借用証書の代わりに約束手形を振り出してお金を貸し借りすることを手形借入れもしくは手形貸付けといいます。</div>
	    <div>お金を借りる側は手形借入金勘定（負債）、お金を貸す側は手形貸付金勘定（資産）で処理します。</div>
	　　 <div>手形借入金勘定は将来手形のお金を支払わなければならないという義務なので負債となります。また、手形貸付金勘定は将来手形のお金を受け取れるという権利なので資産となります。</div>
	
	    <table border="1" cellspacing="0" className="journal">
                <caption className="question">商品￥1,000をクレジット払いの条件で販売した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>クレジット売掛金　1,000</td>
                    <td>売上高　1,000</td>
                </tr>
            </table>
            </article>
        </section>

            <Title title="為替手形の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>

            <table border="1" cellspacing="0" className="journal">
                <caption className="question">A社は仕入先B社に対して、10,000円を仕入れ、代金は得意先C社宛ての為替手形を振出し、C社の引き受けを得て、B社に渡した。</caption>
                <caption className="question">A社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>仕入高　10,000</td>
                    <td>売掛金　10,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" className="journal">
                <caption className="question">B社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>買掛金　10,000</td>
                    <td>支払手形　10,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" className="journal">
                <caption className="question">C社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>受取手形　10,000</td>
                    <td>売上高　10,000</td>
                </tr>
            </table>
            </article>
        </section>

        <Title title="手形の裏書とは"/>
        <section>
            <article>
            <div>約束手形にせよ為替手形にせよ、受け取った手形は、期日まで待って支払人からお金をもらうこともできますが、期日前に仕入代金の支払いに用いることも出来ます。これを手形の裏書といいます。手形の所持人は、手形の裏面に署名などをすることによって第三者に譲渡することができます</div>
            <div>手形を裏書譲渡する側を裏書人（または譲渡人）、譲渡される側を被裏書人（または譲受人）といいます。</div>
	    
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">A社はB社から商品￥100を仕入れ、代金として所有している手形を裏書譲渡した。</caption>
                <caption className="question">A社（裏書人）の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>仕入高　100</td>
                    <td>受取手形　100</td>
                </tr>
            </table>
	<div>受取手形勘定は手形代金を受け取ることができる権利を表します。手形の裏書譲渡によってこの権利が第三者に渡るので、その金額に相当する受取手形勘定を減額します。</div>
		
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">B社（被裏書人）の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>受取手形　100</td>
                    <td>売上高　100</td>
                </tr>
            </table>
	<div>B社は手形代金を受け取ることができる権利を取得したわけですから、この権利を受取手形勘定の増加として処理します。</div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">B社が裏書譲渡によって受け取った手形が、以前にB社自身が振り出した手形（自己振出手形）であったことが判明した</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>支払手形　100</td>
                    <td>売上高　100</td>
                </tr>
            </table>
		<div>B社が裏書譲渡によって受け取った手形が、以前にB社自身が振り出した手形（自己振出手形）である場合には、受取手形勘定の増加ではなく支払手形勘定の減少として処理します。</div>
		<div>以前、手形を振り出したときに「支払手形」の増加として処理していたものが戻ってくることにより手形代金を支払う義務が無くなるため、振り出したときとは逆に「支払手形」を減少させるわけです。</div>
		</article>
        </section>

        <Title title="手形の割引とは"/>
        <section>
	    <article>
	    <div>受け取った手形は、銀行に持っていって、現金に換えてもらうことも出来ます。これを手形の割引と言います。通常、約束手形は満期日が到来しないとその代金を受け取ることができません。</div>
	    <div>しかし所有している手形を銀行にもっていくと、満期日前であっても一定の手数料（割引料）を支払うことで、その手形を買い取ってもらうことができます。これを手形の割引（わりびき）といいます。</div>
	    <div>このとき発生する手数料は手形売却損勘定（営業外費用）で処理します</div>
		
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">額面￥300の手形を取引銀行で割り引き、割引料￥10が差し引かれた残金を当座預金とした。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>当座預金　290</td>
	    <td>受取手形　300</td>
	</tr>
	<tr>
	    <td>手形売却損　100</td>
	    <td></td>
	</tr>
    	</table>
	<div>買い取った手形の代金を銀行が振出人から受け取るのは満期日です。つまり、手形の割引日から満期日までの間、実質的には銀行からお金を借りているのと同じことになります。そこで、これに対する利息や手数料を割引料という形で前もって支払います。</div>
	<div>なお、この割引料は手形売却損勘定（営業外費用）で処理します。</div>
	<div>当社が保有している手形は受取手形勘定（資産）で処理しているので、割引によって減少したときはその額面金額を貸方に記入します。</div>
	</article>
        </section>
	
	<Title title="手形の更改とは"/>
        <section>
	    <article>
	    <div>手形の更改（こうかい）とは、手形の支払人が手形の満期日に資金がないなどの理由のため、手形所持人の承諾を得て、支払期日延長の目的で従来の手形を書き替えることをいいます。</div>
	    <div>手形の更改に際しては旧手形（従来の支払期日の手形）と新手形（新しい支払期日の手形）を交換するので、①旧手形の減少、②新手形の増加、③利息の支払い（受け取り）という３つのことを意識して仕訳を考えてください。</div>
	    <div></div>
		
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">振り出した約束手形￥100,000が本日満期となったが、資金不足のため相手方の承諾を得て、1か月後支払いの新手形に書き替えた。なお、新手形の期日までの利息￥1,000は現金で支払った。</caption>
	<caption className="question">当社（手形の支払人）の仕訳</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>支払手形　100,000</td>
	    <td>支払手形　100,000</td>
	</tr>
	<tr>
	    <td>支払利息　1,000</td>
	    <td>現金　1,000</td>
	</tr>
    	</table>
	<div>借方の「支払手形」は旧手形（の減少）を意味しており、貸方の「支払手形」は新手形（の増加）を意味しています。借方の「支払手形」と貸方の「支払手形」は意味が異なるものなので、相殺せずに必ず両建表示するようにしてください。</div>
	<div>なお、利息の処理方法は現金などで支払う（受取る）方法のほかに、新手形の額面金額に含める方法があります。この場合の仕訳は次のようになります。</div>
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">利息を新手形の額面金額に含める方法</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>支払手形　100,000</td>
	    <td>支払手形　101,000</td>
	</tr>
	<tr>
	    <td>支払利息　1,000</td>
	    <td></td>
	</tr>
    	</table>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">相手方（手形の受取人）の仕訳</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>受取手形　101,000</td>
	    <td>受取手形　100,000</td>
	</tr>
	<tr>
	    <td>現金　1,000</td>
	    <td>受取利息　100</td>
	</tr>
    	</table>
	
	<div>借方の「受取手形」は新手形（の増加）を、貸方の「受取手形」は旧手形（の減少）を意味しています。借方の「受取手形」と貸方の「受取手形」は意味が異なるものなので、相殺せずに必ず両建表示するようにしてください。</div>
	<div>なお、利息を新手形の額面金額に含める場合の仕訳は次のようになります。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">利息を新手形の額面金額に含める場合</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>受取手形　101,000</td>
	    <td>受取手形　100,000</td>
	</tr>
	<tr>
	    <td></td>
	    <td>受取利息　1,000</td>
	</tr>
    	</table>
	</article>
        </section>

        <Title title="手形の不渡りとは"/>
        <section>
            <article>
            <div>保有している手形の満期日が到来しても振出人が手形代金を支払ってくれない場合を手形の不渡りといいます。</div>
            <div>手形の所持人が満期日に支払い請求したにもかかわらず、支払人が支払いを拒絶して手形代金を受け取ることができなくなることを手形の不渡りといい、この手形のことを不渡手形（ふわたりてがた）といいます。</div>
	    <div>手形が不渡りになった場合、手形の所持人は振出人（または裏書人）に対して、手形代金のほか法定利息や償還請求に要した費用（償還請求費用）を請求することができます。</div>
        	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">当社が保有している甲社振出しの約束手形￥10,000が不渡りとなり、甲社に対して償還請求を行なった。なお、このための償還請求費用￥200を現金で支払った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	</tr>
    	</table>
	<div>もし、相手方に支払能力があれば満期日までに手形代金をきちんと支払っているはずなので、不渡手形は保有している他の一般的な「受取手形」よりも回収可能性が低いと考えられます。</div>
	<div>そこで、通常の「受取手形」と区別するために、これを受取手形勘定から不渡手形勘定（資産）へ振り替える処理を行います。</div>
	<div>不渡手形勘定は、手形の振出人に対する支払請求権という権利を表すものなので資産となります。</div>
	<div>このとき「不渡手形」の金額には、延長分の利息や償還に要した費用などの償還請求費用を含めるということに注意してください。</div>
	<div>不渡手形の金額＝手形代金＋償還請求費用</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">甲社が倒産し、同社に対する不渡手形￥10,200（前期発生分）が回収不能となった。なお、貸倒引当金の残高は￥3,000である。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>貸倒引当金　3,000</td>
	    <td>不渡手形　10,200</td>
	</tr>
	<tr>
	    <td>貸倒損失　7,200</td>
	    <td></td>
	</tr>
    	</table>
	<div>不渡手形が回収不能となった場合には貸倒れとして処理します。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">甲社に対する不渡手形￥10,200が期限後利息の￥800とともに当座預金に振り込まれた。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>当座預金　11,000</td>
	    <td>不渡手形　10,200</td>
	</tr>
	<tr>
	    <td>受取利息　800</td>
	    <td></td>
	</tr>
    	</table>
	<div>不渡手形を無事回収したときは「不渡手形」を減少させ、期限後の利息は「受取利息」（営業外収益）として処理します。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">以前、乙社に裏書譲渡していた甲社振出しの約束手形￥100,000が不渡りとなったので、償還請求費用と延滞利息￥3,000とともに小切手を振り出して支払った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	</tr>
    	</table>
	<div>裏書譲渡（または割引）をした手形が不渡りとなった場合には、その手形を裏書譲渡した（割り引いた）会社に支払義務が発生します。手形の所持人から償還請求を受けた場合にはまず請求金額を手形の所持人に支払い、その後に手形の振出人に償還請求をします。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">以前、乙社に裏書譲渡していた甲社振出しの約束手形￥100,000が不渡りとなったので、償還請求費用と延滞利息￥3,000とともに小切手を振り出して支払った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>不渡手形　103,000</td>
	    <td>当座預金　103,000</td>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	</tr>
    	</table>
	<div>裏書譲渡（または割引）をした手形が不渡りとなった場合には、その手形を裏書譲渡した（割り引いた）会社に支払義務が発生します。手形の所持人から償還請求を受けた場合にはまず請求金額を手形の所持人に支払い、その後に手形の振出人に償還請求をします。</div>
	<div>乙社に支払った金額はのちに甲社に請求できるので、甲社に対する支払請求権が生じることになります。そこで、支払った金額を不渡手形勘定で処理しておきます。</div>
	</article>
        </section>

        <Title title="荷為替手形とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="営業外手形とは"/>
        <section>
            <article>
            <div>「受取手形」や「支払手形」という勘定科目は、商品を売買したときにしか用いることはできません。</div>
	    <div>商品以外のものを売買したときに手形を使用した場合は、営業外受取手形勘定（資産）または営業外支払手形勘定（負債）を用いて処理します。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">営業用の土地￥80,000を￥100,000で売却し、代金は約束手形で受け取った。なお、当社は土地の売買を目的とした会社ではない。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>営業外受取手形　100,000</td>
	    <td>土地　80,000</td>
	</tr>
	<tr>
	    <td>固定資産売却益　20,000</td>
	    <td></td>
	</tr>
    	</table>
	<div>商品以外のものを売却して約束手形を受け取ったときは営業外受取手形勘定（資産）で処理をします。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">上記の手形が満期日となり、手形代金￥100,000を現金で受け取った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>現金　100,000</td>
	    <td>営業外受取手形　100,000</td>
	</tr>
    	</table>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">営業用のパソコン￥50,000を購入し、代金は約束手形を振り出して支払った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>備品　50,000</td>
	    <td>営業外支払手形　50,000</td>
	</tr>
    	</table>
	<div>商品以外のものを購入して約束手形を振り出したときは営業外支払手形勘定（負債）で処理をします。</div>
	
	<table border="1" cellspacing="0" className="journal">
	<caption className="question">上記の手形が満期日となり、手形代金￥50,000を現金で支払った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>営業外支払手形　50,000</td>
	    <td>現金　50,000</td>
	</tr>
    	</table>    
        </article>
        </section>

        <Title title="金融手形とは"/>
        <section>
            <article>
            <div>お金の貸し借りで用いる手形を、金融手形と言います。</div>
            <div>通常、お金の貸し借りを行う際には、借り手側が借用証書という借金の証明書を作って、貸し手側に渡します。借用証書には、誰が誰に対して、いくらのお金をいつまでに返すかということが書かれています。</div>
            <div>しかし、手形にも誰が誰に対していくらのお金をいつまでに支払うか、ということが書かれています。そのため、手形は借用証書の代わりになりうるのです。</div>
            <div>手形を振り出してお金を借入た場合、手形借入金（負債）という勘定科目で処理します。</div>
            <div>一方、お金を貸し付けた際に手形を受け取った場合、手形貸付金（資産）という勘定科目で処理します。</div>
            
            <table border="1" cellspacing="0" className="journal">
                <caption className="question">A社は仕入先B社に対して、約束手形を振り出して100,000円を現金で仕入れた。</caption>
                <caption className="question">A社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金　100,000</td>
                    <td>手形借入金　100,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" className="journal">
                <caption className="question">B社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>手形貸付金　100,000</td>
                    <td>現金　100,000</td>
                </tr>
            </table>
            </article>
        </section>
        </>
    );
}

const PromissoryNotesGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}


const promissoryNotesGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/promissory-notes-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/promissory-notes-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/promissory-notes-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
			<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="promissory-notes-grade3-1" spy={true} smooth={true} duration={500} >手形とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="promissory-notes-grade3-2" spy={true} smooth={true} duration={500} >約束手形の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="promissory-notes-grade3-3" spy={true} smooth={true} duration={500} >電子記録債権・電子記録債務の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="promissory-notes-grade3-4" spy={true} smooth={true} duration={500} >手形借入金・手形貸付金とは</ScrollLink></li>
	    	    		</ul>
            		</aside>
                <PromissoryNotesGrade3 />
            </aside>
        </main>
    );
}

const promissoryNotesGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/promissory-notes-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/promissory-notes-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/promissory-notes-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <PromissoryNotesGrade2 />
            </aside>
        </main>
    );
}

const promissoryNotesGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/promissory-notes-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/promissory-notes-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/promissory-notes-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <PromissoryNotesGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜手形コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜その他債権債務コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

{/* <section className="font-color">
				<Element name="savingsGrade3-1" className="element" >
					<h1 className="intro">預金とは</h1>	
				</Element>
		
			</section> 
			<div></div>
			<br />
			<span className="underline font-color2"></span>
			*/}

//その他債権債務のコンポーネント
const OtherGrade3 = () => {
    return (
        <>
		<section className="font-color">
			<Element name="other-grade3-1" className="element" >
				<h1 className="intro">貸付金・借入金の会計処理</h1>	
			</Element>
			<div>信用を媒介に、資金を貸し付けたものを<span className="underline font-color2">貸付金</span>、資金を借り入れた場合を<span className="underline font-color2">借入金</span>と呼びます。</div>
	    		<div>1年基準にて以下のように勘定科目を判断します。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">貸付金の名前</th>
					<th className="table-align">概要</th>
				</tr>
				<tr>
					<td className="table-align">短期貸付金</td>
					<td className="table-padding-1 table-align">1年以内に回収期限が発生する貸付金</td>
				</tr>
				<tr>
					<td className="table-align">長期貸付金</td>
					<td className="table-padding-1 table-align">1年を超えて回収期限が発生する貸付金</td>
				</tr>
			</table>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">借入金の名前</th>
					<th className="table-align">概要</th>
				</tr>
				<tr>
					<td className="table-align">短期借入金</td>
					<td className="table-padding-1 table-align">1年以内に返済期限が発生する借入金</td>
				</tr>
				<tr>
					<td className="table-align">長期借入金</td>
					<td className="table-padding-1 table-align">1年を超えて返済期限が発生する借入金</td>
				</tr>
			</table>
	    		<br />
	    		<div>例えば、銀行から融資を受けたため、1,000,000円が普通預金口座に入金された。ただし、本融資は5年をかけて返済する予定であるという場合、以下の仕訳が成立します。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">普通預金　1,000,000</td>
					<td className="table-align">長期借入金　1,000,000</td>
				    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>銀行から融資を受けたため、1,000,000円が普通預金口座に入金された。ただし、本融資は5年をかけて返済する予定である</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：普通預金に1,000,000円が振り込まれたという事象</div>
				<div>なぜ発生したか（貸方）：借金したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：普通預金口座のお金の増加になるので、普通預金で処理</div>
				<div>なぜ発生したか（貸方）：5年で返済する借金となるので、長期借入金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：普通預金という資産が増加するので、借方に普通預金を配置</div>
				<div>なぜ発生したか（貸方）：長期借入金という負債が増加するので、貸方に長期借入金を配置</div>
				</div>
				<br />
		</section>

		<section className="font-color">
			<Element name="other-grade3-2" className="element" >
				<h1 className="intro">未収入金（未収金）・未払金の会計処理</h1>	
			</Element>
	    		<div>通常の営業取引以外の取引によって生じた「あとでお金を受け取れる」という権利のことを<span className="underline font-color2">未収入金（未収金）</span>と呼びます。</div>
			<br />
			<div>一方、通常の営業取引以外の取引によって生じた「あとでお金を支払わなければならない」という債務のことを<span className="underline font-color2">未払金</span>と呼びます。</div>
			<br />
			<div>例えば、普段は八百屋を事業として営んでいる方が、不要になった物置を300,000円で売却し、代金は後払いとなった場合、以下の仕訳が成立します。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				    <tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				    </tr>
				    <tr>
					<td className="table-align">未収入金　300,000</td>
					<td className="table-align">建物　300,000</td>
				    </tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>普段は八百屋を事業として営んでいる方が、不要になった物置を300,000円で売却し、代金は後払いとなった</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：あとで300,000円分受け取れる権利</div>
				<div>なぜ発生したか（貸方）：300,000円の倉庫を販売したため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：メイン以外の事業による債権が発生したので、未収入金で処理</div>
				<div>なぜ発生したか（貸方）：物置の販売になるため、建物（もしくは附属設備）で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：未収入金という資産が増加するので、借方に未収入金を配置</div>
				<div>なぜ発生したか（貸方）：建物（もしくは附属設備）という資産が減少するので、貸方に建物（もしくは附属設備）を配置</div>
				</div>
				<br />
	    		<div>逆に、普段は不動産とは関わりのない事業を営んでいる方が、不要になった倉庫を300,000円で購入し、代金は後払いとした場合、以下の仕訳が成立します。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">建物　300,000</td>
						<td className="table-align">未払金　300,000</td>
					    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>普段は不動産とは関わりのない事業を営んでいる方が、不要になった倉庫を300,000円で購入し、代金は後払いとした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：300,000円の価値を持つ倉庫</div>
					<div>なぜ発生したか（貸方）：あとで300,000円を支払わなければならないという義務</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：倉庫の購入になるため、建物（もしくは附属設備）で処理</div>
					<div>なぜ発生したか（貸方）：メイン以外の事業による債務が発生したので、未払金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：建物（もしくは附属設備）という資産が減少するので、借方に建物（もしくは附属設備）を配置</div>
					<div>なぜ発生したか（貸方）：未払金という負債が増加するので、貸方に未払金を配置</div>
			</div>
	    
	    	</section>

		<section className="font-color">
			<Element name="other-grade3-3" className="element" >
				<h1 className="intro">前払金（前渡金）・前受金の会計処理</h1>	
			</Element>
	    		<div>商品の代金の一部を前払いした支払いのことを、<span className="underline font-color2">前払金</span>と呼びます。</div>
			<br />
			<div>一方、サービスや商品の提供前に、代金の一部を受け取った場合、その受取額を<span className="underline font-color2">前受金</span>と呼びます。</div>
			<div>例えば、10,000円の商品を予約注文し、一部代金として500円を現金で前払いした場合、以下の仕訳が成立します</div>
			<br />
				<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">前払金　500</td>
						<td className="table-align">現金　500</td>
					    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>10,000円の商品を予約注文し、一部代金として500円を現金で前払いした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：商品を受け取る前の前払分の支払い</div>
					<div>なぜ発生したか（貸方）：現金500円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：商品提供前の支払いになるため、前払金で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるため、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：前払金という資産が増加するので、借方に前払金を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
			</div>
				<br />
	    		<div>一方、10,000円の商品を予約注文され、一部代金として500円を現金で前受けした場合、以下の仕訳が成立します</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">現金　500</td>
						<td className="table-align">前受金　500</td>
					    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>10,000円の商品を予約注文され、一部代金として500円を現金で前受けした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金500円</div>
					<div>なぜ発生したか（貸方）：商品を提供する前に、一部金額である500円を前受けしたため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の受取になるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：商品提供前のお金の受取になるため、前受金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：前受金という負債が増加するので、貸方に前受金を配置</div>
			</div>
	    	</section>

		<section className="font-color">
			<Element name="other-grade3-4" className="element" >
				<h1 className="intro">仮払金・仮受金の会計処理</h1>	
			</Element>
	    		<div>何らかの支払いが発生したものの、その支払いの概要がわからない場合、その概要が判明するまでの間に一時的に計上するための未決算勘定科目を<span className="underline font-color2">仮払金</span>と呼びます。</div>
			<br />
			<div>一方、何らかのお金の受取りが発生したものの、その受取の概要がわからない場合、その概要が判明するまでの間に一時的に計上するための未決算勘定科目を<span className="underline font-color2">仮受金</span>と呼びます。</div>
			<br />
	    		<div>どちらの支払いに関しても、その原因が判明した場合に、振替の仕訳を作成します。</div>
	    		<br />
	    		<div>例えば、10,000円の現金支払いが発生していたものの、その原因がわからない場合、以下の仕訳が成立します</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">仮払金　10,000</td>
						<td className="table-align">現金　10,000</td>
					    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>10,000円の現金支払いが発生していたものの、その原因がわからない</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：使途不明の10,000円の支払い</div>
					<div>なぜ発生したか（貸方）：現金10,000円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：使途不明の支払いになるため、一時的に仮払金で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるため、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：仮払金という資産が増加するので、借方に仮払金を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
			</div>
			<br />
	    		<div>調査を行ったところ、10,000円のうち7,000円が交通費の支払い、また3,000円は原因不明のまま決算を迎えた場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">旅費交通費　7,000</td>
						<td className="table-align">仮払金　10,000</td>
					</tr>
	    				<tr>
						<td className="table-align">雑損失　3,000</td>
						<td className="table-align"></td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>調査を行ったところ、10,000円のうち7,000円が交通費の支払い、また3,000円は原因不明のまま決算を迎えた</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：交通費7,000円の支払い、使途不明の支払い3,000円</div>
					<div>なぜ発生したか（貸方）：仮払金10,000円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：交通費の支払いになるため、旅費交通費で処理。また、使途不明の支払分に関しては、雑損失で処理</div>
					<div>なぜ発生したか（貸方）：仮払金にて計上した金額の振替となるため、仮払金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：旅費交通費、雑損失という費用が増加するので、借方に旅費交通費、雑損失を配置</div>
					<div>なぜ発生したか（貸方）：仮払金という資産が減少するので、貸方に仮払金を配置</div>
				</div>
	    			<br />
	    			<div>次に仮受金の仕訳を見ていきます。例えば、10,000円の現金受取りが発生していたものの、その原因がわからない場合、以下の仕訳が成立します</div>
					<br />
				<table border="1" cellspacing="0" className="table-color">
					    <tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					    </tr>
					    <tr>
						<td className="table-align">現金　10,000</td>
						<td className="table-align">仮受金　10,000</td>
					    </tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>10,000円の現金受取りが発生していたものの、その原因がわからない</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：10,000円の現金の受取り</div>
					<div>なぜ発生したか（貸方）：原因不明</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金での受取りになるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：原因不明のため、一時的に仮受金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：仮受金という負債が増加するので、貸方に仮受金を配置</div>
			</div>
			<br />
	    		<div>調査を行ったところ、10,000円のうち7,000円が売掛金の回収分、また3,000円は原因不明のまま決算を迎えた場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">仮受金　10,000</td>
						<td className="table-align">売掛金　7,000</td>
					</tr>
	    				<tr>
						<td className="table-align"></td>
						<td className="table-align">雑収入　3,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>調査を行ったところ、10,000円のうち7,000円が売掛金の回収分、また3,000円は原因不明のまま決算を迎えた</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：原因不明の現金の受取り10,000円</div>
					<div>なぜ発生したか（貸方）：売掛金7,000円の回収、原因不明の現金受取り3,000円</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：仮受金にて計上した金額の振替となるため、仮受金で処理</div>
					<div>なぜ発生したか（貸方）：売掛金の回収となるため、売掛金で処理。また、原因不明の受取分に関しては、雑収入で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：仮受金という負債が減少するので、借方に仮受金を配置</div>
					<div>なぜ発生したか（貸方）：売掛金という資産が減少するため、貸方に売掛金を配置。また、雑収入という収益が増加するため、貸方に雑収入を配置。</div>
				</div>
	    	</section>

		<section className="font-color">
			<Element name="other-grade3-5" className="element" >
				<h1 className="intro">立替金の会計処理</h1>	
			</Element>
	    		<div>本来取引先が負担すべき費用を、別の会社が一時的に立て替えて支払う場合があります。このような支払いを処理する勘定科目を<span className="underline font-color2">立替金</span>と呼びます。</div>
			<br />
			<div>立替えた支払いに関しては、後でお金を返してもらうことが出来る権利として扱うことから、資産に属します。</div>
	    		<br />
	    		<div>取引先が負担すべき交通費400円を、現金にて立替えて支払った場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">立替金　400</td>
						<td className="table-align">現金　400</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>取引先が負担すべき交通費400円を、現金にて立替えて支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：あとでお金を返してもらえる権利400円</div>
					<div>なぜ発生したか（貸方）：現金400円で支払いを行ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：立替払いの支払いとなるため、立替金で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いとなるため、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：立替金という資産が増加するので、借方に立替金を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置。</div>
				</div>
	    			<br />
	    			<div>後日、立替えた支払いを現金で受け取ったという場合、以下の仕訳となります。</div>
					<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金　400</td>
						<td className="table-align">立替金　400</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>後日、立替えた支払いを現金で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金400円の受取り</div>
					<div>なぜ発生したか（貸方）：立替金というあとでお金を受取る権利を行使したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金での受取りになるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：立替えた分の振替となるため、立替金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：立替金という資産が減少するので、貸方に立替金を配置。</div>
				</div>
		</section>
	    
	    	<section className="font-color">
			<Element name="other-grade3-6" className="element" >
				<h1 className="intro">預り金の会計処理</h1>	
			</Element>
	    		<div>従業員が負担すべきお金に関して、会社が一時的に預かった場合、これを<span className="underline font-color2">預り金</span>と呼びます。</div>
			<br />
			<div>例えば、会社員は所得税の支払いに関して、会社が毎月の給料から一部の金額を事前に預かり税務署に納めているため、会社員自身が税務署に行って納税を行うことはあまりありません。</div>
	    		<br />
	    		<div>このような制度を<span className="underline font-color2">源泉徴収</span>と呼びますが、このような場合に預り金の仕訳が発生します。</div>
	   		<br />
	    		<div>例えば、給料180,000円のうち、所得税の金額10,000円を控除して現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">給料手当　180,000</td>
						<td className="table-align">現金  170,000</td>
					</tr>
	    				<tr>
						<td className="table-align"></td>
						<td className="table-align">預り金  10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>給料180,000円のうち、所得税の金額10,000円を控除して現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：給料180,000円（総支給額）</div>
					<div>なぜ発生したか（貸方）：現金170,000円の支払い（手取り額）、所得税分の預り10,000円分（源泉徴収分）</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：給料の支払いとなるため、給料手当で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いとなるため、現金で処理。また、所得税の預り分に関しては、預り金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：給料手当という費用が増加するので、借方に給料手当を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置。また、預り金という負債が増加するので、貸方に預り金を配置</div>
				</div>
	    			<br />
	    			<div>後日、預かった源泉徴収10,000円分に関して、現金にて税務署に納税したという場合、以下の仕訳となります。</div>
					<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">預り金　10,000</td>
						<td className="table-align">現金　10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>預かった源泉徴収10,000円分に関して、現金にて税務署に納税した</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：預り金10,000円の支払い</div>
					<div>なぜ発生したか（貸方）：現金にて支払いを行ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：源泉徴収した金額の支払いとなるため、預り金で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いとなるため、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：預り金という負債が減少するため、預り金を借方に配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するため、貸方に現金を配置</div>
				</div>
		</section>

		<section className="font-color">
			<Element name="other-grade3-7" className="element" >
				<h1 className="intro">受取商品券の会計処理</h1>	
			</Element>
	    		<div>商品を売上げた際に、お客様から商品券によって支払いが発生した場合、これを<span className="underline font-color2">受取商品券</span>として処理します。</div>
			<br />
			<div>受け取った商品券はその商品券を発行した会社に持っていくことで、換金が可能なため、「あとでお金をもらうことの出来る権利」として考え、資産に属します。</div>
			<br />
	    		<div>例えば、商品100,000円を売上げ、代金を商品券で受け取った場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">受取商品券　100,000</td>
						<td className="table-align">売上　100,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>商品100,000円を売上げ、代金を商品券で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：商品券100,000円の受取り</div>
					<div>なぜ発生したか（貸方）：売上が100,000円上がったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：商品券の受取りとなるため、受取商品券で処理</div>
					<div>なぜ発生したか（貸方）：売上が上がったことが理由となるため、売上で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：受取商品券という資産が増加するので、借方に受取商品券を配置</div>
					<div>なぜ発生したか（貸方）：売上という収益が増加するので、貸方に売上を配置</div>
				</div>
	    			<br />
	    	</section>

		<section className="font-color">
			<Element name="other-grade3-8" className="element" >
				<h1 className="intro">差入保証金の会計処理</h1>	
			</Element>
	    		<div>賃貸契約の際に発生する敷金など、契約の履行を担保するために差し入れる現金のことを<span className="underline font-color2">差入保証金</span>と呼びます。</div>
			<br />
			<div>原則、契約終了時に全額返還されるものの、何か問題が発生した場合には、一部が差し引かれて返還される場合があります。</div>
	    		<br />
	    		<div>例えば、賃貸契約の保証金として50,000円を普通預金口座から支払ったという場合、以下の仕訳となります。</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">差入保証金　50,000</td>
						<td className="table-align">普通預金　50,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>賃貸契約の保証金として50,000円を普通預金口座から支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：保証金50,000円の支払い</div>
					<div>なぜ発生したか（貸方）：普通預金口座から50,000円を支出したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：保証金の支払いとなるため、差入保証金（もしくは敷金など）で処理</div>
					<div>なぜ発生したか（貸方）：普通預金口座での支払いとなるため、普通預金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：保証金という資産が増加するので、借方に保証金を配置</div>
					<div>なぜ発生したか（貸方）：普通預金という資産が減少するので、貸方に普通預金を配置。</div>
				</div>
	    			<br />
		</section>
        </>
    );
}

const OtherGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const OtherGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const otherGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/other-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/other-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/other-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
			<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-1" spy={true} smooth={true} duration={500} >貸付金・借入金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-2" spy={true} smooth={true} duration={500} >未収入金（未収金）・未払金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-3" spy={true} smooth={true} duration={500} >前払金（前渡金）・前受金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-4" spy={true} smooth={true} duration={500} >仮払金・仮受金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-5" spy={true} smooth={true} duration={500} >立替金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-6" spy={true} smooth={true} duration={500} >預り金の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-7" spy={true} smooth={true} duration={500} >受取商品券の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="other-grade3-8" spy={true} smooth={true} duration={500} >差入保証金の会計処理</ScrollLink></li>
				</ul>
            </aside>
                <OtherGrade3 />
            </aside>
        </main>
    );
}

const otherGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/other-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/other-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/other-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <OtherGrade2 />
            </aside>
        </main>
    );
}

const otherGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/other-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/other-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/other-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <OtherGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜その他債権債務コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜債権の譲渡コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AssignmentOfAccountsReceivableGrade3 = () => {
    return (
        <>
            <section className="font-color">
		<Element name="assignment-of-accounts-receivable-grade3-1" className="element" >
			<h1 className="intro">クレジット売掛金の会計処理</h1>	
		</Element>
		<div>商品を販売し、お客様からクレジットカードによる支払いが発生した場合、クレジットカード会社に対してお金を請求する権利を得ることが出来ます。</div>
	    	<div>このような権利のことを<span className="underline font-color2">クレジット売掛金</span>と呼びます。</div>
		<br />
		<div>ただし、通常の売掛金と処理は同じになりますので、売上の仕訳を立てる際に、クレジット売掛金という勘定科目を利用して仕訳すれば問題ございません。</div>
		<br />
		<div>最近ではネットショップと呼ばれるサービスが普及してきていますが、ネットショップでの売上は基本的にクレジットカードでの支払いになります。</div>
	    	<div>そのため、ネットショップで事業を運営している事業者などはよく利用する勘定科目となります。</div>
	    	<br />
	    	<div>なお、クレジットカード会社に対して手数料を負担することになった場合には、支払手数料として処理を行います。</div>
	    	<div>例えば、商品10,000円を販売し、代金はクレジットカードにより決済された。なお、クレジットカード会社への手数料は販売代金の1%であり、これは販売時に認識するものとした場合、以下の仕訳となります</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">クレジット売掛金  9,900</td>
						<td className="table-align">売上  10,000</td>
					</tr>
	    				<tr>
						<td className="table-align">支払手数料  100</td>
						<td className="table-align"></td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>商品10,000円を販売し、代金はクレジットカードにより決済された。なお、クレジットカード会社への手数料は販売代金の1%であり、これは販売時に認識するものとした</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：クレジットカード会社へあとでお金を請求する権利9,900円と、手数料100円</div>
					<div>なぜ発生したか（貸方）：売上が10,000円上がったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：クレジットカード会社に関する債権になるため、クレジット売掛金で処理。また、手数料は支払手数料で処理</div>
					<div>なぜ発生したか（貸方）：売上の計上となるため、売上で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：クレジット売掛金という資産が増加するので、借方にクレジット売掛金を計上。また、支払手数料という費用が増加するため、借方に支払手数料を配置</div>
					<div>なぜ発生したか（貸方）：売上という収益が増加するので、貸方に売上を配置</div>
				</div>
	    			<br />
	    			<div>後日、1％のクレジット手数料を差し引いた売掛金がクレジットカード会社より、普通預金口座に振り込まれたという場合、以下の仕訳となります。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">普通預金  9,900</td>
						<td className="table-align">クレジット売掛金  9,900</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>後日、1％のクレジット手数料を差し引いた売掛金がクレジットカード会社より、普通預金口座に振り込まれた</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：普通預金口座に9,900円が振り込まれたという事象</div>
					<div>なぜ発生したか（貸方）：クレジットカード会社への債権を行使したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：普通預金口座での残高の増加となるため、普通預金で処理</div>
					<div>なぜ発生したか（貸方）：クレジットカード会社への債権の行使となることから、クレジット売掛金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：普通預金という資産が増加するので、借方に普通預金を配置</div>
					<div>なぜ発生したか（貸方）：クレジット売掛金という資産が減少するので、貸方にクレジット売掛金を配置</div>
				</div>
		</section>
        </>
    );
}


const assignmentOfAccountsReceivableGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/assignment-of-accounts-receivable-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/assignment-of-accounts-receivable-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/assignment-of-accounts-receivable-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="assignment-of-accounts-receivable-grade3-1" spy={true} smooth={true} duration={500} >クレジット売掛金の会計処理</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <AssignmentOfAccountsReceivableGrade3 />
            </aside>
        </main>
    );
}

const assignmentOfAccountsReceivableGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/assignment-of-accounts-receivable-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/assignment-of-accounts-receivable-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
				<Link to="/assignment-of-accounts-receivable-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="assignment-of-accounts-receivable-grade3-1" spy={true} smooth={true} duration={500} >クレジット売掛金の会計処理</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <AssignmentOfAccountsReceivableGrade3 />
            </aside>
        </main>
    );
}

const assignmentOfAccountsReceivableGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/assignment-of-accounts-receivable-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/assignment-of-accounts-receivable-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/assignment-of-accounts-receivable-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="assignment-of-accounts-receivable-grade3-1" spy={true} smooth={true} duration={500} >クレジット売掛金の会計処理</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <AssignmentOfAccountsReceivableGrade3 />
            </aside>
        </main>
    );
}


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜債権の譲渡コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜引当金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AllowanceGrade3 = () => {
    return (
        <>
            <section className="font-color">
				<Element name="allowance-grade3-1" className="element" >
					<h1 className="intro">貸倒れの会計処理</h1>	
				</Element>
				<div>取引先が倒産したなど、本来回収できたはずの売掛金を回収できなくなったという事象を、<span className="underline font-color2">貸倒れ</span>と呼びます。</div>
	    			<br />
	    			<div>貸倒れの会計処理として、貸倒れが発生した場合に備えて、事前にその対策をしておいた場合と、対策をしていなかった、もしくは対策していたがその範囲を超えてしまったという場合で大きく処理が2種類に分かれていきます。</div>
	    			<br />
	    			<div>まずは事前にその対策をしておいた場合の会計処理を見ていきましょう。</div>
	    			<br />
	    			<div>事前に貸倒れの金額を計上しておくことで、その金額の範囲内であれば、貸倒れが発生しても当初の予定への変更がなくなります。</div>
	    			<div>このように貸倒れの金額を事前に計上する場合、<span className="underline font-color2">貸倒引当金繰入</span>という費用勘定科目にて、事前計上する費用金額を計上します。</div>
	    			<br />
	    			<div>一方、事前計上された売掛金を処理するため、<span className="underline font-color2">貸倒引当金</span>というマイナスの売掛金を事前計上することで、売掛金も相殺することが可能となります。</div>
	    			<br />
	    			<div>ただし、貸倒れが発生する売掛金の金額は正確に見積もることは出来ないため、実態と必ず差額が発生します。</div>
	    			<div>このとき、事前に計上していた範囲を超えた金額については、<span className="underline font-color2">貸倒損失</span>という勘定科目にて、処理を行います。</div>
	    			<br />
	    			<div>例えば、貸倒れの発生に備えて、事前に貸倒引当金を30,000円計上したという場合、以下の仕訳となります</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">貸倒引当金繰入  30,000</td>
						<td className="table-align">貸倒引当金  30,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>貸倒れの発生に備えて、事前に貸倒引当金を30,000円計上した</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：30,000円分の貸倒引当金の繰入</div>
					<div>なぜ発生したか（貸方）：回収できないことを見越したマイナスの売掛金を計上するため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：貸倒引当金の繰入となるため、貸倒引当金繰入で処理</div>
					<div>なぜ発生したか（貸方）：マイナスの売掛金の計上となるため、貸倒引当金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：貸倒引当金繰入という費用が増加するので、借方に貸倒引当金繰入を配置</div>
					<div>なぜ発生したか（貸方）：貸倒引当金というマイナスの資産を計上するので、貸方に貸倒引当金を計上</div>
				</div>
	    			<br />
	    			<div>後日、実際に売掛金が40,000円分貸倒れたとします。この場合、以下の仕訳となります。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">貸倒引当金  30,000</td>
						<td className="table-align">売掛金  40,000</td>
					</tr>
	    				<tr>
						<td className="table-align">貸倒損失  10,000</td>
						<td className="table-align"></td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>貸倒れの発生に備えて、事前に貸倒引当金を30,000円計上した</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：30,000円分の貸倒引当金の繰入</div>
					<div>なぜ発生したか（貸方）：回収できないことを見越したマイナスの売掛金を計上するため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：貸倒引当金の繰入となるため、貸倒引当金繰入で処理</div>
					<div>なぜ発生したか（貸方）：マイナスの売掛金の計上となるため、貸倒引当金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：貸倒引当金繰入という費用が増加するので、借方に貸倒引当金繰入を配置</div>
					<div>なぜ発生したか（貸方）：貸倒引当金というマイナスの資産を計上するので、貸方に貸倒引当金を計上</div>
				</div>
	    			<br />	
	    				
	    			<Element name="allowance-grade3-2" className="element" >
					<h1 className="intro">貸倒損失の会計処理</h1>	
				</Element>
	    			<div>事前に貸倒引当金を計上していなかったにも関わらず、貸倒れが発生した場合、<span className="underline font-color2">貸倒損失</span>にて処理を行います。</div>
	    			<br />
	    			<div>例えば、貸倒引当金の計上がないまま、貸倒れが30,000円発生したという場合、以下の仕訳となります</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">貸倒損失  30,000</td>
						<td className="table-align">売掛金  30,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>貸倒引当金の計上がないまま、貸倒れが30,000円発生した</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：30,000円分の貸倒れ</div>
					<div>なぜ発生したか（貸方）：売掛金が30,000円分発生していたため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：貸方引当金を計上していない上での貸倒れの発生になるため、貸倒損失で処理</div>
					<div>なぜ発生したか（貸方）：売掛金の貸倒れとなることから、売掛金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：貸倒損失という費用が増加するので、借方に貸倒損失を計上</div>
					<div>なぜ発生したか（貸方）：売掛金という資産が減少するので、貸方に売掛金を計上</div>
				</div>
	    			<Element name="allowance-grade3-3" className="element" >
					<h1 className="intro">償却債権取立益の会計処理</h1>	
				</Element>
	    			<div>前期以前に、貸倒れとして処理した売掛金が回収出来る場合があります。</div>
	    			<br />
	    			<div>このような場合、改めて回収できた売上を<span className="underline font-color2">償却債権取立益</span>と呼びます。</div>
				<br />
	    			<div>例えば、前期に貸倒れとして計上した売掛金30,000円が、当期に現金で回収できたという場合、以下の仕訳となります。</div>
	    			<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金  30,000</td>
						<td className="table-align">償却債権取立益  30,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>前期に貸倒れとして計上した売掛金30,000円が、当期に現金で回収できた</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：30,000円分の現金</div>
					<div>なぜ発生したか（貸方）：前期に貸倒れたはずの売上が、今期に回収できたため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の獲得になるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：前期に貸倒れたはずの売上の回収になるため、償却債権取立益で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を計上</div>
					<div>なぜ発生したか（貸方）：償却債権取立益という収益が増加するので、貸方に償却債権取立益を計上</div>
				</div>
	    			<Element name="allowance-grade3-4" className="element" >
					<h1 className="intro">実績法とは</h1>	
				</Element>
	    			<div>最後に、貸倒れの金額をいくらで見積ればよいかについて、その方法の1つを紹介します。</div>
	    			<br />
	    			<div>売掛金の残高に対して、任意の率を乗じて貸倒引当金の金額を計算する方法を<span className="underline font-color2">実績法</span>と呼びます。</div>
				<br />
				<div>例えば、売掛金の残高100,000円に対して、2％の貸倒れを見積もった。ただし、貸倒引当金の残高が1,000円あるという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">貸倒引当金繰入  1,000</td>
						<td className="table-align">貸倒引当金  1,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>売掛金の残高100,000円に対して、2％の貸倒れを見積もった。ただし、貸倒引当金の残高が1,000円ある</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：10000 X 2% = 2,000円の貸倒引当金の繰入。ただし、すでに1,000円が計上済みとのことから、残りの1,000円が繰入額として発生</div>
					<div>なぜ発生したか（貸方）：回収できないことを見越したマイナスの売掛金を計上するため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：貸倒引当金の繰入となるため、貸倒引当金繰入で処理</div>
					<div>なぜ発生したか（貸方）：マイナスの売掛金の計上となるため、貸倒引当金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：貸倒引当金繰入という費用が増加するので、借方に貸倒引当金繰入を配置</div>
					<div>なぜ発生したか（貸方）：貸倒引当金というマイナスの資産を計上するので、貸方に貸倒引当金を計上</div>
				</div>
			</section>
        </>
    );
}

const AllowanceGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const AllowanceGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const allowanceGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/allowance-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/allowance-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/allowance-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-1" spy={true} smooth={true} duration={500} >貸倒れの会計処理</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-2" spy={true} smooth={true} duration={500} >貸倒損失の会計処理</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-3" spy={true} smooth={true} duration={500} >償却債権取立益の会計処理</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-4" spy={true} smooth={true} duration={500} >実績法とは</ScrollLink></li>
	    	　　　</ul>
                </aside>
                <AllowanceGrade3 />
            </aside>
        </main>
    );
}

const allowanceGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/allowance-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/allowance-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/allowance-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <AllowanceGrade2 />
            </aside>
        </main>
    );
}

const allowanceGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/allowance-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/allowance-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/allowance-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <AllowanceGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜引当金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜債務の保証コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const FinancialGuaranteeGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
            <section>
                <article>
             		
                </article>
            </section>
        </>
    );
}


const financialGuaranteeGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/financial-guarantee-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/financial-guarantee-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/financial-guarantee-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
            <FinancialGuaranteeGrade3 />
            </aside>
        </main>
    );
}

const financialGuaranteeGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/financial-guarantee-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/financial-guarantee-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
				<Link to="/financial-guarantee-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-1" spy={true} smooth={true} duration={500} >保証債務とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-2" spy={true} smooth={true} duration={500} >減価償却とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-3" spy={true} smooth={true} duration={500} >定額法とは</ScrollLink></li>
	    			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-4" spy={true} smooth={true} duration={500} >資本的支出・収益的支出について</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <FinancialGuaranteeGrade3 />
            </aside>
        </main>
    );
}

const financialGuaranteeGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/financial-guarantee-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/financial-guarantee-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/financial-guarantee-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-1" spy={true} smooth={true} duration={500} >保証債務とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-2" spy={true} smooth={true} duration={500} >減価償却とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-3" spy={true} smooth={true} duration={500} >定額法とは</ScrollLink></li>
	    			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-4" spy={true} smooth={true} duration={500} >資本的支出・収益的支出について</ScrollLink></li>
	    	　　 </ul>
                </aside>
                <FinancialGuaranteeGrade3 />
            </aside>
        </main>
    );
}



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜債務の保証コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜特殊商品売買コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const SpecialTradingsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const SpecialTradingsGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const SpecialTradingsGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const specialTradingsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <SpecialTradingsGrade3 />
            </aside>
        </main>
    );
}

const specialTradingsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-1" spy={true} smooth={true} duration={500} >保証債務とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-2" spy={true} smooth={true} duration={500} >減価償却とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-3" spy={true} smooth={true} duration={500} >定額法とは</ScrollLink></li>
	    			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-4" spy={true} smooth={true} duration={500} >資本的支出・収益的支出について</ScrollLink></li>
	    	　　 </ul>
			</aside>
			<SpecialTradingsGrade2 />
            </aside>
        </main>
    );
}

const specialTradingsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-1" spy={true} smooth={true} duration={500} >保証債務とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-2" spy={true} smooth={true} duration={500} >減価償却とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-3" spy={true} smooth={true} duration={500} >定額法とは</ScrollLink></li>
	    			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="special-tradings-grade3-4" spy={true} smooth={true} duration={500} >資本的支出・収益的支出について</ScrollLink></li>
	    	　　 </ul>
			</aside>
			<SpecialTradingsGrade1 />
            </aside>
        </main>
    );
}


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜特殊商品売買コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜様々な財又はサービスの顧客への移転コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const VariousServiceTransferGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const variousServiceTransferGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <VariousServiceTransferGrade3 />
            </aside>
        </main>
    );
}

const variousServiceTransferGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <VariousServiceTransferGrade3 />
            </aside>
        </main>
    );
}

const variousServiceTransferGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <VariousServiceTransferGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜様々な財又はサービスの顧客への移転コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜金融商品コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const FinancialInstrumentGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const financialInstrumentGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <FinancialInstrumentGrade3 />
            </aside>
        </main>
    );
}

const financialInstrumentGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <FinancialInstrumentGrade3 />
            </aside>
        </main>
    );
}

const financialInstrumentGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <FinancialInstrumentGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜金融商品コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜有価証券コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const SecuriteisGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const SecuriteisGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const SecuriteisGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}


const securiteisGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/securiteis-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/securiteis-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/securiteis-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <SecuriteisGrade3 />
            </aside>
        </main>
    );
}

const securiteisGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/securiteis-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/securiteis-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/securiteis-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <SecuriteisGrade2 />
            </aside>
        </main>
    );
}

const securiteisGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/securiteis-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/securiteis-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/securiteis-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <SecuriteisGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜有価証券コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜有形固定資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const NonCurrentAssetsGrade3 = () => {
    return (
        <>
	    	<section className="font-color">
			<Element name="non-current-assets-grade3-1" className="element" >
				<h1 className="intro">固定資産とは</h1>	
			</Element>
			<div>建物や車など、1年以上利用することを目的として取得する資産を<span className="underline font-color2">固定資産</span>と言い、一般的には10万円以上の支払いをした場合に固定資産として処理が必要となります。</div>
	    		<div>固定資産は大きく分けると以下のように3種類に分かれていきます。</div>
			<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">固定資産の種類</th>
					<th className="table-align">概要</th>
				</tr>
				<tr>
					<td className="table-align">有形固定資産</td>
					<td className="table-padding-1 table-align">形のある固定資産</td>
				</tr>
				<tr>
					<td className="table-align">無形固定資産</td>
					<td className="table-padding-1 table-align">形のない固定資産</td>
				</tr>
	    			<tr>
					<td className="table-align">投資その他の資産</td>
					<td className="table-padding-1 table-align">有形固定資産、無形固定資産以外の固定資産のこと</td>
				</tr>
			</table>
			<br />
		</section>
	    
	    	<section className="font-color">
			<Element name="non-current-assets-grade3-2" className="element" >
				<h1 className="intro">減価償却とは</h1>	
			</Element>
	    		<div>1年間の収益は、1年間の売上から1年間の費用を引いた残りの金額として計算されます。</div>
	    		<br />
	    		<div>しかしながら、固定資産の購入は資産の増加として会計処理されるため、そのままでは支払額が費用とならないという問題が発生します。</div>
	    		<div>例えば、1億円の建物を購入したものの、そのままでは費用処理されないため、1年間の収益は建物の購入額を引かない金額で算出されます。</div>
	    		<br />
			<div>そこで、会計ではこの費用化の問題に関して、「使った分に応じて一部の金額を費用化していく」という方法を採用しました。</div>
	    		<br />
	    		<div>この価値の減少分を表現する方法のことを<span className="underline font-color2">減価償却</span>と呼びます。</div>
	    		<br />
	    		<div>減価償却は「資産価値の減少」という抽象的な事実をいかに表現するか？をテーマとしているため、「いかに使った分を計測するか」という観点より、様々な種類が考案されてきました。</div>
			<br />
	    		<div>以下の表がその方法の種類となりますが、このうち簿記の3級では定額法のみが範囲となります。</div>
	    		<br />
			<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align table-size-30">減価償却の種類</th>
					<th className="table-align">概要</th>
				</tr>
				<tr>
					<td className="table-align">定額法</td>
					<td className="table-padding-1">平成19年4月1日以降に取得された固定資産について、耐用年数に応じて、一定額を償却する方法</td>
				</tr>
				<tr>
					<td className="table-align">旧定額法</td>
					<td className="table-padding-1">平成19年3月31日以前に取得された固定資産について、耐用年数に応じて一定額を償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">定率法</td>
					<td className="table-padding-1">平成19年4月1日以降に取得された固定資産について、耐用年数に応じて、未償却残高に一定の償却率を乗じて償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">旧定率法</td>
					<td className="table-padding-1">平成19年3月31日以前に取得された固定資産について、耐用年数に応じて、期首帳簿価額に一定の償却率を乗じて償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">級数法</td>
					<td className="table-padding-1">耐用年数にわたって級数的に減価償却費を計上する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">生産高比例法</td>
					<td className="table-padding-1">固定資産の利用度に応じて費用化する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">均等償却</td>
					<td className="table-padding-1">償却月数に応じて、毎年度均等の金額で償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">任意償却</td>
					<td className="table-padding-1">任意の金額で償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">一括償却</td>
					<td className="table-padding-1">3年間で全額を償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">少額償却</td>
					<td className="table-padding-1">中小事業者等が、30万未満の減価償却資産を取得した年度に全額を償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">即時償却</td>
					<td className="table-padding-1">取得価額が30万未満の減価償却資産について、取得した年度に全額償却する方法</td>
				</tr>
	    			<tr>
					<td className="table-align">償却なし</td>
					<td className="table-padding-1">土地、電話加入権など価値の減少のない固定資産を取得した場合の処理方法</td>
				</tr>
			</table>
			<br />
		</section>
	    
	    	<section className="font-color">
			<Element name="non-current-assets-grade3-3" className="element" >
				<h1 className="intro">定額法とは</h1>	
			</Element>
	    		<div>固定資産をどれだけの年数利用可能かどうか、という指標のことを<span className="underline font-color2">耐用年数</span>と呼び、この耐用年数に応じて一定額を減価償却する方法を<span className="underline font-color2">定額法</span>と呼びます。</div>
				<br />
	    		<div>背景として、会計の重要な原則の1つに、<span className="underline font-color2">費用収益対応の原則</span>という考え方があります。</div>
	    		<br />
	    		<div>適切な期間損益を算出する際、収益と費用を対応づけるための考え方ですが、固定資産は使った年数に応じて収益を生むため、「収益を生む年数に応じて一部の金額を費用化していこう」と考えました。</div>
				<div>この考え方が定額法につながっていきます。</div>
	    		<br />
	    		<div>それでは定額法の仕訳を見ていきます。</div>
	    		<div>固定資産の勘定科目から直接、減価償却費を差し引く方法を<span className="underline font-color2">直接法</span>、また、固定資産の資産としての金額を直接減らすのではなく、新たに<span className="underline font-color2">減価償却累計額</span>という勘定科目を用いて、価値の減少分を記録する方法を<span className="underline font-color2">間接法</span>と呼び、簿記3級では間接法が範囲となります。</div>
	    		<br />
	    		<div>例えば、200,000円のパソコン（耐用年数4年）を現金で購入し、定額法（間接法）を採用した場合の仕訳は以下の通りとなります。</div>
	    		<br />
	    		<table border="1" cellspacing="0" className="table-color">
				<tr>
					<th className="table-align">借方（運用形態）</th>
					<th className="table-align">貸方（調達源泉）</th>
				</tr>
				<tr>
					<td className="table-align">工具器具備品　200,000</td>
					<td className="table-align">現金　200,000</td>
				</tr>
				<tr>
					<td className="table-align">減価償却費　50,000</td>
					<td className="table-align">減価償却累計額　50,000</td>
				</tr>
			</table>
			<br />
			<div className="explanation-wrapper">
				<div>■　仕訳の手順　■</div>
				<br />
				<div>200,000円のパソコン（耐用年数4年）を現金で購入し、定額法（間接法）を採用した</div>
				<br />
				<div>１.パソコンの資産としての計上</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：200,000万のパソコン</div>
				<div>なぜ発生したか（貸方）：現金にて支払いを行ったため</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：20万円を超えるパソコンの支払いとなるため、工具器具備品で処理</div>
				<div>なぜ発生したか（貸方）：現金での支払いとなるため、現金で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：工具器具備品という資産が増加するため、借方に工具器具備品を配置</div>
				<div>なぜ発生したか（貸方）：現金という資産が減少するため、貸方に現金を配置</div>
				<br />
				<div>２.パソコンの減価償却</div>
				<br />
				<div>①因果分析</div>
				<div>最終的に発生したもの（借方）：パソコンは耐用年数4年の設定となっているため、4年間は利用している分価値を生み続けます。そこで、1年間にいくら費用化出来るかを計算すると、200,000円/4年=50,000円となることから、50,000円の減価償却費が発生します</div>
				<div>なぜ発生したか（貸方）：工具器具備品200,000円のうち、50,000円が価値減少分として計上されます</div>
				<br />
				<div>②勘定科目の割当</div>
				<div>最終的に発生したもの（借方）：固定資産の費用計上分となるため、減価償却費で処理</div>
				<div>なぜ発生したか（貸方）：パソコンの価値減少分となり、かつ間接法であることから減価償却累計額で処理</div>
				<br />
				<div>③勘定科目の配置</div>
				<div>最終的に発生したもの（借方）：減価償却費という費用が増加するため、借方に減価償却費を配置</div>
				<div>なぜ発生したか（貸方）：間接法のため、固定資産のマイナスの評価勘定である減価償却累計額を貸方に配置</div>
			</div>
			<br />
		</section>
	    
	    	<section className="font-color">
			<Element name="non-current-assets-grade3-4" className="element" >
				<h1 className="intro">固定資産売却時の会計処理</h1>	
			</Element>
	    		<div>固定資産は購入後、売却することで差額分が利益、もしくは損失として計上されます。</div>
	    		<div>固定資産売却時に得た利益を<span className="underline font-color2">固定資産売却益</span>、損失分を<span className="underline font-color2">固定資産売却損</span>と呼びます。</div>
	    		<br />
	    		<div>例えば、100,000円で購入したパソコンにプレミアがついたため、150,000円で売却し、現金を得たという場合、以下のような仕訳となります。</div>
			<br />
	    		<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align table-size-50">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align" rowspan="2">現金　150,000</td>
						<td className="table-align">工具器具備品　100,000</td>
					</tr>
	    				<tr>
						<td className="table-align">固定資産売却益　50,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>100,000円で購入したパソコンにプレミアがついたため、150,000円で売却し、現金を得た</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金150,000円の増加</div>
					<div>なぜ発生したか（貸方）：100,000円で購入したパソコンを売却したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の増加になることから、現金で処理</div>
					<div>なぜ発生したか（貸方）：パソコンの売却になるため、工具器具備品で処理。また、購入時と売却時の差額は、固定資産売却益で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するため、借方に現金を配置します</div>
					<div>なぜ発生したか（貸方）：工具器具備品という資産が減少するため、貸方に工具器具備品を配置します。また、固定資産売却益という収益が増加するため、貸方に固定資産売却益を配置します。</div>
				</div>
	    		<br />
	    		<div>逆に、100,000円で購入したパソコンを50,000円で売却し、現金を得たという場合、以下のような仕訳となります。</div>
			<br />
	    		<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align table-size-50">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金　50,000</td>
						<td className="table-align" rowspan="2">工具器具備品　100,000</td>
					</tr>
	    				<tr>
						<td className="table-align">固定資産売却損  50,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>100,000円で購入したパソコンを50,000円で売却し、現金を得た</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金50,000円の増加</div>
					<div>なぜ発生したか（貸方）：100,000円で購入したパソコンを売却したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の増加になることから、現金で処理</div>
					<div>なぜ発生したか（貸方）：パソコンの売却になるため、工具器具備品で処理。また、購入時と売却時の差額は、固定資産売却損で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するため、借方に現金を配置します</div>
					<div>なぜ発生したか（貸方）：工具器具備品という資産が減少するため、貸方に工具器具備品を配置します。また、固定資産売却損という費用が増加するため、貸方に固定資産売却損を配置します。</div>
				</div>
	    		<br />
		</section>
	    
	    	<section className="font-color">
			<Element name="non-current-assets-grade3-5" className="element">
				<h1 className="intro">資本的支出・収益的支出とは</h1>	
			</Element>
	    		<div>固定資産は購入後もメンテンナンス費用など、様々な費用が発生するという性質を持っています。</div>
			<div>このような支払いのうち、リフォームや耐用年数を上げる工事のような、固定資産そのものの価値を上げる支払いのことを<span className="underline font-color2">資本的支出</span>と呼びます。</div>
	    		<br />
	    		<div>一方、割れた窓ガラスの修理代など、マイナスになった建物の価値を0に戻すような支払いのことを<span className="underline font-color2">収益的支出</span>と呼びます。</div>
	    		<div>資本的支出の場合、その支出額は新たに固定資産勘定科目にて仕訳を行うことで、固定資産の取得原価に加算する形を取ります。</div>
	    		<div>一方、収益的支出の場合、その支出額は<span className="underline font-color2">修繕費</span>として処理を行います。</div>
			<br />
	    		<div>例えば、建物の工事代金10,000円を現金で支払った。ただし、6,000円分が新たに設備を追加するための費用、残り4,000円分が水道の修理費用であったという場合、以下の仕訳となります。</div>
			<br />
	    		<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">建物　6,000</td>
						<td className="table-align" rowspan="2">現金　10,000</td>
					</tr>
	    				<tr>
						<td className="table-align">修繕費　4,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>建物の工事代金10,000円を現金で支払った。ただし、6,000円分が新たに設備を追加するための費用、残り4,000円分が水道の修理費用であった</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：6,000円の設備追加費用と4,000円の修理費用</div>
					<div>なぜ発生したか（貸方）：現金10,000円を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：設備追加費用分は建物の価値自体を増額する支払いになることから、資本的支出に該当します。よって、建物として処理をします。一方、修理費用については収益的支出に該当することから、、修繕費として処理します。</div>
					<div>なぜ発生したか（貸方）：現金での支払いになることから、現金で処理します</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：6,000円分、建物の資産としての価値が増額するため、借方に建物を計上します。また、4,000円分、修繕費という費用が増加するため、借方に修繕費を計上します。</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するため、貸方に現金を配置します</div>
				</div>
	    		<br />
		</section> 	
        </>
    );
}

const NonCurrentAssetsGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		<Title title="固定資産とは"/>
        <section>
            <article>
            <div></div>
            <div>固定資産を購入した際に発生する手数料などの費用を付随費用と言い、原則は固定資産の取得原価に加えます。</div>
	    <div>取得原価＝購入代価（固定資産の本体価格）＋付随費用</div>
	    <div>固定資産の購入に際して、手数料や運送費、据付費などの付随費用が発生する場合があります。これらの付随費用は固定資産の取得原価に含めて処理します。</div>
	    <div>他にも、固定資産を使用できる状態にするための支出額（中古建物の内装工事代や土地の整地費用など）も付随費用として取得原価に含めます。</div>
            <div>固定資産は以下の種類があります。</div>
            
            <table border="1" cellspacing="0" className="journal">
                <caption className="question">固定資産の分類</caption>
                <tr>
                    <th></th>
                    <th>固定資産の種類</th>
                    <th>具体例</th>
                </tr>
                <tr>
                    <td></td>
                    <td>有形固定資産</td>
                    <td>建物、土地、工具器具備品、車両運搬具</td>
                </tr>
                <tr>
                    <td>固定資産</td>
                    <td>無形固定資産</td>
                    <td>著作権、特許権、のれん</td>
                </tr>
                <tr>
                    <td></td>
                    <td>投資その他の資産</td>
                    <td></td>
                </tr>
            </table>

            </article>
        </section>

        <Title title="減価償却とは"/>
        <section>
            <article>
                <div>固定資産は、使用することによって価値が減少します。例えば、新車は買った時はピカピカでも、1年、2年と年数がたつにつれ、使用によるキズや傷みが出てきて、買った時と同じ価値ではなくなってしまいます。そのため、売却使用としても、買った時よりも安い値段で売ることになります。</div>
                <div>固定資産を仕事で使っている場合、この価値の減少は、あくまでも売上という収益を獲得するために発生しています。そのため、費用として計上する必要があります。</div>
                <div>この固定資産の価値の減少のことを減価償却といい、減価償却費という費用の勘定科目で処理をします。</div>
                <div>定額法</div>
                <div>毎年の減価償却費を定額で計上する方法</div>
                <div>減価償却費＝(取得原価ー残存価額)/耐用年数</div>

		<div>建物や備品などの固定資産は長年使用しているうちにどんどん劣化していき、その価値は減少していきます。にもかかわらず、何も処理をしないと帳簿上の固定資産の金額はいつまでも購入時の金額のままです。</div>
		<div>この価値の減少を見積もり、費用として計上するための手続きを減価償却（げんかしょうきゃく）といいます。なお、この減価償却という手続きは決算に行います。</div>
		<div>有形固定資産の中でも「土地」は使用や時の経過によって価値が減少するものではないと考えられるので減価償却を行いません。「土地」のように減価償却を行わない資産のことを非（減価）償却資産といいます。</div>
		<div>減価償却によって計上された費用は減価償却費（げんかしょうきゃくひ）という勘定で処理します。</div>
		<div>固定資産の利用期間に応じて毎期同じ額づつ減価償却（費用化）していく方法を定額法といいます。</div>
		<div>次の資料に基づいて建物の減価償却費を定額法によって計算しなさい。なお、当期は×2年3月31日を決算日とする１年間である。
			【資料】

			取得日：×1年4月1日
			取得原価：￥120,000
			耐用年数：20年
			残存価額：取得原価の10％</div>
		<div>耐用年数（たいようねんすう）：固定資産の使用可能な期間のことで、この耐用年数にわたって減価償却を行っていきます。つまり、例題では20年で建物を償却する（費用化する）ということになります。</div>
		<div>帳簿価額（簿価）：取得原価からそれまでの減価償却費の累計額を差し引いた金額。</div>
		<div>残存価額（ざんぞんかがく）：耐用年数が経過した後の処分価値（簿価）のこと。</div>
		<div>耐用年数が経過した後（20年後）も残存価額の分だけ価値が残っているわけですから、残存価額は減価償却（費用化）しないということになります。</div>
		<div>減価償却費＝（取得原価－残存価額）÷耐用年数</div>
		<div>当期に1年間使用した固定資産と1か月しか使用していない固定資産とでは、当然1年間使用したものの方が価値の減少は大きくなるはずです。</div>
		<div>このように、価値の減少は固定資産の利用や時の経過にともなって発生するものなので、減価償却費も固定資産の利用期間に応じて計算すべきということになります。</div>
		<div>したがって固定資産を期中に取得した場合、通常は減価償却費を取得日（利用開始日）から決算日までの月割で計算します。</div>
		<div>次の資料に基づいて建物の減価償却費を定額法によって計算しなさい。なお、当期は×2年3月31日を決算日とする1年間である。</div>
		<div>【資料】

		取得日：×1年7月1日
		得原価：￥120,000
		耐用年数：20年
		残存価額：取得原価の10％
		</div>
		<div>定額法では、耐用年数の代わりに償却率（しょうきゃくりつ）を使って計算する方法もあります。</div>
		<div>償却率を使って減価償却費を計算する場合は（取得原価ー残存価額）に償却率をかけて1年分の減価償却費を計算します（期中取得の場合は月割で計算します）。</div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	
            </article>
        </section>

        <Title title="有形固定資産の会計処理（直接法）"/>
        <section>
            <article>
            <div>固定資産の購入は、資産の計上になるので費用にならないという問題があります。そこで、耐用年数（Service Life）に応じて、価値の減少に伴い一定額を費用化することとなっています。</div>
            <div>有形固定資産（ゆうけいこていしさん）とは、営業活動のために長期間にわたって使用するために保有する有形の資産のことをいいます。</div>
	    <div>減価償却累計額とはその名のとおり、取得してから期末までの減価償却費の累計額（合計額）です。なお、仕訳では「○○減価償却累計額」という勘定科目を使います（○○の部分には固定資産の名称が入ります）。</div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">土地を￥100,000で購入し、代金は手数料￥5,000とともに現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>
	</article>
        </section>

	<Title title="有形固定資産の会計処理（間接法）"/>
        <section>
            <article>
            <div>間接法とは、価値の減少分を固定資産の取得原価から直接減少させずに、減価償却累計額（げんかしょうきゃくるいけいがく）勘定を使って間接的に控除する方法を言います。</div>
            <div>間接法では価値の減少分を固定資産の取得原価から直接減額しないので、固定資産の帳簿上の金額は取得原価のままということになります。</div>
	    <div>なお、営業で使用する目的以外で購入した場合は固定資産として処理しないので注意してください。例えば、自動車販売業を営んでいる会社が「販売目的」で自動車を購入した場合は、通常の商品売買の処理（商品の仕入れ）となります。</div>
	　　<div>1会計期間の価値の減少分は減価償却費として毎期計上されるので、減価償却累計額は取得してから当期末までの価値の減少額ということができます。</div>
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">決算につき、次の資料に基づいて建物の減価償却を行う。なお、当期は×2年3月31日を決算日とする1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>

	<div>
		【資料】
		取得日：×1年4月1日
		取得原価：￥120,000
		耐用年数：20年
		残存価額：取得原価の10％
		償却方法：定額法
		記帳方法：間接法
	</div>

	<div>減価償却累計額は資産のマイナスとしての性質を有するので貸方の科目です。したがって増加すれば貸方に、減少すれば借方に記入します。</div>
	<div>減価償却累計額のように、資産の実質的な価値を表すためにその資産の金額を間接的に控除（減額）するために用いる勘定のことを評価勘定（ひょうかかんじょう）といいます。</div>
	<div>貸借対照表の表示方法（×1年度末）</div>
	<div>取得原価から減価償却累計額を控除したものが実質的な価値、すなわち帳簿価額（簿価）となります。</div>
	<div>減価償却累計額は仕訳では貸方に表示されますが、貸借対照表上は貸方に表示せずに固定資産から控除する形で借方に表示します。</div>
	<div>要するに間接法では、取得したときの金額（取得原価）を明示しつつ、そこからこれだけ価値が減少しましたよ（減価償却累計額）という形で表示するというわけです。</div>
	<div>取得してから2年目以降の処理
	決算につき、次の資料に基づいて建物の減価償却を行う。なお、当期は×3年3月31日を決算日とする1年間である。
	【資料】

	取得日：×1年4月1日
	取得原価：￥120,000
	耐用年数：20年
	残存価額：取得原価の10％
	償却方法：定額法
	記帳方法：間接法
	</div>
	<div>例題1（取得年度）では取得日～決算日までの期間で減価償却を行いますが、2年目以降は期首～決算日までの期間で減価償却を行います。</div>
	<div>ただし、例題1も2も減価償却費の計算期間は1年間なので仕訳は同じになります</div>
	<div></div>
	<div>月次決算における減価償却費の計上
	月次決算につき、建物について減価償却費を見積り月割計上を行う。なお、建物は以下の要領で減価償却を行う。
	取得原価：￥120,000
	耐用年数：20年
	残存価額：取得原価の10％
	償却方法：定額法
	記帳方法：間接法</div>
	<div>月次決算における減価償却費は1年間の金額を12で割ればいいだけなので特に問題ないと思います。</div>
	<div>取得原価￥120,000×0.9÷耐用年数20年×1/12＝減価償却費￥450</div>
	<div></div>
	<div></div>
		
	</article>
        </section>

	<Title title="減価償却が発生しない有形固定資産の売却時の会計処理"/>
        <section>
            <article>
            <div>固定資産の帳簿上の金額（簿価）と売却額が同じであるとは限りません。例えば、みなさんご存知のように土地の価格は上がったり下がったり変動します。</div>
            <div>このような固定資産の簿価と売却額との差額は固定資産売却損（費用）または固定資産売却益（収益）として処理します。</div>
	    <div>保有している固定資産が値下がりして「売却価額＜簿価」となった場合、両者の差額を固定資産売却損勘定で処理します。</div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">土地￥105,000を￥110,000で売却し、代金は当座預金に振り込まれた。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>
	</article>
        </section>

	<Title title="減価償却が発生する有形固定資産の売却時の会計処理"/>
        <section>
            <article>
            <div>「土地」のように減価償却を行わない場合、減価償却累計額がないため（価値が減少しないため）実質的な価値を表す帳簿価額（簿価）は取得原価と一致します。</div>
            <div>しかし減価償却があるケース（固定資産の価値が減少するケース）では、購入してまだ間もない新品同様の固定資産と何十年も使用してきた固定資産とではその価値（簿価）が異なるため、売却時点における固定資産の価値の減少分を考慮しなければなりません。</div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">×6年4月1日に建物（取得原価￥120,000、期首減価償却累計額￥20,000、間接法で記帳）を￥110,000で売却し、代金は当座預金口座に振り込まれた。なお、当期は×7年3月31日で終了する１年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>
	<div>建物を売却したので、「建物」とこれに係る「建物減価償却累計額」を減額させます。また、簿価と売却価額との差額を固定資産売却損（借方）または固定資産売却益（貸方）で処理します。</div>
	<div>固定資産を売却した場合は、その固定資産に係る減価償却累計額も同時に減額させるという点に注意してください。</div>
	<div></div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">×6年6月30日に建物（取得原価￥120,000、期首減価償却累計額￥20,000、間接法で記帳）を￥110,000で売却し、代金は当座預金口座に振り込まれた。建物は残存価額を取得原価の10％、耐用年数を20年とする定額法で償却している。なお、当期は×7年3月31日で終了する１年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>
	<div>期中に売却した場合は、期首から売却日までの利用期間に対応した価値の減少分を売却時に減価償却費として計上します</div>
	</article>
        </section>

        <Title title="資本的支出・収益的支出とは"/>
        <section>
            <article>
            <div>建物を耐震構造にしたり壁を防音・防火加工するなど、固定資産の改良や耐用年数の延長によって、その価値を増加させる支出のことを資本的支出といいます。</div>
            <div>壁や屋根の補修や修繕など、当初予定された耐用年数や機能を維持するための支出を収益的支出といいます。</div>
	    <div>資本的支出は固定資産の取得原価に含めて処理します</div>
            <div>収益的支出は修繕費勘定（費用）で処理します。</div>

		<table border="1" cellspacing="0" className="journal">
                <caption className="question">建物の改修工事を行い、￥100,000を小切手を振り出して支払った。このうち、￥70,000は耐用年数を延長させる改良のための支出であり、残りは定期的修繕のための支出である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>
            <div>改良のための支出は資本的支出に該当するので建物の取得原価に含めます（資産計上）。また、定期的修繕のための支出は収益的支出に該当するので修繕費勘定で処理します（費用計上）。</div>
            <div></div>
	    <div></div>
            <div></div>
	</article>
        </section>

        <Title title="圧縮記帳とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="無形固定資産の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="固定資産の減損処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="共用資産の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="のれんの会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="資産除去債務とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>
                </article>
            </section>
        </>
    );
}

const NonCurrentAssetsGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const nonCurrentAssetsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
				<Link to="/non-current-assets-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/non-current-assets-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/non-current-assets-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
				<ul>
					<li className="table-of-contents">目次</li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-1" spy={true} smooth={true} duration={500} >固定資産とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-2" spy={true} smooth={true} duration={500} >減価償却とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-3" spy={true} smooth={true} duration={500} >定額法とは</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-4" spy={true} smooth={true} duration={500} >固定資産売却時の会計処理</ScrollLink></li>
					<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="non-current-assets-grade3-5" spy={true} smooth={true} duration={500} >資本的支出・収益的支出について</ScrollLink></li>
				</ul>
                </aside>
                <NonCurrentAssetsGrade3 />
            </aside>
        </main>
    );
}

const nonCurrentAssetsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
				<div className="level_change_wrapper">
					<Link to="/non-current-assets-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
					<Link to="/non-current-assets-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
					<Link to="/non-current-assets-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
				</div>
				<NonCurrentAssetsGrade2 />
            </aside>
        </main>
    );
}

const nonCurrentAssetsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
				<div className="level_change_wrapper">
					<Link to="/non-current-assets-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
					<Link to="/non-current-assets-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
					<Link to="/non-current-assets-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
				</div>
                <NonCurrentAssetsGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜無形固定資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const IntangibleAssetsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const intangibleAssetsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <IntangibleAssetsGrade3 />
            </aside>
        </main>
    );
}

const intangibleAssetsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <IntangibleAssetsGrade3 />
            </aside>
        </main>
    );
}

const intangibleAssetsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <IntangibleAssetsGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜無形固定資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産の減損コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const BookImpairmentGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const bookImpairmentGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <BookImpairmentGrade3 />
            </aside>
        </main>
    );
}

const bookImpairmentGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <BookImpairmentGrade3 />
            </aside>
        </main>
    );
}

const bookImpairmentGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <BookImpairmentGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産の減損コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜投資その他の資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const InvestmentsAndOtherAssetsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const investmentsAndOtherAssetsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <InvestmentsAndOtherAssetsGrade3 />
            </aside>
        </main>
    );
}

const investmentsAndOtherAssetsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <InvestmentsAndOtherAssetsGrade3 />
            </aside>
        </main>
    );
}

const investmentsAndOtherAssetsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <InvestmentsAndOtherAssetsGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜投資その他の資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜繰延資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const DeferredAssetsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const deferredAssetsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <DeferredAssetsGrade3 />
            </aside>
        </main>
    );
}

const deferredAssetsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <DeferredAssetsGrade3 />
            </aside>
        </main>
    );
}

const deferredAssetsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <DeferredAssetsGrade3 />
            </aside>
        </main>
    );
}


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜繰延資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */




/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜リース取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const LeaseGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const LeaseGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const LeaseGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const leaseGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/lease-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/lease-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/lease-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <LeaseGrade3 />
            </aside>
        </main>
    );
}

const leaseGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/lease-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/lease-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/lease-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <LeaseGrade2 />
            </aside>
        </main>
    );
}

const leaseGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/lease-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/lease-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/lease-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <LeaseGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜リース取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜外貨建取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ForeignCurrencyGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const ForeignCurrencyGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const ForeignCurrencyGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const foreignCurrencyGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/foreign-currency-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/foreign-currency-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/foreign-currency-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ForeignCurrencyGrade3 />
            </aside>
        </main>
    );
}

const foreignCurrencyGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/foreign-currency-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/foreign-currency-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/foreign-currency-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ForeignCurrencyGrade3 />
            </aside>
        </main>
    );
}

const foreignCurrencyGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/foreign-currency-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/foreign-currency-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/foreign-currency-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <ForeignCurrencyGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜外貨建取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜資産除去債務コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AssetRetirementObligationsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const assetRetirementObligationsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AssetRetirementObligationsGrade3 />
            </aside>
        </main>
    );
}

const assetRetirementObligationsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AssetRetirementObligationsGrade3 />
            </aside>
        </main>
    );
}

const assetRetirementObligationsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AssetRetirementObligationsGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜資産除去債務コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜収益と費用コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ProfitAndLossGrade3 = () => {
    return (
        <>
		<section className="font-color">
			<Element name="profit-and-loss-grade3-1" className="element" >
				<h1 className="intro">消耗品費の会計処理</h1>	
			</Element>
			<div>ボールペンやティッシュペーパー、ゴミ袋の購入費用など、10万円未満の「使ったらなくなる」という性質をもつ資産の支払いに発生した費用を<span className="underline font-color2">消耗品費</span>と呼びます。</div>
	    		<br />
			<div>消耗性をもつ資産は、資産としての性質も、費用としての性質もどちらも兼ね備えています。</div>
	    		<div>そのため、先に資産として計上するか、費用として計上するかを記帳者に委ねています。</div>
	    		<br />
			<div>もし、先に資産として計上する場合は、<span className="underline font-color2">消耗品</span>、費用として計上する場合は<span className="underline font-color2">消耗品費</span>として処理を行います。</div>    
			<br />
				<div>例えば、ゴミ袋を30枚セットで10,000円で購入し、現金で支払ったという場合、資産の計上を先に扱うのであれば、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">消耗品 10,000</td>
						<td className="table-align">現金 10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>ゴミ袋を30枚セットで10,000円で購入し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：ゴミ袋料金10,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：ゴミ袋が手元に残るので、消耗品で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：消耗品という資産が増加するので、借方に消耗品を追加</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>次に、決算時にゴミ袋の枚数を確認したところ、3,000円分が残っていたことがわかった場合、以下の振替を行います。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">消耗品費 7,000</td>
						<td className="table-align">消耗品 7,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>決算時にゴミ袋の枚数を確認したところ、3,000円分が残っていたことがわかった</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：1年間に使った金額は、10,000 - 3,000 = 7,000円であるから、7,000円のゴミ袋代が経費として発生している</div>
					<div>なぜ発生したか（貸方）：1年間に7,000円分のゴミ袋を使用したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：使ったゴミ袋の分、経費を計上するので消耗品費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：消耗品費という費用が増加するので、借方に消耗品費を追加</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>次に、費用を先に計上する方法を見ていきます。</div>
				<div>ゴミ袋を30枚セットで10,000円で購入し、現金で支払ったという場合、費用の計上を先に扱うのであれば、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">消耗品費 10,000</td>
						<td className="table-align">現金 10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>ゴミ袋を30枚セットで10,000円で購入し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：ゴミ袋料金10,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：ゴミ袋の経費が発生しているので、消耗品費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：消耗品費という費用が増加するので、借方に消耗品費を追加</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>また、決算時にゴミ袋の枚数を確認したところ、3,000円分が残っていたことがわかった場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">消耗品 3,000</td>
						<td className="table-align">消耗品費 3,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>ゴミ袋を30枚セットで10,000円で購入し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：未使用のゴミ袋3,000円</div>
					<div>なぜ発生したか（貸方）：ゴミ袋の料金を支払っていたため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：未使用のゴミ袋が手元に残るので、消耗品で処理</div>
					<div>なぜ発生したか（貸方）：一度経費として計上した金額から、未使用分の金額を引いた消耗品費を計上するため、消耗品費で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：消耗品という資産が増加するので、借方に消耗品を追加</div>
					<div>なぜ発生したか（貸方）：消耗品費という費用が減少するので、貸方に消耗品費を配置</div>
				</div>

	    		<Element name="profit-and-loss-grade3-2" className="element" >
				<h1 className="intro">旅費交通費の会計処理</h1>	
				</Element>
	    		<div>仕事のために利用した電車代やバス代などの費用を<span className="underline font-color2">旅費交通費</span>と呼びます。</div>
				<br />
				<div>例えば、電車代が500円発生し、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">旅費交通費 500</td>
						<td className="table-align">現金 500</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>電車代が500円発生し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：電車代500円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：電車代の支払いになるので、旅費交通費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：旅費交通費という費用が増加するので、借方に旅費交通費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

	    		<Element name="profit-and-loss-grade3-3" className="element" >
				<h1 className="intro">通信費の会計処理</h1>	
				</Element>
	    		<div>電話料金、インターネットの通信料金、クラウドソフトの利用料金など、通信にかかった費用を<span className="underline font-color2">通信費</span>と呼びます。</div>
				<br />
				<div>例えば、インターネット通信料が4,000円発生し、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">通信費 4,000</td>
						<td className="table-align">現金 4,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>インターネット通信料が4,000円発生し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：インターネット通信料金4,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：インターネット通信料金の支払いになるので、通信費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：通信費という費用が増加するので、借方に通信費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

	    		<Element name="profit-and-loss-grade3-4" className="element" >
				<h1 className="intro">水道光熱費の会計処理</h1>	
				</Element>
	    		<div>水道代、ガス代、電気代をまとめて<span className="underline font-color2">水道光熱費</span>と呼びます。</div>
				<br />
				<div>例えば、水道代が3,000円発生し、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">水道光熱費 3,000</td>
						<td className="table-align">現金 3,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>水道代が3,000円発生し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：水道代3,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：水道代の支払いになるので、水道光熱費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：水道光熱費という費用が増加するので、借方に水道光熱費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-5" className="element" >
				<h1 className="intro">広告宣伝費の会計処理</h1>	
				</Element>
	    		<div>テレビ、新聞、雑誌、インターネットなどのメディアへの掲載料など、様々な広告にかかる料金や宣伝費用を<span className="underline font-color2">広告宣伝費</span>と呼びます。</div>
				<br />
				<div>例えば、雑誌への広告掲載料が50,000円発生し、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">広告宣伝費 50,000</td>
						<td className="table-align">現金 50,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>雑誌への広告掲載料が50,000円発生し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：雑誌への広告掲載料金50,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：雑誌への広告掲載料金の支払いになるので、広告宣伝費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：広告宣伝費という費用が増加するので、借方に広告宣伝費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-6" className="element" >
				<h1 className="intro">給料手当の会計処理</h1>	
				</Element>
	    		<div>従業員に支払った給料を処理する勘定科目を<span className="underline font-color2">給料手当</span>と呼びます。</div>
	    		<div>もしくは単に、給料や給与と呼ぶこともあります。</div>
	    		<br />
	    		<div>給料を支払う場合、一般的には源泉所得税の徴収を行ったり、社会保険料を事前に差し引いた形で支払いを行います。</div>
	    		<br />
	    		<div>そのため、実際に仕訳を行う場合には、総支給額を<span className="underline font-color2">給料手当</span>、源泉徴収分や社会保険料の差し引き分を<span className="underline font-color2">預り金</span>として登録することが必要となります。</div>
				<br />
				<div>例えば、従業員への給料が210,000円発生した。ただし、源泉所得税が15,000円、社会保険料が10,000円発生していたため、これらを事前に控除して現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align" rowspan="3">給料手当 210,000</td>
						<td className="table-align">預り金 15,000</td>
					</tr>
					<tr>
						<td className="table-align">預り金 10,000</td>
					</tr>
					<tr>
						<td className="table-align">現金 185,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>従業員への給料が210,000円発生した。ただし、源泉所得税が15,000円、社会保険料が10,000円発生していたため、これらを事前に控除して現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：従業員への給料210,000円（総支給額）</div>
					<div>なぜ発生したか（貸方）：源泉所得税や社会保険料を控除した金額にて、現金（手取り）を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：従業員への給料の支払いになるので、給料手当で処理</div>
					<div>なぜ発生したか（貸方）：会社負担分の源泉所得税や社会保険料は、後日税務署に納める金額になるため、預り金で処理。また、残りの手取り金額は現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：給料手当という費用が増加するので、借方に給料手当を配置</div>
					<div>なぜ発生したか（貸方）：預り金という負債が増加するので、貸方に預り金を配置。また、現金という資産が減少するので、貸方に現金を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-7" className="element" >
				<h1 className="intro">法定福利費の会計処理</h1>	
				</Element>
	    		<div>健康保険や厚生年金保険料、雇用保険料、労災保険料などの支払いで発生した費用を<span className="underline font-color2">法定福利費</span>と呼びます。</div>
				<br />
				<div>例えば、従業員の健康保険料として会社負担分が15,000円発生し、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">法定福利費 15,000</td>
						<td className="table-align">現金 15,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>従業員の健康保険料として、会社負担分が15,000円発生し、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：従業員の健康保険料15,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：従業員の健康保険料の支払いになるので、法定福利費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：法定福利費という費用が増加するので、借方に法定福利費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-8" className="element" >
				<h1 className="intro">福利厚生費の会計処理</h1>	
				</Element>
	    		<div>結婚祝いの支払いや慰安旅行の費用など、役員・従業員のために支払われる費用を<span className="underline font-color2">福利厚生費</span>と呼びます。</div>
				<br />
				<div>例えば、従業員に結婚祝い金を30,000円、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">福利厚生費 30,000</td>
						<td className="table-align">現金 30,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>従業員に結婚祝い金を30,000円、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：従業員の結婚祝い金30,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：従業員の結婚祝い金の支払いになるので、福利厚生費で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：福利厚生費という費用が増加するので、借方に福利厚生費を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-9" className="element" >
				<h1 className="intro">家賃の会計処理</h1>	
				</Element>
	    		<div>建物を借りている場合に発生する家賃の費用を<span className="underline font-color2">支払家賃</span>、建物を貸している場合に発生する家賃の収益を<span className="underline font-color2">受取家賃</span>と呼びます。</div>
				<br />
				<div>例えば、家賃を60,000円、現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">支払家賃 60,000</td>
						<td className="table-align">現金 60,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>家賃を60,000円、現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：家賃60,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：家賃の支払いになるので、支払家賃で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：支払家賃という費用が増加するので、借方に支払家賃を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
				<br />
				<div>逆に、不動産賃貸業をメインとしていない事業者が、建物の空き部屋を貸付け、家賃を60,000円、現金で受け取ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金 60,000</td>
						<td className="table-align">受取家賃 60,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>不動産賃貸業をメインとしていない事業者が、建物の空き部屋を貸付け、家賃を60,000円、現金で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金60,000円</div>
					<div>なぜ発生したか（貸方）：家賃を受け取ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の受取になるので、現金で処理</div>
					<div>なぜ発生したか（貸方）：家賃という収益が発生しているため、受取家賃で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：受取家賃という収益が増加するので、貸方に受取家賃を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-10" className="element" >
				<h1 className="intro">地代の会計処理</h1>	
				</Element>
	    		<div>土地を借りている場合に発生する土地の費用を<span className="underline font-color2">支払地代</span>、土地を貸している場合に発生する土地の収益を<span className="underline font-color2">受取地代</span>と呼びます。</div>
				<br />
				<div>例えば、営業用の土地を月額60,000円で借りており、当月分を現金で支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">支払地代 60,000</td>
						<td className="table-align">現金 60,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>営業用の土地を月額60,000円で借りており、当月分を現金で支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：土地を借りた代金60,000円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：土地の借入の支払いになるので、支払地代で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：支払地代という費用が増加するので、借方に支払地代を配置</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
	    			<br />
				<div>逆に、不動産賃貸業をメインとしていない事業者が、土地を貸付け、60,000円を現金で受け取ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金 60,000</td>
						<td className="table-align">受取地代 60,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>不動産賃貸業をメインとしていない事業者が、土地を貸付け、60,000円を現金で受け取った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金60,000円</div>
					<div>なぜ発生したか（貸方）：土地の貸付による収入を受け取ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の受取になるので、現金で処理</div>
					<div>なぜ発生したか（貸方）：地代という収益が発生しているため、受取地代で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：受取地代という収益が増加するので、貸方に受取地代を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-11" className="element" >
				<h1 className="intro">手数料の会計処理</h1>	
				</Element>
				<div>小売業を営む事業者が、不動産の仲介手数料を得た場合など、本業以外の活動から発生した収入を、<span className="underline font-color2">受取手数料</span>と呼びます。</div>
				<br />
				<div>一方、金融機関への振込にかかる手数料などで発生した費用を<span className="underline font-color2">支払手数料</span>と呼びます。</div>
				<br />
				<div>例えば、口座振り込みにて、取引先への支払いを行った際に200円の手数料が発生し、普通預金口座から支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">支払手数料 200</td>
						<td className="table-align">普通預金 200</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>口座振り込みにて、取引先への支払いを行った際に200円の手数料が発生し、普通預金口座から支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：口座振り込みに係る手数料200円</div>
					<div>なぜ発生したか（貸方）：普通預金を使って振り込みを行ったため、</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：手数料の支払いになるので、支払手数料で処理</div>
					<div>なぜ発生したか（貸方）：普通預金口座での支払いになるので、普通預金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：支払手数料という費用が増加するので、借方に支払手数料を配置</div>
					<div>なぜ発生したか（貸方）：普通預金という資産が減少するので、貸方に普通預金を配置</div>
				</div>
	    			<br />
				<div>逆に、本業以外の事業にて、手数料による収入が200円発生し、普通預金に入金されたという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">普通預金 200</td>
						<td className="table-align">受取手数料 200</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>本業以外の事業にて、手数料による収入が200円発生し、普通預金に入金された</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：普通預金口座の200円の増加</div>
					<div>なぜ発生したか（貸方）：手数料による収入が上がったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：普通預金口座の残高増加になるので、普通預金で処理</div>
					<div>なぜ発生したか（貸方）：手数料という収益が発生しているため、受取手数料で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：普通預金という資産が増加するので、借方に普通預金を配置</div>
					<div>なぜ発生したか（貸方）：受取手数料という収益が増加するので、貸方に受取手数料を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-12" className="element" >
				<h1 className="intro">利息の会計処理</h1>	
				</Element>
				<div>お金を貸し付けることなどで発生した利息部分の収入を、<span className="underline font-color2">受取利息</span>と呼びます。</div>
				<br />
				<div>一方、お金を借りることなどで発生した、利息部分の費用を、<span className="underline font-color2">支払利息</span>と呼びます。</div>
				<br />
	    			<div>例えば、短期借入金の当月分の返済を5,000円、現金で支払った。なお、発生した利息は500円だったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">短期借入金 5,000</td>
						<td className="table-align" rowspan="2">現金 5,500</td>
					</tr>
	    				<tr>
						<td className="table-align">支払利息 500</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>1年以内に返済予定となっている借金の当月分の返済を5,000円、現金で支払った。なお、発生した利息は500円だった</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：借金の当月分の返済額5,000円と、利息の支払い500円</div>
					<div>なぜ発生したか（貸方）：現金を使ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：借金の返済になるので、短期借入金で処理。また、利息分に関しては支払利息で処理</div>
					<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：短期借入金という負債が減少するので、借方に短期借入金を配置。また、支払利息という費用が増加するので、借方に支払利息を追加</div>
					<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
				</div>
	    			<br />
				<div>逆に、1年以内に返済が予定されている貸付金について、当月分の返済があり、現金で受け取った。ただし、発生した利息分は500円であったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align"　rowspan="2">現金 5,500</td>
						<td className="table-align">短期貸付金 5,000</td>
					</tr>
	    				<tr>
						<td className="table-align">受取利息 500</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>1年以内に返済が予定されている貸付金について、当付分の返済があり、現金で受け取った。ただし、発生した利息分は500円であった</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金5,500円</div>
					<div>なぜ発生したか（貸方）：短期での貸付金という債権を行使したほか、貸付に伴う利息が発生したため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の受取になるので、現金で処理</div>
					<div>なぜ発生したか（貸方）：短期での貸付分の返済分になるため、短期貸付金で処理。また、貸付に伴う利息分を収益として得るため、受取利息で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：短期貸付金という資産が減少するので、貸方に短期貸付金を配置。また、受取利息という収益が増加するので、貸方に受取利息を配置</div>
				</div>

				<Element name="profit-and-loss-grade3-13" className="element" >
				<h1 className="intro">雑費と雑損失の会計処理</h1>	
				</Element>
				<div>発生した費用が、既存のどの費用勘定科目にも該当していなかった場合や、金額が少なく重要性が乏しいような支払いが発生した場合、<span className="underline font-color2">雑費</span>か<span className="underline font-color2">雑損失</span>で処理を行います。</div>
					<br />
				<div>違いは以下の通りです</div>
				<br />
				<table border="1" cellspacing="0" className="table-color">
				<tr>
				    <th className="table-size-30 table-align">勘定科目の名前</th>
				    <th className="table-align">どんなもの？</th>
				</tr>
				<tr>
				    <td className="table-align">雑費</td>
				    <td className="table-padding-1 table-align">営業活動で発生した少額かつ重要性の低い出費<br />（販売費及び一般管理費に該当）</td>
				</tr>
				<tr>
				    <td className="table-align">雑損失</td>
				    <td className="table-padding-1 table-align">営業活動以外で発生した少額かつ重要性の低い出費<br />（営業外費用に該当）</td>
				</tr>
				</table>
	    			<br />
	    			<div>それでは仕訳を見ていきましょう。</div>
	    			<div>事務所の引っ越しがあったため、業者に150,000円を普通預金口座より支払ったという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">雑費 150,000</td>
						<td className="table-align">普通預金 150,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>事務所の引っ越しがあったため、業者に50,000円を普通預金口座より支払った</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：一般管理費に該当する、少額の50,000円の支払い</div>
					<div>なぜ発生したか（貸方）：引っ越しの契約を行い、その代金を普通預金口座から支払ったため</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：一般管理費に属する少額の支払いになり、またその他適切な勘定科目がないと考え、雑費で処理</div>
					<div>なぜ発生したか（貸方）：普通預金口座からの支払いとなるため、普通預金で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：雑費という費用が増加するので、借方に雑費を配置</div>
					<div>なぜ発生したか（貸方）：普通預金という資産が減少するので、貸方に普通預金を配置</div>
				</div>
	    
				<Element name="profit-and-loss-grade3-14" className="element" >
				<h1 className="intro">雑収入の会計処理</h1>	
				</Element>
	    			<div>発生した収益が、営業外収益に該当するものの、既存のどの収益勘定科目にも該当していなかった場合や、金額が少なく重要性が乏しいような収益が発生した場合、<span className="underline font-color2">雑収入</span>で処理を行います。</div>
				<br />
	    			<div>例えば、事務所で不要になった物品を売却し、10,000円分現金を得たという場合、以下の仕訳となります。</div>
				<br />
	    			<table border="1" cellspacing="0" className="table-color">
					<tr>
						<th className="table-align">借方（運用形態）</th>
						<th className="table-align">貸方（調達源泉）</th>
					</tr>
					<tr>
						<td className="table-align">現金 10,000</td>
						<td className="table-align">雑収入 10,000</td>
					</tr>
				</table>
				<br />
				<div className="explanation-wrapper">
					<div>■　仕訳の手順　■</div>
					<br />
					<div>事務所で不要になった物品を売却し、10,000円分現金を得た</div>
					<br />
					<div>①因果分析</div>
					<div>最終的に発生したもの（借方）：現金10,000円の受取り</div>
					<div>なぜ発生したか（貸方）：営業外収益に該当するような、不要物品の売却に伴う収入</div>
					<br />
					<div>②勘定科目の割当</div>
					<div>最終的に発生したもの（借方）：現金の獲得になるため、現金で処理</div>
					<div>なぜ発生したか（貸方）：営業外収益に該当し、かつ少額で重要性が少ない収入であると考え、雑収入で処理</div>
					<br />
					<div>③勘定科目の配置</div>
					<div>最終的に発生したもの（借方）：現金という資産が増加するので、借方に現金を配置</div>
					<div>なぜ発生したか（貸方）：雑収入という収益が増加するので、貸方に雑収入を配置</div>
				</div>
	    	</section>
        </>
    );
}

const profitAndLossGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/profit-and-loss-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/profit-and-loss-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/profit-and-loss-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
	    	<aside className="subMenu">
                    <ul>
                        <li className="table-of-contents">目次</li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-1" spy={true} smooth={true} duration={500} >消耗品費の会計処理</ScrollLink></li>
                        <li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-2" spy={true} smooth={true} duration={500} >旅費交通費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-3" spy={true} smooth={true} duration={500} >通信費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-4" spy={true} smooth={true} duration={500} >水道光熱費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-5" spy={true} smooth={true} duration={500} >広告宣伝費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-6" spy={true} smooth={true} duration={500} >給料手当の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-7" spy={true} smooth={true} duration={500} >法定福利費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-8" spy={true} smooth={true} duration={500} >福利厚生費の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-9" spy={true} smooth={true} duration={500} >家賃の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-10" spy={true} smooth={true} duration={500} >地代の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-11" spy={true} smooth={true} duration={500} >手数料の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-12" spy={true} smooth={true} duration={500} >利息の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-13" spy={true} smooth={true} duration={500} >雑費と雑損失の会計処理</ScrollLink></li>
						<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="profit-and-loss-grade3-14" spy={true} smooth={true} duration={500} >雑収入の会計処理</ScrollLink></li>	
		　　　</ul>
                </aside>
                <ProfitAndLossGrade3 />
            </aside>
        </main>
    );
}

const profitAndLossGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/profit-and-loss-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/profit-and-loss-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
				<Link to="/profit-and-loss-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <ProfitAndLossGrade3 />
            </aside>
        </main>
    );
}

const profitAndLossGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/profit-and-loss-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
				<Link to="/profit-and-loss-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/profit-and-loss-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
			</div>
                <ProfitAndLossGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜収益と費用コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */


<span className="underline font-color2"></span>
/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜税金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const TaxGrade3 = () => {
    return (
        <>
            <section className="font-color">
		<Element name="non-current-assets-grade3-1" className="element" >
			<h1 className="intro">租税公課の会計処理</h1>	
		</Element>
		<div>国税や地方税のような税金を<span className="underline font-color2">租税</span>、各種証明書発行の際に発生する手数料など、国や地方公共団体から課せられる公的な課金のことを<span className="underline font-color2">公課</span>と呼びます。</div>
		<br />
	    	<div>対象となる支払いには以下のものがあります。</div>
		<br />
		<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align table-size-50">租税に該当する支払い</th>
				<th className="table-align">公課に該当する支払い</th>
			</tr>
			<tr>
				<td className="table-align table-padding-1">印紙税<br />自動車税<br />固定資産税<br />税込経理の場合に納付する消費税</td>
				<td className="table-align table-padding-1">延滞税などの罰金<br />商工会などの会費<br />国や地方公共団体が発行する各種証明書の発行費用</td>
			</tr>
		</table>
		<br />
	    	<div>例えば、収入印紙を10,000円、現金で購入したという場合、以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">租税公課 10,000</td>
				<td className="table-align">現金 10,000</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>収入印紙を10,000円、現金で購入した</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：10,000円分の収入印紙の購入代金</div>
			<div>なぜ発生したか（貸方）：現金で購入したため</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：収入印紙の購入代金は、印紙税法に定められた印紙税の納税として考えるため、租税公課で処理</div>
			<div>なぜ発生したか（貸方）：現金での購入になるので、現金で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：租税公課という費用が増加するので、借方に租税公課を配置</div>
			<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
		</div>
	    
	    	<Element name="non-current-assets-grade3-1" className="element" >
			<h1 className="intro">法人税の会計処理</h1>
		</Element>
	    	<div>法人は事業を運営することで獲得した利益に応じて、法人税、住民税、事業税などが発生します。</div>
	    	<div>この費用を処理する勘定科目を<span className="underline font-color2">法人税、住民税及び事業税</span>、もしくは<span className="underline font-color2">法人税等</span>と呼びます。</div>
	    	<br />
	    	<div>また、年1回の決算の会社などでは、事業年度の中間において、半年分の税金の前払いが必要となります。</div>
	    	<div>これを、<span className="underline font-color2">中間納付</span>と呼びます。</div>
	    	<br />
	    	<div>中間納付を行った場合、<span className="underline font-color2">仮払法人税等</span>にて中間納付金額を計上し、その後決算で法人税の額が確定したら、差額を処理するという流れとなります。</div>
	    	<br />
	    	<div>例えば、年度の中間において、法人税を10,000円、現金で中間納付したという場合、以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">仮払法人税等 10,000</td>
				<td className="table-align">現金 10,000</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>年度の中間において、法人税を10,000円、現金で中間納付した</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：10,000円分の法人税の中間納付代金</div>
			<div>なぜ発生したか（貸方）：現金で支払ったため</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の中間納付分になるので、仮払法人税等で処理</div>
			<div>なぜ発生したか（貸方）：現金での支払いになるので、現金で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：仮払法人税等という資産が増加するので、借方に仮払法人税等を配置</div>
			<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
		</div>
	    	<br />
	    	<div>続いて、決算で法人税の金額が20,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味すると以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align" rowspan="2">法人税等 20,000</td>
				<td className="table-align">仮払法人税等 10,000</td>
			</tr>
	    		<tr>
				<td className="table-align">未払法人税等 10,000</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>決算で法人税の金額が20,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味する</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：20,000円分の法人税の確定金額</div>
			<div>なぜ発生したか（貸方）：前期にすでに納税済みであった10,000円分、および追加納税分10,000円を計上</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の確定分になるので、法人税等もしくは法人税・住民税及び事業税で処理</div>
			<div>なぜ発生したか（貸方）：すでに納税済み</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：仮払法人税等という資産が増加するので、借方に仮払法人税等を配置</div>
			<div>なぜ発生したか（貸方）：現金という資産が減少するので、貸方に現金を配置</div>
		</div>
	    	<br />
	    	<div>なお、後日税務署へ法人税を納税した場合には、未払法人税等を相殺する仕訳を立てることで、会計処理が完了となります。</div>
	    	<br />
	    	<div>一方、決算で法人税の金額が5,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味するという場合、以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">法人税等 5,000</td>
				<td className="table-align" rowspan="2">仮払法人税等 10,000</td>
			</tr>
	    		<tr>
				<td className="table-align">未収法人税等 5,000</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>決算で法人税の金額が5,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味する</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：5,000円分の法人税の確定金額および、払いすぎてしまっていた差額5,000円の還付</div>
			<div>なぜ発生したか（貸方）：前期にすでに納税済みであった10,000円分があったため、まずはすでに支払済み金額から法人税の確定分を処理</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の確定金額になるため、法人税等もしくは法人税、住民税及び事業税で処理。また、還付分に関しては未収法人税等で処理</div>
			<div>なぜ発生したか（貸方）：すでに納税済みの金額があるため、改めて追加で資金を支払う必要がない。よって、すでに計上済みの仮払消費税等で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：法人税等という費用が増加するので、借方に法人税等を配置。また、還付分に関しては未収法人税等という資産が増加するので、借方に未収法人税等を配置</div>
			<div>なぜ発生したか（貸方）：仮払法人税等という資産が減少するので、貸方に仮払法人税等を配置</div>
		</div>
	    	<br />
	    	<div>なお、後日税務署から法人税が還付された場合には、未収法人税等を相殺する仕訳を立てることで、会計処理が完了となります。</div>
	    
	    	<Element name="non-current-assets-grade3-1" className="element" >
			<h1 className="intro">消費税の仕組み</h1>	
		</Element>
	    	<div>「国内の」商品・製品の販売やサービスの提供などの取引に対して広く公平に課税される税を<span className="underline font-color2">消費税</span>と呼びます。</div>
	    	<br />
	    	<div>したがって、商品やサービスの提供が行われた地域が日本国内であれば原則、課税対象となります。</div>
	    	<div>なお、このような考え方を<span className="underline font-color2">消費地課税主義</span>と呼び、消費税が発生する取引なのかどうかを判断するポイントの1つとなります。</div>
	    	<br />
	    	<div>さて、事業を運営していく中で、①2年前の1年間の課税売上が1000万を超えた、もしくは②1年前の上半期の課税売上が1000万を超えた場合、消費税の納税義務が発生します。</div>
	    	<div>ところで、消費税の納税額はどのように算出すれば良いでしょうか？</div>
	   	<br />
	    	<div>例えば、八百屋を経営していると仮定します。</div>
	    	<div>店頭で販売するための野菜を農家から仕入れる際、代金として500円（うち、50円が税額）を農家に支払いました。</div>
	    	<div>その後、店頭で販売した野菜が売れ、消費者より代金1,000円（うち、100円が税額）を受け取りました。</div>
	    	<div>この時、納めるべき税額はお客様から支払われた100円…ではなく、農家へ支払った50円を引いた残額50円となります</div>
	    	<br />
	    	<div>したがって、消費税の納税額は次の式で計算されるので、覚えておいて下さい。</div>
	    	<br />
	    	<div>納付する消費税額　＝　<span className="underline font-color2">受け取った消費税　ー　支払った消費税</span></div>
	    	<br />
	    	<div>なお、簿記3級の範囲ではありませんが、上記、支払った消費税額の計算方法を<span className="underline font-color2">仕入税額控除</span>と呼び、採用する方法によって納付する消費税額が変化するためご注意下さい。</div>
	    
	    	<Element name="non-current-assets-grade3-1" className="element" >
			<h1 className="intro">税込経理と税抜経理</h1>	
		</Element>
	 	<div>消費税を含めた金額で収益や費用を計上する経理処理方法を<span className="underline font-color2">税込経理</span>、消費税分は収益や費用とは別に計上する経理処理方法を<span className="underline font-color2">税抜経理</span>と呼びます。</div>	
		<br />
		<div>前述のとおり、消費税は基準期間にて売上高が1,000万円を超えるまでは納税義務が免除されます。</div>
	    	<div>このように、納税義務が免除された事業者のことを<span className="underline font-color2">免税事業者</span>、納税義務が課された事業者のことを<span className="underline font-color2">課税事業者</span>と呼びます。</div>
		<br />
	    	<div>さて、税込経理と税抜経理では、どちらが先に売上高が1,000万を超えるでしょうか。</div>
	    	<br />
	    	<div>例えば、売上が現金で10,000円上がった（税率は10％）とした場合、税込経理では以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">現金 11,000</td>
				<td className="table-align">売上高 11,000</td>
			</tr>
		</table>
	    	<br />
	    	<div>一方、売上が現金で10,000円上がった（税率は10％）とした場合、税抜経理では以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">現金 11,000</td>
				<td className="table-align">売上高 10,000</td>
			</tr>
	    		<tr>
				<td className="table-align">仮受消費税 1,000</td>
			</tr>
		</table>
	    	<br />
	    	<div>ここで、税込経理と税抜経理で計上された売上高の金額を比較すると、消費税がかさ増しされた分、税込経理の売上高の方が多く計上されていることがわかります。</div>
	    	<br />
	    	<div>このような背景から、日本の消費税のルールでは、免税事業者は税込経理、課税事業者は税込経理と税抜経理から選択するといったルールにすることで、課税事業者をなるべく多く作り出すといった施策が採られています。</div>
	    
	    	<Element name="non-current-assets-grade3-1" className="element" >
			<h1 className="intro">消費税の会計処理</h1>	
		</Element>
	    	<div>以上の背景知識を元に、消費税の会計処理を見ていきましょう。</div>
	    	<br />
		<div>例えば、商品1,000円を仕入れ、代金は消費税100円とともに現金で支払ったという場合、税込経理では以下の通りとなります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">仕入 1,100</td>
				<td className="table-align">現金 1,100</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>決算で法人税の金額が5,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味する</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：5,000円分の法人税の確定金額および、払いすぎてしまっていた差額5,000円の還付</div>
			<div>なぜ発生したか（貸方）：前期にすでに納税済みであった10,000円分があったため、まずはすでに支払済み金額から法人税の確定分を処理</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の確定金額になるため、法人税等もしくは法人税、住民税及び事業税で処理。また、還付分に関しては未収法人税等で処理</div>
			<div>なぜ発生したか（貸方）：すでに納税済みの金額があるため、改めて追加で資金を支払う必要がない。よって、すでに計上済みの仮払消費税等で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：法人税等という費用が増加するので、借方に法人税等を配置。また、還付分に関しては未収法人税等という資産が増加するので、借方に未収法人税等を配置</div>
			<div>なぜ発生したか（貸方）：仮払法人税等という資産が減少するので、貸方に仮払法人税等を配置</div>
		</div>
	    	<div>次に、商品3,000円を売上げ、代金は消費税300円とともに現金で受け取ったという場合、以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">現金 3,300</td>
				<td className="table-align">売上 3,300</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>決算で法人税の金額が5,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味する</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：5,000円分の法人税の確定金額および、払いすぎてしまっていた差額5,000円の還付</div>
			<div>なぜ発生したか（貸方）：前期にすでに納税済みであった10,000円分があったため、まずはすでに支払済み金額から法人税の確定分を処理</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の確定金額になるため、法人税等もしくは法人税、住民税及び事業税で処理。また、還付分に関しては未収法人税等で処理</div>
			<div>なぜ発生したか（貸方）：すでに納税済みの金額があるため、改めて追加で資金を支払う必要がない。よって、すでに計上済みの仮払消費税等で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：法人税等という費用が増加するので、借方に法人税等を配置。また、還付分に関しては未収法人税等という資産が増加するので、借方に未収法人税等を配置</div>
			<div>なぜ発生したか（貸方）：仮払法人税等という資産が減少するので、貸方に仮払法人税等を配置</div>
		</div>
	    	<div>最後に、決算時の会計処理を見ていきましょう。</div>
	    	<br />
	    	<div>決算の際、税込経理ではこれまでに受け取った消費税と支払った消費税の差額を計算し、<span className="underline font-color2">租税公課</span>として計上します。</div>
	    	<div>また、消費税の金額が確定し、税務署へ納税するまでの間、<span className="underline font-color2">未払消費税</span>として計上を行います。</div>
	    	<div>、以下の仕訳となります。</div>
	    	<br />
	    	<table border="1" cellspacing="0" className="table-color">
			<tr>
				<th className="table-align">借方（運用形態）</th>
				<th className="table-align">貸方（調達源泉）</th>
			</tr>
			<tr>
				<td className="table-align">現金 3,300</td>
				<td className="table-align">売上 3,300</td>
			</tr>
		</table>
		<br />
		<div className="explanation-wrapper">
			<div>■　仕訳の手順　■</div>
			<br />
			<div>決算で法人税の金額が5,000円であると確定した。ただし、前期に計上した仮払法人税10,000円を加味する</div>
			<br />
			<div>①因果分析</div>
			<div>最終的に発生したもの（借方）：5,000円分の法人税の確定金額および、払いすぎてしまっていた差額5,000円の還付</div>
			<div>なぜ発生したか（貸方）：前期にすでに納税済みであった10,000円分があったため、まずはすでに支払済み金額から法人税の確定分を処理</div>
			<br />
			<div>②勘定科目の割当</div>
			<div>最終的に発生したもの（借方）：法人税の確定金額になるため、法人税等もしくは法人税、住民税及び事業税で処理。また、還付分に関しては未収法人税等で処理</div>
			<div>なぜ発生したか（貸方）：すでに納税済みの金額があるため、改めて追加で資金を支払う必要がない。よって、すでに計上済みの仮払消費税等で処理</div>
			<br />
			<div>③勘定科目の配置</div>
			<div>最終的に発生したもの（借方）：法人税等という費用が増加するので、借方に法人税等を配置。また、還付分に関しては未収法人税等という資産が増加するので、借方に未収法人税等を配置</div>
			<div>なぜ発生したか（貸方）：仮払法人税等という資産が減少するので、貸方に仮払法人税等を配置</div>
		</div>
	    	
	  </section>
        </>
    );
}

<br />
<div></div>

const taxGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
		<div className="level_change_wrapper">
			<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
			<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
			<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
		</div>
		<aside className="subMenu">
		    <ul>
			<li className="table-of-contents">目次</li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-1" spy={true} smooth={true} duration={500} >租税公課の会計処理</ScrollLink></li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-2" spy={true} smooth={true} duration={500} >法人税の会計処理</ScrollLink></li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-3" spy={true} smooth={true} duration={500} >消費税の仕組み</ScrollLink></li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-4" spy={true} smooth={true} duration={500} >税込経理と税抜経理</ScrollLink></li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-4" spy={true} smooth={true} duration={500} >消費税の経理処理方法</ScrollLink></li>
			<li className="padding-inline-start"><ScrollLink activeClass="active" className="test1" to="allowance-grade3-4" spy={true} smooth={true} duration={500} >消費税の会計処理</ScrollLink></li>
		   </ul>
		</aside>
                <TaxGrade3 />
            </aside>
        </main>
    );
}

const taxGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <TaxGrade3 />
            </aside>
        </main>
    );
}

const taxGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <TaxGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜税金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜税効果会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const TaxEffectGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const TaxEffectGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const TaxEffectGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const taxEffectGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/tax-effect-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/tax-effect-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/tax-effect-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <TaxEffectGrade3 />
            </aside>
        </main>
    );
}

const taxEffectGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/tax-effect-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/tax-effect-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/tax-effect-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <TaxEffectGrade2 />
            </aside>
        </main>
    );
}

const taxEffectGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/tax-effect-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/tax-effect-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/tax-effect-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <TaxEffectGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜税効果会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜未決算コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const UnbalancedAccountGrade3 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const unbalancedAccountGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <UnbalancedAccountGrade3 />
            </aside>
        </main>
    );
}

const unbalancedAccountGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <UnbalancedAccountGrade3 />
            </aside>
        </main>
    );
}

const unbalancedAccountGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <UnbalancedAccountGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜未決算コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜会計上の変更および誤謬の訂正コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AccountingChangesAndCorrectionOfErrorsGrade3 = () => {
    return (
        <>
            <Title title="本論点はボキ３級では出題範囲外になります。"/>
        </>
    );
}

const accountingChangesAndCorrectionOfErrorsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AccountingChangesAndCorrectionOfErrorsGrade3 />
            </aside>
        </main>
    );
}

const accountingChangesAndCorrectionOfErrorsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AccountingChangesAndCorrectionOfErrorsGrade3 />
            </aside>
        </main>
    );
}

const accountingChangesAndCorrectionOfErrorsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
			<div className="level_change_wrapper">
				<Link to="/special-tradings-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
				<Link to="/special-tradings-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
				<Link to="/special-tradings-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
			</div>
                <AccountingChangesAndCorrectionOfErrorsGrade3 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜会計上の変更および誤謬の訂正コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜研究開発費コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ResearchAndDevelopmentCostsGrade3 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const ResearchAndDevelopmentCostsGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const ResearchAndDevelopmentCostsGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}


const researchAndDevelopmentCostsGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/research-and-development-costs-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/research-and-development-costs-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/research-and-development-costs-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ResearchAndDevelopmentCostsGrade3 />
            </aside>
        </main>
    );
}

const researchAndDevelopmentCostsGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/research-and-development-costs-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/research-and-development-costs-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/research-and-development-costs-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ResearchAndDevelopmentCostsGrade2 />
            </aside>
        </main>
    );
}

const researchAndDevelopmentCostsGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/research-and-development-costs-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/research-and-development-costs-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/research-and-development-costs-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <ResearchAndDevelopmentCostsGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜研究開発費コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜連結会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ConsolidatedAccountingGrade3 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const ConsolidatedAccountingGrade2 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const ConsolidatedAccountingGrade1 = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const consolidatedAccountingGrade3 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/consolidated-accounting-grade3"><div className="select_level bookkeeping3 action">ボキ3級</div></Link>
                    <Link to="/consolidated-accounting-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/consolidated-accounting-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ConsolidatedAccountingGrade3 />
            </aside>
        </main>
    );
}

const consolidatedAccountingGrade2 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/consolidated-accounting-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/consolidated-accounting-grade2"><div className="select_level bookkeeping2 action">ボキ2級</div></Link>
                    <Link to="/consolidated-accounting-grade1"><div className="select_level bookkeeping1">ボキ1級</div></Link>
                </div>
                <ConsolidatedAccountingGrade2 />
            </aside>
        </main>
    );
}

const consolidatedAccountingGrade1 = () => {
    return (
        <main className="mainArticle">
            <aside>
	    	<div className="level_change_wrapper">
                    <Link to="/consolidated-accounting-grade3"><div className="select_level bookkeeping3">ボキ3級</div></Link>
                    <Link to="/consolidated-accounting-grade2"><div className="select_level bookkeeping2">ボキ2級</div></Link>
                    <Link to="/consolidated-accounting-grade1"><div className="select_level bookkeeping1 action">ボキ1級</div></Link>
                </div>
                <ConsolidatedAccountingGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜連結会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜企業会計原則コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const CorporateAccountingPrinciples = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const corporateAccountingPrinciples = () => {
    return (
        <main className="mainArticle">
            <aside>
                <CorporateAccountingPrinciples />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜企業会計原則コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜損益会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ProfitAndLossAccounting = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const profitAndLossAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <ProfitAndLossAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜損益会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AssetAccounting = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const assetAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <AssetAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜負債会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const LiabilitiesAccounting = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const liabilitiesAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <LiabilitiesAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜負債会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜純資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const NetAssetsAccounting = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const netAssetsAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <NetAssetsAccounting />
            </aside>
        </main>
    );
}


/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜純資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜棚卸会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const InventoryAccounting = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const inventoryAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <InventoryAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜棚卸会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜財務諸表理論コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const FinancialStatementsTheory = () => {
    return (
        <>
            <Title title="Lorem Ipusum"/>
            <section>
                <article>
             		Lorem Ipusum
                </article>
            </section>
        </>
    );
}

const financialStatementsTheory = () => {
    return (
        <main className="mainArticle">
            <aside>
                <FinancialStatementsTheory />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜財務諸表理論コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const NotFound = () => {
    return <div>404</div>;
}

// サイドメニュー兼ルーティング
const SideBar = () => {

    const test = () => {
        
    }

    const [mode, setMode] = useState(0); 

    const changeYozakuraMode = () => {
        setMode(mode + 1);
    }

    const changeSakuraMode = () => {
        setMode(mode - 1);
    }

    if( mode === 0 ) {
        return (
	<BrowserRouter>
        <header className="sakura-header">
            <div className="grid1-sakura"></div>
            <li className="topLogo-sakura li"><Link to="/">サクラボキ</Link></li>
            <div className="grid2-sakura"></div>
            <li className="changeYozakuraMode li">ヨザクラモードに切り替える<br />（開発中）</li>
			{/*onClick={ changeYozakuraMode }*/}
            <div className="grid3-sakura"></div>
            <span className="icon-sakura" id="icon-sakura" onClick={ test }><BiFoodMenu /></span>
        </header>

	<div className="sidebar-sakura">
                <h2 className="titleColor"><Link to="/">HOME</Link></h2>
        		<h2 className="titleColor">基本原理</h2>
                <ul className="sideMenu menu-sakura-color">
			<li className="sideList menu-sakura-color"><Link to="/bookkeeping">簿記の仕組み</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/account-grade3">勘定科目の基礎</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/kind-of-account">勘定科目の種類</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">勘定科目一覧表</Link></li>
			{/*<li className="sideList menu-sakura-color"><Link to="/trial-balance">様々な仕訳</Link></li>*/}
			<li className="sideList menu-sakura-color"><Link to="/trial-balance">試算表</Link></li>
			{/*<li className="sideList menu-sakura-color"><Link to="/trial-balance">プライベート処理</Link></li>*/}
			{/*<li className="sideList menu-sakura-color"><Link to="/trial-balance">源泉徴収と年末調整</Link></li>*/}
			{/* <li className="sideList menu-sakura-color"><Link to="/final-tax-return">確定申告</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">決算</Link></li> */}
                </ul>

                <h2 className="titleColor">諸取引の処理</h2>
                <ul className="sideMenu">
			<li className="sideList menu-sakura-color"><Link to="/cash-grade3">現金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/savings-grade3">預金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/tradings-grade3">商品売買</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/promissory-notes-grade3">手形</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/other-grade3">その他の債権と債務等</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/assignment-of-accounts-receivable-grade3">債権の譲渡</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/allowance-grade3">引当金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/financial-guarantee-grade3">債務の保証</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/special-tradings-grade3">特殊商品売買</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/various-service-transfer-grade3">様々な財又はサービスの顧客への移転</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/financial-instrument-grade3">金融商品取引</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/securiteis-grade3">有価証券</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/non-current-assets-grade3">有形固定資産</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/intangible-assets-grade3">無形固定資産</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/book-impairment-grade3">固定資産の減損</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/investments-and-other-assets-grade3">投資その他の資産</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/deferred-assets-grade3">繰延資産</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/lease-grade3">リース取引</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/foreign-currency-grade3">外貨建取引</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/asset-retirement-obligations-grade3">資産除去債務</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/profit-and-loss-grade3">収益と費用</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/tax-grade3">税金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/tax-effect-grade3">税効果会計</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/unbalanced-account-grade3">未決算</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/accounting-changes-and-correction-of-errors-grade3">会計上の変更および誤謬の訂正</Link></li>
                </ul>
	</div>

	{/*<h2 className="titleColor">決算</h2>
		<ul className="sideMenu menu-sakura-color">
			<li className="sideList menu-sakura-color"><Link to="/bookkeeping">試算表の作成</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/account-grade3">精算表</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">決算整理</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/trial-balance">決算整理後残高試算表</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">収益と費用の損益勘定への振替</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">純損益の繰越利益剰余金勘定への振替</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">その他有価証券評価差額金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">帳簿の締切</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">損益計算書と貸借貸借対照表の作成</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">財務諸表の区分表示</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">株主資本等変動計算書</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">財務諸表の注記・注記表</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">附属明細表</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">キャッシュ・フロー計算書</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">中間財務諸表（四半期・半期）</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">臨時決算</Link></li>
                </ul>
	
		<h2 className="titleColor">株式会社会計</h2>
		<ul className="sideMenu menu-sakura-color">
			<li className="sideList menu-sakura-color"><Link to="/bookkeeping">資本金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/account-grade3">資本剰余金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">利益剰余金</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/trial-balance">剰余金の配当</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">自己株式・自己新株予約権</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">会社の合併</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">株式交換・株式移転</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">事業分離等・清算</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">社債</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">新株予約権・ストックオプション</Link></li>
		</ul>
	
		<h2 className="titleColor">本支店会計</h2>
		<ul className="sideMenu menu-sakura-color">
                    <li className="sideList menu-sakura-color"><Link to="/bookkeeping">本支店会計の意義・目的</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/account-grade3">本支店間取引の処理</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">在外支店財務諸表項目の換算</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/trial-balance">本支店会計における決算手続</Link></li>
                </ul>
	
		<h2 className="titleColor">連結会計</h2>
		<ul className="sideMenu menu-sakura-color">
			<li className="sideList menu-sakura-color"><Link to="/bookkeeping">資本連結</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/account-grade3">被支配株主持分</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">のれん</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/trial-balance">連結会社間取引の処理</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">未実現損益の消去</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">持分法</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">連結会計上の税効果会計</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">在外子会社等の財務諸表項目の換算</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">個別財務諸表の修正</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">包括利益、その他の包括利益</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/final-tax-return">連結精算表、連結財務諸表の表示</Link></li>
			<li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">セグメント</Link></li>
			
                </ul>
	
		<h2 className="titleColor">会計基準および企業会計に関する法令</h2>
		<ul className="sideMenu">
                    <li className="sideList menu-sakura-color"><Link to="/corporate-accounting-principles">企業会計原則</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/profit-and-loss-accounting">損益会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/asset-accounting">資産会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/liabilities-accounting">負債会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/net-assets-accounting">純資産会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/inventory-accounting">棚卸会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/non-current-assets-accounting">固定資産会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/lease-accounting">リース取引会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/financial-statements-theory">財務諸表理論</Link></li>
                </ul>
            </div>
	    */}

            <Switch>
                <Route exact path="/" component={ home } />
                <Route path="/bookkeeping" component={ bookkeeping } />
                <Route path="/account-grade3" component={ accountGrade3 } />
                <Route path="/account-grade2" component={ accountGrade2 } />
                <Route path="/account-grade1" component={ accountGrade1 } />
				<Route path="/kind-of-account" component={ kindOfAccount } />
                <Route path="/accounts-list-grade3" component={ accountsListGrade3 } />
                <Route path="/accounts-list-grade2" component={ accountsListGrade2 } />
                <Route path="/accounts-list-grade1" component={ accountsListGrade1 } />
                <Route path="/trial-balance" component={ trialBalance } />
                <Route path="/final-tax-return" component={ finalTaxReturn } />
                <Route path="/the-end-of-the-fiscal-period" component={ theEndOfTheFiscalPeriod } />
                <Route path="/cash-grade3" component={ cashGrade3 } />
		<Route path="/cash-grade2" component={ cashGrade2 } />
		<Route path="/cash-grade1" component={ cashGrade1 } />
                <Route path="/savings-grade3" component={ savingsGrade3 } />
		<Route path="/savings-grade2" component={ savingsGrade2 } />
		<Route path="/savings-grade1" component={ savingsGrade1 } />
                <Route path="/tradings-grade3" component={ tradingsGrade3 } />
		<Route path="/tradings-grade2" component={ tradingsGrade2 } />
		<Route path="/tradings-grade1" component={ tradingsGrade1 } />
                <Route path="/promissory-notes-grade3" component={ promissoryNotesGrade3 } />
		<Route path="/promissory-notes-grade2" component={ promissoryNotesGrade2 } />
		<Route path="/promissory-notes-grade1" component={ promissoryNotesGrade1 } />
                <Route path="/other-grade3" component={ otherGrade3 } />
		<Route path="/other-grade2" component={ otherGrade2 } />
		<Route path="/other-grade1" component={ otherGrade1 } />
		<Route path="/assignment-of-accounts-receivable-grade3" component={ assignmentOfAccountsReceivableGrade3 } />
		<Route path="/assignment-of-accounts-receivable-grade2" component={ assignmentOfAccountsReceivableGrade2 } />
		<Route path="/assignment-of-accounts-receivable-grade1" component={ assignmentOfAccountsReceivableGrade1 } />
                <Route path="/non-current-assets-grade3" component={ nonCurrentAssetsGrade3 } />
                <Route path="/non-current-assets-grade2" component={ nonCurrentAssetsGrade2 } />
                <Route path="/non-current-assets-grade1" component={ nonCurrentAssetsGrade1 } />
                <Route path="/securiteis-grade3" component={ securiteisGrade3 } />
                <Route path="/securiteis-grade2" component={ securiteisGrade2 } />
                <Route path="/securiteis-grade1" component={ securiteisGrade1 } />
                <Route path="/lease-grade3" component={ leaseGrade3 } />
                <Route path="/lease-grade2" component={ leaseGrade2 } />
                <Route path="/lease-grade1" component={ leaseGrade1 } />
                <Route path="/research-and-development-costs-grade3" component={ researchAndDevelopmentCostsGrade3 } />
                <Route path="/research-and-development-costs-grade2" component={ researchAndDevelopmentCostsGrade2 } />
                <Route path="/research-and-development-costs-grade1" component={ researchAndDevelopmentCostsGrade1 } />
                <Route path="/financial-guarantee-grade3" component={ financialGuaranteeGrade3 } />
		<Route path="/financial-guarantee-grade2" component={ financialGuaranteeGrade2 } />
		<Route path="/financial-guarantee-grade1" component={ financialGuaranteeGrade1 } />
		<Route path="/allowance-grade3" component={ allowanceGrade3 } />
                <Route path="/allowance-grade2" component={ allowanceGrade2 } />
                <Route path="/allowance-grade1" component={ allowanceGrade1 } />
                <Route path="/special-tradings-grade3" component={ specialTradingsGrade3 } />
		<Route path="/special-tradings-grade2" component={ specialTradingsGrade2 } />
		<Route path="/special-tradings-grade1" component={ specialTradingsGrade1 } />
		<Route path="/various-service-transfer-grade3" component={ variousServiceTransferGrade3 } />
		<Route path="/various-service-transfer-grade2" component={ variousServiceTransferGrade2 } />
		<Route path="/various-service-transfer-grade1" component={ variousServiceTransferGrade1 } />
		<Route path="/financial-instrument-grade3" component={ financialInstrumentGrade3 } />
		<Route path="/financial-instrument-grade2" component={ financialInstrumentGrade2 } />
		<Route path="/financial-instrument-grade1" component={ financialInstrumentGrade1 } />
		<Route path="/intangible-assets-grade3" component={ intangibleAssetsGrade3 } />
		<Route path="/intangible-assets-grade2" component={ intangibleAssetsGrade3 } />
		<Route path="/intangible-assets-grade1" component={ intangibleAssetsGrade3 } />
		<Route path="/book-impairment-grade3" component={ bookImpairmentGrade3 } />
		<Route path="/book-impairment-grade2" component={ bookImpairmentGrade2 } />
		<Route path="/book-impairment-grade1" component={ bookImpairmentGrade1 } />
		<Route path="/investments-and-other-assets-grade3" component={ investmentsAndOtherAssetsGrade3 } />
		<Route path="/investments-and-other-assets-grade2" component={ investmentsAndOtherAssetsGrade2 } />
		<Route path="/investments-and-other-assets-grade1" component={ investmentsAndOtherAssetsGrade1 } />
		<Route path="/deferred-assets-grade3" component={ deferredAssetsGrade3 } />
		<Route path="/deferred-assets-grade2" component={ deferredAssetsGrade2 } />
		<Route path="/deferred-assets-grade1" component={ deferredAssetsGrade1 } />
		<Route path="/asset-retirement-obligations-grade3" component={ assetRetirementObligationsGrade3 } />
		<Route path="/asset-retirement-obligations-grade2" component={ assetRetirementObligationsGrade2 } />
		<Route path="/asset-retirement-obligations-grade1" component={ assetRetirementObligationsGrade1 } />
		<Route path="/profit-and-loss-grade3" component={ profitAndLossGrade3 } />
		<Route path="/profit-and-loss-grade2" component={ profitAndLossGrade2 } />
		<Route path="/profit-and-loss-grade1" component={ profitAndLossGrade1 } />
		<Route path="/tax-grade3" component={ taxGrade3 } />
		<Route path="/tax-grade2" component={ taxGrade2 } />
		<Route path="/tax-grade1" component={ taxGrade1 } />
		{/* <Route path="/accounting-for-income-taxes-grade3" component={ accountingForIncomeTaxesGrade3 } />
		<Route path="/accounting-for-income-taxes-grade2" component={ accountingForIncomeTaxesGrade2 } />
		<Route path="/accounting-for-income-taxes-grade1" component={ accountingForIncomeTaxesGrade1 } /> */}
		<Route path="/unbalanced-account-grade3" component={ unbalancedAccountGrade3 } />
		<Route path="/unbalanced-account-grade2" component={ unbalancedAccountGrade2 } />
		<Route path="/unbalanced-account-grade1" component={ unbalancedAccountGrade1 } />
		<Route path="/accounting-changes-and-correction-of-errors-grade3" component={ accountingChangesAndCorrectionOfErrorsGrade3 } />
		<Route path="/accounting-changes-and-correction-of-errors-grade2" component={ accountingChangesAndCorrectionOfErrorsGrade2 } />
		<Route path="/accounting-changes-and-correction-of-errors-grade1" component={ accountingChangesAndCorrectionOfErrorsGrade1 } />
		<Route path="/foreign-currency-grade3" component={ foreignCurrencyGrade3 } />
		<Route path="/foreign-currency-grade2" component={ foreignCurrencyGrade2 } />
		<Route path="/foreign-currency-grade1" component={ foreignCurrencyGrade1 } />
		<Route path="/tax-effect-grade3" component={ taxEffectGrade3 } />
		<Route path="/tax-effect-grade2" component={ taxEffectGrade2 } />
		<Route path="/tax-effect-grade1" component={ taxEffectGrade1 } />
		<Route path="/consolidated-accounting-grade3" component={ consolidatedAccountingGrade3 } />
		<Route path="/consolidated-accounting-grade2" component={ consolidatedAccountingGrade2 } />
		<Route path="/consolidated-accounting-grade1" component={ consolidatedAccountingGrade1 } />
		<Route path="/corporate-accounting-principles" component={ corporateAccountingPrinciples } />
		<Route path="/profit-and-loss-accounting" component={ profitAndLossAccounting } />
		<Route path="/asset-accounting" component={ assetAccounting } />
		<Route path="/liabilities-accounting" component={ liabilitiesAccounting } />
		<Route path="/net-assets-accounting" component={ netAssetsAccounting } />
		<Route path="/inventory-accounting" component={ inventoryAccounting } />
		{/* <Route path="/non-current-assets-accounting" component={ nonCurrentAssetsAccounting } /> */}
		{/* <Route path="/lease-accounting" component={ leaseAccounting } /> */}
		<Route path="/financial-statements-theory" component={ financialStatementsTheory } />
		<Route component={ home } />{/* ←404の場合 */}
            </Switch>
        </BrowserRouter>
    );
} else {
    return(
        <BrowserRouter>
        <header className="yozakura-header">
            <div className="grid1-yozakura"></div>
            <li className="topLogo-yozakura li"><Link to="/">サクラボキ</Link></li>
            <div className="grid2-yozakura"></div>
            <li className="changeSakuraMode li" onClick={ changeSakuraMode }>サクラモードに切り替える</li>
            <div className="grid3-yozakura"></div>
            <span className="icon-yozakura"><BiFoodMenu /></span>
        </header>
            <div className="grid4-yozakura"></div>
            <div className="sidebar-yozakura">
                <h2 className="yozakura-title-color"><Link to="/">HOME</Link></h2>
        　　    <h2 className="yozakura-title-color">基礎編</h2>
                <ul className="sideMenu">
                    <li className="sideList menu-yozakura-color"><Link to="/bookkeeping">ボキのシクミ</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/account-grade3">勘定科目</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/accounts-list-grade3">勘定科目一覧表</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/trial-balance">試算表</Link></li>
		    {/*<li className="sideList menu-yozakura-color"><Link to="/final-tax-return">確定申告</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/the-end-of-the-fiscal-period">決算</Link></li>*/}
                </ul>

                <h2 className="yozakura-title-color">計算編</h2>
                <ul className="sideMenu">
                    <li className="sideList menu-yozakura-color"><Link to="/cash-grade3">現金</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/savings-grade3">預金</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/tradings-grade3">商品売買</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/promissory-notes-grade3">手形</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/other-grade3">その他債権債務</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/non-current-assets-grade3">固定資産</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/securiteis-grade3">有価証券</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/lease-grade3">リース取引</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/research-and-development-costs-grade3">研究開発費</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/allowance-grade3">引当金</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/foreign-currency-grade3">外貨建取引</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/tax-effect-grade3">税効果会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/consolidated-accounting-grade3">連結会計</Link></li>
                </ul>

                <h2 className="yozakura-title-color">理論編</h2>
                <ul className="sideMenu">
                    <li className="sideList menu-yozakura-color"><Link to="/corporate-accounting-principles">企業会計原則</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/profit-and-loss-accounting">損益会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/asset-accounting">資産会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/liabilities-accounting">負債会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/net-assets-accounting">純資産会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/inventory-accounting">棚卸会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/non-current-assets-accounting">固定資産会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/lease-accounting">リース取引会計</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/financial-statements-theory">財務諸表理論</Link></li>
                </ul>
            </div>
            <div className="grid5-yozakura"></div>

            <Switch>
                <Route exact path="/" component={ homeYozakura } />
                <Route path="/bookkeeping" component={ bookkeeping } />
                <Route path="/account-grade3" component={ accountGrade3 } />
                <Route path="/account-grade2" component={ accountGrade2 } />
                <Route path="/account-grade1" component={ accountGrade1 } />
                <Route path="/accounts-list-grade3" component={ accountsListGrade3 } />
                <Route path="/accounts-list-grade2" component={ accountsListGrade2 } />
                <Route path="/accounts-list-grade1" component={ accountsListGrade1 } />
                <Route path="/trial-balance" component={ trialBalance } />
                <Route path="/final-tax-return" component={ finalTaxReturn } />
                <Route path="/the-end-of-the-fiscal-period" component={ theEndOfTheFiscalPeriod } />
                <Route path="/cash-grade3" component={ cashGrade3 } />
				<Route path="/cash-grade2" component={ cashGrade2 } />
				<Route path="/cash-grade1" component={ cashGrade1 } />
                <Route path="/savings-grade3" component={ savingsGrade3 } />
				<Route path="/savings-grade2" component={ savingsGrade2 } />
				<Route path="/savings-grade1" component={ savingsGrade1 } />
                <Route path="/tradings-grade3" component={ tradingsGrade3 } />
				<Route path="/tradings-grade2" component={ tradingsGrade2 } />
				<Route path="/tradings-grade1" component={ tradingsGrade1 } />
                <Route path="/promissory-notes-grade3" component={ promissoryNotesGrade3 } />
				<Route path="/promissory-notes-grade2" component={ promissoryNotesGrade2 } />
				<Route path="/promissory-notes-grade1" component={ promissoryNotesGrade1 } />
                <Route path="/other-grade3" component={ otherGrade3 } />
				<Route path="/other-grade2" component={ otherGrade2 } />
				<Route path="/other-grade1" component={ otherGrade1 } />
                <Route path="/non-current-assets-grade3" component={ nonCurrentAssetsGrade3 } />
                <Route path="/non-current-assets-grade2" component={ nonCurrentAssetsGrade2 } />
                <Route path="/non-current-assets-grade1" component={ nonCurrentAssetsGrade1 } />
                <Route path="/securiteis-grade3" component={ securiteisGrade3 } />
                <Route path="/securiteis-grade2" component={ securiteisGrade2 } />
                <Route path="/securiteis-grade1" component={ securiteisGrade1 } />
                <Route path="/lease-grade3" component={ leaseGrade3 } />
                <Route path="/lease-grade2" component={ leaseGrade2 } />
                <Route path="/lease-grade1" component={ leaseGrade1 } />
                <Route path="/research-and-development-costs-grade3" component={ researchAndDevelopmentCostsGrade3 } />
                <Route path="/research-and-development-costs-grade2" component={ researchAndDevelopmentCostsGrade2 } />
                <Route path="/research-and-development-costs-grade1" component={ researchAndDevelopmentCostsGrade1 } />
                <Route path="/allowance-grade3" component={ allowanceGrade3 } />
                <Route path="/allowance-grade2" component={ allowanceGrade2 } />
                <Route path="/allowance-grade1" component={ allowanceGrade1 } />
                <Route path="/foreign-currency-grade3" component={ foreignCurrencyGrade3 } />
                <Route path="/foreign-currency-grade2" component={ foreignCurrencyGrade2 } />
                <Route path="/foreign-currency-grade1" component={ foreignCurrencyGrade1 } />
                <Route path="/tax-effect-grade3" component={ taxEffectGrade3 } />
                <Route path="/tax-effect-grade2" component={ taxEffectGrade2 } />
                <Route path="/tax-effect-grade1" component={ taxEffectGrade1 } />
                <Route path="/consolidated-accounting-grade3" component={ consolidatedAccountingGrade3 } />
                <Route path="/consolidated-accounting-grade2" component={ consolidatedAccountingGrade2 } />
                <Route path="/consolidated-accounting-grade1" component={ consolidatedAccountingGrade1 } />
                <Route path="/corporate-accounting-principles" component={ corporateAccountingPrinciples } />
                <Route path="/profit-and-loss-accounting" component={ profitAndLossAccounting } />
                <Route path="/asset-accounting" component={ assetAccounting } />
                <Route path="/liabilities-accounting" component={ liabilitiesAccounting } />
                <Route path="/net-assets-accounting" component={ netAssetsAccounting } />
                <Route path="/inventory-accounting" component={ inventoryAccounting } />
                {/* <Route path="/non-current-assets-accounting" component={ nonCurrentAssetsAccounting } /> */}
                {/* <Route path="/lease-accounting" component={ leaseAccounting } /> */}
                <Route path="/financial-statements-theory" component={ financialStatementsTheory } />
                <Route component={ home } />{/* ←404の場合 */}
            </Switch>
        </BrowserRouter>
    );
}
}

export default SideBar;
