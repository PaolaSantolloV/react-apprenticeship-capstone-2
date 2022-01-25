import React from "react";
import {
  StyledImage,
  StyledContainer,
  StyledDescription,
  StyledDate,
  StyledWraperInfo,
  StyledTitlePicture,
  StyledCalendar,
  StyledVideo,
} from "./PictureCard.styles";

// eslint-disable-next-line react/prop-types
function PictureCard({ url, title, date, explanation, mediaType }) {
  return (
    <StyledContainer title="picture-card">
      {mediaType === "image" ? (
        <StyledImage title="picture-of-the-day" src={url} />
      ) : (
        <StyledVideo title="video-of-the-day" src={url} />
      )}
      <StyledWraperInfo>
        <StyledTitlePicture title="title">{title}</StyledTitlePicture>
        <StyledDate title="date-picture">
          <StyledCalendar
            title="calendar"
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-calendar-business-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          />{" "}
          ( {date} )
        </StyledDate>
        <StyledDescription title="description">{explanation}</StyledDescription>
      </StyledWraperInfo>
    </StyledContainer>
  );
}

export default PictureCard;
