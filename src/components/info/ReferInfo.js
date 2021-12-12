import React from "react";
import PropTypes from "prop-types";

function ReferInfo({ id, title, desc2, element, link}) {
    return (
        <li>
            <a href={link}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </a>
        </li>
    )
}

ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ReferInfo;