// Type definitions for D3JS d3-sankey module v0.4.1
// Project: https://github.com/d3/d3-sankey/
// Definitions by: Ændrew Rininsland <https://github.com/aendrew>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Sankey {
  /**
   * If _width_ is specified, sets the node width to the specified function or number and returns
   * this sankey generator. If width is not specified, returns the current node width accessor,
   * which defaults to:
   * ```
   * function nodeWidth() {
   *   return 24;
   * }
   * ```
   *
   * @param  {number} width Nodal width
   * @return {Sankey}       Sankey layout generator
   */
  nodeWidth(): number;
  nodeWidth(width: number): this;

  /**
   * If _padding_ is specified, sets the node padding to the specified function or number and
   * returns this sankey generator. If _padding_ is not specified, returns the current node padding
   * accessor, which defaults to:
   * ```
   * function nodePadding() {
   *   return 8;
   * }
   * ```
   * Here padding refers to the vertical space between nodes that occupy the same horizontal space.
   *
   * @param  {number} padding Nodal padding
   * @return {Sankey}         Sankey layout generator
   */
  nodePadding(): number;
  nodePadding(padding: number): this;


  /**
   * If _nodes_ is specified, sets the list of nodes to the specified function or array and returns
   * this sankey generator. If _nodes_ is not specified, returns the current accessor to the list
   * of nodes, which defaults to:
   * ```
   * function nodes() {
   *   return [];
   * }
   * ```
   *
   * @return {nodeAccessor} [description]
   */
  nodes(): () => Array<any>;
  nodes(nodeAccessor): this;

  /**
   * If _links_ is specified, sets the list of links to the specified function or array and returns
   * this sankey generator. If _links_ is not specified, returns the current accessor to the list
   * of links, which defaults to:
   * ```
   * function links() {
   *   return [];
   * }
   * ```
   *
   * @param  {Function<Array>} linkAccessor Link accessor function
   * @return {Sankey}              Sankey layout generator
   */
  links(): () => Array<any>;
  links(linkAccessor): this;

  /**
   * Create path generator from link datum
   * @param  {[type]} d [description]
   * @return {[type]}   [description]
   */
  link(): (d: SankeyNode) => string;

  /**
   * Returns the current accessor to the SVG layout object. Here _iterations_ is the number of
   * times the converging function *computeNodeDepths* is run.
   *
   * @param  {number} iterations Number of times converging function is run.
   * @return {Sankey}            Sankey layout generator
   */
  layout(iterations?: number): this;

  /**
   * Similar to *layout* but only recalculates the depth of links.
   * Primarily used when a node is moved vertically.
   *
   * @return {Sankey} Sankey layout generator
   */
  relayout(): this;

  /**
   * Set the size of the Sankey chart, or returns the current size if no arguments.
   * @param  {Array<number>} [size] Width and height of layout
   * @return {Sankey|Array<number}    Return the sankey diagram if `size` arg specified; size if not.
   */
  size(size: Array<number>): this;
  size(): Array<number>;
}

export function sankey(): Sankey;

export interface SankeyNode extends SankeyNodeLink {
  name?: string;
  value?: number;
}

export interface SankeyLink extends SankeyNodeLink {
  source?: SankeyNode;
  target?: SankeyNode;
  value?: number;
}

export interface SankeyNodeLink {
  x?: number;
  y?: number;
  dx?: number;
  dy?: number;
  sx?: number;
  sy?: number;
  tx?: number;
  ty?: number;
}

export interface SankeyData {
  nodes: Array<SankeyNode>;
  links: Array<SankeyLink>;
}
