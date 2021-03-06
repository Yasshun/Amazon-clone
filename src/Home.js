import React from 'react';
import './Home.css';
import Product from './Product';
import HomeImage from './HomeImage';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <HomeImage />
                <div className="home__row">
                    <Product 
                        id="9834759"
                        title="新登場 Fire TV Stick - Alexa対応音声認識リモコン付属 | ストリーミングメディアプレーヤー"
                        image="https://m.media-amazon.com/images/I/51GF9vRAnFL._AC_UL320_.jpg"
                        price={4980}
                        rating={4}
                        thousandSeparater={true}
                    /> 
                    <Product 
                        id="7827852"
                        title="新型】Echo Dot (エコードット) 第4世代 - スマートスピーカー with Alexa、チャコール"
                        image="https://images-na.ssl-images-amazon.com/images/I/71EJ73NyVTL._AC_SX569_.jpg"
                        price={5980}
                        rating={4}
                    /> 
                </div>
                <div className="home__row">
                    <Product 
                            id="1749225"
                            title="最新 Apple iPad Air (10.9インチ, Wi-Fi, 64GB) - スペースグレイ (第4世代)"
                            image="https://images-na.ssl-images-amazon.com/images/I/71TERFaiUQL._AC_SX679_.jpg"
                            price={69080}
                            rating={4}
                        /> 
                    <Product 
                            id="8374937"
                            title="COMFEE' オーブントースター コンパクト 8L"
                            image="https://images-na.ssl-images-amazon.com/images/I/61rx6cU5eVL._AC_SX679_.jpg"
                            price={2580}
                            rating={3}
                        />  
                    <Product 
                            id="2144234"
                            title="[Amazon.co.jp限定】パナソニック 炊飯器 5.5合 スチームIH式 ダイヤモンド竈釜 ホワイト"
                            image="https://images-na.ssl-images-amazon.com/images/I/714OrHg6a0L._AC_SX569_.jpg"
                            price={21800}
                            rating={3}
                        /> 
                </div>
                

                <div className="home__row">
                    <Product 
                        id="2975275"
                        title="サムスンC49G95TSSC オデッセイG9 Odyssey G9 49インチのゲーミング曲面ディスプレイ5k 240hz 1000R HDR1000 1MSリフティング回転G-SYNCデスクトップHD曲面スクリーンゲーミングQLED量子点スクリーン"
                        image="https://m.media-amazon.com/images/I/81RcJoVbvDL._AC_UL320_.jpg"
                        price={253000}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
