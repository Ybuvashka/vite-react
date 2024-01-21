import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import {Logo} from '../components'

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby keytar meh street art, slow-carb selvage taxidermy
            blackbird spyplane post-ironic mustache hashtag narwhal YOLO ugh.
            Tumeric blue bottle master cleanse, migas four dollar toast lomo
            seitan succulents mumblecore franzen XOXO messenger bag copper mug
            af. Cliche VHS activated charcoal literally roof party bruh
            single-origin coffee trust fund succulents forage DIY fashion axe
            distillery raclette. Vibecession blog sustainable, tousled green
            juice squid kinfolk readymade kale chips migas subway tile four loko
            irony. Synth activated charcoal 90's chartreuse meditation. Fixie
            deep v slow-carb, swag leggings ethical cronut hot chicken.
          </p>
          <Link to='/register' className="btn register-link">
            Register
          </Link>
          <Link to='/login' className="btn">
            login
          </Link>
        </div>
        <img src={main} alt='job hunt' className="img main-img"/>
      </div>
    </Wrapper>

  );
};

export default Landing;
