import React from "react";

const TextOne = (props) => {
    return (
        <div className="col-lg-6 text__box_a">
            <p className="text__a_big">{props.title}</p>
            <p className="text__a_small">{props.desc}</p>
            <hr className="line line_one"/>
        </div>
    )
}

export default TextOne