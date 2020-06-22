// import { shallow } from "enzyme";
// import React from "react";
// import renderer from "react-test-renderer";
//
// import Sunshine from "../components/App.js";
//
// describe("With Enzyme", () => {
//   it('Function shows "Hello, Sunshine!"', () => {
//     const app = shallow(<Sunshine />);
//
//     expect(app.find("div").text()).toEqual("Hello, Sunshine!");
//   });
// });
//
// describe("With Snapshot Testing", () => {
//   it('Sunshine shows "Hello, Sunshine!"', () => {
//     const component = renderer.create(<Sunshine />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
