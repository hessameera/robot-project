import React from "react";
import {  render,fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RobotSimulator from "../simulatePage";

describe("RobotSimulator Component", () => {

 
  it("renders with initial position and moves correctly", () => {
    const { getByText ,getByTestId} = render(<RobotSimulator />);
   
    // Move the robot and check if the position updates
    fireEvent.click(getByTestId("btnUp"));
    expect(getByText("Current Position: (0, 150)")).toBeInTheDocument();

    fireEvent.click(getByTestId("btnDown"));
    expect(getByText("Current Position: (0, 200)")).toBeInTheDocument();

    fireEvent.click(getByTestId("btnLeft"));
    expect(getByText("Current Position: (0, 200)")).toBeInTheDocument();

    fireEvent.click(getByTestId("btnRight"));
    expect(getByText("Current Position: (50, 200)")).toBeInTheDocument();
  });
});
