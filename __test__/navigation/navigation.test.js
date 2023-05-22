import React from "react";
import ScreenA from "../../src/screens/ScreenA/ScreenA";
import { render, fireEvent } from "@testing-library/react-native";

describe("<Screen A Navigation />", () => {
  const navigation = {
    navigate: jest.fn(),
  };
  it("navigate to screen B", () => {
    const { getByTestId } = render(<ScreenA navigation={navigation} />);
    const button = getByTestId("myButton");
    fireEvent.press(button);
    expect(navigation.navigate).toHaveBeenCalledWith("ScreenB");
  });
});
