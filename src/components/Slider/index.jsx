'use client'
import Slider from "react-slick";

const Avatar = () => {
    return (
        <div>
            <img className="rounded-circle" src="https://img.nesine.com/7D511975-90D4-46DB-8107-2E522EF9DABB.jpg" />
        </div>
    );

}

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 3
    };

    return (
        <div className="slider-container" style={{ padding: "40px" }}>
            <style>{`
                .slick-slide div {
                    height: 100px; // Applied CSS to override default styles
                    background: #28616b;
                }
            `}</style>
            <Slider {...settings}>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
            </Slider>
        </div>
    );
}

export default MultipleItems;
