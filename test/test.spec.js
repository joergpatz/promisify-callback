import 'babel-polyfill';
import assert from 'assert';
import fs from 'fs';
import promisify from './..';

describe('Basic', () => {
    describe('#fs.stat', () => {
        it('should access file', () => {
            return promisify(fs.stat, './test/test.json').then(stat => {
                assert.equal(stat.isFile(), true);
                return stat;
            }).then(stat => {
                assert.equal(stat.isDirectory(), false);
            });
        });
    });
});
