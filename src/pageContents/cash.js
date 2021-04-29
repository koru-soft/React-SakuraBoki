import './cash.css';
import React from 'react';
import Title from '../components/title';

const cashContent = (
    <React.Fragment>

    <Title title="現金とは"/>
        <section>
            <article>
                <div>現金とは、「事業で利用するための」硬貨や紙幣の事です（<span class="yellow">流動資産</span>）。</div>
                <div>例えば、現金を使った支払いは以下のような仕訳となります。</div>

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">普通預金口座から現金を10,000円引き出した。</caption>
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

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">現金100円で、コーラを買った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>消耗品費（＝コーラ）　100</td>
                        <td>現金　100</td>
                    </tr>
                </table>

                <div>なぜ上のような仕訳になるかというと、現金は資産の勘定科目として扱うため、現金を使った場合、資産の減少を表現したいという意図から、貸方に計上されます。</div>
                <div>また、仕訳を組んだ時点で「事業で利用するための」現金であることに注意して下さい。</div>

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">個人事業主がプライベートの現金100円で、コーラを買った。</caption>
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
                <div>これを「<span class="red">通貨代用証券</span>」と言います。</div>
                <div>代表的なものとして、以下の通貨代用証券があります。</div>

                <table border="1" cellspacing="0" class="journal">
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

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">株式配当金領収証を10,000円受け取った。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>現金　10,000</td>
                        <td>受取配当金　10,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">手元にあった公社債利札5,000円に関して、支払期限が到来した。</caption>
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
                <div>ここで登場するのが「<span class="red">小切手</span>」です。以下のようなメリットがあります。</div>
                <div>①紙きれを発行するだけでお金を渡すことができる</div>
                <div>②お金を渡したい相手が銀行口座を持っていなくても関係ない</div>
                <div>③その他の文書類と同封して送付出来る</div>

                <table border="1" cellspacing="0" class="journal">
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

        <Title title="その他の通貨代用証券"/>
        <section>
            <article>
            <div>簿記１級以上の試験では、様々な通貨代用証券が登場します。</div>

            <table border="1" cellspacing="0" class="journal">
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

        <Title title="預金とは"/>
        <section>
            <article>
            <div>預金は銀行口座に預け入れた現金を処理するための勘定科目です。口座種別ごとに勘定科目が変わります。</div>
            <div>原則、1年基準で分類を行い、1年以内に満期が到来する預金は流動資産、1年を超えて満期の到来する預金は固定資産として処理します。</div>
            <div>ただし、口座に預け入れた日から満期日まで1年以内かという考え方ではなく、決算日から満期日までが1年以内か否かで判断します。</div>
            <table border="1" cellspacing="0" class="journal">
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

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">当座預金口座を開設し、現金20,000円を預けた。</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座預金　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">買掛金3,000円を、小切手を振り出して支払った。</caption>
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
                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">当座借越の記帳方法</caption>
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

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">当座預金口座を開設し、現金20,000円を預けた。</caption>
                    <caption class="question">二勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座預金　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>

                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">一勘定法の場合</caption>
                    <tr>
                        <th>借方（運用形態）</th>
                        <th>貸方（調達源泉）</th>
                    </tr>
                    <tr>
                        <td>当座　20,000</td>
                        <td>現金　20,000</td>
                    </tr>
                </table>
                
                <table border="1" cellspacing="0" class="journal">
                    <caption class="question">当座預金口座には20,000円が預け入れられていたとする。また、借越限度額は30,000円とする。買掛金の支払いのため、30,000円の小切手の振出を行った。</caption>
                    <caption class="question">二勘定法の場合</caption>
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
                

                <table border="1" cellspacing="0" class="journal">
                
                    <caption class="question">一勘定法の場合</caption>
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

        <Title title="発生主義とは"/>
        <section>
            <article>
            <div>実際に現金が動いた日付で収支を計上することを<span class="red">現金主義</span>と言います。</div>
            <div>ただ、それだけを記録していては、今後いくらお金を受け取れるのか、いくら支払いがあるのかなどの資金繰りが出来ません。そこで、会計では原則、お金を受け取る権利（債権）が発生した日付や、お金を支払う義務（債務）が発生した日付で収支を計上します。これを<span class="red">発生主義</span>と呼びます。</div>
            </article>
        </section>

        <Title title="売掛金・買掛金とは"/>
        <section>
            <article>
            <div>取引先からモノを仕入れる、もしくは売る場合に後払いにすることを掛取引と言います。</div>
            <div>発生主義で記録を行う場合、この掛取引も記録の対象になります。</div>
            <div>仕入を行ったものの後払いにした場合、債務が生じます。これを<span class="red">買掛金</span>（流動負債）といい、売上が上がったものの、お金の回収が後になった場合に発生する債権を<span class="red">売掛金</span>（流動資産）と言います。</div>
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A社はB社に商品を100,000円販売し、代金は掛けとした。</caption>
                <caption class="question">A社の場合</caption>
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

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">B社の場合</caption>
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
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">債権の区別</caption>
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

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">債務の区別</caption>
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

        <Title title="手形とは"/>
        <section>
            <article>
            <div>手形とは、商品売買の代金のやり取りで用いられる紙きれのことです。</div>
            <div>誰か発行したか（振出）、受け取るのは誰か、いくらの金額をやり取りするか、いつまでに支払うかなどの情報が書いてあります。</div>
            <div>法律上、約束手形と為替手形に分類されます。</div>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">法律上の手形の区別</caption>
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

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">簿記上の手形の区別</caption>
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

        <Title title="約束手形の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A社はB社より商品100,000円を仕入れ、代金は約束手形を振り出して支払った。</caption>
                <caption class="question">A社の仕訳</caption>
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

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">B社の仕訳</caption>
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


            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A社はB社に対して、以前振り出していた約束手形100,000円の支払期日が到来したので、当座預金口座を通じて支払った。</caption>
                <caption class="question">A社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>支払手形　100,000</td>
                    <td>当座預金　100,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">B社の仕訳</caption>
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
	
	  <Title title="電子記録債権とは"/>
        <section>
            <article>
            <div>電子債権記録機関に必要事項を電子記録することで発生する債権を電子記録債権といいます。</div>
            <div>手形は紛失や盗難の危険があるのに対し、電子記録債権は電子データになるため、物理的な紛失や盗難のリスクを抑えることができます。</div>
	    <div>また、手形は印紙税がかかるのに対し、電子記録債権であれば印紙の貼付が不要のため、印紙税を節約することが出来ます。</div>
	
	    <table border="1" cellspacing="0" class="journal">
                <caption class="question">得意先に対する売掛金￥1,000について、電子記録債権の発生記録が行われた。</caption>
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
	
		<table border="1" cellspacing="0" class="journal">
                <caption class="question">電子記録債権￥1,000について、支払期日が到来し、当座預金口座に振り込まれた。</caption>
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
	
	    <table border="1" cellspacing="0" class="journal">
                <caption class="question">商品￥1,000をクレジット払いの条件で販売した。</caption>
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
	
	    <table border="1" cellspacing="0" class="journal">
                <caption class="question">商品￥1,000をクレジット払いの条件で販売した。</caption>
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

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A社は仕入先B社に対して、10,000円を仕入れ、代金は得意先C社宛ての為替手形を振出し、C社の引き受けを得て、B社に渡した。</caption>
                <caption class="question">A社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>仕入高　10,000</td>
                    <td>売掛金　10,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">B社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>買掛金　10,000</td>
                    <td>支払手形　10,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">C社の仕訳</caption>
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
	    
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">A社はB社から商品￥100を仕入れ、代金として所有している手形を裏書譲渡した。</caption>
                <caption class="question">A社（裏書人）の仕訳</caption>
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
		
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">B社（被裏書人）の仕訳</caption>
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
<<<<<<< HEAD

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">B社が裏書譲渡によって受け取った手形が、以前にB社自身が振り出した手形（自己振出手形）であったことが判明した</caption>
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
=======

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">B社が裏書譲渡によって受け取った手形が、以前にB社自身が振り出した手形（自己振出手形）であったことが判明した</caption>
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





</div>
            
>>>>>>> origin/master

        <Title title="手形の割引とは"/>
        <section>
	    <article>
	    <div>受け取った手形は、銀行に持っていって、現金に換えてもらうことも出来ます。これを手形の割引と言います。通常、約束手形は満期日が到来しないとその代金を受け取ることができません。</div>
	    <div>しかし所有している手形を銀行にもっていくと、満期日前であっても一定の手数料（割引料）を支払うことで、その手形を買い取ってもらうことができます。これを手形の割引（わりびき）といいます。</div>
	    <div>このとき発生する手数料は手形売却損勘定（営業外費用）で処理します</div>
		
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">額面￥300の手形を取引銀行で割り引き、割引料￥10が差し引かれた残金を当座預金とした。</caption>
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
		
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">振り出した約束手形￥100,000が本日満期となったが、資金不足のため相手方の承諾を得て、1か月後支払いの新手形に書き替えた。なお、新手形の期日までの利息￥1,000は現金で支払った。</caption>
	<caption class="question">当社（手形の支払人）の仕訳</caption>
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
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">利息を新手形の額面金額に含める方法</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">相手方（手形の受取人）の仕訳</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">利息を新手形の額面金額に含める場合</caption>
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
        	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">当社が保有している甲社振出しの約束手形￥10,000が不渡りとなり、甲社に対して償還請求を行なった。なお、このための償還請求費用￥200を現金で支払った。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">甲社が倒産し、同社に対する不渡手形￥10,200（前期発生分）が回収不能となった。なお、貸倒引当金の残高は￥3,000である。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">甲社に対する不渡手形￥10,200が期限後利息の￥800とともに当座預金に振り込まれた。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">以前、乙社に裏書譲渡していた甲社振出しの約束手形￥100,000が不渡りとなったので、償還請求費用と延滞利息￥3,000とともに小切手を振り出して支払った。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">以前、乙社に裏書譲渡していた甲社振出しの約束手形￥100,000が不渡りとなったので、償還請求費用と延滞利息￥3,000とともに小切手を振り出して支払った。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">営業用の土地￥80,000を￥100,000で売却し、代金は約束手形で受け取った。なお、当社は土地の売買を目的とした会社ではない。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">上記の手形が満期日となり、手形代金￥100,000を現金で受け取った。</caption>
	<tr>
	    <th>借方（運用形態）</th>
	    <th>貸方（調達源泉）</th>
	</tr>
	<tr>
	    <td>現金　100,000</td>
	    <td>営業外受取手形　100,000</td>
	</tr>
    	</table>
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">営業用のパソコン￥50,000を購入し、代金は約束手形を振り出して支払った。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
	<caption class="question">上記の手形が満期日となり、手形代金￥50,000を現金で支払った。</caption>
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
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A社は仕入先B社に対して、約束手形を振り出して100,000円を現金で仕入れた。</caption>
                <caption class="question">A社の仕訳</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金　100,000</td>
                    <td>手形借入金　100,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">B社の仕訳</caption>
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
	
	 <table border="1" cellspacing="0" class="journal">
                <caption class="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">×2年3月1日に向こう1年分の保険料￥120,000を現金で支払った。なお、当期は3月31日に終了する1年間である。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">×2年3月1日に営業のための店舗を賃借した。1年分の家賃￥1,200,000はすべて×3年2月28日に後払いする契約である。なお、当期は3月31日に終了する1年間である。</caption>
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

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">給料￥1,000のうち、源泉所得税￥100及び社会保険料￥50を差し引き、残額￥850は現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">従業員から預かっている所得税を現金で納付した。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">従業員に出張旅費の概算額￥10,000を現金で手渡した。</caption>
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
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">出張中の従業員から￥5,000の当座預金口座への振込みがあったが、その内容は不明である。</caption>
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

        <Title title="商品券・他店商品券とは"/>
        <section>
            <article>
            <div>商品の代金を信販会社などが発行した商品券で受け取った場合は受取商品券勘定で処理します。受取商品券はあとで信販会社などに代金を請求できる権利なので資産です。</div>
            </article>
        </section>

        <Title title="貸倒とは"/>
        <section>
            <article>
            <div>得意先の倒産などにより、売掛金が回収できなくなることがあります。これを<span class="red">貸倒れ</span>と言います。</div>
            <div>貸倒れが生じた場合、売掛金という債権が消失します。また、貸倒れが生じたということは損失が発生したということになるので、これをなんとかして記録しないといけません。</div>
            <div>貸倒れが発生しそうな売掛金がある場合、そのための費用を予め計上しておきます。</div>
            <div>売上を打ち消すための費用を貸倒引当金繰入、売掛金のマイナスを表す勘定科目を貸倒引当金と言います。</div>
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">売掛金残高が100,000円ある。このうち、3%の範囲で貸倒引当金を設定する。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金繰入 3,000</td>
                    <td>貸倒引当金 3,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">翌期になり、2,000円の売掛金が貸倒れた。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 2,000</td>
                    <td>売掛金 2,000</td>
                </tr>
            </table>

            <div>続いて、事前に設定していた範囲よりも大きい金額で貸倒が発生した場合を考えます。</div>
            <div>これを貸倒損失（費用）と言います。</div>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">事前に貸倒引当金を3,000円設定していたが、当期に10,000円の貸倒が発生した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 3,000</td>
                    <td>売掛金 10,000</td>
                </tr>
                <tr>
                    <td>貸倒損失 7,000</td>
                    <td></td>
                </tr>
            </table>

            <div>売掛金、受取手形、貸付金などの債権が得意先の倒産などによって回収不能になることを貸倒れ（かしだおれ）といいます。</div>
	<div>これらの債権があらかじめ次期に貸し倒れることが予測できる場合には、その見積額を当期の費用として計上しなければなりません。この費用は貸倒引当金繰入（かしだおれひきあてきんくりいれ）という勘定で処理をします。</div>
	<div>貸倒引当金繰入は貸倒れの見積額であり、現実にはいまだ回収不能になったわけではないので直接売掛金などを減額することはできません。そこで、貸倒引当金（かしだおれひきあてきん）という勘定科目を使って貸倒れの見積額を間接的に控除します。</div>
	<div>貸倒引当金は資産の実質的な価値を表すために、その資産から間接的に控除される勘定科目です。したがって、貸倒引当金は減価償却累計額と同じく評価勘定です。</div>
	<div>貸倒引当金は資産の実質的な価値を表すために、その資産から間接的に控除される勘定科目です。したがって、貸倒引当金は減価償却累計額と同じく評価勘定です。</div>
	<div></div>
	<div>差額補充法とは</div>
	<div>貸倒引当金の設定金額と残高との差額を貸倒引当金繰入勘定を使って繰り入れる方法。</div>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">決算となり売掛金残高￥10,000に対して3％の貸倒引当金を設定する。なお、貸倒引当金の残高は￥100であり、差額補充法によって処理する。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 3,000</td>
                    <td>売掛金 10,000</td>
                </tr>
                <tr>
                    <td>貸倒損失 7,000</td>
                    <td></td>
                </tr>
            </table>
	<div>貸倒引当金の要設定額は￥300（＝￥10,000×3％）、貸倒引当金の残高は￥400なので、両者の差額￥100を戻し入れます（貸倒引当金を減額します）。</div>
	
	<div>例題1のケースとは逆に「貸倒引当金の設定額＜貸倒引当金の残高」となるケースでは、超過分を貸倒引当金から減額し、それを貸倒引当金戻入（かしだおれひきあてきんもどしいれ）として計上します。</div>
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">決算となり売掛金残高￥10,000に対して3％の貸倒引当金を設定する。なお、貸倒引当金の残高は￥400であり、差額補充法によって処理する。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 3,000</td>
                    <td>売掛金 10,000</td>
                </tr>
                <tr>
                    <td>貸倒損失 7,000</td>
                    <td></td>
                </tr>
            </table>
	<div>貸倒引当金を設定していない場合</div>
	<div>債権が貸し倒れたときはその債権の金額を減額します。仮にこの債権に対して貸倒引当金がまったく設定されていない場合は、貸し倒れた債権の全額を貸倒損失（かしだおれそんしつ）として処理します。</div>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">得意先が倒産し、同社に対する売掛金￥200が貸倒れとなった。なお、貸倒引当金は設定していない。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 3,000</td>
                    <td>売掛金 10,000</td>
                </tr>
                <tr>
                    <td>貸倒損失 7,000</td>
                    <td></td>
                </tr>
            </table>
	
	<div>前期に取得した債権が貸し倒れた場合、「貸し倒れた債権の金額」と「貸倒引当金の残高」の大小関係によって処理方法が異なってきます。</div>
	<div>当期取得分の債権が貸し倒れた場合、貸倒引当金は前期末の売掛金残高に対して設定されたものなので、前期取得分の売掛金が貸し倒れた場合はそれに対応する貸倒引当金を取り崩すことができます。</div>
	<div>一方、当期に取得した売掛金に対する貸倒引当金の設定は当期末の決算に行われるので、当期に取得した売掛金に対してはまだ貸倒引当金が設定されていないことになります。</div>
	<div>つまり当期取得分の売掛金に係る貸倒引当金は存在していないことになるので、当期発生分の売掛金が貸し倒れた場合には、貸倒引当金を取り崩すことはできません。</div>
	<div>そこで、当期取得分の債権が貸し倒れた場合はその全額を貸倒損失勘定で処理します。</div>
	<div>前期に貸し倒れた債権を当期に回収した場合、前期以前に貸倒れとして処理した債権を当期に回収した場合は、償却債権取立益（しょうきゃくさいけんとりたてえき）勘定で処理をします。</div>
	
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">前期に貸倒処理した売掛金￥100を現金で回収した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>貸倒引当金 3,000</td>
                    <td>売掛金 10,000</td>
                </tr>
                <tr>
                    <td>貸倒損失 7,000</td>
                    <td></td>
                </tr>
            </table>
            </article>
        </section>

        <Title title="棚卸とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="商品売買の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="原価率・利益率とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="売価還元法とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="固定資産とは"/>
        <section>
            <article>
            <div>建物や車など、1年以上利用することを目的として取得する資産を固定資産と言います。</div>
            <div>固定資産を購入した際に発生する手数料などの費用を付随費用と言い、原則は固定資産の取得原価に加えます。</div>
	    <div>取得原価＝購入代価（固定資産の本体価格）＋付随費用</div>
	    <div>固定資産の購入に際して、手数料や運送費、据付費などの付随費用が発生する場合があります。これらの付随費用は固定資産の取得原価に含めて処理します。</div>
	    <div>他にも、固定資産を使用できる状態にするための支出額（中古建物の内装工事代や土地の整地費用など）も付随費用として取得原価に含めます。</div>
            <div>固定資産は以下の種類があります。</div>
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">固定資産の分類</caption>
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

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">土地を￥100,000で購入し、代金は手数料￥5,000とともに現金で支払った。</caption>
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
	<table border="1" cellspacing="0" class="journal">
                <caption class="question">決算につき、次の資料に基づいて建物の減価償却を行う。なお、当期は×2年3月31日を決算日とする1年間である。</caption>
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

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">土地￥105,000を￥110,000で売却し、代金は当座預金に振り込まれた。</caption>
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

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">×6年4月1日に建物（取得原価￥120,000、期首減価償却累計額￥20,000、間接法で記帳）を￥110,000で売却し、代金は当座預金口座に振り込まれた。なお、当期は×7年3月31日で終了する１年間である。</caption>
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

	<table border="1" cellspacing="0" class="journal">
                <caption class="question">×6年6月30日に建物（取得原価￥120,000、期首減価償却累計額￥20,000、間接法で記帳）を￥110,000で売却し、代金は当座預金口座に振り込まれた。建物は残存価額を取得原価の10％、耐用年数を20年とする定額法で償却している。なお、当期は×7年3月31日で終了する１年間である。</caption>
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

		<table border="1" cellspacing="0" class="journal">
                <caption class="question">建物の改修工事を行い、￥100,000を小切手を振り出して支払った。このうち、￥70,000は耐用年数を延長させる改良のための支出であり、残りは定期的修繕のための支出である。</caption>
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

        <Title title="税金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="特殊商品売買の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="未着品売買とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="試用販売とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="委託販売とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="割賦販売とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="受託販売とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="委託買付とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="受託買付とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="予約販売とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="複数の販売形態の混合"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="本支店会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="有価証券とは"/>
        <section>
            <article>
            <div>有価証券とは、株式や国債、社債などのことです。</div>
            <div>株式とは、株式会社が会社設立時や増資時に発行するもので、上場している会社の場合には、証券取引所で売買することができます。安く買って高く売ることで利益を手にすることが出来る他、業績によっては配当金も受け取ることが出来ます。</div>
            <div>一方、国債は国が、社債は会社がお金を投資家から借りたい時に発行する債券のことになります。保有しておくことで、利息を受け取ることが出来ます。</div>
            <div>有価証券とは書いて字のごとく「価値の有る証券（紙片）」のことです。</div>
            <div>広い意味では、小切手や手形、商品券などの価値の有る紙片はすべて有価証券ということになりますが、簿記ではもう少し狭い意味で株式や社債などのことを有価証券として扱います。</div>
　　　　　　　<div>株式とは？</div>
            <div>株式とは株式会社が経営資金などを集めるために発行するもので、基本的に集めたお金は返す必要はありません。ただし、一定期間ごとに株主（株式の保有者）に対して配当金を支払う必要があります。</div>
            <div>社債とは？</div>
            <div>社債とは、会社が広く大衆からお金を集めるために発行する証券です。株式とは異なり社債は借金なので、利払日に一定額の利息を支払わなければなりません。また、返済期日（償還日）には元本を返済する必要があります。</div>
	    <div>有価証券の分類
		有価証券はその保有目的に応じて大きく５つに分類して処理・表示します。

		①売買目的有価証券
		 保有目的
		短期間の価格変動により利益を得ることを目的として保有。

		 表示科目（財務諸表に記載するときに使用する科目）
		「有価証券」（流動資産）

		 貸借対照表価額（貸借対照表に記載される金額）
		時価をもって貸借対照表価額とし、評価差額は当期の損益（営業外損益）とする。

		②満期保有目的債券
		 保有目的
		利息の受け取りなどを目的として、満期まで所有する意図をもって保有。

		 表示科目
		「投資有価証券」（固定資産（投資その他の資産））

		 貸借対照表価額
		原則：取得原価　容認：償却原価法による価額

		③子会社株式
		 保有目的
		他の会社への支配力を行使するために保有。

		 表示科目
		「関係会社株式」（固定資産（投資その他の資産））

		 貸借対照表価額
		取得原価をもって貸借対照表価額とする。

		④関連会社株式
		 保有目的
		他の会社への影響力を行使するために保有。

		 表示科目
		「関係会社株式」（固定資産（投資その他の資産））

		 貸借対照表価額
		取得原価をもって貸借対照表価額とする。

		⑤その他有価証券
		 保有目的
		他社との業務提携や株式の相互持合いなどを目的として保有（上記４つ以外のもの）。

		 表示科目
		「投資有価証券」（固定資産（投資その他の資産））
		</div>
            <div>貸借対照表価額は時価をもって貸借対照表価額とし、評価差額は貸借対照表（純資産の部）に記載。</div>
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
            <div></div>
            <div></div>
	</article>
        </section>

        <Title title="売買目的有価証券の会計処理"/>
        <section>
            <article>
            <div>お金儲けのために購入した株式は、売買目的有価証券（資産）という勘定科目で処理を行います。</div>
            <div>株式を購入する際には、通常、証券会社に対して手数料を支払いますが、この手数料を付随費用と言います。付随費用は有価証券に含めて処理をすることが一般的です。</div>
            <div>また、購入した株式を売却した場合、買った時の価格よりも売った時の価格が高ければ有価証券売却益（収益）という収益が発生し、買った時の価格よりも売った時の価格が低ければ有価証券売却損（費用）が発生します。</div>
            <div>短期間の価格変動により利益を得ることを目的として保有している有価証券を売買目的有価証券といいます。</div>
	    <div>売買目的有価証券は売買目的有価証券勘定で処理し、貸借対照表には「有価証券」として流動資産の区分に表示します。</div>
	    <div>売買目的有価証券を購入したときは、購入代価（有価証券の本体価格）に付随費用（証券会社に支払う手数料など）を加えた金額を取得原価とします。</div>
	<div>取得原価＝購入代価＋付随費用</div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
<<<<<<< HEAD
=======
                    <td>出金口座 100,000</td>
                </tr>
            </table>
>>>>>>> origin/master

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">100,000円で購入した株式を120,000円で売却した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>入金口座 120,000</td>
                    <td>売買目的有価証券 100,000</td>
                </tr>
                <tr>
                    <td></td>
                    <td>有価証券売却益 20,000</td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">100,000円で購入した株式を80,000円で売却した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>入金口座 80,000</td>
                    <td>売買目的有価証券 100,000</td>
                </tr>
                <tr>
                    <td>有価証券売却損 20,000</td>
                    <td></td>
                </tr>
            </table>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">保有していた株式について、株式配当金領収証50,000円を受け取った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金 50,000</td>
                    <td>受取配当金 50,000</td>
                </tr>
            </table>

            <div>



償却原価法とは～定額法による計算方法と仕訳のやり方～
償却原価法とは？
前回説明したように、満期保有目的債券は原則として取得原価で評価します。

ただし、債券を債券金額より低い価額又は高い価額で取得した場合において、取得原価と債券金額との差額の性格が金利の調整と認められるときは、償却原価法にもとづいて算定された価額をもって貸借対照表価額とします。

償却原価法（定額法）とは
償却原価法（定額法）とは、債券を債券金額より低い価額又は高い価額で取得した場合において、当該差額に相当する金額を取得日から満期日（償還日）に至るまで毎期均等額を貸借対照表価額に加減する方法をいいます。

社債の約定利率が市場の平均利子率よりも低い場合、社債の発行会社は金利の調整という目的から、額面金額よりも低い価額で社債を発行する場合があります（これを割引発行といいます）。

このような場合、社債の額面金額と取得原価との差額は利息としての性格を持つことになります。

社債は額面金額で償還されるので、もし償却原価法を適用せずに帳簿価額が取得原価のままだとすると、満期日が属する期において、額面金額と取得原価との差額の全額が収益（有価証券利息）として計上されることになります。

社債は額面金額で償還されるので、もし償却原価法を適用せずに帳簿価額が取得原価のままだとすると、満期日が属する期において、額面金額と取得原価との差額の全額が収益（有価証券利息）として計上されることになります。

そこで適正な期間損益計算という観点から、額面金額と取得原価との差額を満期保有目的債券の保有期間に応じて毎期、収益（有価証券利息）として計上していこうというわけです。

決算日と利払日が同じケース

×1年4月1日に、満期保有目的でA社社債￥970,000（額面総額：￥1,000,000、満期日：×4年3月31日、券面利子率：6％、利払日：3月末および9月末）を現金で取得した。なお、取得原価と額面金額との差額はすべて金利の調整部分であると認められるため、償却原価法（定額法）を適用する。また、当社の会計期間は3月末を決算日とする1年間である。

取得したとき（×1年4月1日）の仕訳
借方科目	金額	貸方科目	金額
満期保有目的債券	970,000	現金	970,000
1回目の利払日（×1年9月30日）の仕訳
利息は額面金額に券面利子率を掛けて計算しますが、取得してから利払日までの期間は６か月（×1年4月1日～9月30日）なので月割で計算します。なお、受け取った利息は有価証券利息勘定（営業外収益）で処理します。

借方科目	金額	貸方科目	金額
現金など	30,000	有価証券利息	30,000
￥1,000,000×6％×6か月/12か月

2回目の利払日（×2年3月31日）の仕訳
1回目の利払日の処理とまったく同じです。

借方科目	金額	貸方科目	金額
現金など	30,000	有価証券利息	30,000

決算時（×2年3月31日）の仕訳
先ほども説明しましたが、定額法とは取得原価と額面金額との差額に相当する金額を取得日から満期日（償還日）に至るまで毎期均等額を貸借対照表価額に加減する方法をいいます。

 注意
”取得日”から満期日までの期間で償却するという点に注意してください。”発行日”から償却するのではありません。
取得日（×1年4月1日）から満期日（×4年3月31日）までは3年（36か月）なので、この期間で取得原価￥970,000と額面金額￥1,000,000との差額￥30,000を月割計算により満期保有目的債券の帳簿価額に加算します。

×1年度における保有期間は×1年4月1日～×2年3月31日の1年（12か月）なので、×1年度の償却額の計算と仕訳は次のようになります。

×1年度の償却額：￥30,000×12か月/36か月＝￥10,000
取得原価と額面金額の差額は金利の調整なので、加算した金額は有価証券利息として処理します。

借方科目	金額	貸方科目	金額
満期保有目的債券	10,000	有価証券利息	10,000

上の仕訳は×2年度以降の決算日でも全く同じ処理になります。なお、タイムテーブルを見てお分かりのとおり、満期日には簿価と額面金額が一致します。

決算日と利払日が異なるケース
次に決算日と利払日が異なるケースについて説明します。基本的な処理は先ほどと同じですが、有価証券利息の見越計上が必要になるという点にだけ気をつけてください。

×1年1月1日に、満期保有目的でA社社債￥970,000（額面：￥1,000,000、満期日：×3年12月31日、券面利子率：6％、利払日：6月末および12月末）を現金で取得した。なお、取得原価と額面金額との差額はすべて金利の調整部分であると認められるため、償却原価法（定額法）を適用する。また、当社の会計期間は3月末を決算日とする1年間である。
取得したとき（×1年1月1日）の仕訳
借方科目	金額	貸方科目	金額
満期保有目的債券	970,000	現金	970,000
取得してから1回目の決算日（×1年3月31日）の仕訳
 有価証券利息の見越計上
決算日と利払日がずれているので、保有期間に係る有価証券利息の見越計上を行います。計算期間は満期保有目的債券の保有期間、すなわち取得日（×1年1月1日）から決算日（×1年3月31日）までの3か月間となります。

借方科目	金額	貸方科目	金額
未収有価証券利息	15,000	有価証券利息	15,000
・￥1,000,000×6％×3か月/12か月＝￥15,000

 償却原価法の適用
次に満期保有目的債券について償却原価法を適用します。

取得日（×1年1月1日）から満期日（×3年12月31日）までは3年（36か月）なので、この期間で取得原価￥970,000と額面金額￥1,000,000との差額￥30,000を月割計算により満期保有目的債券の帳簿価額に加算します。

なお、計算期間は見越計上の場合と同じく取得日から決算日までの3か月間です。

借方科目	金額	貸方科目	金額
満期保有目的債券	2,500	有価証券利息	2,500
・￥30,000×3か月/36か月＝￥2,500

上の２つの仕訳を合算して次のような形にしても構いません。

借方科目	金額	貸方科目	金額
未収有価証券利息	15,000	有価証券利息	17,500
満期保有目的債券	2,500		
翌期首（×1年4月1日）の仕訳
翌期首には利息の見越計上分（未収有価証券利息）に関して再振替仕訳を行います。

借方科目	金額	貸方科目	金額
有価証券利息	15,000	未収有価証券利息	15,000
 注意
償却分については再振替をしないので注意してください。利払日に利息として受け取る「有価証券利息」と決算における償却額の「有価証券利息」とを混同しないようにしましょう。
1回目の利払日（×1年6月末）の仕訳
借方科目	金額	貸方科目	金額
現金	30,000	有価証券利息	30,000
・￥1,000,000×6％×6か月/12か月＝￥30,000

取得してから2回目の決算日（×2年3月31日）の仕訳
 有価証券利息の見越計上
決算時には有価証券利息の見越計上を行います。計算期間は直近の利払日の翌日（×2年1月1日）から決算日（×2年3月31日）までの3か月間です。

借方科目	金額	貸方科目	金額
未収有価証券利息	15,000	有価証券利息	15,000
・￥1,000,000×6％×3か月/12か月＝￥15,000

 償却原価法の適用
次に償却額の計上を行います。計算期間は×1年度の保有期間（×1年4月1日～×2年3月31日）の1年間（12か月）となります。

借方科目	金額	貸方科目	金額
満期保有目的債券	10,000	有価証券利息	10,000
・￥30,000×12か月/36か月＝￥10,000

取得日から満期日までの簿価の動きは次のようになります。満期日には、×3年4/1から×3年12/31までの9か月間の償却額を計上します。

【その他有価証券】決算における時価評価及び表示方法
その他有価証券とは、売買目的有価証券、満期保有目的の債券、子会社株式および関連会社株式以外の有価証券をいいます。
その他有価証券を購入したときは購入代価に付随費用を加えた金額を取得原価とし、その他有価証券勘定で処理します。

業務提携を目的として、A社株式を￥10,000で購入し、代金は現金で支払った。
借方科目	金額	貸方科目	金額
その他有価証券	10,000	現金	10,000

決算時の処理（時価評価）
売買目的有価証券、満期保有目的の債券、子会社株式および関連会社株式以外の有価証券はすべて「その他有価証券」に分類されるため、その保有目的は多岐にわたり、保有目的ごとに評価することは困難です。

一方で、財務諸表の利用者にとって有用な情報は有価証券の期末時点の時価にあります。そのため、その他有価証券は時価で評価するということになっています。

 MEMO
したがって、決算時には帳簿価額を時価に評価替えする処理が必要になります。
また、評価差額はすべて「その他有価証券評価差額金」として処理し、貸借対照表の純資産の部（評価・換算差額等の区分）に表示します。ちなみに、この方法を全部純資産直入法といいます。

 MEMO
全部純資産直入法のほかに部分純資産直入法という方法もありますが1級の範囲なのでここでは説明しません。
例題2
当社はA社株式（取得原価￥10,000）をその他有価証券として保有している。次の各ケースにおける有価証券の期末評価（全部純資産直入法）に関する仕訳を答えなさい。

①期末時価が￥11,000の場合

②期末時価が￥9,500の場合

①期末時価が￥11,000の場合
借方科目	金額	貸方科目	金額
その他有価証券	1,000	その他有価証券評価差額金	1,000

決算時の処理（時価評価）
売買目的有価証券、満期保有目的の債券、子会社株式および関連会社株式以外の有価証券はすべて「その他有価証券」に分類されるため、その保有目的は多岐にわたり、保有目的ごとに評価することは困難です。

一方で、財務諸表の利用者にとって有用な情報は有価証券の期末時点の時価にあります。そのため、その他有価証券は時価で評価するということになっています。

 MEMO
したがって、決算時には帳簿価額を時価に評価替えする処理が必要になります。
また、評価差額はすべて「その他有価証券評価差額金」として処理し、貸借対照表の純資産の部（評価・換算差額等の区分）に表示します。ちなみに、この方法を全部純資産直入法といいます。

 MEMO
全部純資産直入法のほかに部分純資産直入法という方法もありますが1級の範囲なのでここでは説明しません。
例題2
当社はA社株式（取得原価￥10,000）をその他有価証券として保有している。次の各ケースにおける有価証券の期末評価（全部純資産直入法）に関する仕訳を答えなさい。

①期末時価が￥11,000の場合

②期末時価が￥9,500の場合

①期末時価が￥11,000の場合
借方科目	金額	貸方科目	金額
その他有価証券	1,000	その他有価証券評価差額金	1,000

その他有価証券の貸借対照表価額は時価の￥9,500となります。また、「その他有価証券評価差額金」は純資産のマイナスとなります。

【参考】評価差額の処理
その他有価証券は、事業遂行上の必要性からただちに売却することが困難である場合があります。例えば、業務提携などを目的として保有している場合、時価が上昇したからといってすぐに売却できるものではありません。

そのため、売却することについて事業遂行上の制約がない売買目的有価証券のように、評価差額を当期の損益（財務活動の成果）として処理することは適切でないと考えられます。

そこで、その他有価証券の評価差額は当期の損益とはせずに、純資産の部に直接計上する方法が採用されています。


 
翌期首の処理（洗替法）
その他有価証券の評価差額は翌期首において振り戻し処理を行います。このような方法を洗替法（あらいがえほう）といいます。

例題2①のケース
 決算時の仕訳
借方科目	金額	貸方科目	金額
その他有価証券	1,000	その他有価証券評価差額金	1,000
 翌期首の仕訳
前期末に計上した評価差額を振り戻し、翌期首の帳簿価額を取得原価に戻してやります。やり方は前期末の逆仕訳をすればいいだけです。

借方科目	金額	貸方科目	金額
その他有価証券評価差額金	1,000	その他有価証券	1,000

洗替法では翌期首に振り戻しの仕訳を行うことによって、取得原価が翌期首の帳簿価額となります。なお、その他有価証券評価差額金はプラマイゼロとなって消去されます。

例題2②のケース
 決算時の仕訳
借方科目	金額	貸方科目	金額
その他有価証券評価差額金	500	その他有価証券	500

翌期首の仕訳

借方科目	金額	貸方科目	金額
その他有価証券	500	その他有価証券評価差額金	500

【参考】前期に取得した売買目的有価証券の売却～洗替法VS切放法～

洗替法とは？
洗替法（あらいがえほう）とは、決算において時価に評価替えした後、翌期首に再振替仕訳を行って帳簿価額を取得原価に戻す方法をいいます。

切放法とは？
切放法（きりはなしほう）とは、決算において時価に評価替えした後、翌期首に再振替仕訳は行わず期末時価を翌期の帳簿価額とする方法をいいます。

洗替法による処理方法
例題1
当社は、売買目的でA社株式（取得原価￥10,000）を保有している。以下の仕訳を答えなさい。なお、売買目的有価証券の評価差額の処理方法として洗替法を採用している。

①決算時の仕訳（期末時価￥12,000）

②翌期首の仕訳

③翌期に￥13,000で売却したときの仕訳

①決算時の仕訳
決算において、帳簿価額（取得原価）を時価に評価替えします。

借方科目	金額	貸方科目	金額
売買目的有価証券	2,000	有価証券評価益	2,000
②翌期首の仕訳
洗替法では、翌期首において帳簿価額を取得原価に振り戻す処理を行います。前期末の逆仕訳です。

借方科目	金額	貸方科目	金額
有価証券評価益	2,000	売買目的有価証券	2,000
③売却時の仕訳
借方科目	金額	貸方科目	金額
現金など	13,000	売買目的有価証券	10,000
有価証券売却益	3,000

洗替法では期首において帳簿価額を取得原価に振り戻す処理をします。そのため、売却額と比較される帳簿価額は取得原価となります。

切放法による処理方法
例題2
当社は、売買目的でA社株式（取得原価￥10,000）を保有している。以下の仕訳を答えなさい。なお、売買目的有価証券の評価差額の処理方法として切放法を採用している。

①決算時の仕訳（期末時価￥12,000）

②翌期首の仕訳

③翌期に￥13,000で売却したときの仕訳

①決算時の仕訳
決算において、帳簿価額（取得原価）を時価に評価替えします。これは洗替法と同じです。

借方科目	金額	貸方科目	金額
売買目的有価証券	2,000	有価証券評価益	2,000
②翌期首の仕訳
切放法では、翌期首において帳簿価額を取得原価に振り戻す処理は行いません。したがって、翌期首においては仕訳なしとなります。

③売却時の仕訳
借方科目	金額	貸方科目	金額
現金など	13,000	売買目的有価証券	12,000
有価証券売却益	1,000

切放法では期首において再振替仕訳はしないので、帳簿価額は前期末の時価のままとなります。そのため、売却額と比較される帳簿価額は前期末の時価となります。

洗替法VS切放法
有価証券評価益も有価証券売却益も、資金を売買目的有価証券で運用することによって得られる財務活動の成果といえます。したがって、これらをまとめて有価証券運用益と捉えることができます。

洗替法の場合、売買目的有価証券の運用によって得られ儲けは￥1,000となります。一方、切放法の場合も儲けは￥1,000となり、洗替法でも切放法でも有価証券運用益は同じです。

 MEMO
要するに、評価損益か売却損益かという内訳が異なるだけで、「運用によって得られる儲け」という大きな視点で見た場合はどちらの方法でも同じになるので問題ないというわけです。

社債等を利払日以外に売買した場合～端数利息の計算方法と仕訳のやり方～

社債についている利札（クーポン）を利払日に金融機関に持ち込めば利息を受け取ることができます。つまり、利息を受け取ることができるのは利払日に社債を保有している者ということになるわけです。もし利払日の1日前に社債を売却した場合、1円も利息を受け取ることができないのでしょうか？
            </div>
            </article>
        </section>

        <Title title="社債の会計処理"/>
        <section>
            <article>
            <div>社債には額面金額というものがあり、それを100円で割ったものが社債の数となります。</div>
            <div>社債の単位は「口」と言い、1口100円となっております。</div>
            <div>社債の口数＝社債の額面金額/100円</div>
            
            <table border="1" cellspacing="0" class="journal">
                <caption class="question">売買目的でA株式会社の社債（額面金額2,000,000円）を１口あたり98円で購入し、代金は現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>売買目的有価証券 1,960,000</td>
                    <td>現金 1,960,000</td>
                </tr>
            </table>

            <div>額面金額2,000,000円を100円で割ると、この社債の口数は20,000口とわかります。そして、1口あたり98円で購入しているので、20,000口X98円=1,960,000円だけ、売買目的有価証券という資産が増加します。</div>

            <table border="1" cellspacing="0" class="journal">
                <caption class="question">A株式会社の発行する額面金額3,000,000円（年利率2％）の社債について、半年分の利息を現金で受け取った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金 30,000</td>
                    <td>有価証券利息 30,000</td>
                </tr>
            </table>

            <div>半年分の利息を計算すると、3,000,000円X2%/2=30,000円となります。</div>
            
            </article>
        </section>

        <Title title="満期目的保有債権の会計処理"/>
        <section>
            <article>
		<div>満期まで所有する意図をもって保有する社債その他の債券のことを満期保有目的債券といいます。</div>
		<div>満期保有目的債券は満期保有目的債券勘定で処理し、貸借対照表には「投資有価証券」として固定資産（投資その他の資産）の区分に表示します。</div>
		<div>満期保有目的債券は満期まで保有することにより、利払日には利息を、満期日には元本を受け取ることが主な目的なので、売買目的有価証券のように途中で売却することを予定していません。</div>
		<div>したがって売却時の処理は問題になりません。</div>
		<div>決算時の処理</div>
		<div>原則的な処理</div>
		<div>満期保有目的債券は原則として取得原価で評価します。したがって、売買目的有価証券のように決算において時価に評価替えをするというようなことはしません。</div>
		<div>注意</div>
		<div>つまり、決算時の処理は必要ない（仕訳なし）ということになります。</div>
		<div>満期保有目的債券は満期まで保有することによって利息や元本を受け取ることを目的としているので、売買目的有価証券のように「今の価値がいくらなのか？」ということについて、さほど重要性はありません。</div>
		<div>そのため、満期保有目的債券については評価替えを行わずに、原則として取得原価で評価することになっているわけです。</div>
		<div>例外的な処理（容認）</div>
		<div>債券を債券金額より低い価額又は高い価額で取得した場合において、取得原価と債券金額との差額の性格が金利の調整と認められるときは、償却原価法にもとづいて算定された価額をもって貸借対照表価額とします。</div>
		
		<table border="1" cellspacing="0" class="journal">
                <caption class="question">×1年4月1日に満期保有目的で、A社社債（額面総額：￥100,000、利率：年3.0％、利払日：9月末と3月末の年2回）を額面￥100につき￥94で購入し、代金は証券会社への手数料￥1,000とともに現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金 30,000</td>
                    <td>有価証券利息 30,000</td>
                </tr>
            </table>		

		<div>社債の計算は通常、口数で行います。例題では「額面￥100につき」と書かれているので、額面総額を＠￥100で割ったものがこの社債の口数となります。なお、付随費用は取得原価に含めて処理します。</div>
		<div>取得原価：1,000口（※）×＠￥94＋￥1,000＝￥95,000</div>

		<table border="1" cellspacing="0" class="journal">
                <caption class="question">×1年9月30日、A社の社債について社債利札の期限が到来した。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td>現金 30,000</td>
                    <td>有価証券利息 30,000</td>
                </tr>
            </table>
		<div>利率は額面に対するものなので額面総額に年利率を掛けて1年分の利息を計算しますが、例題では利払日が年2回あるので1回の受け取りは6か月分であるということに注意してください。したがって月割計算が必要になります。</div>
		<div>額面￥100,000×年利率3.0％×6か月/12か月＝￥1,500</div>
		<div>受け取った利息は有価証券利息勘定（営業外収益）で処理をします。また、期限到来後の社債利札は通貨代用証券なので現金勘定で処理します。</div>
		<div></div>
		<div></div>
		<div></div>
            </article>
        </section>

        <Title title="子会社株式・関連会社株式の会計処理"/>
        <section>
            <article>
		<div>ある会社が他の会社の発行済株式の過半数を有するなどして実質的に支配している場合、支配している会社のことを親会社、支配されている会社のことを子会社といいます。</div>
		<div>発行済株式の株式の過半数を有していないものの高い比率の株式を有しており、他の会社の経営方針などに重要な影響を与えることができる場合、当該他の会社のことを関連会社といいます。</div>
		<div>子会社株式・関連会社株式の処理および表示方法</div>
		<div>当社が保有している子会社の株式は子会社株式勘定で処理します。また、関連会社の株式は関連会社株式勘定で処理します。</div>
		<div>子会社株式および関連会社株式は、貸借対照表にはどちらも「関係会社株式」として固定資産（投資その他の資産）の区分に表示します。</div>
		
		<table border="1" cellspacing="0" class="journal">
                <caption class="question">支配目的で、A社株式100株を1株＠￥100で購入し、代金は現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
		<table border="1" cellspacing="0" class="journal">
                <caption class="question">影響力を行使する目的で、B社株式50株を1株＠￥80で購入し、代金は現金で支払った。</caption>
                <tr>
                    <th>借方（運用形態）</th>
                    <th>貸方（調達源泉）</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>	
		<div></div>
		<div>決算時の仕訳</div>
		<div>子会社株式および関連会社株式は、他企業の支配や他企業への影響力の行使を目的として保有します。これは子会社などを通じて事業を行うことを目的としているので、時価の変動を財務活動の成果ととらえることはできません。</div>
		<div>そのため、子会社株式および関連会社株式は原則として時価評価を行わず取得原価で評価します。よって評価差額は生じないので、決算時の処理は「仕訳なし」ということになります。</div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
            </article>
        </section>

        <Title title="引当金とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="製品保証引当金・工事補償引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="賞与引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="役員賞与引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="役員退職慰労引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="売上割戻引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="返品調整引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="修繕引当金・特別修繕引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="債務保証損失引当金の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="退職給付の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="社債の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="純資産とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="株式発行時の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="株主資本の計数変動とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="繰延資産とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="外貨建取引とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="研究開発費の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="ソフトウェアの会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="リース取引とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="ファイナンス・リース取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="オペレーティング・リース取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="残価保証の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="セール・アンド・リースバック取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="金融商品の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="デリバティブ取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="先物取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="オプション取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="スワップ取引の会計処理"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="ヘッジ会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="会計上の変更及び誤謬の訂正とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="簿記の仕組み"/>
        <section>
            <article>
            <div>会計の流れ
会計を行う最終目標は確定申告もしくは決算を行い、納税義務を果たすことにあります。
そのため、１年間のお金の動きを「仕訳」という形式で記帳していくことが必要です。

＜仕訳の構造＞

借方
貸方
XXXX　10,000
XXXX　10,000
（意味）実際に発生したこと＝結果
（意味）発生した理由＝原因


※XXXX
表示金額の内容を示すものを勘定科目といい、XXXXの項目に入ります

→お金の動きを「原因」と「結果」に分けて記録していくことを複式簿記といいます。

■仕訳作成演習問題（緑が結果、紫が原因になります）
（１）コンビニでボールペンを現金で１００円で購入した。

発生したもの：コンビニでボールペンを１００円で購入した。
発生した理由：現金で１００円で購入したため。

と考えられるので、上記の文を分解すると
コンビニでボールペンを現金で１００円で購入した。
という読み取り方が可能です。

よって作成される仕訳は

借方
貸方
消耗品費　100
現金　100


となります。



（２）三菱UFJ銀行口座に現金を100,000円預け入れた

まずは文章を原因と結果に分解してみましょう。

発生したもの：三菱UFJ銀行口座に100,000円が預け入れられたということ
発生した理由：現金100,000円を預け入れたため

と考えられるので、上記の文を分解すると
三菱UFJ銀行口座に現金を100,000円預け入れた
という読み取り方が可能です。

よって作成される仕訳は

借方
貸方
三菱UFJ銀行　100,000
現金　100,000


となります。


（３）土地を20,000,000円で現金で購入した

まずは文章を原因と結果に分解してみましょう。

発生したもの：土地を20,000,000円で購入した
発生した理由：現金を20,000,000円使ったため

と考えられるので、上記の文を分解すると
土地を20,000,000円で現金で購入した
という読み取り方が可能です。

よって作成される仕訳は

借方
貸方
土地　20,000,000
現金　20,000,000


となります。

以上の（１）（２）（３）の流れにて、「仕訳」を作成し、貸借対照表と損益計算書を完成させます</div>
            <div>企業会計

　　　財務会計（株主向けの報告を目的とした会計）
　↗
企業会計
　　　　↘️
　　　　　　管理会計（経営管理を目的とした会計）

◎トライアングル体制
日本の企業会計は3つの法律が交わって出来ており、それぞれ準拠する法律によって会計処理が変わる

①商法・会社法
→今まで勉強してきた会計は商法・会社法会計

②租税法
③金融商品取引法</div>
            </article>
        </section>

        <Title title="貸借対照表とは"/>
        <section>
            <article>
            <div>貸借対照表


資産
負債
純資産
（意味）入手した財・サービス
（意味）入手手段



資産：自分が持っている売ったらお金になるもの（＝財・サービス）
負債：売ったらお金になるものを他人から入手した場合
純資産：売ったらお金になるものを自分で用意した場合

このうち、純資産は
①自分のお金
②１年間の儲け
の合計額となります。</div>
            <div>貸借科目の分類

１年以内に現金化されるもの→流動資産
　　↗
　　　　他人にあげたら価値があるもの
　　 ↗　　　　　　　　　　　　　　  ↘️
資産　　　　　　　　　　　　　 １年以上かかって現金化されるもの→固定資産

　　　↘️	　　　　　　　　　　　            					   　
他人に上げても価値がないもの　→　繰延資産		

※「流動」と「固定」について
１年を基準に、財産が動くかどうかが基準となります
１年以内に何らかの形で動きがある場合には「流動」と言い、１年を超えても動きがないものを会計上、「固定」と呼びます


　　　　　1年以内に返せる負債　→　流動負債
↗
負債
　　　↘️
　　　　　1年以上返済に時間がかかる負債　→　固定負債



　　　　　　事業に使うと決めた自分のお金
　↗
純資産　 
　　　　↘️
　　　　　　1年間の儲け
</div>
            </article>
        </section>

        <Title title="損益計算書"/>
        <section>
            <article>
            <div>損益計算書

費用
収益
利益
損失


収益：サービス提供の対価として受け取ったお金
費用：サービス提供のために使ったお金

なお、収益と費用は一致しません。
収益のほうが費用よりも多かった場合、差額を利益と呼びます
対して、収益のほうが費用よりも少なかった場合、差額を損失と呼びます</div>
            <div>損益計算書の表示区分と勘定科目一覧

3級ではT字型をした勘定式の損益計算書を用いていましたが、2級では以下のように各段階の利益を表示する報告式（区分式）の損益計算書が出題されます。

Ⅰ．売上高
主たる営業活動による収益。
Ⅱ．売上原価
販売した商品の原価。
Ⅲ．販売費及び一般管理費
販売活動及び一般管理活動によって発生した費用。
Ⅳ．営業外収益
主たる営業活動以外（資金調達や投資活動など）によって発生した収益。
Ⅴ．営業外費用
主たる営業活動以外（資金調達や投資活動など）によって発生した費用。
Ⅵ．特別利益
非経常的（臨時的）に発生する利益。
Ⅶ．特別損失
非経常的（臨時的）に発生する損失。

売上総利益
売上高から売上原価を差し引いて計算する。商品の販売による利益で、一般に”粗利益”や”粗利”と呼ばれるもの。
営業利益
売上総利益から販売費及び一般管理費を差し引いて計算する。企業が行う営業活動から得られる利益を表す。
経常利益
営業利益に営業外収益を加算し、営業外費用を差し引いて計算する。企業が経常的に獲得できる利益。
税引前当期純利益
経常利益に特別利益を加算し、特別損失を差し引いて計算する。一会計期間に発生したすべての収益と費用を考慮した場合における利益。
当期純利益
税引前当期純利益から法人税、住民税および事業税を差し引いて計算する。企業の最終的な利益。なお、一般に”税引後”当期純利益とは表示しない点に注意。</div>
            </article>
        </section>

        <Title title="開業費とは"/>
        <section>
            <article>
            <div>開業費

（個人事業主の場合）
事業開始日までにかかった費用を開業費という

（法人の場合）
会社設立までにかかった費用を創立費といい、会社設立から営業開始日までにかかった費用を開業費という


ポイント
①開業のために支出した費用は開業費になる
（遡れる期間の上限なし）

②一部、開業費に出来ない支払いもある
ex.敷金、固定資産の購入

③開業のために支出した費用は、開業後も収益を生み続けるという性質をもつ
→費用収益対応の原則より、開業費は繰延資産として扱う
→減価償却が必要（原則：均等償却、耐用年数：60ヶ月以内）</div>
            <div></div>
            </article>
        </section>

        <Title title="元入金とは"/>
        <section>
            <article>
            <div>元入金
事業を始めるにあたって事業用に使うと決めた自分のお金

個人事業主は事業を始める前に「事業用のお金」と「プライベート用のお金」に分けて管理する必要があります

開始残高の元入金＝元入金＋青色申告特別控除前の所得金額＋事業主借ー事業主貸</div>
            <div></div>
            </article>
        </section>

        <Title title="勘定科目の振替とは"/>
        <section>
            <article>
            <div>勘定科目の振替
ある勘定科目の残高を、別の勘定科目に移行すること

例．立替金3,000円を交際費に振替える場合

借方
貸方
立替金　3,000
出金口座　3,000

借方
貸方
交際費　3,000
立替金　3,000


→借方と貸方の立替金同士が相殺されるので、交際費のみ計上される</div>
            <div>振替が必要な代表的勘定科目（経過勘定科目）

前払金/前払費用：商品やサービスの提供を受ける前に支払ったお金のこと
前受金：商品やサービスの提供を受ける前に受け取ったお金のこと
仮受金：金銭の受け取りはあったものの、内容がわからず一時的に処理するためのお金のこと
仮払金：金銭の支払いはあったものの、内容がわからず一時的に処理するためのお金のこと</div>
            </article>
        </section>

        <Title title="クレジットカードの会計処理"/>
        <section>
            <article>
            <div>クレジットカード口座の会計処理
クレジットカードは後から銀行より引き落としされるので、「負債」として扱う勘定科目になります。そのため、利用すればするほど「貸方」に金額が計上され、返済があれば、負債の減少となり「借方」に金額が計上されます
なお、クレジットカードの利用額の引き落としについては、銀行口座からクレジットカード口座へお金が移動したと考え、「口座振替」として処理いただく必要があるので注意して下さい。

（クレジットカードの利用時）
借方
貸方
購入したもの
クレジットカード口座


（クレジットカード利用料金の引き落とし時）
借方
貸方
クレジットカード口座
銀行口座</div>
            <div></div>
            </article>
        </section>

        <Title title="借入金の会計処理"/>
        <section>
            <article>
            <div>借入金の会計処理
借金は後に返済が発生することから、「負債」になり、原則はクレジットカードと同様の会計処理を行っていただければ問題ないです。

＜借入金の分類＞
	　　　1年以内に返せる借金の場合　→　短期借入金
	　↗
借入金
　　　　↘️
　　　　　　1年を超えて返す借金の場合　→　長期借入金

例．6ヶ月で返済が完了する融資を60,000円分うけ、現金で受け取った。
ただし、1回の返済は10,000円とする。

（融資を受けたとき）
借方
貸方
現金　60,000
短期借入金　60,000


（借金の返済時）
借方
貸方
短期借入金　10,000
出金口座　10,000


※返済時には、融資を行った対価として、たいていの場合利息が発生します。
このときは、勘定科目「支払利息」を用いて、利息分の金額の計上を行います。</div>
            <div>借入金・貸付金とはいわゆる”借金”のことです。
お金を借りた場合は借入金（かりいれきん）勘定で処理し、お金を貸した場合は貸付金（かしつけきん）勘定で処理をします。

借入金勘定は将来お金を返さなければならないという義務なので負債となります。また、貸付金勘定は将来お金を返してもらえるという権利なので資産となります。

お金を貸している側は借入期間に係る利息を受け取ることができます。これを受取利息勘定（収益）で処理します。</div>
            </article>
        </section>

        <Title title="返金・返品の会計処理"/>
        <section>
            <article>
            <div>返金・返品の会計処理
→逆仕訳（反対仕訳）で処理を行います

☆逆仕訳（反対仕訳）とは
全く同じ勘定科目で貸借のみ逆にした仕訳を作成すること

例．売上が10,000円現金で上がった。
借方
貸方
現金　10,000
売上高　10,000


その後、販売した商品の一部に欠陥があることが判明し、3,000円分を返金対応した。
借方
貸方
売上高　3,000
現金　3,000</div>
            <div></div>
            </article>
        </section>

        <Title title="家事按分とは"/>
        <section>
            <article>
            <div>家事按分
確定申告や決算は「事業用」のお金の収支が計上対象になる。
→事業用とプライベート用の支払いを明確に分けられない取引が存在する
ex.自宅兼事務所でかかった電気代
→プライベート割合と事業用割合（按分割合）を算出して事業用割合分のみ経費として計上する

例題
自宅兼事務所で電気代が12,000円発生した。ただし、業務の時間は8時間とする。
→業務時間から按分割合を求めると、1日は24時間であるから、
プライベートで使う時間：業務で使う時間
＝１６：８
＝２：１
になる。
よって、12,000円のうち、16/24(=2/3)がプライベート利用分、8/24(=1/3)が事業用の経費であるとすると、仕訳は

借方
貸方
水道光熱費　4,000
出金口座　12,000
事業主貸　8,000




となる。</div>
            <div></div>
            </article>
        </section>

        <Title title="在庫棚卸とは"/>
        <section>
            <article>
            <div>在庫棚卸

棚卸とは
期末日において、売れ残った商品の在庫の数量を数え、在庫の金額がどれだけあったかを計算すること

商品の購入を行った場合、仕入高などの費用勘定科目で仕訳が計上されるが、売れ残りは未だ収益になっていない金額になるので、費用収益対応の原則より、費用としての計上は回避しなければいけない
→年度末に棚卸を行い、一時的に費用から資産へと振替える仕訳を立てる

例．1月1日に事業を行うため、商品を1,000,000円現金で購入した。

借方
貸方
仕入高　1,000,000
現金　1,000,000


12月31日に売れ残りを調べたところ、50,000円分売れ残りが生じた。

借方
貸方
商品　50,000
仕入高　50,000

→このまま仕入高で処理するとわかりやすいのですが、実際には仕入高の名前が変わります！正確には貸方は「期末商品棚卸高」という勘定科目になります。正体は仕入高です。


翌1月1日に、再び費用として計上を行った。

借方
貸方
仕入高　50,000
商品　50,000

→こちらもこのまま仕入高で処理するとわかりやすいのですが、実際には仕入高の名前が変わります！正確には借方は「期首商品棚卸高」という勘定科目になります。正体は仕入高です。</div>
            <div></div>
            </article>
        </section>

        <Title title="残高ズレとは"/>
        <section>
            <article>
            <div>残高ズレ
実際の口座残高とfreeeに登録した口座残高が何らかの原因でズレてしまう現象
①現金
②銀行口座
③クレジットカード
の3種類がある
→原則、総勘定元帳（または現預金レポート）を使って対応する

☆クレジットカード口座の残高ズレの対応方法
総勘定元帳からクレジットカードの利用額≠クレジットカードの引き落とし額となっている登録月を探す

数字の見方
借方
貸方
クレジットカードの引き落とし額
クレジットカードの利用額


☆銀行口座の残高ズレ
①お客様に銀行の通帳を持ってきてもらい、総勘定元帳の登録と通帳の入出金履歴が完全一致しているか確認する
②タイムラインからアタリをつける

数字の見方
借方
貸方
銀行への入金額
銀行からの出金額

☆現金口座の残高ズレ
　現金のやり取りに関しては、電子的記録が残らないのでサポート出来る範囲にも限界がある。原則、お客様にこれまで保存していた証憑などを見てもらい、原因を確認してもらうほか、ヘルプページの現金残高ズレの「よくある原因集」を併せて見てもらい、原因を特定する。

数字の見方
借方
貸方
現金への入金額
現金からの出金額（利用額）


→どうしてもズレの原因がわからない場合
個人事業主の場合、事業主勘定で調整する

（実際よりも現金の残高が多い場合）

借方
貸方
事業主貸
現金

（実際よりも現金の残高が少ない場合）
借方
貸方
現金
事業主借

※法人の場合
税務署に相談。それでもだめなら、雑収入、雑損失で差額を計上。</div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div>儲けの考え方
＜商法・会社法会計の場合＞
利益　＝　収益　ー　費用

＜租税法会計の場合＞
所得　＝　益金　ー　損金

ここで、収益≠益金、費用≠損益となるので、使う法律によって算出される利益が異なる</div>
            <div></div>
            </article>
        </section>

        <Title title="貯蔵品の会計処理"/>
        <section>
            <article>
            <div>【貯蔵品の処理】再振替仕訳の意味とやり方を徹底解説

貯蔵品に関する一連の処理
コピー用紙や文房具、プリンタ用のインクなどのように毎期経常的に購入して消費するような消耗品は、購入時にすべて費用処理するのが一般的です。

しかし、郵便切手や収入印紙など換金性が高い資産は、財産管理や税務申告を目的として厳密な資産計上を行う必要があります。

そこで、このようなものに関しては購入時には適切な費用勘定で処理し、決算において未使用額を資産（貯蔵品勘定）に振り替える処理を行います。

先ほど説明したように、郵便切手や収入印紙などは使った分だけが当期の費用となり、使っていない分は資産（貯蔵品）として次期へ繰り越します。なお、この処理は決算整理仕訳として行います。

決算時に郵便切手が￥820分残っていた。

郵便切手の未使用額を通信費勘定から貯蔵品勘定へ振り替えます。

翌期首には再振替仕訳（さいふりかえしわけ）を行います。
収益や費用を適正に算定するため、期首において前期末の決算整理仕訳の逆仕訳を行う場合があります。これを再振替仕訳といいます。</div>
            <div></div>
            </article>
        </section>

        <Title title="割戻と割引とは"/>
        <section>
            <article>
            <div>割戻と割引～仕訳のやり方と表示方法～
割戻（わりもどし）とは、一定の期間に多額もしくは多量の取引をした相手に対して行う代金の返戻額等をいいます。

値引や返品は商品に何らかの欠陥や瑕疵などがある場合に行われるのに対して、割戻は取引先に対するサービス的な意味合いで行われます。

割戻の処理方法は返品の場合と全く同です。すなわち、商品を販売した時や仕入れた時の逆仕訳をすればいいだけなので問題ないと思います。

掛けで仕入れた（販売した）商品￥1,000,000について、この金額の5％の割戻を受けた（行なった）。
仕入側の仕訳
商品を仕入れたときの逆仕訳によって、割戻による返戻額を仕入および買掛金から控除します。

借方科目	金額	貸方科目	金額
買掛金	50,000	仕入	50,000
販売側の仕訳
商品を販売したときの逆仕訳によって、割戻による返戻額を売上および売掛金から控除します。

借方科目	金額	貸方科目	金額
売上	50,000	売掛金	50,000

割引とは？
掛けで取引をした場合、現金取引の場合と比べて代金の決済日が遅れることから、その分の利息に相当する金額が代金に含まれていると考えることができます。

したがって、予定された決済日よりも早期に決済された場合には、その利息に相当する部分を免除する（免除される）ことがあります。

この免除した（された）金額は「売上割引」（「仕入割引」）として処理します。

割引は利息に相当するものなので営業外損益として処理します。具体的には「仕入割引」は営業外収益、「売上割引」は営業外費用となります。

返品や割戻のように「仕入」や「売上」等から控除するのではないということに注意してください。</div>
            <div></div>
            </article>
        </section>

        <Title title="株式の会計処理"/>
        <section>
            <article>
            <div>株式の発行と剰余金の配当・処分
株式の発行
株式会社では資金調達などの目的で株式を発行することがあります。株式を購入した株主からの払込金額は、原則としてその全額を資本金とします。

会社の設立に際して、株式100株を1株当たり￥1,000で発行し、払込金を当座預金とした。

剰余金の配当・処分とは？
株式会社の場合、会社の設立や営業のために必要な資金を出すのは株主なので、株式会社の実質的な所有者（オーナー）は株主ということになります。

したがって、株式会社が経営活動を通じて獲得した利益をどのように使うのかといった事項は株主が株主総会において決定することとされています。

具体的には当期純利益をいったん繰越利益剰余金勘定（純資産）へ振り替え、決算後3ヶ月以内に開催される株主総会において、株主がその使いみちを決めるという流れになっています。

このように、株主総会において利益（剰余金）の使いみちを決定することを剰余金の処分といい、このうち株主への配当金の支払いのことを剰余金の配当といいます。

剰余金の処分が決議された時に繰越利益剰余金勘定からそれぞれの科目へ振り替え、使い道が決まらなかったものは次期以降に繰り越されます。

株主総会における繰越利益剰余金の配当・処分は次のとおりである。
配当金：￥30,000　利益準備金：￥3,000

不測の損害等に備えて、一定の額を会社内に留保しておく制度を準備金といいます。会社法では株主への配当を行った場合に、一定の額を利益準備金（純資産）として積み立てることを要求しています。

個人事業主の場合、獲得した利益は個人事業主のものなのでそれを自由に使っても法律的には問題ありません。しかし、株式会社の経営者が勝手に会社のお金を使うと法律的な問題が生じます。
</div>
            <div></div>
            </article>
        </section>

        <Title title="消費税の会計処理"/>
        <section>
            <article>
            <div>【消費税】税抜方式による仕訳のやり方
物品やサービスの消費に対して課される税金のことを消費税といいます

仕入先には商品代金のほかに消費税を支払い、販売先からは商品代金のほかに消費税を受け取ります。当社は仕入先へ支払った消費税と販売先から受け取った消費税との差額を納付します（または還付を受けます）。

税抜方式とは、仕入等に係る消費税額（支払った消費税）を仮払消費税勘定（資産）で、また売上等に係る消費税額（受け取った消費税）を仮受消費税勘定（負債）で処理し、決算時に両者を相殺して、その差額を納付する（または還付を受ける）という方法です。

商品￥88,000（うち消費税額￥8,000）を掛けで仕入れた。
税抜方式では「仕入」の金額に消費税額を含めずに、仮払消費税勘定（資産）を使って区分します。

商品を￥110,000（うち消費税額￥10,000）で売り上げ、代金は掛けとした。
税抜方式では「売上」の金額に消費税額を含めずに、仮受消費税勘定（負債）を使って区分します。

例題では支払った消費税（仮払消費税）よりも受け取った消費税（仮受消費税）の方が大きいので、両者の差額を後で納付することになります。そこで決算において仮払消費税と仮受消費税とを相殺し、その差額を未払消費税勘定（負債）に振り替えます。

還付を受ける場合
還付を受ける場合（「仮受消費税＜仮払消費税」のケース）では、その差額を未収還付消費税勘定（資産）に振り替えます。</div>
            <div></div>
            </article>
        </section>

        <Title title="法人税の会計処理"/>
        <section>
            <article>
            <div>租税公課と法人税、住民税及び事業税

税金のうち、固定資産税、自動車税、印紙税（収入印紙）などは租税公課（そぜいこうか）勘定で処理をします。

郵便局で切手￥100とハガキ￥200、収入印紙￥500を現金で購入した。
収入印紙は印紙税という税金を納付するためのものですが、これも固定資産税や自動車税と同様に租税公課勘定で処理します。ちなみに、切手やハガキは通信費勘定（費用）で処理します。

法人税、住民税及び事業税とは？
法人税：会社など法人の所得金額（もうけ）に対して課される税金。
住民税：道府県民税（道府県が個人及び法人に課税するもの）と市町村民税（市町村が個人及び法人に課税するもの）を合わせたもの。
事業税：法人や個人が行う事業に対して課される税金。

法人税の申告および納付は、原則として決算期末の翌日から2月以内に行うこととされています。
ただし、事業年度が6ヶ月を超える法人は、事業年度を開始した月から6月を経過した日より2月以内に、当期に見込まれる税額の半分に相当する金額をあらかじめ中間申告し、前もって納付しなければなりません。これを中間納付制度といいます。

 MEMO
法人税で中間申告をする必要がある場合は、住民税及び事業税でも中間申告をしなければなりません。

中間納付時の仕訳
当期の法人税、住民税及び事業税として￥20,000を現金で中間納付した。

中間納付額はあくまでも概算額に過ぎないので、これをいったん仮払法人税等（資産）という勘定科目で処理しておきます。

決算にあたり、当期純利益に対する法人税、住民税及び事業税として￥50,000を計上する。
法人税等は法人税、住民税及び事業税勘定で処理をします。ただし、法人税等を実際に納付するのは後日となるため、この時点では貸方を未払法人税等勘定（負債）としておきます。
また、すでに中間納付を行っている場合は中間納付時に計上した仮払法人税等をすべて取り崩します。</div>
            <div></div>
            </article>
        </section>

        <Title title="棚卸減耗損と商品評価損"/>
        <section>
            <article>
            <div>棚卸減耗損と商品評価損～ボックス図の書き方と仕訳・計算・表示の方法～

何らかの原因（盗難や紛失など）で、期末商品の実際の数量（実地棚卸数量）が帳簿上の数量（帳簿棚卸数量）を下回る場合があります。
このような場合、実地棚卸数量と帳簿棚卸数量との差額は棚卸減耗損（たなおろしげんもうそん）として処理します。

商品評価損とは？
商品によっては時間の経過や陳腐化などによってその価値が下がってしまうものがあります。

商品を購入した時の原価よりも決算時点における時価（正味売却価額）の方が低い場合、商品の帳簿価額を時価まで切り下げる（時価に評価替えする）処理を行います。

このときの、商品の原価と時価（正味売却価額）の差額は商品評価損として処理します。

正味売却価額とは、売価から商品の販売にかかるコスト（アフターコスト）を差し引いたものをいいます。

一言で時価といっても、どの金額をもって時価とするのかということにはいろいろな考え方がありますが、一般に商品などの棚卸資産の場合には正味売却価額をもって時価とします。したがって、試験では特に指示がない限り「時価＝正味売却価額」と考えてもらえば大丈夫です。

なお、商品を正味売却価額で評価するのは正味売却価額が原価を下回っている場合のみです。
それ以外のケース（原価≦正味売却価額）では時価で評価せず原価のままとします

棚卸減耗損と商品評価損の表示方法
棚卸減耗損の表示方法
棚卸減耗損は損益計算書上、原則として売上原価の内訳科目または販売費および一般管理費とします（問題に指示がある場合はその指示に従ってください）。

売上原価の内訳科目とする場合、棚卸減耗損は売上原価に加算されるので、次のように仕入勘定へ振り替える仕訳を行います（販売費及び一般管理費とする場合は、以下の仕訳は必要ありません）。

売上原価を売上原価勘定で計算する場合は、借方を「売上原価」とします。

商品評価損の表示方法
商品評価損は損益計算書上、原則として売上原価の内訳科目とします。したがって、商品評価損は原則として売上原価に加算されることになるので、次のように仕入勘定へ振り替える仕訳を行います。

期末商品の評価とP/L・B/Sとの関係

棚卸減耗損と商品評価損のボックス図
前回学習したように棚卸減耗損と商品評価損は繰越商品から控除するので、貸借対照表における「商品」の金額は棚卸減耗損と商品評価損を控除した後の金額であり、それは「＠時価×実地棚卸数量」で計算されたものとなります。

一方、損益計算書における「期末商品棚卸高」の金額は棚卸減耗損と商品評価損を控除する前の金額（帳簿棚卸高）であり、「＠原価×帳簿棚卸数量」で計算されたものです。

つまり棚卸減耗損や商品評価損がある場合には、損益計算書の「期末商品棚卸高」と貸借対照表の「商品」の金額が異なるということになるわけです。

売上原価は本来、当期に販売した商品の原価を意味します。
棚卸減耗等がない場合、「期首商品棚卸高＋当期商品仕入高ー期末商品棚卸高」で計算された金額は、まさしく当期に販売した商品の原価を表します。

棚卸減耗等がある場合、もしこれらを控除した金額（実地棚卸高）にもとづいて売上原価を計算すると、売上原価に棚卸減耗等が含まれてしまいます。

そこで、損益計算書においては売上原価を帳簿棚卸高にもとづいて計算することで、いったん当期に販売した商品の原価を表示し、そこに棚卸減耗損等を加算するという形で表示します。
</div>
            <div></div>
            </article>
        </section>

        <Title title="売上の計上基準とは"/>
        <section>
            <article>
            <div>売上の計上基準
出荷基準（発送基準）：商品を出荷（発送）したときに売上を計上する基準。
引渡基準（納品基準）：得意先に商品を引き渡した（納品した）ときに売上を計上する基準。
検収基準：納品した商品の数量や品質などを相手方が確認し（これを検収といいます）、その連絡を受けた時に売上を計上する基準。</div>
            <div></div>
            </article>
        </section>

        <Title title="売上原価対立法とは"/>
        <section>
            <article>
            <div>売上原価対立法
売上原価対立法とは、商品を仕入れたときは商品勘定の借方に原価で記入し、商品を販売したときは商品勘定の貸方に原価で記入するとともに、売上原価勘定の借方に記入する方法をいいます。

商品￥1,200を掛けで仕入れた。
商品を仕入れたときは商品勘定の借方に原価で記入します。

借方科目	金額	貸方科目	金額
商品	1,200	買掛金	1,200

商品（原価￥1,100）を￥1,500で販売し、代金は掛けとした。
商品を販売したときは商品勘定の貸方に原価で記入するとともに、売上原価勘定の借方に記入します。

借方科目	金額	貸方科目	金額
売掛金	1,500	売上	1,500
売上原価	1,100	商品	1,100

決算を迎えた。期首商品棚卸高は￥150、期末商品棚卸高は￥250である
売上原価対立法では、商品を販売したときにその原価を商品勘定から売上原価勘定へ振り替えています。
そのため、三分法のように決算において売上原価を算定するための仕訳は必要ありません。</div>
            <div></div>
            </article>
        </section>

        <Title title="サービス業の会計処理"/>
        <section>
            <article>
            <div>【役務収益と役務原価】サービス業の処理
これまでは具体的な形の有るモノを売買する商品売買業について学習してきましたが、世の中には形のない「サービス」を提供することで収益を得る業種もあります。このような業種の場合、どのように仕訳をすればいいのでしょうか？

物品の販売ではなく、サービス（役務（えきむ））を提供することで収益を得る業種のことをサービス業といいます。サービス業には、教育、宅配、運送・輸送、修理・補修、理容、クリーニングなど様々な業態があります。

代金を前受けしたときの仕訳
例題1
学習塾を経営する当社では、来月開講予定の講座（受講期間1年）の受講料￥100,000を現金で受け取った。
3級で学習したように売上を計上するためには、原則として「代金の授受」と「商品の引渡又はサービス（役務）の提供」の2つの条件を満たす必要があります。したがって、サービスを提供する前に代金を前受けしただけでは収益を計上することはできません。

そこで、受け取った金額を「前受金」として処理します。

費用を支払ったときの処理
例題2
来月開講予定の講座に先立ち、教材の作成費用として￥15,000を現金で支払った。なお、この教材作成費用は仕掛品勘定に計上する。
費用は収益を獲得するための”犠牲”となるものです。そのため、会計では収益が計上されたときに、その”犠牲”となった費用を対応させて計上すべきというルールになっています（これを「費用収益対応の原則」といいます）。

この原則からいうと、サービスの提供による収益が計上されていない段階で費用だけを計上することはできません。そこで、支払った金額を仕掛品勘定（資産）で処理します。

決算日現在、講座の8割が終了している。
決算においては、当期にサービスの提供を終えた部分に相当する金額のみを収益（役務収益）および費用（役務原価）として計上します。
当期にサービスの提供を行った部分に相当する金額を「前受金」から役務収益勘定へ振り替えます。また、役務収益に対応する費用を「仕掛品」から役務原価勘定へ振り替えます。</div>
            <div></div>
            </article>
        </section>

        <Title title="債務の保証とは"/>
        <section>
            <article>
            <div>債務の保証および債権の譲渡

債務の保証とは？
主たる債務者が債務の返済をできない場合に、その債務の返済を引き受けることを債務の保証といいます。

例えば当社がA社の借入金などの債務を保証していた場合、もしA社が債務の返済をできなくなると、当社が代わってその債務を返済しなければなりません。

このように「現在ではいまだ現実の債務ではないが、将来一定の事実が発生した場合に現実の債務となるもの」を偶発債務といいます。

債務の保証は簿記上の取引ではないため債務の保証自体に関する仕訳は必要ありませんが、偶発債務が発生した場合、それを忘れないようにするために帳簿上で備忘記録をしておきます。

この備忘記録は保証債務および保証債務見返（ほしょうさいむみかえり）という対照勘定を使って処理します。
「保証債務」は”債務”と付くので負債の貸方。借方はその相手科目なので”見返”が付くと覚えてください。

【参考】対照勘定
対照勘定とは借方項目と貸方項目の2つが1セットで対になっているような勘定科目で、主に備忘記録をする際などに用いられる勘定です。対照勘定は、あくまでも帳簿上で備忘記録をするためのものに過ぎないので貸借対照表などに記載されることはありません。

債務保証の契約をしたときの仕訳
例題1
当社は、A社の債務￥100,000について保証人となった。
債務保証の契約をしたときには、債務の保証に係る偶発債務を対照勘定を使って備忘記録します。

借方科目	金額	貸方科目	金額
保証債務見返	100,000	保証債務	100,000
 ケース1：主たる債務者が返済したときの仕訳
例題2-1
A社は、当社が保証人になっていた債務￥100,000を無事返済した。
主たる債務者（A社）が無事債務を返済した場合には、偶発債務が消滅するので備忘記録（対照勘定）を消去します。

借方科目	金額	貸方科目	金額
保証債務	100,000	保証債務見返	100,000

主たる債務者が返済不能になった場合の仕訳
例題2-2
当社が保証人になっていた債務についてA社が返済できなくなったため、当社が代わって現金で返済した。
当社がA社に代わって債務を返済した場合、のちにA社に対してその代金を請求することができるので、そのA社に対する債権を未収入金などで処理します。 同時に、偶発債務の消滅に伴って備忘記録（対照勘定）を消去します。

借方科目	金額	貸方科目	金額
未収入金	100,000	現金	100,000
保証債務	100,000	保証債務見返	100,000

買掛金などの支払いのために譲渡した場合
例題3
得意先A社に対する売掛金￥1,000を、仕入先B社に対する買掛金の支払いのため、同社にこれを譲渡した。

売掛金などの売上債権は、買掛金などの債務の支払いのために債務者の承諾を得た上で第三者へ譲渡することができます。この場合、これらの債権・債務を相殺させる仕訳を行います。

借方科目	金額	貸方科目	金額
買掛金	1,000	売掛金	1,000

売掛金を売却した場合
例題4
売掛金￥3,000を￥2,800で売却し、代金は当座預金口座に振り込まれた。
債権の現金化やリスクヘッジなどの目的のために、売掛金などの売上債権をファクタリング会社（債権の買取りや回収などを行う会社）などへ売却する場合があります。

このとき、債権金額と売却金額との差額は債権売却損勘定（営業外費用）で処理します。

借方科目	金額	貸方科目	金額
当座預金	2,800	売掛金	3,000
債権売却損	200		

電子記録債権の譲渡
電子記録債権は通常の手形の裏書譲渡や割引と同様に、譲渡記録を行うことで第3者に譲渡や売却をすることができます。

 MEMO
実際には、これらの取引はそれぞれの取引銀行を通じて行われます。

電子記録債権を譲渡した場合の仕訳
例題5
A社はB社に対する買掛金￥5,000の決済のため、所有する電子記録債権￥5,000を譲渡するために譲渡記録を行った。
 A社（譲渡人）の仕訳
電子記録債権を譲渡した場合は「電子記録債権」（資産）を減少させます。

借方科目	金額	貸方科目	金額
買掛金	5,000	電子記録債権	5,000

B社（譲受人）の仕訳
電子記録債権を譲渡された場合は「電子記録債権」（資産）で処理します。

借方科目	金額	貸方科目	金額
電子記録債権	5,000	売掛金	5,000
電子記録債権を割引いた（売却した）場合の仕訳
例題6
A社は電子記録債権￥4,000を取引銀行で割り引き、割引料￥100が差し引かれた残額が普通預金口座に振り込まれた。
電子記録債権を割り引いたり売却をした場合、電子記録債権の帳簿価額と譲渡金額との差額を電子記録債権売却損勘定（営業外費用）で処理します。

借方科目	金額	貸方科目	金額
普通預金	3,900	電子記録債権	4,000
電子記録債権売却損	100		</div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>

        <Title title="税効果会計とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            </article>
        </section>



        <Title title="商品売買の会計処理"/>
        <section>
            <article>
            <div>商品を仕入れたときは原価で仕入勘定の借方に記入し、販売したときは売価で売上勘定の貸方に記入します。また、決算時に売れ残っている商品の原価を繰越商品（くりこししょうひん）勘定へ振り替えます。このような記帳方法を三分法（さんぶんぽう）といいます。

商品売買の処理に関して、仕入勘定、売上勘定、繰越商品勘定の3つに分けて記帳するので「三分法」というわけです。

商品￥1,000を仕入れ、代金は現金で支払った。なお、記帳方法は三分法によること。

商品を￥900で販売し、代金は現金で受け取った。なお、記帳方法は三分法によること。

決算時には、売れ残っている商品（在庫品）の原価を繰越商品勘定へ振り替える処理をします。


売上原価（うりあげげんか）とは外部に販売した商品の原価のことをいいます。

期首に倉庫の中には商品が2個あったとします。ちなみに、期首に倉庫や店頭に残っていた商品の原価を期首商品棚卸高（きしゅしょうひんたなおろしだか）といいます。これは前期からの商品の繰越額を意味します。

当期に商品を3個仕入れました。なお、当期に仕入れた商品の原価を当期商品仕入高（とうきしょうひんしいれだか）といい、これは決算整理前残高試算表の仕入勘定の金額を意味します。

当期に商品を？個販売して払い出しました。この販売した商品の原価のことを売上原価といいます。

期末には倉庫に商品が1個残っていました。期末に倉庫や店頭に残っている商品の原価を期末商品棚卸高（きまつしょうひんたなおろしだか）といい、次期へ繰り越される商品の金額を意味します。

さて、当期に払い出した商品は何個でしょうか？

考えてみてください。もうおわかりですね？

そう、正解は4個です。

この4個という数字は次のように計算したと思いますが、売上原価の計算方法は今まさにあなたが頭の中で行った計算なのです。

売上原価＝期首商品棚卸高＋当期商品仕入高－期末商品棚卸高

なお、商品の繰越額（期首商品棚卸高・期末商品棚卸高）は繰越商品（くりこししょうひん）勘定で処理をします。

期首商品棚卸高が￥200、当期商品仕入高が￥900、期末商品棚卸高が￥150のとき、売上原価を計算するための仕訳を示しなさい。なお、売上原価は仕入勘定で計算する。



商品を仕入れたときは原価で商品勘定の借方に記入し、販売したときは原価を商品勘定の貸方に記入するとともに、利益を商品売買益勘定の貸方に記入する方法を分記法（ぶんきほう）といいます。

商品売買の処理に関して、商品の売価を原価（商品勘定）と利益（商品売買益勘定）に分けて記帳するので「分記法」というわけです。

商品￥800を仕入れ、代金は現金で支払った。なお、記帳方法は分記法によること。
分記法では、仕入れた商品の原価を商品勘定の借方に記入します。

商品（原価￥800）を￥900で販売し、代金は現金で受け取った。なお、記帳方法は分記法によること。
分記法では、販売した商品の原価を商品勘定の貸方に記入するとともに、利益を商品売買益勘定の貸方に記入します。

ただ分記法では販売に際して、その商品の原価が分からないと処理できないというデメリットがあります。大量の商品を扱う会社では販売の都度、その商品の原価をいちいち調べるのは非常に手間がかかります。

このような理由から一般の会社では多くの場合、三分法が採用されています。試験においても重要性が高いのは三分法で、指示がない限り三分法による記帳が前提となっています。

取引の代金を現金で精算せず、後日まとめて精算する取引のことを掛取引（かけとりひき）といいます。

毎日大量に取引が行われる場合、そのつど個別に現金や小切手で精算していたのでは事務処理が大変になります。その場合、一定期間（1ヶ月など）の取引金額をまとめて精算するほうが効率的なのです。

商品を掛けで仕入れた場合、将来代金を支払う義務が発生します。簿記上、このような義務は負債として扱います。

商品を掛けで販売した場合、将来代金を受け取る権利が発生します。簿記上、このような権利は資産として扱います。

返品（へんぴん）とは品違いなどの理由によって商品を返す（または返ってくる）ことをいいます。

返品の処理は全く難しくありません。なぜなら、商品を仕入れたとき、または販売したときの逆仕訳をすればいいだけだからです。

仕入戻しとは、仕入れた商品をそのまま相手に返すことです。
品違いのため、掛けで仕入れた商品のうち￥80を返品した。

売上戻りとは、販売した商品がそのまま返ってくることです。
品違いのため、掛けで販売した商品のうち￥100（原価￥80）の返品を受けた。

商品などを売買するときには様々な費用が付随して発生しますが、このような費用を付随費用（ふずいひよう）といいます。具体的なものとしては、運賃、保険料、手数料、荷役費（バイト代）、保管料、関税などがあります。

付随費用は当社が負担する場合と相手方が負担する場合があり、それぞれ処理の方法が異なります。

当社負担の付随費用の処理

仕入諸掛の仕訳
付随費用のうち、引取運賃など商品を仕入れるときに発生するものを仕入諸掛（しいれしょがかり）といいます。当社負担の仕入諸掛はすべて商品の購入原価（「仕入」の金額）に含めます。

商品￥500を掛けで仕入れ、この引取運賃￥100は現金で支払った。なお、付随費用については当社が負担する契約となっている。

この付随費用は商品の仕入に際して不可避的なものです。この付随費用を支払わないと商品をもらえないので、商品の代金と区別せずに一体として処理します。

販売諸掛の仕訳
付随費用のうち、発送費など商品を販売するときに発生するものを販売諸掛（はんばいしょがかり）といいます。

先方負担の付随費用の処理
相手方が負担する契約となっている付随費用を当社が立て替えて支払った場合、①立替金（たてかえきん）勘定を使って処理する方法と②立替金勘定を使わずに処理する方法があります。

立替金勘定は、立て替えたお金を将来相手から支払ってもらえるという権利を表します。簿記ではこのような権利を資産として扱います。

商品￥500を掛けで仕入れ、これに付随して発生した費用￥100は現金で支払った。なお、付随費用については相手方が負担する契約となっている。

先方負担の付随費用を当社が立て替えて支払ったことになるので、これを立替金勘定で処理します。
立替金勘定を使わずに処理する方法では、立て替えた金額を買掛金から差し引きます</div>
            <div></div>
            </article>
        </section>

        <Title title="差入保証金の会計処理"/>
        <section>
            <article>
            <div>差入保証金（さしいれほしょうきん）とは、取引や賃貸借契約に際して、契約の履行を担保するために差し入れる保証金や敷金等をいいます。
差し入れた保証金や敷金は原則として契約終了時に返還されるます。つまり、一時的に預けているだけと考えられるので差入保証金は資産（将来返してもらえる権利）となります。

営業に使用する目的で、店舗を1か月あたり￥1,000で賃借する契約を結んだ。この契約にあたり、敷金（家賃の2か月分）および不動産会社への仲介手数料（家賃の1か月分）を小切手を振り出して支払った。

敷金は「差入保証金」（資産）、仲介手数料は「支払手数料」（費用）で処理します。</div>
            <div></div>
            </article>
        </section>

        <Title title="会計上の変更及び誤謬の訂正とは"/>
        <section>
            <article>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </article>
        </section>
        
    </React.Fragment>
);

const Cash = () => {
    return cashContent;
}

export default Cash;
