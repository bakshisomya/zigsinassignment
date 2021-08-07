import React from "react";
import { Button } from "../Button/Button.style";
import "./Twotiles.css";
function Twotiles() {
  return (
    <div className="twotiles">
      <div className="toptile">
        <div className="overlaycard">
          <h1>The gift of happiness</h1>
          <p>
            Show your gratitude with one of our gift sets, large and small,
            specially designed to spread joy to someone you love.
          </p>
          <Button
            border="none"
            bg1="rgb(255,118,137)"
            bg2="linear-gradient(90deg, rgba(255,118,137,1) 23%, rgba(255,141,81,1) 78%)"
            color="white"
          >
            Shop now
          </Button>
        </div>
      </div>
      <div className="bottomtile">
        <div className="card">
          <div className="cardtop">
            <h2>Ready for autumn collection</h2>
            <p>
              Treat yourself to some of our brand new autumn collection - all
              with the wonderful colours surrounding you.
            </p>
            <Button
              border="1px solid rgb(48,48,48)"
              bg1="transparent"
              bg2="transparent"
              color="rgb(48,48,48)"
            >
              Purchase now
            </Button>
          </div>
          <div className="cardbottom"></div>
        </div>
        <div className="card">
          <div className="cardtop">
            <h2>Ready for autumn collection</h2>
            <p>
              Treat yourself to some of our brand new autumn collection - all
              with the wonderful colours surrounding you.
            </p>
            <Button
              border="1px solid rgb(48,48,48)"
              bg1="transparent"
              bg2="transparent"
              color="rgb(48,48,48)"
            >
              Purchase now
            </Button>
          </div>
          <div className="cardbottom2"></div>
        </div>
      </div>
    </div>
  );
}

export default Twotiles;
