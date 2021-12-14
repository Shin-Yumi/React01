import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import HtmlRefer from "./HtmlRefer";
import CssRefer from "./CssRefer";

const obj = {
    0: <HtmlRefer />,
    1: <CssRefer />
}

class Reference extends React.Component {
    state = {
        activeId: 0,
    }
    
    clickHandler = (id) => {
        this.setState({ activeId: id });
    };

    render(){

        return (
           
                <div>
                    <Header />
                    <Contents>
                        <section id="referCont">
                            <div className="container">
                                <WrapTitle text={["reference", "site"]} />
                                <div className="refer__cont">
                                    <div className="table">
                                        <ul className ="tab">
                                            <li onClick={() => this.clickHandler(0)}>HTML</li>
                                            <li onClick={() => this.clickHandler(1)}>CSS</li>                                            
                                        </ul>
                                        
                                        <div className="contents">
                                            {obj[this.state.activeId]}
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <ContInfo />
                    </Contents>
                    <Footer />
                </div>

        )
    }
}







export default Reference;