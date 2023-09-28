import React from "react";
import Pagetitle from "../../components/pagetitle";
import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import BaseApp from "../../ccomp/base"

function Admin() {
  return (
    <BaseApp>
      <div>
        <Container className="jusify-content-centre mt-2">
          <div className=""><h1>Welcome</h1></div>
          <div className="d-flex w-100 jusify-content-centre">
          <Image
            className="img-fluid shadow-4 jusify-content-centre mt-6 p-2"
            src="https://t4.ftcdn.net/jpg/02/89/52/37/360_F_289523749_Asn8QNQFMvWXvYdOzobJpHAobslhUqhU.jpg"
            roundedCircle
            responsive
          /></div>
        </Container>
      </div>{" "}
    </BaseApp>
  );
}

export default Admin;
