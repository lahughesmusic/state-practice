import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import "./ToolForm.css";
import Checklist from "./Checklist";
// import { useState } from "react";

const ToolForm = () => {
  // const [color, changeColor] = useState("inherit");
  const changeColor = () => {
    const el = document.getElementsByName("element");
    console.log(el);
    for (let i = 0; i < el.length; i++) {
      let colorNumber = Math.round(Math.random() * 1);
      if (colorNumber) {
        el[i].style.border = "1px solid inherit";
        console.log("gray");
      } else {
        el[i].style.border = "1px solid red";
        console.log("red");
      }
    }
  };

  const onSubmit = (e) => {
    return changeColor();
  };

  // const el = document.getElementById("element");
  // for(let i = 0; i < el.length; i++){

  // }

  return (
    <div>
      <div
        style={{
          marginTop: "1%",
          width: "45%",
          marginLeft: "27.5%",
          marginRight: "27.5%",
          border: "1px solid lightGray",
          boxShadow: "0px 3px 10px 0px gray",
          padding: "1%",
          background: "lightgray"
        }}
      >
        <Checklist />
        {/* <h2 className="tool">TITLE</h2>
        <Form.Control type="text" placeholder="placeholder" />
        <br /> */}
        <h2 className="tool">ARTIST</h2>
        <Form.Control
          type="text"
          name="element"
          placeholder="artist"
          // onSubmit={{ border: `${color}` }}
        />
        <br />
        <h2 className="tool">PUBLISHER</h2>
        <Form.Control
          type="text"
          name="element"
          placeholder="publisher"
          // style={{ border: `${color}` }}
        />
        <br />
        <h2 className="tool">RELEASE DATE</h2>
        <Form.Control
          type="text"
          name="element"
          placeholder="release"
          // style={{ border: `${color}` }}
        />
        <br />
        <h2 className="tool">ISWC</h2>
        <Form.Control
          type="text"
          name="element"
          placeholder="iswc"
          // style={{ border: `${color}` }}
        />
        <br />
        <Button variant="secondary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ToolForm;
