import React from "react";
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundColor: "black",
                borderRadius: "5px 0px 0px 5px",
                opacity: 0.6,
                margin: "auto 1.55rem",
                zIndex: 2,
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...props.extra
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
                borderRadius: "0px 5px 5px 0px",
                opacity: 0.6,
                margin: "auto 1.55rem",
                zIndex: 2,
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...props.extra
            }}
            onClick={onClick}
        />
    );
};