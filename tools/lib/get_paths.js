import isArray from 'lodash/isArray';
import flattenDeep from 'lodash/flattenDeep';

/**
 * Wrap values into an array.
 * @param  {String} value
 * @return {Array}
 */
const wrapInArray = (value) =>
  // make sure there are no [undefined] arrays.
  (value ? [value] : []);

/**
 * Get the full path based on a relative/absolute path.
 * @param  {String} prefix Prefix to append to relative path
 * @param  {String} path   Absolute or relative path
 * @return {String}        Absolute path
 */
const getFullPath = (prefix, path) => {
  if (!path) return '';
  if (path.substring(0, 1) === '/') return path;

  return prefix + path;
};

/**
 * Add missing trailing slashes.
 * @param  {String} path Path with or without trailing slash
 * @return {String}      Path with trailing slash
 */
const addTrailingSlash = (path) =>
  (path.slice(-1) === '/' ? path : `${path}/`);

/**
 * Extract paths from a Route component and it's children.
 * @param  {Object} props  Properties of Route component
 * @param  {String} prefix Path of parent Route
 * @return {Array}            Nested array with paths
 */
const getNestedPaths = ({ props }, prefix = '') => {
  const { children, path } = props;
  const fullPath = getFullPath(prefix, path);
  const fullPathArr = wrapInArray(fullPath);

  if (!children) return fullPathArr;

  const nextPrefix = path
    ? addTrailingSlash(fullPath)
    : prefix;

  const childrenPaths = isArray(children)
    ? children.map(child => getNestedPaths(child, nextPrefix))
    : getNestedPaths(children, nextPrefix);

  return childrenPaths.concat(fullPathArr);
};

/**
 * Get a list of all possible paths.
 * @param  {Object} routes React Router routes configuration
 * @return {Array}         List of routes
 */
const getPaths = (routes) => {
  const nestedPaths = getNestedPaths(routes);
  return flattenDeep(nestedPaths);
};

export default getPaths;
