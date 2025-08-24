// @vitest-environment jsdom
 
import { expect, test } from 'vitest';
 
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { composeStories } from '@storybook/react-vite';
 
import * as stories from './PipelineNode.stories';
 
const { Primary } = composeStories(stories);
test('Snapshot test', async () => {
  await Primary.run();
  expect(document.body.firstChild).toMatchSnapshot();
});