import React from "react";
import { shallow, render } from "enzyme";
import Node from "./Node";

describe("testing rendering of Node component ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Node
        item={{
          name: "John",
          id: 100,
          managerId: 230,
          subordinates: [
            { name: "John", id: 100, managerId: 230, subordinates: [{}] },
            { name: "John", id: 100, managerId: 230, subordinates: [{}] }
          ]
        }}
      />
    );
  });

  it("should render the name John", () => {
    expect(wrapper.childAt(0).text()).toBe("Name: John");
  });

  it("should render the name John with the title of CEO", () => {
    /*
      Overwriting the original wrapper as to test managerId when null
    */
    const wrapper = shallow(
      <Node
        item={{ name: "John", id: 100, managerId: null, subordinates: [] }}
      />
    );
    expect(wrapper.childAt(0).text()).toBe("Name: John CEO");
  });

  it("it should render two child nodes", () => {
    /*
      We remove one from the length to account for the paragraph tag that
      contains the employee name
    */
    expect(wrapper.children().length - 1).toEqual(2);
  });
});
