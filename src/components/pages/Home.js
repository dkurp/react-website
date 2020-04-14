import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subTitle="IT'S NICE TO MEET YOU"
          buttonText="TELL ME MORE"
          link="/services"
          showButton={true}
          image={image}
        />
      </div>
    );
  }
}

export default Home;
