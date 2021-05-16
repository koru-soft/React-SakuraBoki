import './sideMenu.css';
import React, { Component, useState } from 'react';
import Title from './title';
import SakuraTopImage from './サクラボキ.mp4';
import YozakuraTopImage from './ヨザクラ.mp4';
import TrialBalanceImg from './貸借対照表と損益計算書のつながり.jpg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { ImMenu3 } from "react-icons/im";


//ホーム画面のコンポーネント
const Home = () => {
    return(
        <>
            <video src={ SakuraTopImage } autoPlay muted playsInline className="top-image-size"></video>
            {/* <img src={ TopImage } alt="サクラボキTOP画像" class="top-image-size"></img> */}
            <section className="font-color">
                <h1 className="intro">サクラボキとは</h1>
                <div>サクラボキは、独学で日商簿記３級、２級、１級、そして税理士試験や公認会計士試験に向けた学習を志した全ての人を応援する無料学習サイトです。</div>
            </section>

            <section className="font-color">
                <h1 className="intro">難易度選択について</h1>
                <div>各コンテンツには「ボキ３級」「ボキ２級」「ボキ１級」といったレベル選択が出来るようになっています。</div>
                <br />
            <div>現在の級の内容を理解出来たら、より高い級のページをクリックしてみて下さい。どんどん深い話が展開されて行きます。</div>
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
                <h1 className="yozakura-intro">ヨザクラボキとは</h1>
                <div>サクラボキは、独学で日商簿記３級、２級、１級、そして税理士試験や公認会計士試験に向けた学習を志した全ての人を応援する無料学習サイトです。</div>
            </section>

            <section className="yozakura-font-color">
                <h1 className="yozakura-intro">難易度選択について</h1>
                <div>各コンテンツには「ボキ３級」「ボキ２級」「ボキ１級」といったレベル選択が出来るようになっています。</div>
                <br />
            <div>現在の級の内容を理解出来たら、より高い級のページをクリックしてみて下さい。どんどん深い話が展開されて行きます。</div>
            </section>

            <section className="yozakura-font-color">
                <h1 className="yozakura-intro">サクラモードとヨザクラモードについて</h1>
                <div>サクラモードでは、理論を学ぶことが出来ます。内容が理解出来るまで繰り返し読んでみて下さい。</div>
                <br />
                <div>ヨザクラモードでは、問題演習を行うことが出来ます。繰り返し問題を解くことで、本番での対応力を養いましょう！</div>
            </section>
        </>
    );
}

//勘定科目一覧表のコンポーネント
const AccountsListGrade3 = () => {
	return(
		<>
			<section className="font-color">
			<table border="1" cellspacing="0">
				<tr>
					<th className="table-size table-align">大分類</th>
					<th className="table-size table-align">小分類</th>
					<th className="table-size table-align">勘定科目名</th>
					<th className="table-size table-align">勘定科目の概要</th>
					
				</tr>

				<tr>
					<td className="table-size table-align" rowspan="20">資産</td>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">現金</td>
					<td className="table-size table-align">紙幣や硬貨などのお金、郵便小為替</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">小口現金</td>
					<td className="table-size table-align">少額の支払いのための現金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">当座預金</td>
					<td className="table-size table-align">銀行に預け入れ当座預金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">普通預金</td>
					<td className="table-size table-align">いつでも自由に入出金が可能な銀行預金のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">売掛金</td>
					<td className="table-size table-align">得意先に掛け売りしたときの代金を請求する権利</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">商品</td>
					<td className="table-size table-align">在庫商品</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">貯蔵品</td>
					<td className="table-size table-align">まとめて購入した封筒、便せん、パンフレットなどの消耗品などで期末に未使用のもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">前払費用</td>
					<td className="table-size table-align">家賃、保守料、会費、損害保険料などの支払金額のうち、翌年以降にかかる前払部分</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">前払金</td>
					<td className="table-size table-align">商品の仕入や諸経費の前渡金、手付金</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">短期貸付金</td>
					<td className="table-size table-align">貸付金で1年以内に返済の予定されているもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">立替金</td>
					<td className="table-size table-align">一時的に立て替えた金額</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">受取手形</td>
					<td className="table-size table-align">通常の営業取引において対価として受け取った約束手形や為替手形などの手形債権のこと</td>
				</tr>
				
				<tr>
					<td className="table-size table-align">流動資産</td>
					<td className="table-size table-align">仮払金</td>
					<td className="table-size table-align">現金等の支出はあったが相手勘定科目が確定していない場合または相手勘定科目は確定しているが金額が確定していない場合に一時的に処理しておく勘定科目。後日、勘定科目や金額が確定した段階で振替処理をする</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">建物</td>
					<td className="table-size table-align">店舗、事務所、工場、倉庫、車庫、社宅など、事業活動に供するために所有する建物のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">土地</td>
					<td className="table-size table-align">事業活動に供するために所有する敷地をいい、事務所・店舗・工場・社宅などの敷地のほか、資材置場、駐車場、運動場などの土地を含むもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">車両運搬具</td>
					<td className="table-size table-align">事業活動に供するために所有するもので、鉄道車両、乗用車、トラック、バス、オートバイ、フォークリフト、クレーン車、トロッコなどの陸上運搬具のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">工具器具備品</td>
					<td className="table-size table-align">事業活動に供するために所有するもので、工作用具、応接セット、机、イス、コピー機、ファックス、電話設備、キャビネット、エアコン、冷蔵庫、パソコン、観賞用の植物、自動販売機、書画、こっとうなどのこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">ソフトウェア</td>
					<td className="table-size table-align">10万円以上のパソコンソフト</td>
				</tr>
				<tr>
					<td className="table-size table-align">固定資産</td>
					<td className="table-size table-align">長期前払費用</td>
					<td className="table-size table-align">家賃、保守料、会費、損害保険料などの支払金額のうち、1年以上を超えた前払部分</td>
				</tr>
				<tr>
					<td className="table-size table-align">繰延資産</td>
					<td className="table-size table-align">開業費</td>
					<td className="table-size table-align">個人事業主の場合、開業の準備にかかった費用。法人の場合、会社設立後（設立登記手続終了後）から営業を開始するまでの期間に支払った諸費用</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="7">負債</td>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">買掛金</td>
					<td className="table-size table-align">商品や原材料の仕入れなどの営業取引に基づいて発生した、まだ支払いされていない債務のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">クレジットカード</td>
					<td className="table-size table-align">後から銀行口座より引き落としが発生する未払金扱いの勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">支払手形</td>
					<td className="table-size table-align">通常の営業取引において債務の支払いのために生じた約束手形や為替手形などの手形債務のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">未払金</td>
					<td className="table-size table-align">本来の営業活動以外の場合において債務が確定していて未払いのもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">未払費用</td>
					<td className="table-size table-align">一定の契約に基づき継続して役務の提供を受ける場合に、すでに提供された役務に対して未だその対価の支払が終わらないもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">前受金</td>
					<td className="table-size table-align">商品や製品などの売上を行った場合に代金の一部または全部を前もって受け取ったとき、その前受けした金額を管理するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">流動負債</td>
					<td className="table-size table-align">仮受金</td>
					<td className="table-size table-align">現金等の受入れはあったが相手勘定科目が確定していない場合や相手勘定科目は確定しているが金額が未確定の場合に一時的に処理しておく勘定科目。後日、勘定科目や金額が確定した段階で振替処理をする</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="2">純資産</td>
					<td className="table-size table-align">純資産</td>
					<td className="table-size table-align">資本金</td>
					<td className="table-size table-align">株主などの出資者から出資してもらった金額のうち法律で定めたもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">純資産</td>
					<td className="table-size table-align">元入金</td>
					<td className="table-size table-align">個人事業主における元手のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="3">収益</td>
					<td className="table-size table-align">売上高</td>
					<td className="table-size table-align">売上高</td>
					<td className="table-size table-align">商品や製品の販売、サービスの提供など、企業の主たる営業活動によって獲得した収益のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">営業外収益</td>
					<td className="table-size table-align">受取利息</td>
					<td className="table-size table-align">預貯金、国債･地方債・社債などの有価証券、貸付金などから得る利子</td>
				</tr>
				<tr>
					<td className="table-size table-align">営業外収益</td>
					<td className="table-size table-align">雑収入</td>
					<td className="table-size table-align">営業外収益のうち、科目的にも金額的にも重要性の乏しいものについて処理するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="10">費用</td>
					<td className="table-size table-align">売上原価</td>
					<td className="table-size table-align">仕入高</td>
					<td className="table-size table-align">販売目的の商品を仕入れるのに要した購入費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">消耗品費</td>
					<td className="table-size table-align">事務用消耗品や工具器具備品、車両運搬具等で、取得価額が10万円未満または使用可能期間が1年未満のものを消費することによって発生する費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">交際費</td>
					<td className="table-size table-align">取引先や営業先とのお付き合いを円滑に行うために飲食店で接待する費用や、お中元やお歳暮、お土産などの贈答品等の購入のために支出した費用</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">通信費</td>
					<td className="table-size table-align">電話代、はがき代、郵便切手代、郵便小包や宅配便などの配送料金、ファックス代、インターネット関連代、freeeなどのクラウドソフト利用料、有料放送の視聴料など、通信のために要した費用を処理する勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">水道光熱費</td>
					<td className="table-size table-align">水道代、電気代、ガス代、燃料代などの費用のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">車両費</td>
					<td className="table-size table-align">ガソリン代、高速料金、洗車、車検、修理代金、自動車保険料等、車に関する支払いを仕訳するための勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">法定福利費</td>
					<td className="table-size table-align">企業（事業主）が社会保険料として負担する役員・従業員の福利厚生のために納付することが法律で義務づけられている費用を処理する勘定科目</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">減価償却費</td>
					<td className="table-size table-align">固定資産の取得価額を耐用年数の各期間に費用として配分したもの</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">給料手当</td>
					<td className="table-size table-align">社員に対して、毎月支払う給料のこと</td>
				</tr>
				<tr>
					<td className="table-size table-align">販売費及び一般管理費</td>
					<td className="table-size table-align">支払手数料</td>
					<td className="table-size table-align">銀行の振込手数料、売買契約の仲介者に対して支払う手数料等を表す勘定科目</td>
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
			<table border="1" cellspacing="0">
				<tr>
					<th className="table-size table-align">大分類</th>
					<th className="table-size table-align">小分類</th>
					<th className="table-size table-align">勘定科目名</th>
					<th className="table-size table-align">勘定科目の概要</th>
					
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="30">資産</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売買目的有価証券</td>
					<td className="table-size table-align"></td>
				</tr>
		
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">満期保有目的債権</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社株式</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">その他有価証券</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">不渡手形</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債権</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰越商品</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">建設仮勘定</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">貯蔵品</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">火災未決算</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">営業外受取手形</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">のれん</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">諸資産</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア仮勘定</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">前払保険料</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">長期前払保険料</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">リース資産</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">別段預金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮払消費税</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮払法人税等</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未収還付消費税</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰延税金資産</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">支店</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特許権</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">クレジット売掛金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕掛品</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">創立費</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">開業費</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="19">負債</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債務</td>
					<td className="table-size table-align"></td>
				</tr>	
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特別修繕引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品保証引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">退職給付引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">返品調整引当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">保証債務</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">営業外支払手形</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">諸負債</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">リース債務</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払リース料</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払配当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払法人税等</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仮受消費税</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">未払消費税</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰延税金負債</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">本店</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="9">純資産</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">資本金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">資本準備金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">株式申込証拠金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">利益準備金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">別途積立金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主持分</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">新築積立金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">繰越利益剰余金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">その他有価証券評価差額金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="16">収益</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">受取配当金</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券利息</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">受取利息</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券売却益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券評価益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式売却益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社売却益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">保険差益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">役務収益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕入割引</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">国庫補助金受贈益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">工事負担金受贈益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">為替差益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">雑益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主に帰属する当期純利益</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align" rowspan="34">費用</td>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">有価証券評価損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">子会社株式売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">関連会社株式売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">手形売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">債権売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">電子記録債権売却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕引当金繰入</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品保証引当金繰入</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">退職給付費用</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割戻引当金繰入</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与引当金繰入</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">賞与</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">返品調整引当金繰入</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">火災損失</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上原価</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">役務原価</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">売上割引</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">仕入割戻</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">棚卸減耗損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">商品評価損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産圧縮損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産除却損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">固定資産廃棄損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">修繕費</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">のれん償却</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">特許権償却</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">研究開発費</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">ソフトウェア償却</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">支払リース料</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">株式交付費</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">追徴法人税等</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">為替差損</td>
					<td className="table-size table-align"></td>
				</tr>
				<tr>
					<td className="table-size table-align"></td>
					<td className="table-size table-align">非支配株主に帰属する当期純損失</td>
					<td className="table-size table-align"></td>
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
			<table border="1" cellspacing="0">
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

//試算表のコンポーネント
const TrialBalance = () => {
	return (
		<>
			<section className="font-color">
				<h1 className="intro">試算表とは</h1>
				<div>損益計算書や貸借対照表など、確定申告や決算の際に必要な集計表を<span className="underline font-color2">試算表</span>と呼びます。</div>
				<div>このセクションでは、貸借対照表と損益計算書を解説していきます。</div>
				
				<h1 className="intro">貸借対照表とは</h1>
				<div>ある時点での財政状態を示す一覧表のことを<span className="underline font-color2">貸借対照表</span>と呼びます。</div>
				<div>勘定科目の分類のうち、「資産」「負債」「純資産」に該当する勘定科目がこの表に集計されます。</div>
                <br />
				<table border="1" cellspacing="0"><tr><th className="table-size table-align">最終的に発生したもの（結果）</th><th className="table-size table-align">何故、その結果は発生したのか（原因）</th></tr><tr><td className="table-size table-align" rowspan="2">資産<br />（売ったらお金になるもの）</td><td className="table-size table-align">負債<br />（他人から借りた）</td></tr><tr><td className="table-size table-align">純資産<br />（自分で用意した）</td></tr></table>
				<br />
                <div>なお、最終的に発生したもの（結果）のことを<span className="underline font-color2">運用形態</span>、何故、その結果は発生したのか（原因）ということを<span class="underline font-color2">調達源泉</span>と呼びます。</div>
				<div>つまり、手元にある財産を左側、その財産をどのように入手したのか？ということを右側に書くということを認識していれば問題ないでしょう。</div>
		
				<h1 className="intro">損益計算書とは</h1>
				<div>1年間において、収益と費用がいくら発生したのかを明らかにし、最終的にいくらの利益または損失がでているのかを把握するための表を<span className="underline font-color2">損益計算書</span>と呼びます。</div>
				<div>勘定科目の分類のうち、「収益」「費用」に該当する勘定科目がこの表に集計されます。</div>
				<br />
				<table border="1" cellspacing="0"><tr><th className="table-size table-align">最終的に発生したもの（結果）</th><th className="table-size table-align">何故、その結果は発生したのか（原因）</th></tr><tr><td className="table-size table-align">費用<br />（事業活動で発生したお金）</td><td className="table-size table-align">収益<br />（事業活動により獲得したお金）</td></tr><tr><td className="table-size table-align">利益<br />（収益が費用よりも多かった場合）</td><td className="table-size table-align">損失<br />（収益が費用よりも少なかった場合）</td></tr></table>
				<br />
				<div>収益や費用は因果関係を考えることが難しいかもしれません。</div>
				<div>まず、初めに費用が発生します。なぜその費用が発生したかというと、「収益を獲得した」という事業活動の結果があったからと考えると良いかと思います。</div>
				
			<h1 className="intro">損益計算書と貸借対照表のつながりについて</h1>
			<div>純資産は①事業を開始する際に、仕事で使うと決めた自分のお金、そして②事業活動を通して、獲得したお金の合計額になります。</div>
			<div>したがって、損益計算書で計算した「利益」「損失」が、貸借対照表の純資産の項目に金額として合算されていきます。</div>
			<br />
            <img src={ TrialBalanceImg } alt="貸借対照表と損益計算書のつながり" className="img-size"></img>
            <br />	
			<div>学習が進むと、この接続が完全に一致しない例に遭遇するかもしれません。損益計算書で計算された損益と、貸借対照表における純資産の増減額が完全一致する関係を<span className="underline font-color2">クリーン・サープラス関係</span>と呼びます。</div>
		</section>
		</>
	);
}

//確定申告のコンポーネント
const FinalTaxReturn = () => {
	return(
		<>
		　　　<section className="font-color">
			<h1 className="intro">確定申告とは</h1>
			<div>個人事業主が1年間の損益を算出し、所得税の金額を確定させることを<span className="underline font-color2">確定申告</span>と呼びます。</div>
			
			<div>このセクションでは、確定申告までの簡単な流れを抑えることが目的となります。</div>
		
			<h1 className="intro">控除とは</h1>
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
	
			<h1 className="intro">所得控除とは</h1>
			<div>納税者の個人的事情に起因する様々な納税の不公平性を緩和するため、1年間の所得から、さらに一定の金額を差し引くことの出来る仕組みを<span className="underline font-color2">所得控除</span>と呼びます。</div>
			<br />
			<div>例えば、病気で療養中の男性は、一定の金額を医療費として控除することが出来ます。その結果、所得税の計算の元になる金額は400万ではなく、400万から医療費控除で認められた金額を引いた金額になるのです。</div>
			<div>2021年現在、所得控除は全部で14種類あります。</div>
			<br />
			<table border="1" cellspacing="0">
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
		
			<h1 className="intro">税額控除とは</h1>
			<div>最終的に算出された所得税の金額から、さらに一定額を直接差し引くことの出来る仕組みを<span className="underline font-color2">税額控除</span>と呼びます。</div>
			<div>2021年現在、所得控除は全部で14種類あります。</div>
			<br />
			<table border="1" cellspacing="0">
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

//決算のコンポーネント
const TheEndOfTheFiscalPeriod = () => {
	return(
		<>
			<section className="font-color">
				<h1 className="intro">決算とは</h1>
				<div>企業が1年間の損益を算出し、株主への報告や法人税の金額を確定させることを<span className="underline font-color2">決算</span>と呼びます。</div>
				<br />
                <div>損益計算書と貸借対照表を作成するところまでは個人事業主と共通しますが、株主向けの決算書と、税務署へ提出する決算書では適用する法律が変わるところに注意して下さい。</div>
				<div></div>
		
				<h1 className="intro">トライアングル体制とは</h1>
				<div>日本の会計制度は、その目的別に①商法・会社法、②租税法、③金融商品取引法の3つから成り立っています。これを<span className="underline font-color2">トライアングル体制</span>と呼びます。</div>
                <br />
                <table border="1" cellspacing="0"><tr><th className="table-size table-align">法の名称</th><th className="table-size table-align">概要</th></tr><tr><td className="table-size table-align">商法・会社法</td><td className="table-size table-align">Lorem Ipsum</td></tr><tr><td className="table-size table-align">租税法</td><td className="table-size table-align">Lorem Ipsum</td></tr><tr><td className="table-size table-align">金融商品取引法</td><td className="table-size table-align">Lorem Ipsum</td></tr></table>
				<br />
				
			</section>
		</>
	);
}

// リンク用コンポーネント
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

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜ボキのシクミコンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */
// const BookkeepingList = () => {
//     return(
//         <>
//         <h1 className="intro">簿記が必要な理由</h1>
//                 <div>これから簿記を学習していく前に、そもそも何故簿記は必要になるのでしょうか？という点について、考えてみましょう。</div>
//                 <br />
//                 <div>■　個人事業主の場合　■</div>
//                 <div>フリーランスで働く人や飲食店の経営者など、独立して働く人達のことを一般的に個人事業主と呼びます。</div>
//                 <br />
//                 <div>日本では、儲けたお金に対して、<span className="underline font-color2">所得税</span>という税金がかかるため、なんらかの方法で１年間にいくら儲けたのか？について記録をしておかなければいけません。</div>
//                 <br />
//                 <div>会社員の場合、１年間にいくら儲けたかは給与明細や源泉徴収票を確認すれば問題ないですが、個人事業主の場合は、そのような資料がないことが多いため、そうはいきません。
//                     日々発生する領収書や請求書（<span className="underline font-color2">証憑</span>）を保管し、収支を何かに記録しておかないといけないのです。</div>

//                 <br />
//                 <div>■　法人の場合　■</div>
//                 <div>会社は法律上、人格を与えられ法人と呼ばれます。</div>
// 	    	    <div>人であるため、個人事業主同様１年間に儲けたお金から税金（<span className="underline font-color2">法人税</span>）が発生することになります。</div>
//                 <br />
//                 <div>また、株式会社であれば会社の業績を株主に報告する義務が発生します。これらの義務を履行するためには、なんらかの方法で１年間の収支を記録しておかなければならないのです。</div>
//         </>
//     );
// }

// class Section extends React.Component {
                
//     render() {
//         return (
//         <>
//             <aside className="subMenu">
//                 <ul>
//                     <li class="table-of-contents">目次</li>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement" style={{  }}>
//                         簿記が必要な理由
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="secondInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         簿記とは
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         複式簿記とは
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         仕訳とは
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         勘定科目とは
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         貨幣的評価の公準とは
//                     </ScrollLink>
//                     <ScrollLink activeClass="list-item" to="firstInsideContainer" spy={true} smooth={true} duration={1000} containerId="containerElement">
//                         貸借平均の原理とは
//                     </ScrollLink>
//                 </ul>
//             </aside>
    
//         <Element className="element" id="containerElement" style={{
//             position: 'relative',
//             height: '200px',
//             marginBottom: '100px'
//         }}>
    
//             <Element name="firstInsideContainer" className="font-color">
//                 <BookkeepingList />
//             </Element>
    
//             <Element name="secondInsideContainer">
//                 second element inside container
//             </Element>
//         </Element>
//         </>
//         );
//         }
//     };

//ボキのシクミのコンポーネント
const Bookkeeping = () => {
    return(
        <>
            <section className="font-color">
                <h1 className="intro">簿記が必要な理由</h1>
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

                <h1 className="intro">簿記とは</h1>
                <div>１年間のお金の動き（<span className="underline font-color2">取引</span>）を、帳簿と呼ばれるものに記録することを、略して<span className="underline font-color2">簿記</span>と呼びます。</div>
	    	    <div>したがって、「<span className="underline font-color2">お金の動きをいかに描写するか</span>」が簿記のテーマとなります。</div>
                <div>世の中には演劇、音楽、動画、執筆など様々な表現手段がありますが、簿記はお金に特化した表現手段の1つなのです。</div>

                <h1 className="intro">複式簿記とは</h1>
                <div>お金の動きを原因と結果の因果関係に分解して記録する方法のことを、<span className="underline font-color2">複式</span>と呼びます。</div>
	    	<div>例えば、現金100円を使ってチョコレートを買った時、以下のような分解が出来ます。</div>
                <br />
                <div>最終的に発生したもの（結果）：チョコレート</div>
                <div>何故、その結果は発生したのか（原因）：現金100円を使ったため</div>
                <br />
                <div>そして、簿記ではお金の動きを記録する際、「最終的に発生したもの（結果）」は左側に、「何故、その結果は発生したのか（原因）」は右側に書くことにしました。例えば、以下のように記録していきます。</div>
                <br />
                <table border="1" cellspacing="0">
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
	    	
                <h1 className="intro">仕訳とは</h1>
	    	<div>お金の動きに関して、その因果を記録する仕組みを<span className="underline font-color2">仕訳</span>と呼びます。</div>
	    	<br />
            <div>先程、「最終的に発生したもの（結果）」は左側に、「何故、その結果は発生したのか（原因）」は右側に書くということをお伝えしましたが、左側のことを<span className="underline font-color2">借方</span>、右側のことを<span className="underline font-color2">貸方</span>と呼びます。</div>
	    	<br />
            <div>したがって、先程の表は簿記では以下のような表記となります。</div>
	    	<br />
            <table border="1" cellspacing="0">
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
            <div>西洋流の言葉であった借を「出」、貸を「入」というような日本語風の言葉へ変換することも考えていましたが、当時、すでに西洋では借、貸という言葉が普及してしまっており、日本だけその言葉を使うことをやめてしまうと世界の潮流から外れてしまうという恐れがありました。</div>
	    	<br />
            <div>そこで、「日本語の語感には合わない」が、西洋で使われている言葉をそのまま流用することで文明開化を促進する、ということが行われました。これが現在も使われている借方、貸方という言葉の背景になります。</div>
	    	
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
            <div>そこで、「チョコレート」「鉛筆」「ノート」など、何か物を購入するという行為に関して、共通する性質は「消費される」ことであると考え、具体的に何を購入したかは問わず、その性質で記録することにしたのです。</div>
	    	<br />
	    	<table border="1" cellspacing="0">
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
	    	<h1 className="intro">貨幣的評価の公準とは</h1>
	    	<div>物の価値は何で測定すればよいでしょうか？</div>
	    	<br />
            <div>結論として、簿記では物の価値を貨幣によって評価し、計算を行います。特に企業の経済活動を記録するにあたって、その活動内容を貨幣によって記録することを定めたルールのことを<span className="underline font-color2">貨幣的評価の公準</span>と呼びます。</div>
	    	<br />
            <div>これにより、「お金を動かした」という経済活動を記録することが出来るようになるのです。</div>
	    	<br />
            <div>仕訳では、勘定科目の右側に金額を記載します。これで仕訳の完成です！</div>
	    	<br />
            <table border="1" cellspacing="0">
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
	    	
	    	<h1 className="intro">貸借平均の原理とは</h1>
	    	<div>仕訳において、借方に記入された金額の合計と貸方に記入された金額の合計は一致するという原則のことを<span className="underline font-color2">貸借平均の原理</span>と呼びます。</div>
		<br />
	    	<div>なぜ一致するのかというと、仕訳はお金が動いたという事実を、因果という2つの側面から見たことを表すものになるため、動いた金額は変わらないからです。</div>
	    	<div>例えば、現金100円を使ってチョコレートを買ったという例について、以下の仕訳を見て下さい。</div>
	    	<br />
	    	<table border="1" cellspacing="0">
                    <tr>
                        <th className="table-size table-align">借方</th>
                        <th className="table-size table-align">貸方</th>
                    </tr>

                    <tr>
                        <td className="table-size table-align">消耗品費 10,000</td>
                        <td className="table-size table-align">現金 100</td>
                    </tr>
                </table>
	    	<div>これは、現金100円を使って10,000円のチョコレートを買ったという仕訳になります。金額が一致していないのでおかしいですね。</div>
		<br />	    
	    	<div>以上の方法で、1年間のお金の動きを仕訳という方法で記録していくことで、最終的に貸借対照表や損益計算書を作成していくことが、ボキのシクミの基礎となります。</div>
	    </section>
        </>
    );
}

const bookkeeping = () => {
    return (
        <>
        <main className="mainArticle">
            <aside>
                {/* <Section /> */}
                <aside className="subMenu">
                    <ul>
                        <li class="table-of-contents">目次</li>
                        <li class="padding-inline-start">簿記が必要な理由</li>
                        <li class="padding-inline-start">簿記とは</li>
                        <li class="padding-inline-start">複式簿記とは</li>
                        <li class="padding-inline-start">仕訳とは</li>
                        <li class="padding-inline-start">勘定科目とは</li>
                        <li class="padding-inline-start">貨幣的評価の公準とは</li>
                        <li class="padding-inline-start">貸借平均の原理とは</li>
                    </ul>
                </aside>
                <Bookkeeping />
            </aside>
        </main>
        </>
    );
}

const trialBalance = () => {
    return (
        <main className="mainArticle">
            <aside>
                <TrialBalance />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜勘定科目コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

//勘定科目のコンポーネント
const AccountGrade3 = () => {
	return (
		<>
			<section className="font-color">
				<h1 className="intro">勘定科目の分類について</h1>
				<div>お金の動きのうち、共通の性質のみを抜き出してわかりやすく記録するために生まれた分類項目の総称を<span className="underline font-color2">勘定科目</span>と呼びます。</div>
				<div>この「共通の性質」は、大きく分けると5種類に分かれていきます。</div>
                		<br />
				<table border="1" cellspacing="0">
					<tr>
						<th className="table-size table-align">分類の名前</th>
						<th className="table-size table-align">概要</th>
					</tr>

					<tr>
						<td className="table-size table-align">資産</td>
						<td className="table-size table-align">売ったらお金になるという性質をもつ財産</td>
					</tr>
					<tr>
						<td className="table-size table-align">負債</td>
						<td className="table-size table-align">いずれ引き渡す義務があるという性質をもつ財産</td>
					</tr>
					<tr>
						<td className="table-size table-align">純資産</td>
						<td className="table-size table-align">自分で用意したという性質をもつ財産</td>
					</tr>
					<tr>
						<td className="table-size table-align">収益</td>
						<td className="table-size table-align">事業活動により獲得したお金</td>
					</tr>
					<tr>
						<td className="table-size table-align">費用</td>
						<td className="table-size table-align">事業活動で発生したお金</td>
					</tr>
					</table>
					<br />
					<div>それでは、各分類の詳細を見ていきましょう。</div>

					<h1 className="intro">資産とは</h1>
					<div>売ったらお金になるという性質をもった財産のことを<span className="underline font-color2">資産</span>と呼びます</div>
					<div>ほとんどのものは売ったらお金になりますので、資産と言えるでしょう。</div>
					<div>例えば、現金はそのままで資産になりますし、株式なども売ればお金になるので資産です。</div>

					<h1 className="intro">負債とは</h1>
					<div>業務で使うお金のうち、返済の必要性をもった財産を<span className="underline font-color2">負債</span>と呼びます</div>
					<div>例えば、借金がこれに該当します。</div>

					<h1 className="intro">純資産とは</h1>
					<div>業務で使うお金のうち、自分で用意したという性質をもつ財産を<span className="underline font-color2">純資産</span>と呼びます</div>
					<div>「自分で用意した」というのは、具体的には次の2つのお金を意味しています。これらは、負債のように他人から資産を得たのではなく、自身の力によって生み出した資産になります。</div>
					<br />
					<div>①事業を開始する際に、仕事で使うと決めた自分のお金</div>
					<div>②事業活動を通して、獲得したお金</div>

					<h1 className="intro">収益とは</h1>
					<div>事業活動により獲得したお金を<span className="underline font-color2">収益</span>と呼びます</div>
					<div>例えば、売上がこれに該当します。</div>

					<h1 className="intro">費用とは</h1>
					<div>事業活動で発生したお金を<span className="underline font-color2">費用</span>と呼びます</div>
					<div>例えば、仕入がこれに該当します。</div>
				</section>
		{/* <div></div> */}
                {/* <div className="deco1">帳簿記録のこと</div> */}
	    {/* <span className="underline font-color2"></span> */}
		</>
	);
}

const AccountGrade2 = () => {
	return (
		<>
			<section className="font-color">
				<h1 className="intro">勘定科目の大分類、中分類、小分類とは</h1>
				<h1 className="intro">流動資産とは</h1>
				<h1 className="intro">固定資産とは</h1>
				<h1 className="intro">繰延資産とは</h1>
				<h1 className="intro">流動負債とは</h1>
				<h1 className="intro">固定負債とは</h1>
				<h1 className="intro">売上高とは</h1>
				<h1 className="intro">営業外収益とは</h1>
				<h1 className="intro">特別利益とは</h1>
				<h1 className="intro">売上原価とは</h1>
				<h1 className="intro">販売費及び一般管理費とは</h1>
				<h1 className="intro">営業外費用とは</h1>
				<h1 className="intro">特別損失とは</h1>
				<h1 className="intro">法人税等とは</h1>
			</section>
		</>
	);
}

const AccountGrade1 = () => {
	return (
		<>
			<section className="font-color">
				<h1 className="intro">財務会計の概念フレームワークとは</h1>
				<h1 className="intro">資産とは</h1>
				<div><span className="underline font-color2">資産とは、過去の取引または事象の結果として、報告主体が支配している経済的資源をいう</span></div>
				<br />
				<h1 className="intro">負債とは</h1>
				<div><span className="underline font-color2">負債とは、過去の取引または事象の結果として、報告主体が支配している経済的資源を放棄もしくは引き渡す義務、またはその同等物をいう</span></div>
				<br />
				<h1 className="intro">純資産とは</h1>
				<div><span className="underline font-color2">純資産とは、資産と負債の差額をいう。</span></div>
				<br />
				<h1 className="intro">収益とは</h1>
				<div><span className="underline font-color2">収益とは、純利益または少数株主損益を増加させる項目であり、特定期間の期末までに生じた資産の増加や負債の減少に見合う額のうち、投資のリスクから解放された部分である</span></div>
				<br />
				<h1 className="intro">費用とは</h1>
				<div><span className="underline font-color2">費用とは、純利益または少数株主損益を減少させる項目であり、特定期間の期末までに生じた資産の減少や負債の増加に見合う額のうち、投資のリスクから解放された部分である</span></div>
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
                <AccountGrade1 />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜勘定科目コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

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

const finalTaxReturn = () => {
    return (
        <main className="mainArticle">
            <aside>
                <FinalTaxReturn />
            </aside>
        </main>
    );
}

const theEndOfTheFiscalPeriod = () => {
    return (
        <main className="mainArticle">
            <aside>
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
    
    <Title title="現金とは"/>
        <section>
            <article>
                <div>現金とは、「事業で利用するための」硬貨や紙幣の事です。</div>
                <div>他にも、現金に交換できる価値のあるものを<span className="underline font-color2">通貨代用証券</span>と言い、現金として扱います（後述）。</div>
                <div>例えば、現金を使った支払いは以下のような仕訳となります。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">現金100円で、チョコレートを買った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>消耗品費（＝チョコレート）　100</td>
                        <td>現金　100</td>
                    </tr>
                </table>

                <div>なぜ上のような仕訳になるかというと、現金は資産の勘定科目として扱うため、現金を使った場合、資産の減少を表現したいという意図から、貸方に計上されます。</div>
                <div>また、仕訳を組んだ時点で「事業で利用するための」現金であることに注意して下さい。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">普通預金口座から現金を10,000円引き出した。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>現金　10,000</td>
                        <td>普通預金　10,000</td>
                    </tr>
                </table>

                <div>なぜ上のような仕訳になるかというと、現金は資産の勘定科目として扱うため、現金を引き出した場合、資産の増加を表現したいという意図から、借方に現金を計上します。</div>
                <div>一方、普通預金口座も資産の勘定科目として扱うのですが、現金を引き出した場合、普通預金口座という資産の減少を表現したいという意図から、貸方に普通預金を計上します。</div>
                <div>また、仕訳を組んだ時点で「事業で利用するための」現金であることに注意して下さい。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">個人事業主がプライベートの現金100円で、コーラを買った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>消耗品費（＝コーラ）　100</td>
                        <td>事業主借　100</td>
                    </tr>
                </table>

                <div>なぜ上のような仕訳になるかというと、そもそも「現金」という勘定科目は「事業で利用するための」現金を表します。確定申告や決算は、事業で発生した収支が記録の対象となりますので、プライベート利用分の現金は明確に分ける必要があります。</div>
                <div>もし、プライベートの現金で事業用の支払をしてしまった場合、上記のように事業主勘定科目を使って調整が必要となります。</div>
            </article>
        </section>

        <Title title="通貨代用証券とは"/>
        <section>
            <article>
                <div>簿記の世界では、上記の他にも、いつでも通貨に換金できる価値を持つ証券も現金として扱います。</div>
                <div>これを「<span className="underline font-color2">通貨代用証券</span>」と言います。</div>
                <div>代表的なものとして、以下の通貨代用証券があります。</div>

                <table border="1" cellspacing="0" className="journal">
                    <tr>
                        <th>通貨代用証券の名前</th>
                        <th>どんなもの？</th>
                    </tr>
                    <tr>
                        <td>他人振出小切手</td>
                        <td>他人から受け取った小切手です。銀行に持っていくと現金に換金出来ます。</td>
                    </tr>
                    <tr>
                        <td>送金小切手</td>
                        <td>銀行が振出してくれる小切手です。銀行に持っていくと現金に換金出来ます。</td>
                    </tr>
                    <tr>
                        <td>郵便為替証書</td>
                        <td>郵便局が振出してくれる証書です。郵便局に持っていくと現金に換金出来ます。</td>
                    </tr>
                    <tr>
                        <td>株式配当金領収証</td>
                        <td>株式会社が発行する配当金の支払通知書です。銀行に持っていくと現金に換金出来ます。</td>
                    </tr>
                    <tr>
                        <td>期限到来済公社債利札</td>
                        <td>支払期限が到来している利札です。所定の金融機関に持っていくと現金に換金出来ます。</td>
                    </tr>
                </table>

                <div>それでは、いくつか仕訳を紹介します。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">株式配当金領収証を10,000円受け取った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>現金　10,000</td>
                        <td>受取配当金　10,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">手元にあった公社債利札5,000円に関して、支払期限が到来した。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>現金　5,000</td>
                        <td>有価証券利息　5,000</td>
                    </tr>
                </table>

            </article>
        </section>
	    
        <Title title="小切手とは"/>
        <section>
            <article>
                <div>例えば、誰かにお金をあげたいと考えます。</div>
                <div>一番シンプルな方法は、お金を現金の形で手渡しすることです。</div>
                <div>では、仮に1,000,000,000円を渡すとしたらどうしますか？また、相手が遠隔地にいたらどうしますか？</div>
                <div>手渡しも可能ではあるのですが、わざわざ現地まで大量の現金を抱えて持っていくのはいろいろなリスクが伴います。</div>
                <div>ここで登場するのが「<span className="pink">小切手</span>」です。以下のようなメリットがあります。</div>
                <div>①紙きれを発行するだけでお金を渡すことができる</div>
                <div>②お金を渡したい相手が銀行口座を持っていなくても関係ない</div>
                <div>③その他の文書類と同封して送付出来る</div>

                <table border="1" cellspacing="0" className="journal">
                <tr>
                    <th>簿記で扱う小切手の種類</th>
                    <th>どんなもの？</th>
                </tr>
                <tr>
                    <td>未渡小切手</td>
                    <td>支払のために振り出したが、まだ相手方に引き渡されず手許にある小切手</td>
                </tr>
                <tr>
                    <td>他人振出小切手</td>
                    <td>郵便振替貯金の払出が出来る証書。</td>
                </tr>
                <tr>
                    <td>不渡小切手</td>
                    <td>支払資金の不足などの原因で、銀行に支払を拒絶された小切手</td>
                </tr>
                <tr>
                    <td>先日付小切手</td>
                    <td>実際の振出日よりも先の日付を振出日として記載した小切手</td>
                </tr>
                <tr>
                    <td>自己振出小切手</td>
                    <td>自分が振り出した小切手</td>
                </tr>
            </table>
            </article>
        </section>
        </>
    );
}

const CashGrade2 = () => {
    return (
        <>
    
    <Title title="Lorem Ipsum"/>
        <section>
            <article>
                ボキ3級と同内容です。
            </article>
        </section>
        </>
    );
}

const CashGrade1 = () => {
    return (
        <>
                <Title title="その他の通貨代用証券"/>
		<section>
		    <article>
		    <div>簿記１級以上の試験では、様々な通貨代用証券が登場します。</div>

		    <table border="1" cellspacing="0" className="journal">
			<tr>
			    <th>通貨代用証券の名前</th>
			    <th>どんなもの？</th>
			</tr>
			<tr>
			    <td>預金手形</td>
			    <td>預金者に対して銀行が降り出す手形。銀行が支払人となる証券。</td>
			</tr>
			<tr>
			    <td>振替貯金払出証書</td>
			    <td>郵便振替貯金の払出が出来る証書。</td>
			</tr>
			<tr>
			    <td>一覧払手形</td>
			    <td>受取人が支払人に呈示した日が満期となる手形。</td>
			</tr>
			<tr>
			    <td>国庫金支払通知書</td>
			    <td>官公庁から税金の還付がある場合などに発行される支払通知書。</td>
			</tr>
		    </table>
		    </article>
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
        
        <Title title="預金とは"/>
        <section>
            <article>
            <div>預金は銀行口座に預け入れた現金を処理するための勘定科目です。口座種別ごとに勘定科目が変わります。</div>
            <div>原則、1年基準で分類を行い、1年以内に満期が到来する預金は流動資産、1年を超えて満期の到来する預金は固定資産として処理します。</div>
            <div>ただし、口座に預け入れた日から満期日まで1年以内かという考え方ではなく、決算日から満期日までが1年以内か否かで判断します。</div>
            <table border="1" cellspacing="0" className="journal">
                <tr>
                    <th>預金の名前</th>
                    <th>どんなもの？</th>
                </tr>
                <tr>
                    <td>当座預金</td>
                    <td>銀行との当座取引契約に基づいて随時引き出せる無利息の預金</td>
                </tr>
                <tr>
                    <td>普通預金</td>
                    <td>いつでも預け入れ、払い戻しが可能な預金</td>
                </tr>
                <tr>
                    <td>通知預金</td>
                    <td>引き出す時に予め数日前頃より通知することが必要な預金</td>
                </tr>
                <tr>
                    <td>定期預金</td>
                    <td>官予め満期日を設定し、満期日までは降ろせない預金</td>
                </tr>
                <tr>
                    <td>別段預金</td>
                    <td>経過的・一時的に金融機関に預け入れた預金</td>
                </tr>
            </table>

            <div>別段口座とは、例えば株式会社の設立時に払い込まれた一時的なお金がを処理する口座になります。</div>
            </article>
        </section>

        
        <Title title="当座預金の会計処理"/>
        <section>
            <article>
                <div>当座預金とは、小切手を管理するための口座です。</div>
                <div>２種類の仕訳を紹介します。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">当座預金口座を開設し、現金20,000円を預けた。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座預金　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">買掛金3,000円を、小切手を振り出して支払った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>買掛金　3,000</td>
                        <td>当座預金　3,000</td>
                    </tr>
                </table>
                
            </article>
        </section>

        
        <Title title="当座借越"/>
        <section>
            <article>
                <div>当座借越とは、当座預金の残高を超えた支払いが発生した場合に、予め契約を結んでおくことで銀行が借入限度額まで支払いに応じてくれる契約のことです。</div>
                <div>記帳方法は2種類に分かれます。</div>
                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">当座借越の記帳方法</caption>
                    <tr>
                        <th>二勘定法</th>
                        <th>一勘定法</th>
                    </tr>
                    <tr>
                        <td>当座預金勘定と当座借越勘定の2つを用いて仕訳を行う方法</td>
                        <td>当座勘定のみを用いて、当座預金と当座借越を記帳する方法</td>
                    </tr>
                </table>

                <div>仕訳を紹介します。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">当座預金口座を開設し、現金20,000円を預けた。</caption>
                    <caption className="question">二勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座預金　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">一勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>
                
                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">当座預金口座には20,000円が預け入れられていたとする。また、借越限度額は30,000円とする。買掛金の支払いのため、30,000円の小切手の振出を行った。</caption>
                    <caption className="question">二勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>買掛金　30,000</td>
                        <td>当座預金　20,000</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>当座借越　10,000</td>
                    </tr>
                </table>
                

                <table border="1" cellspacing="0" className="journal">
                
                    <caption className="question">一勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>買掛金　30,000</td>
                        <td>当座　30,000</td>
                    </tr>
                </table>
                
            </article>
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
            
            <Title title="発生主義とは"/>
            <section>
                <article>
                <div>実際に現金が動いた日付で収支を計上することを<span className="pink">現金主義</span>と言います。</div>
                <div>ただ、それだけを記録していては、今後いくらお金を受け取れるのか、いくら支払いがあるのかなどの資金繰りが出来ません。そこで、会計では原則、お金を受け取る権利（債権）が発生した日付や、お金を支払う義務（債務）が発生した日付で収支を計上します。これを<span class="red">発生主義</span>と呼びます。</div>
                </article>
            </section>

            
            <Title title="売掛金・買掛金とは"/>
            <section>
                <article>
                <div>取引先からモノを仕入れる、もしくは売る場合に後払いにすることを掛取引と言います。</div>
                <div>発生主義で記録を行う場合、この掛取引も記録の対象になります。</div>
                <div>仕入を行ったものの後払いにした場合、債務が生じます。これを<span className="pink">買掛金</span>（流動負債）といい、売上が上がったものの、お金の回収が後になった場合に発生する債権を<span class="red">売掛金</span>（流動資産）と言います。</div>
                
                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">A社はB社に商品を100,000円販売し、代金は掛けとした。</caption>
                    <caption className="question">A社の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>売掛金　100,000</td>
                        <td>売上高　100,000</td>
                    </tr>
                </table>

                <div>なぜ上記のような仕訳になるかというと、まず商品を販売したものの、代金は後払いになることから、債権のみ記録を行います。債権は売掛金という名前がついていますが、これは資産に属する勘定科目になるので、資産の増加を表したいという意図から借方に計上を行います。</div>
                <div>一方、商品を販売したので、売上の計上も同時に行います。売上高は収益に属する勘定科目になりますので、収益の増加を表したいという意図から、貸方に金額を計上します。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">B社の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>仕入高　100,000</td>
                        <td>買掛金　100,000</td>
                    </tr>
                </table>

                <div>なぜ上記のような仕訳になるかというと、まず商品を購入したものの、代金は後払いになることから、債務のみ記録を行います。債務は買掛金という名前がついていますが、これは負債に属する勘定科目になるので、負債の増加を表したいという意図から貸方に計上を行います。</div>
                <div>一方、商品を購入したので、仕入の計上も同時に行います。仕入高は費用に属する勘定科目になりますので、費用の増加を表したいという意図から、借方に金額を計上します。</div>
                
                <div>それでは、次に売掛金・買掛金と混同しやすい勘定科目を見ていきます。</div>
                <div>先ほど、売掛金は債権、買掛金は債務と紹介しましたが、正確には以下のような区別があります。</div>
                
                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">債権の区別</caption>
                    <tr>
                        <th>債権の名前</th>
                        <th>どんな債権か</th>
                    </tr>
                    <tr>
                        <td>売掛金</td>
                        <td>取引先との間の通常の営業取引によって生じた未収金</td>
                    </tr>
                    <tr>
                        <td>未収入金</td>
                        <td>通常の営業取引以外の取引によって生じた未収金</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">債務の区別</caption>
                    <tr>
                        <th>債務の名前</th>
                        <th>どんな債務か</th>
                    </tr>
                    <tr>
                        <td>買掛金</td>
                        <td>取引先との間の通常の営業取引によって生じた未払金</td>
                    </tr>
                    <tr>
                        <td>未払金</td>
                        <td>通常の営業取引以外の取引によって生じた未払金</td>
                    </tr>
                </table>
                </article>
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
            
            <Title title="手形とは"/>
            <section>
                <article>
                <div>手形とは、商品売買の代金のやり取りで用いられる紙きれのことです。</div>
                <div>誰か発行したか（振出）、受け取るのは誰か、いくらの金額をやり取りするか、いつまでに支払うかなどの情報が書いてあります。</div>
                <div>法律上、約束手形と為替手形に分類されます。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">法律上の手形の区別</caption>
                    <tr>
                        <th>法律上の手形の名前</th>
                        <th>どんな手形か</th>
                    </tr>
                    <tr>
                        <td>約束手形</td>
                        <td>一定の日に一定の場所で一定の金額を支払うために取り交わされる証書のこと。手形を振出す人と受取る人の2名が登場する手形。</td>
                    </tr>
                    <tr>
                        <td>為替手形</td>
                        <td>手形を振出す人と、手形に書かれている金額を支払う人、受取る人の3名が登場する手形。取引先の異なる売掛金と買掛金を同時に相殺するために用いる。</td>
                    </tr>
                </table>

                <div>一方、手形には、簿記上の分類もあります。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">簿記上の手形の区別</caption>
                    <tr>
                        <th>簿記上の手形の名前</th>
                        <th>どんな手形か</th>
                    </tr>
                    <tr>
                        <td>受取手形</td>
                        <td>手形に書かれている金額をもらうことができる権利のこと。換金すればお金がもらえるので資産。</td>
                    </tr>
                    <tr>
                        <td>支払手形</td>
                        <td>手形に書かれている金額を支払わなければならない義務のこと。お金を支払わなければならないので負債。</td>
                    </tr>
                </table>
                </article>
            </section>

            <div className="select_level">ボキ3級</div>
            <Title title="約束手形の会計処理"/>
            <section>
                <article>
                <div></div>
                <div></div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">A社はB社より商品100,000円を仕入れ、代金は約束手形を振り出して支払った。</caption>
                    <caption className="question">A社の仕訳</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>仕入高　100,000</td>
                        <td>支払手形　100,000</td>
                    </tr>
                </table>
                <div>約束手形を振り出した場合、将来手形の代金を支払う義務が発生します。簿記上、このような義務は負債として扱います。</div>
                <div>また、商品の仕入に際して約束手形を振り出したときに生じる義務は支払手形（しはらいてがた）勘定（負債）で処理します。</div>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">B社の仕訳</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>受取手形　100,000</td>
                        <td>売上高　100,000</td>
                    </tr>
                </table>
        
                <div>約束手形を受け取った場合、将来手形の代金を受け取る権利が発生します。簿記上、このような権利は資産として扱います。</div>
                <div>また、商品の販売に際して、約束手形を受け取ったときに生じるこのような権利は受取手形（うけとりてがた）勘定（資産）で処理します。</div>


                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">A社はB社に対して、以前振り出していた約束手形100,000円の支払期日が到来したので、当座預金口座を通じて支払った。</caption>
                    <caption className="question">A社の仕訳</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>支払手形　100,000</td>
                        <td>当座預金　100,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" className="journal">
                    <caption className="question">B社の仕訳</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座預金　100,000</td>
                        <td>受取手形　100,000</td>
                    </tr>
                </table>
        　　<div>受取手形の代金を受け取ることによって、手形代金を受け取る権利が消滅するので受取手形勘定を減少させます。</div>
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

const PromissoryNotesGrade2 = () => {
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

//その他債権債務のコンポーネント
const OtherGrade3 = () => {
    return (
        <>
            <Title title="電子記録債権とは"/>
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
                    <td>電子記録債権　1,000</td>
                    <td>売掛金　1,000</td>
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
	
	<Title title="クレジット売掛金とは"/>
        <section>
            <article>
            <div>クレジットカードによって商品を売り上げた場合、あとで信販会社から代金を受け取れる権利が発生します。この権利はクレジット売掛金勘定 で処理します。</div>
            <div>仕訳上は普通の「売掛金」と同じように考えていけば問題ありません。</div>
	    <div></div>
	
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

        <Title title="未収入金（未収金）・未払金とは"/>
        <section>
            <article>
            <div>「売掛金」「買掛金」は商品以外のもの（例えば営業で使用する目的の固定資産など）を売買したときには使えません。</div>
	    <div>商品以外のものを後払いで売買したときは未収入金（みしゅうにゅうきん）勘定および未払金（みばらいきん）勘定を使って処理します。</div>
	    <div>商品以外のものを後払いで売った場合は未収入金勘定で処理します。「未収入金」は将来お金を受け取れる（払ってもらえる）という権利なので資産となります。</div>
	    <div>また、商品以外のものを後払いで買った場合は未払金勘定で処理します。「未払金」は将来お金を払わなければならないという義務なので負債となります。</div>
            </article>
        </section>

        <Title title="前払金（前渡金）・前受金とは"/>
        <section>
            <article>
		    <div>先に商品の受け渡しを行い、代金の支払いや受取りは後日に行う場合は「売掛金」や「買掛金」で処理します。</div>
		    <div>それとは逆に、先に代金の支払いや受取りを行い、後日に商品の受け渡しを行う場合は前払金勘定および前受金勘定で処理をします。</div>
		    <div>そして後日、商品の受け渡しを行ったときに「仕入」や「売上」を計上します</div>
		    <div>商品を受け取る前にその代金を支払った場合は前払金（まえばらいきん）勘定で処理します。前払金勘定は将来商品を受け取ることができるという権利なので資産となります。</div>
		    <div>また、商品を引き渡す前にその代金を受け取った場合は前受金（まえうけきん）勘定で処理します。前受金勘定は将来商品を引き渡さなければならないという義務なので負債となります。</div>
            </article>
        </section>

        <Title title="前払費用・未払費用とは"/>
        <section>
            <article>
            <div>保険料の支払いを例にとって、費用の前払いに関する一連の処理方法を説明していきます。</div>
	
	 <table border="1" cellspacing="0" className="journal">
                <caption className="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<div>当期の費用となるのは支払った金額のうち当期に属する部分のみです。そこで決算において、当期に属さない部分を次期へ繰り延べるための処理を行います。この金額は月割で計算をします。</div>
	<div>支払った金額がそのまますべて当期の費用となるわけではないということに注意しましょう。</div>
	<div>この繰り延べた費用（次期に属する支払保険料）は前払保険料勘定を使って処理します。前払保険料勘定は費用の前払いなので資産となります。</div>
	<div>仕訳上は「前払保険料」「前払家賃」「前払利息」などの具体的な名称を使いますが、貸借対照表に表示する場合は、すべてまとめて「前払費用」とします。</div>
	<div>利息は時の経過によって発生するものと考えられるため、翌期に属する部分を当期に受け取った場合は繰り延べ処理が必要となります。</div>
	<div>具体的には、利息を前受けしたときは当期に属さない部分を前受利息勘定を使って次期へ繰り延べます。前受利息勘定は収益の前受けなので負債となります。</div>
	<div>仕訳上は「前受利息」「前受家賃」「前受地代」などの具体的な名称を使いますが、貸借対照表に表示する場合は、すべてまとめて「前受収益」とします（ただし問題によっては仕訳上の科目を使う場合もあります）。</div>
	<div>前払費用は一定の契約に従い、継続して役務（サービスなど）の提供を受ける場合、いまだ提供されていない役務に対し支払われた対価をいいます。前払費用は、このような役務提供契約以外の契約等による前払金とは区別しなければなりません</div>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">×2年3月1日に営業のための店舗を賃借した。1年分の家賃￥1,200,000はすべて×3年2月28日に後払いする契約である。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>

            <div>店舗を借りただけでは簿記上の取引とはなりませんので仕訳は必要ありません。</div>
	    <div>1年分の家賃はすべて次期（×3年2月28日）に後払いするので、当期の支払額はゼロです。しかし、当期においてこの店舗を1か月間（×2年3月1日～×2年3月31日）利用しているわけですから、この1か月分の家賃を月割で当期の費用として計上しなければなりません。</div>
	    <div>そこで決算において、当期に属する費用を見越して計上するための処理を行います。この見越計上した費用（当期に属する支払家賃）は未払家賃勘定を使って処理します。未払家賃勘定は費用の後払いなので負債となります。仕訳上は「未払家賃」「未払利息」などの具体的な名称を使いますが、貸借対照表に表示する場合は、すべてまとめて「未払費用」とします（ただし問題によっては仕訳上の科目を使う場合もあります）。</div>
            </article>
        </section>

        <Title title="前受収益・未収収益とは"/>
        <section>
            <article>
            <div>続いて収益の未収について説明していきますが、基本的な考え方は費用の未払いと同じなので、さらっと見ていくことにします。費用の未払いの一連の処理方法をしっかりと理解してから続きを読んでください。次期に受け取る利息のうち、当期に属する部分を未収利息勘定を使って見越計上します。未収利息勘定は収益の未収なので資産となります。仕訳上は「未収利息」「未収家賃」などの具体的な名称を使いますが、貸借対照表に表示する場合は、すべてまとめて「未収収益」とします（ただし問題によっては仕訳上の科目を使う場合もあります）。</div>
            <div></div>
	    <div></div>
	 
            </article>
        </section>

        <Title title="貸付金・借入金とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="立替金・預り金とは"/>
        <section>
            <article>
            <div>給料の前払い等として、会社が一時的に立て替えて支払った場合には、従業員立替金（または立替金）勘定（資産）で処理します。</div>
	    <div>（従業員）立替金勘定は資産（貸借対照表の借方項目）なので、増加すれば借方、減少すれば貸方に記入します。</div>
            <div>従業員預り金の処理方法
           我が国ではサラリーマンなどの給与所得者に対する所得税や社会保険料の徴収方法として源泉徴収制度がとられています。会社が給料を支払う際に、あらかじめ所得税や社会保険料の金額を給料から差し引いておき、一定の期日までに会社が従業員の所得税等をまとめて国などに納付する制度。なお、源泉徴収された所得税のことを源泉所得税といいます。</div>
           <div>給料から差し引いた所得税や社会保険料は一時的に従業員からお金を預かっているに過ぎないので、これを従業員預り金（または預り金）勘定（負債）で処理します。</div>

	<table border="1" cellspacing="0" className="journal">
                <caption className="question">給料￥1,000のうち、源泉所得税￥100及び社会保険料￥50を差し引き、残額￥850は現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">従業員から預かっている所得税を現金で納付した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<div>健康保険や雇用保険などの社会保険は従業員個人と会社（雇用主）の両方が折半で負担します。従業員負担分はすでに源泉徴収している従業員預り金勘定を取り崩し、会社負担分は法定福利費勘定で処理します。</div>
            </article>
        </section>

        <Title title="仮払金・仮受金とは"/>
        <section>
            <article>
            <div>現金等を授受したが処理すべき相手勘定が不明である場合や金額が未確定である場合、その勘定科目や金額が判明するまで仮払金（かりばらいきん）勘定（資産）または仮受金（かりうけきん）勘定（負債）を使って処理します。</div>
	    <div>仮払金勘定や仮受金勘定はあくまでも一時的に記帳しておくための勘定科目なので、処理すべき勘定科目や金額が判明した時点で、ただちに適切な勘定へ振り替えます。</div>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">従業員に出張旅費の概算額￥10,000を現金で手渡した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<div>現金を渡した時点では実際の出張旅費がいくらになるのかまだわかりません。そこで、この金額を一時的に仮払金勘定で処理しておきます。</div>
	
	<table border="1" cellspacing="0" className="journal">
                <caption className="question">出張中の従業員から￥5,000の当座預金口座への振込みがあったが、その内容は不明である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<div>当座預金口座へ振り込まれた時点では内容が不明なので、どの勘定科目で処理すべきかわかりません。そこで、この金額を一時的に仮受金勘定（負債）で処理しておきます。</div>
            <div></div>
            </article>
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const NonCurrentAssetsGrade3 = () => {
    return (
        <>
            <Title title="固定資産とは"/>
        <section>
            <article>
            <div>建物や車など、1年以上利用することを目的として取得する資産を固定資産と言います。</div>
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
        </>
    );
}

const NonCurrentAssetsGrade2 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜有価証券コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const SecuriteisGrade3 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜リース取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const LeaseGrade3 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜引当金コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const AllowanceGrade3 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜外貨建取引コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const ForeignCurrencyGrade3 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜税効果会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const TaxEffectGrade3 = () => {
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



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const NonCurrentAssetsAccounting = () => {
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

const nonCurrentAssetsAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <NonCurrentAssetsAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜固定資産会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜リース取引会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */

const LeaseAccounting = () => {
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

const leaseAccounting = () => {
    return (
        <main className="mainArticle">
            <aside>
                <LeaseAccounting />
            </aside>
        </main>
    );
}

/* 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜リース取引会計コンテンツ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 */



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
            <li className="changeYozakuraMode li" onClick={ changeYozakuraMode }>ヨザクラモードに切り替える</li>
            <div className="grid3-sakura"></div>
            <span className="icon"><ImMenu3 /></span>
        </header>

            <div className="sidebar-sakura">
                <h2 className="titleColor"><Link to="/">HOME</Link></h2>
        　　    <h2 className="titleColor">基礎編</h2>
                <ul className="sideMenu menu-sakura-color">
                    <li className="sideList menu-sakura-color"><Link to="/bookkeeping">ボキのシクミ</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/account-grade3">勘定科目</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/accounts-list-grade3">勘定科目一覧表</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/trial-balance">試算表</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/final-tax-return">確定申告</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/the-end-of-the-fiscal-period">決算</Link></li>
                </ul>

                <h2 className="titleColor">計算編</h2>
                <ul className="sideMenu">
                    <li className="sideList menu-sakura-color"><Link to="/cash-grade3">現金</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/savings-grade3">預金</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/tradings-grade3">商品売買</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/promissory-notes-grade3">手形</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/other-grade3">その他債権債務</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/non-current-assets-grade3">固定資産</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/securiteis-grade3">有価証券</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/lease-grade3">リース取引</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/research-and-development-costs-grade3">研究開発費</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/allowance-grade3">引当金</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/foreign-currency-grade3">外貨建取引</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/tax-effect-grade3">税効果会計</Link></li>
                    <li className="sideList menu-sakura-color"><Link to="/consolidated-accounting-grade3">連結会計</Link></li>
                </ul>

                <h2 className="titleColor">理論編</h2>
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

            <Switch>
                <Route exact path="/" component={ home } />
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
                <Route path="/non-current-assets-accounting" component={ nonCurrentAssetsAccounting } />
                <Route path="/lease-accounting" component={ leaseAccounting } />
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
            <li className="topLogo-yozakura li"><Link to="/">ヨザクラボキ</Link></li>
            <div className="grid2-yozakura"></div>
            <li className="changeSakuraMode li" onClick={ changeSakuraMode }>サクラモードに切り替える</li>
            <div className="grid3-yozakura"></div>
            <span className="icon"><ImMenu3 /></span>
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
                    <li className="sideList menu-yozakura-color"><Link to="/final-tax-return">確定申告</Link></li>
                    <li className="sideList menu-yozakura-color"><Link to="/the-end-of-the-fiscal-period">決算</Link></li>
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
                <Route path="/non-current-assets-accounting" component={ nonCurrentAssetsAccounting } />
                <Route path="/lease-accounting" component={ leaseAccounting } />
                <Route path="/financial-statements-theory" component={ financialStatementsTheory } />
                <Route component={ home } />{/* ←404の場合 */}
            </Switch>
        </BrowserRouter>
    );
}
}

export default SideBar;
