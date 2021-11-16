import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import {
  RestaurantCard,
  IconWrapper,
  Ranking,
  Location,
  Line,
  RestaurantName,
  PriceRange,
  Description,
  Rating,
  CoverPhoto,
  CoverContainer,
  DetailContainer,
  LeftSection,
  RightSection,
  Star,
  Status,
  PinIcon,
} from "./styled";
import RestaurantAPI from "../../api/restaurantAPI";
import ReviewAPI from "../../api/reviewAPI";

const RestCard = ({ ...props }) => {
  const restaurant = props ? props.detail[0] : null;
  const [resName, setResName] = useState(null);
  const [description, setDescription] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState(null);
  const [resStatus, setResStatus] = useState(null);
  const [resPicture, setResPicture] = useState(null);
  const resRank = props ? props.rank + 1 : 0;

  useEffect(() => {
    setResName(props.detail.name);
    setDescription(props.detail.description);
    setMinPrice(props.detail.priceRange.min);
    setMaxPrice(props.detail.priceRange.max);
    setLocation(props.detail.location.address);
    getRestaurantStatus(props.detail._id);
    setResPicture(props.detail.image[1]);
    getAvgRate(props.detail._id);
  }, [restaurant]);

  const getRestaurantStatus = (res_id) => {
    RestaurantAPI.getRestaurantStatus(res_id)
      .then((response) => {
        setResStatus(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAvgRate = (res_id) => {
    ReviewAPI.calReviewRate(res_id)
      .then((response) => {
        setRating(response.data[0].avgStar);
      })
      .catch((e) => {
        setRating(0);
      });
  };

  return (
    <RestaurantCard
      size={props.size}
      headStyle={{ display: props.showRank ? "flex" : "none" }}
      bordered={false}
      title={<Ranking showRank={props.showRank}>{resRank}</Ranking>}
      cover={
        <CoverContainer customSize={props.size}>
          <IconWrapper>
            {resStatus ? (
              <Status status={resStatus}>{resStatus ? "OPEN" : "CLOSE"}</Status>
            ) : null}
          </IconWrapper>
          <CoverPhoto src={resPicture} />
        </CoverContainer>
      }
      style={{ margin: props.showRank ? "0 0.5vw" : "10px 0.5vw" }}
    >
      <DetailContainer>
        <LeftSection>
          <RestaurantName>
            {resName
              ? resName.length > 20
                ? `${resName.substring(0, 20)}...`
                : resName
              : null}
          </RestaurantName>
          <Description>
            {description
              ? description.length > 60
                ? `${description.substring(0, 60)}...`
                : description
              : null}
          </Description>
        </LeftSection>
        <RightSection>
          <PriceRange>
            ฿{minPrice} - {maxPrice}
          </PriceRange>
          <Rating>
            <Star />
            {rating}
          </Rating>
        </RightSection>
      </DetailContainer>

      {location ? (
        <Location>
          <PinIcon />
          {location.length > 25 ? `${location.substring(0, 25)}...` : location}
        </Location>
      ) : null}
    </RestaurantCard>
  );
};

export default RestCard;
