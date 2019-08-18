import React, { Component } from "react";
import "./Carousel.scss";
import img1 from "../sass/assests/img/01.jpeg";
import img2 from "../sass/assests/img/02.jpeg";
import img3 from "../sass/assests/img/03.jpeg";
import img4 from "../sass/assests/img/04.jpeg";
import img5 from "../sass/assests/img/05.jpeg";
import img6 from "../sass/assests/img/06.jpeg";
import img7 from "../sass/assests/img/07.jpeg";
import img8 from "../sass/assests/img/08.jpeg";
import { copyFile } from "fs";

class Carousel extends Component {
  state = {
    imageWidth: 0
  };
  carouselSlide = React.createRef();
  counter = 1;

  componentDidMount() {
    const carousel = this.carouselSlide.current;
    this.slides = carousel.children;
    this.slides[0].addEventListener("load", this.getImageWidth);
    this.carouselSlide.current.children[1].classList.add("carousel__selected");

    // binding event
    carousel.addEventListener("transitionend", () => {
      if (this.slides[this.counter].id === "lastClone") {
        carousel.style.transition = "none";
        this.counter = this.slides.length - 2;
        carousel.style.transform =
          "translateX(" + -this.state.imageWidth * this.counter + "px)";
        this.currentSlide();
      }
      if (this.slides[this.counter].id === "firstClone") {
        carousel.style.transition = "none";
        this.counter = this.slides.length - this.counter;
        carousel.style.transform =
          "translateX(" + -this.state.imageWidth * this.counter + "px)";
        this.currentSlide();
      }
    });
  }
  currentSlide() {
    for (let i = 1; i < this.slides.length; i++) {
      console.log(this.counter, "====", i);
      if (this.counter === i) {
        this.carouselSlide.current.children[i].classList.add(
          "carousel__selected"
        );
      } else {
        this.carouselSlide.current.children[i].classList.remove(
          "carousel__selected"
        );
      }
    }
  }
  getImageWidth = () => {
    const imageWidth = this.slides[0].clientWidth;

    this.setState({ imageWidth }, () => {
      this.carouselSlide.current.style.transform =
        "translateX(" + -this.state.imageWidth * this.counter + "px)";
    });
  };

  state = {};
  prev = () => {
    this.counter--;
    const carousel = this.carouselSlide.current.style;
    carousel.transition = "transform 0.4s ease-in-out";

    this.currentSlide();
    carousel.transform =
      "translateX(" + -this.state.imageWidth * this.counter + "px)";
  };
  next = () => {
    const carousel = this.carouselSlide.current.style;
    carousel.transition = "transform 0.4s ease-in-out";
    this.counter++;
    this.currentSlide();
    carousel.transform =
      "translateX(" + -this.state.imageWidth * this.counter + "px)";
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.prev} style={{ marginBottom: "50px" }}>
          Prev
        </button>
        <div className="carousel" ref={this.carousel}>
          <div className="carousel__slide" ref={this.carouselSlide}>
            <img src={img8} alt="img8" id="lastClone" />
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
            <img src={img1} alt="img1" id="firstClone" />
          </div>
        </div>
        <button onClick={this.next} style={{ marginTop: "50px" }}>
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default Carousel;
