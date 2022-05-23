import React from "react";


export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                backgroundColor: "black",
                borderRadius:"5px 0px 0px 5px",
                opacity: 0.6,
                margin: "auto 25px",
                zIndex: 2,
                padding: "12px 12px",
                width: "40px",
                height: "40px",
                ...style,
            }}
            onClick={onClick}
        />
    );
};

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundColor: "black",
                borderRadius:"0px 5px 5px 0px",
                opacity: 0.6,
                margin: "auto 25px",
                zIndex: 2,
                padding: "12px 8px",
                width: "40px",
                height: "40px",
            }}
            onClick={onClick}
        />
    );
};