import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://ak-d.tripcdn.com/images/22011a0000018uj7wCD3E_Z_1080_808_R5_D.jpg",
    },
    {
      src: "https://ak-d.tripcdn.com/images/220p1a0000018gqqf6928_Z_1080_808_R5_D.jpg",
    },
    {
      src: "https://ak-d.tripcdn.com/images/220q1a0000018iwceD57E_Z_1080_808_R5_D.jpg",
    },
    {
      src: "https://ak-d.tripcdn.com/images/22061a0000018i8b02E58_Z_1080_808_R5_D.jpg",
    },
    {
      src: "https://ak-d.tripcdn.com/images/220s1a0000018ohkeD042_Z_1080_808_R5_D.jpg",
    },
    {
      src: "https://ak-d.tripcdn.com/images/220i1a0000018gfg60F8C_Z_1080_808_R5_D.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">제주 클럽이에스펜션</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>대한민국 제주도 서귀포시 1100로 501 63553</span>
          </div>
          <span className="hotelDistance">
            1000m 이내 거리: 관광명소 1개, 도심까지 거리: 10.4km
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="hotel"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h2 className="hotelTitle">
                클럽이에스 제주리조트 (Club ES Jeju Resort)
              </h2>
              <p className="hotelDesc">
                서귀포(중문)에 위치한 클럽이에스 제주리조트에 숙박하시는 경우
                차로 1분이면 한국천문연구원KVN탐라전파천문대에, 11분이면
                국제컨벤션센터에 가실 수 있습니다. 이 아파트식 호텔에서
                한라산국립공원까지는 5.1km 떨어져 있으며, 7.4km 거리에는
                천제연폭포도 있습니다.시즌별로 운영되는 야외 수영장 같은
                레크리에이션 시설을 이용하거나 정원에서 전망을 즐기실 수
                있습니다. 이 아파트식 호텔에는 무료 무선 인터넷 및
                아케이드/게임룸도 편의 시설/서비스로 마련되어
                있습니다.클럽이에스 제주리조트의 숙박 고객을 위해 서비스를
                제공하는 레스토랑에서 맛있는 식사를 즐겨보세요.
                식료품점/편의점도 있어 편리하게 이용하실 수 있습니다.
                바/라운지에서는 좋아하는 음료를 마시며 갈증을 해소하실 수
                있어요.대표적인 편의 시설과 서비스로는 로비의 무료 신문, 24시간
                운영되는 프런트 데스크, 세탁 시설 등이 있습니다. 이 아파트식
                호텔에는 행사를 위한 3개의 회의실이 마련되어 있습니다. 시설
                내에서 무료 셀프 주차 이용이 가능합니다.153개 객실에는 대용량
                냉장고 및 쿡탑 등이 갖추어진 간이 주방도 있어 편하게 머무실 수
                있습니다. 무료 무선 인터넷도 지원되며 평면 TV 시청을 즐기실 수
                있습니다. 편의 시설/서비스로는 전자레인지 및 전기 주전자 등이
                있으며 요청 시 추가 요(요금 별도)도 제공됩니다.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Perfect for a 9-night stay!</h2>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </span>
              <h3>
                <b>$945</b> (9 nights)
              </h3>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
