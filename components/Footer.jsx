import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
function Footer() {
  return (
    <div className="footer" cla>
      <footer>
        <Fab
          color="primary"
          aria-label="add"
          href="https://www.facebook.com/krishna.tyagi.7549"
        >
          <FacebookIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
          href="https://www.instagram.com/raman_tyagi490/"
        >
          <InstagramIcon />
        </Fab>
        <p>RAMAN TYAGI Ⓒ2020</p>
      </footer>
    </div>
  );
}
export default Footer;
