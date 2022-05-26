import React from "react";
const arr = {
    backgroundColor: "black",
    borderRadius: "33px",
    opacity: 0.6,
    margin: "auto 1.125rem",
    zIndex: 2,
    width: "40px",
    height: "40px",
};
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arr,
                padding: "12px 20px",
                margin: "auto 0.9rem",

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
                ...arr,
                padding: "12px 0px",
            }}
            onClick={onClick}
        />
    );
};