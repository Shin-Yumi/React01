import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

//함수형 컴퍼넌트 VS 클래스형 컴퍼넌트  --> 함수형 컴퍼넌트(클래스형 장점) --> 리액트 훅

function Info({data}){
    return <div>{data}</div>;
}

const textInfo = [
    { text : "we provide" },
    { text : "visual coding" },
    { text : "solution" },
    { text : "for you webs" },
]

function Main(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        {textInfo.map((mainText) => (
                            <Info data={mainText.text} key={mainText.text} /> //배열을 쓸때는 항상 키값을 넣어주여야한다
                        ))}
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Main;