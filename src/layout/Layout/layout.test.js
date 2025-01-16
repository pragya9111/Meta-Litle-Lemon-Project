import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./layout";

jest.mock("../Header/header", () => () => <div>Mock Header</div>);
jest.mock("../Footer/footer", () => () => <div>Mock Footer</div>);

describe("Layout component", () => {
  test("renders the main content area", () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );

    // Check if the main content area is rendered
    const mainContent = screen.getByTestId("main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent.textContent).toBe("Test content");
  });
});
