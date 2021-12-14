import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import axios from "axios";
import ReferInfo from "../info/ReferInfo";

class Reference extends React.Component {
    state = {
        isLoading : true,
        htmlRefer : [],
        CssRefer : []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer}, //{cssRefer}
            },
        } = await axios.get("https://shin-yumi.github.io/React01/src/assets/json/ReferHtml.json");
        const {
            data: {
                data: {CssRefer}, //{cssRefer}
            },
        } = await axios.get("https://shin-yumi.github.io/React01/src/assets/json/ReferCss.json");
        this.setState({ htmlRefer, CssRefer, isLoading : false })
        
        //console.log(htmlRefer)
    }

    componentDidMount(){
        this.getRefer();
    }

    render(){
        const { isLoading, htmlRefer,CssRefer } = this.state;
        

        return (
            <div>
                {isLoading ? (
                    <div className="loading"></div>
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={["reference", "site"]} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {htmlRefer.map((html) =>(
                                                    <ReferInfo 
                                                        key={html.id}
                                                        id={html.id}
                                                        title={html.title}
                                                        desc2={html.desc2}
                                                        element={html.element}
                                                        link={html.link}
                                                    />
                                                ))}
                                                {CssRefer.map((css) =>(
                                                    <ReferInfo 
                                                        key={css.id}
                                                        id={css.id}
                                                        title={css.title}
                                                        desc2={css.desc2}
                                                        element={css.element}
                                                        link={css.link}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}





// function Reference(){
//     return (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="referCont">
//                     <div class="container">
//                         <WrapTitle text={["reference", "site"]} />
//                         <div class="refer__cont">
//                             <div class="table">
//                                 <h3>HTML</h3>
//                                 <ul>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">1</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="referDetail.html">
//                                             <span className="num">1</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <ContInfo />
//             </Contents>
//             <Footer />
//         </div>
//     )
// }

export default Reference;