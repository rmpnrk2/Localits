import React from "react";
import "../Fix.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Pulongbato = () => {
  return (
    <div>
      <Parallax
        pages={9}
        style={{
          top: "0",
          left: "0",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "DMSerifDisplay",
            padding: "25rem",
            fontSize: "6rem",
          }}
        >
          The Legend of Pulong Bato
        </p>
        <div
          style={{
            position: "relative",
            width: "60rem",
            height: "40rem",
            margin: "auto",
            padding: "1rem",
            overflow: "hidden",
            border: "1px #ffffff double",
          }}
        >
          <ParallaxLayer offset={0} speed={0}>
            <img src="/src/images/scene1/1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.05}>
            <img src="/src/images/scene1/2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.05} speed={0.1}>
            <img src="/src/images/scene1/3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.15}>
            <img src="/src/images/scene1/4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.2}>
            <img src="/src/images/scene1/5.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.25}>
            <img src="/src/images/scene1/6.png" alt="" />
          </ParallaxLayer>
        </div>
        <img
          src="/src/images/hr2.1.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "15rem 0rem 5rem 0rem",
          }}
        />
        <p
          style={{
            fontFamily: "GoudyBookletter1911",
            fontSize: "2.5em",
            paddingBottom: "4rem",
          }}
        >
          Some centuries ago in the highlands of Zamboanga lived the lovers
          Pulong and Maryam. Pulong was a Subanen and Maryam a Muslim and the
          difference in the lovers’ ethnic backgrounds did not sit well
          especially with the girl’s family.
        </p>
        <p
          style={{
            fontFamily: "GoudyBookletter1911",
            fontSize: "2.5em",
            paddingBottom: "4rem",
          }}
        >
          Although a datu, Pulong never managed to win the favor of Maryam’s
          family, who did eve1rything to separate the two. Things went a turn
          for the worse when they prohibited Maryam from seeing Pulong
          altogether. They assigned her brother to keep an eye on her all the
          time making the separation unbearable for the lovers.
        </p>
        <img
          src="/src/images/hr2.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "5rem 0rem 15rem 0rem",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "60rem",
            height: "40rem",
            margin: "auto",
            padding: "1rem",
            overflow: "hidden",
            border: "1px #ffffff double",
          }}
        >
          <ParallaxLayer offset={0.4} speed={0.1}>
            <img src="/src/images/scene2/2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.15} speed={0.05}>
            <img src="/src/images/scene2/1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.15}>
            <img src="/src/images/scene2/3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.55} speed={0.2}>
            <img src="/src/images/scene2/4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={0.25}>
            <img src="/src/images/scene2/5.png" alt="" />
          </ParallaxLayer>
        </div>
        <img
          src="/src/images/hr2.1.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "15rem 0rem 5rem 0rem",
          }}
        />
        <p
          style={{
            fontFamily: "GoudyBookletter1911",
            fontSize: "2.5em",
            paddingBottom: "4rem",
          }}
        >
          One night when the moon was abroad and the whole village fast asleep,
          Maryam quietly managed to sneak out of their house and hastily fled
          for Pulong’s place. Seeing his girl approaching, Pulong immediately
          grabbed his stag, scooped Maryam and raced off with her as fast and as
          far as they possibly could.
        </p>
        <img
          src="/src/images/hr2.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "5rem 0rem 15rem 0rem",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "60rem",
            height: "40rem",
            margin: "auto",
            padding: "1rem",
            overflow: "hidden",
            border: "1px #ffffff double",
          }}
        >
          <ParallaxLayer offset={0.2} speed={0.05}>
            <img src="/src/images/scene3/1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.1}>
            <img src="/src/images/scene3/2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={0.15}>
            <img src="/src/images/scene3/3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={0.2}>
            <img src="/src/images/scene3/4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.25}>
            <img src="/src/images/scene3/5.png" alt="" />
          </ParallaxLayer>
        </div>
        <img
          src="/src/images/hr2.1.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "15rem 0rem 5rem 0rem",
          }}
        />
        <p
          style={{
            fontFamily: "GoudyBookletter1911",
            fontSize: "2.5em",
            paddingBottom: "4rem",
          }}
        >
          When Maryam’s brother discovered her gone, he roused the whole village
          and veryone joined in on the search. They combed through the mountains
          and the rivers until the lovers were eventually located. A hot pursuit
          ensued bringing the lovers to the edge of a steep and rocky cliff.
          Maryam’s brother threatened to kill the two if Maryam did not return
          to her family. The lovers, however, knew that they would never be able
          to see each other again if Maryam did what she was told. Hands
          together, they gazed at each other one last time, turned their backs
          on Maryam’s brother and jumped off the cliff.
        </p>
        <img
          src="/src/images/hr2.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "5rem 0rem 15rem 0rem",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "60rem",
            height: "40rem",
            margin: "auto",
            padding: "1rem",
            overflow: "hidden",
            border: "1px #ffffff double",
          }}
        >
          <ParallaxLayer offset={0.2} speed={0.05}>
            <img src="/src/images/scene4/1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={0.1}>
            <img src="/src/images/scene4/2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={0.15}>
            <img src="/src/images/scene4/3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <img src="/src/images/scene4/4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.25}>
            <img src="/src/images/scene4/5.png" alt="" />
          </ParallaxLayer>
        </div>
        <img
          src="/src/images/hr2.1.png"
          style={{
            filter: "brightness(0) invert(1)",
            height: "2.5rem",
            padding: "15rem 0rem 5rem 0rem",
          }}
        />
        <p
          style={{
            fontFamily: "GoudyBookletter1911",
            fontSize: "2.5em",
            paddingBottom: "4rem",
          }}
        >
          The cliff where the lovers perished came to be known as Pulong Bato
          after the hero of the tragic tale and after the huge, white, solid
          rock that is a distinguishing feature of the cliff that bore witness
          to a love stronger and bolder than death. It is believed that the
          cries of Pulong and Maryam can be heard by the cliff until today.
        </p>
      </Parallax>
    </div>
  );
};

export default Pulongbato;
