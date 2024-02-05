import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import imgRobo from "../assets/images/icon-robot.jpg";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import LeftArrow from "@mui/icons-material/KeyboardArrowLeft";
// import RightArrow from "@mui/icons-material/KeyboardArrowRight";
// import DownArrow from "@mui/icons-material/KeyboardArrowDown";
// import UpArrow from "@mui/icons-material/KeyboardArrowUp";
const RobotSimulator = ({}) => {
  const MOVE_VALUE = 50;
  const [position, setPosition] = useState({ x: 0, y: 200 });

  //use for movement
  const springs = useSpring({
    from: { ...position },
    to: { x: position.x, y: position.y },
  });

  const moveRobot = (direction) => {
    switch (direction) {
      case "UP":
        if (position.y > 1)
          setPosition({ ...position, y: position.y - MOVE_VALUE });
        break;
      case "DOWN":
        if (position.y < 200)
          setPosition({ ...position, y: position.y + MOVE_VALUE });
        break;
      case "LEFT":
        if (position.x > 1)
          setPosition({ ...position, x: position.x - MOVE_VALUE });
        break;
      case "RIGHT":
        if (position.x < 200)
          setPosition({ ...position, x: position.x + MOVE_VALUE });
        break;
      default:
        break;
    }
  };

  return (
    <div className="mainContainer">
      <p data-testid="positionDisplay">Current Position: {`(${position.x}, ${position.y})`}</p>

      <div className="subContainer">
        <div className="aniDiv">
          <animated.img
            src={imgRobo}
            data-testid="animImg"
            style={{
              width: 40,
              height: 40,             
              zIndex: 9,
              margin: 5,
              borderRadius: 8,
              ...springs,
            }}
          />
        </div>
        <div
          className="adjustDiv"
          style={{
            display: "flex",
            flex: 6,
            backgroundColor: "red",
            width: 250,
          }}
        ></div>
        <div></div>
      </div>
      <table data-testid="grid" width={250} height={250} className="tbl">
        <tbody>
          {[1, 2, 3, 4, 5].map((val, index) => {
            return (
              <tr key={index} height={40}>
                <td
                  className="tborder"
                  width={50}
                  onClick={() => setPosition({ x: 0, y: index * 50 })}
                ></td>
                <td
                  className="tborder"
                  width={50}
                  onClick={() => setPosition({ x: 50, y: index * 50 })}
                ></td>
                <td
                  className="tborder"
                  width={50}
                  onClick={() => setPosition({ x: 100, y: index * 50 })}
                ></td>
                <td
                  className="tborder"
                  width={50}
                  onClick={() => setPosition({ x: 150, y: index * 50 })}
                ></td>
                <td
                  className="tborder"
                  width={50}
                  onClick={() => setPosition({ x: 200, y: index * 50 })}
                ></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mTop">
        <Button
          className="btnWidth"
          data-testid="btnUp"
          variant="outlined"
          onClick={() => moveRobot("UP")}
        >
          Up
        </Button>
      </div>
      <div className="mTop">
        <Button
          className="btnWidth"
          data-testid="btnLeft"
          variant="outlined"
          onClick={() => moveRobot("LEFT")}
        >
          Left
        </Button>
        <Button
          variant="outlined"
          data-testid="btnRight"
          className="btnWidth"
          style={{ marginLeft: 5 }}
          onClick={() => moveRobot("RIGHT")}
        >
          Right
        </Button>
      </div>
      <div className="mTop">
        <Button
          className="btnWidth"
          data-testid="btnDown"
          variant="outlined"
          onClick={() => moveRobot("DOWN")}
        >
          Down
        </Button>
      </div>
    </div>
  );
};

export default RobotSimulator;
