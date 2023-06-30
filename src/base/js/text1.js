import React from "react";

const TextOne = (props) => {
    return (
        <div className="col-lg-6 text__box_a">
            <p className="text__a_big" dangerouslySetInnerHTML={{ __html: props.title.replace(/\n/g, "<br>") }}></p>
            <p className="text__a_small" dangerouslySetInnerHTML={{ __html: props.desc.replace(/\n/g, "<br>") }}></p>
            <hr className="line line_one"/>
        </div>
    )
}

export default TextOne