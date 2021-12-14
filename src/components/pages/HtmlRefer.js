import React from "react";
import axios from "axios";
import ReferInfo from "../info/ReferInfo";

class HtmlRefer extends React.Component {
    state = {
        htmlRefer : []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://shin-yumi.github.io/React01/src/assets/json/ReferHtml.json");

        this.setState({ htmlRefer })
        
        console.log(htmlRefer);
    }

    componentDidMount(){
        this.getRefer();
    }

    render(){
        const { htmlRefer } = this.state;
        

        return (
                    <>
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
                    </>

        )
    }
}

export default HtmlRefer;
