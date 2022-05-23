import React from "react";
const arr = {
    backgroundColor: "black",
    borderRadius: "33px",
    opacity: 0.6,
    margin: "-2rem 1.4rem",
    zIndex: 2,
    width: "40px",
    height: "40px",
};
function NextArrowP(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arr,
                padding: "12px 20px",
                margin: "-2rem 1.2rem",

            }}
            onClick={onClick}
        />
    );
};
function PrevArrowP(props) {
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

const settingsAll= {
    slidesToScroll: 3,
    nextArrow: <NextArrowP />,
    prevArrow: <PrevArrowP />
};
const settingCaruosel =
{
    settingsCaruoselLg: { slidesToShow: 5, ...settingsAll },
    settingsCaruoselMd: { slidesToShow: 4, ...settingsAll  },
    settingsCaruoselSm: { slidesToShow: 3, ...settingsAll  },
};
export default settingCaruosel;