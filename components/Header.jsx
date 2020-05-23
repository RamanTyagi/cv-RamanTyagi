import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
function Header() {
  const [hover, isHover] = useState("true");
  function scrolldiv() {
    return window.scrollBy(0, 800);
  }
  return (
    <div className="firstpg ">
      <h1>Hello,I'm</h1>
      <h1 className="name"> Raman Tyagi,</h1>
      <h2>I'm a Full-Stack Web Developer.</h2>
      <Button
        onClick={scrolldiv}
        onMouseEnter={() => isHover(true)}
        onMouseLeave={() => isHover(false)}
        variant="contained"
        color="secondary"
      >
        <h3>View my Work</h3>
        {hover ? (
          <div>
            <ArrowDownwardIcon fontSize="large" />
          </div>
        ) : (
          <div>
            <ArrowForwardIcon fontSize="large" />
          </div>
        )}
      </Button>
    </div>
  );
}
export default Header;
