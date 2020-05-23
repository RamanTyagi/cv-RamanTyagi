import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
function Contact() {
  return (
    <div>
      <h1 className="about">
        {" "}
        CONTACT ME <ContactMailIcon fontSize="large" />
      </h1>
      <hr />
      <div className="contacts">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div>
                <form
                  action="mailto:ramantyagi9873@gmail.com"
                  method="post"
                  enctype="text/plain"
                >
                  <fieldset>
                    <div class="form-group">
                      <span class="col-md-1 offset-md-2 text-xs-center">
                        <i class="fa fa-user bigicon" />
                      </span>
                      <div class="col-md-8">
                        <input
                          id="fname"
                          name="First name"
                          type="text"
                          placeholder="First Name"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <span class="col-md-1 offset-md-2 text-xs-center">
                        <i class="fa fa-user bigicon" />
                      </span>
                      <div class="col-md-8">
                        <input
                          id="lname"
                          name="Last name"
                          type="text"
                          placeholder="Last Name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <span class="col-md-1 offset-md-2 text-xs-center">
                        <i class="fa fa-envelope-o bigicon" />
                      </span>
                      <div class="col-md-8">
                        <input
                          id="email"
                          name="Email"
                          type="text"
                          placeholder="Email Address"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <span class="col-md-1 offset-md-2 text-xs-center">
                        <i class="fa fa-pencil-square-o bigicon" />
                      </span>
                      <div class="col-md-8">
                        <textarea
                          class="form-control"
                          id="message"
                          name="Message"
                          placeholder="Enter your message for us here. We will get back to you within 2 business days."
                          rows="7"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-md-12 text-xs-center">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          endIcon={<SendIcon>send</SendIcon>}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
