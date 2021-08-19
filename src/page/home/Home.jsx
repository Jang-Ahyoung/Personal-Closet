import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";
import CodiRecord from '../../components/codiRecord/CodiRecord';
import CodiRecommend from '../../components/codiRecommend/CodiRecommend';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Home(props) {
    const history = useHistory();
    const type = props.location.state.type;
    const [windowSize, setWindowSize] = useState();
    const [openRecommend, setOpenRecommend] = useState(true);
    const handleWindowSize = () => {
        window.addEventListener("resize", () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });
    }
    const handleHistory = (type) => {
        history.push({ pathname: '/codiEdit', state: { type: type } });
    }
    useEffect(() => {
        handleWindowSize();
    }, []);

    const Closet = () => (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2 >My closet Collection</h2>
            </div>
            <div className={styles.swiper}>
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? 1 : 3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    pagination={{ clickable: true }}
                    className="mySwiper">
                    <SwiperSlide>
                        <Link to={{ pathname: '/clothes', state: { category: "Top" } }}>
                            <img className={styles.swiperImg} alt="slideImg" src="img/cloth/top.jpg" />
                        </Link>
                        <p className={styles.category}>Top</p>
                        <span></span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/cloth/jeans3.jpg" />
                        <p className={styles.category}> Bottom</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/cloth/dress.jpg" />
                        <p className={styles.category}> Dress</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/cloth/outer2.jpg" />
                        <p className={styles.category}>Outer</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/cloth/skirt.jpg" />
                        <p className={styles.category}> Skirt</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/acc.jpg" />
                        <p className={styles.category}> Acc</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperImg} alt="slideImg" src="img/cloth/running_shoes.jpg" />
                        <p className={styles.category}>Shoes</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )

    const Codi = () => (

        openRecommend ?
            <CodiRecommend setOpenRecommend={setOpenRecommend} />
            :
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Codi Collection</h1>
                    <p>by Orit Ehanati</p>
                </div>
                <div className={styles.topSection}>
                    <p className={styles.codititle}>Codi Type</p>
                    <FontAwesomeIcon icon={faPenSquare} className={styles.editIcon} onClick={() => handleHistory('type')} />
                </div>
                <div className={styles.imgContainer}>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/outer2.jpg"></img>
                        <p className={styles.imgText}>Causal</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/casual.jpg"></img>
                        <p className={styles.imgText}>Causal</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/dark.jpg"></img>
                        <p className={styles.imgText}>Dark</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/warm.jpg"></img>
                        <p className={styles.imgText}>Warm</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/summerVacation.jpg"></img>
                        <p className={styles.imgText}>Summer</p>
                    </div>
                </div>
                <div className={styles.topSection}>
                    <p className={styles.codititle}>Codi Style</p>
                    <FontAwesomeIcon icon={faPenSquare} className={styles.editIcon} onClick={() => handleHistory('style')} />
                </div>
                <div className={styles.imgContainer}>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/main.jpg"></img>
                        <p className={styles.imgText}>Hot</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/city.jpg"></img>
                        <p className={styles.imgText}>City</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/calm.jpg"></img>
                        <p className={styles.imgText}>Office</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/pretty.jpg"></img>
                        <p className={styles.imgText}>Date</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/ocean.jpg"></img>
                        <p className={styles.imgText}>Ocean</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/office.jpg"></img>
                        <p className={styles.imgText}>Office</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cool.jpg"></img>
                        <p className={styles.imgText}>Cool</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/cloth/trannings.jpg"></img>
                        <p className={styles.imgText}>Sport</p>
                    </div>
                    <div>
                        <img className={styles.img} alt="StyleImg" src="img/date.jpg"></img>
                        <p className={styles.imgText}>Healing</p>
                    </div>
                </div>
                <CodiRecord />
            </div >
    )

    return type == "closet" ? <Closet /> : <Codi />;
}

export default Home
