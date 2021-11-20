import React, { useState, useEffect } from "react";
import {
  Description,
  RestaurantName,
  RestaurantDescription,
  CoverPic,
  Rating,
  StarIcon,
} from "./styled";
import reviewAPI from "../../../../api/reviewAPI";

const Picture = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [trendInfo, setTrendInfo] = useState(props.info);
  const [rate, setRate] = useState(0);
  const isTop = props.isTop;

  useEffect(() => {
    setTrendInfo(props.info);
    getRestaurantRate();
  }, [props.info]);

 

  useEffect(() => {
    console.log("star", rate);
  }, [rate]);

  // const getRestaurantRate = () => {
  //   ReviewAPI.calReviewRate(trendInfo._id)
  //     .then((response) => {
  //       console.log("res", response.data);
  //       setRate(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      <Description isHovered={isHovered}>
        <RestaurantName isTop={isTop}>
          {trendInfo ? trendInfo.name : null}
        </RestaurantName>
        <RestaurantDescription isTop={isTop}>
          {trendInfo ? trendInfo.description : null}
        </RestaurantDescription>
      </Description>
      <CoverPic
        src={trendInfo ? trendInfo.image[1] : null}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {/* <Rating>
        <StarIcon />
        {props.info.rate}
      </Rating> */}
    </>
  );
};

export default Picture;
