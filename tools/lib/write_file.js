import path from 'path';
import mkdirp from 'mkdirp';
import { writeFileSync } from 'fs';

/**
 * Write a file.
 * @param  {String} dir      /Users/jack/Source/project/build
 * @param  {String} fileName /index.html
 * @param  {String} content  File content
 */
const writeFile = ({ dir, fileName, content }) => {
  const filePath = path.join(dir, fileName);

  // recursively create all required directories.
  mkdirp.sync(path.dirname(filePath));
  writeFileSync(filePath, content);
};

export default writeFile;
