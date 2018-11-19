// @flow
import fetch from 'make-fetch-happen';
import { tmpdir } from 'os';
import { resolve as resolvePath } from 'path';
import { name as pkgName } from '../../package.json';

const cachedFetch = fetch.defaults({
  cacheManager: resolvePath(tmpdir(), pkgName),
});

export default cachedFetch;
