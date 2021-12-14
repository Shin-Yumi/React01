import React from "react";
import axios from "axios";
import ReferInfo from "../info/ReferInfo";

class CssRefer extends React.Component {
    state = {
        cssRefer : []
    }

    getRefer = async () => {
        const {
            data: {
                data: {cssRefer},
            },
        } = await axios.get("https://shin-yumi.github.io/React01/src/assets/json/ReferCss.json");

        this.setState({cssRefer})
        
        //console.log(htmlRefer)
    }

    componentDidMount(){
        this.getRefer();
    }

    render(){
        const {cssRefer} = this.state;
        

        return (
                    <>
                        {cssRefer.map((css) =>(
                            <ReferInfo 
                                key={css.id}
                                id={css.id}
                                title={css.title}
                                desc2={css.desc2}
                                element={css.element}
                                link={css.link}
                            />
                        ))}
                    </>

        )
    }
}

export default CssRefer;