/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function ItemCardB(props) {
  const { product, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  const titleOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="250px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ItemCardB")}
    >
      <Image
        width="250px"
        height="150px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={product?.image}
        className="clickable"
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="15px 15px 15px 5px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="235px"
          height="49px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="clickable"
          children={product?.name}
          onClick={() => {
            titleOnClick();
          }}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          display="flex"
          gap="8px"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          value={product?.rating}
          maxValue="5"
          className="clickable"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"$"}${product?.price}`}
          {...getOverrideProps(overrides, "Price")}
        ></Text>
      </Flex>
    </Flex>
  );
}
