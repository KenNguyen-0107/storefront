import React from "react";
import { render } from "@testing-library/react";
import { DefaultErrorBoundary } from "../src/ErrorBoundary";

// Mock console.error to avoid polluting test output
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalConsoleError;
});

// Component that throws an error when rendered
const ErrorComponent = () => {
  throw new Error("Test error");
};

describe("DefaultErrorBoundary", () => {
  it("renders children normally when there is no error", () => {
    const { getByText } = render(
      <DefaultErrorBoundary>
        <div>Test Content</div>
      </DefaultErrorBoundary>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("renders fallback UI when a child component throws an error", () => {
    const { getByText } = render(
      <DefaultErrorBoundary>
        <ErrorComponent />
      </DefaultErrorBoundary>
    );

    expect(getByText("Something went wrong in this component.")).toBeInTheDocument();
  });
});
