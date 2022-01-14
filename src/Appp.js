import React from "react";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess   |23|  |Female| |7803170-736|   ",
    
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
    }
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu |29|  |Male| |90566-7771| ",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano   |42|  |Male| |010-692-6593| ",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
    }
  },
  {
    key: "Christian",
    text: "Christian |32|  |Female| |59590-4157| ",
    value: "Christian",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
    }
  },
  {
    key: "Matt",
    text: "Matt  |38|  |Male| |53919-4257|",
    value: "Matt",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
    }
  },
  {
    key: "Justen Kitsune  |26|  |Female| |493-170-9623|",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/justen.jpg"
    }
  }
];

const Appp = () => (
  <Dropdown
    placeholder="Select Friend"
    search
    fluid
    selection
    options={friendOptions}
  />
);

export default Appp;
