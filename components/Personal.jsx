import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
function Personal() {
  function scrolldiv() {
    return window.scrollBy(0, 850);
  }
  return (
    <div>
      <img
        class="container-fluid img-circle"
        src="/dp.jpg"
        alt="developer's image"
      />
      <div className="intro">
        <h1 className="who">Who's this guy ?</h1>
        <p className="paraaboutme">
          I'm a Freelancer full stack Web developer,a foodie!{" "}
        </p>
        <Button onClick={scrolldiv} size="large" color="secondary">
          Let's make something special
        </Button>
      </div>
    </div>
  );
}
export default Personal;
