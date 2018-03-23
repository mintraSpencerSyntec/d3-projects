/**
 * Typescript definition tests for d3/d3-sankey module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import { sankey, SankeyLink, SankeyNode } from 'd3-sankey';

interface SankeyGraph {
  nodes: Array<SankeyNode>;
  links: Array<SankeyLink>;
}

const graph: SankeyGraph = {
  nodes: [
    { name: 'llama' },
    { name: 'duck' },
    { name: 'chicken' },
    { name: 'cow' },
  ],

  links: [
    { source: 0, target: 1, value: 5 },
    { source: 0, target: 2, value: 10 },
    { source: 3, target: 2, value: 20 },
  ],
};
