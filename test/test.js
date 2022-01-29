const assert = require('assert');
const _ = require('lodash');
const crop = require('../src/crop');

describe(`(empty string):`, () => {
    const empty_string = "";

    it('should return (empty string)', () => {
        assert.strictEqual(empty_string, "");
    });
});

const image_url = "https://example.com/sample.png";

const config01 = `${image_url} w1111 h2222 x3333 y4444`;
describe(config01, () => {
    const config = config01;
    const expected = `<div style="width:1111px;height:2222px;background:url(${image_url}) no-repeat scroll 3333px 4444px transparent;"><span style="width:100%;height:100%;"></span></div>`

    it(`should return ${expected}`, () => {
        assert.equal(crop(config.split(" ")), expected);
    });
})

const config02 = `${image_url} w0 h0 x0 y0`;
describe(config02, () => {
    const config = config02;
    const expected = `<div style="width:0;height:0;background:url(${image_url}) no-repeat scroll 0 0 transparent;"><span style="width:100%;height:100%;"></span></div>`
    it(`should return ${expected}`, () => {
        assert.equal(crop(config.split(" ")), expected);
    });
});

const config03 = `${image_url} w1111 h2222 x-3333 y-4444`;
describe(config03, () => {
    const config = config03;
    const expected = `<div style="width:1111px;height:2222px;background:url(${image_url}) no-repeat scroll -3333px -4444px transparent;"><span style="width:100%;height:100%;"></span></div>`
    it(`should return ${expected}`, () => {
        assert.equal(crop(config.split(" ")), expected);
    });
});
