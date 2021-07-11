import React from "react";
// import { BlackText } from "../../../../../../globals/index";
import ListCourseItem from "../../../../Home/ListCourse/ListCourseItem/list-course-item";
import Carousel from "react-multi-carousel";
import { Grid } from "@material-ui/core";

function PanelCourse() {
  const temp = [1, 2, 3, 4];
  const course = {
    title: "Raque Professional IT Expert Certificate Course",
    ratedPoint: 5,
    ratedNumber: 5,
    studentNumber: 10,
    price: 200,
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ marginTop: 30 }}>
      {/* <Grid container spacing={0}></Grid> */}
      <Carousel
        responsive={responsive}
        showDots={true}
        style={{ marginTop: 15, display: "flex" }}
      >       
        {temp.map((i) => (
          // <Grid item xs={6}>
          <ListCourseItem
            key={temp[i]}
            course={course}
            style={{ maxWidth: 280 }}
          />
          // </Grid
        ))}
      </Carousel>
      {/* </Grid> */}
    </div>
  );
}
export default PanelCourse;
