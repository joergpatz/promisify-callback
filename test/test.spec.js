import 'babel-polyfill';
import assert from 'assert';
import fs from 'fs';
import promisify from './..';

const test_compare = {
    "name": "Homer Simpson",
    "information": {
        "voiced": "Dan Castellaneta",
        "occupation": "Safety Inspector at Springfield Nuclear Power Plant"
    }
};

describe('Basic Examples', () => {
    describe('#fs.stat', () => {
        it('should access file', () => {
            return promisify(fs.stat, './test/test.json')
                .then(stat => {
                    assert.equal(stat.isFile(), true);
                    return stat;
                });
        });
    });
    describe('#fs.readFile', () => {
        it('should readfile and extract name', () => {
            return promisify(fs.readFile, './test/test.json', 'utf8')
                .then(JSON.parse)
                .then(file => {
                    assert.deepEqual(file, test_compare);
                    return file.name;
                }).then(name => {
                    assert.equal(name, "Homer Simpson");
                    return name;
                });
        });
    });
});
