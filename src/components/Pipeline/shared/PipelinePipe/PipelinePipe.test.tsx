// @vitest-environment jsdom

import { expect, test } from "vitest";

import { composeStories } from "@storybook/react-vite";

import * as stories from "./PipelinePipe.stories";

const { Primary } = composeStories(stories);
test("Snapshot test", async () => {
  await Primary.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
