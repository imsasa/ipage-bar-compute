var assert = require("assert");
var Pages  = require("../src/pages");

/**
 * test
 */

console.log();

describe("T01", function () {
    let pageObj = new Pages(100, 10);
    it("01", function () {
        assert.equal(10,  pageObj.getPageViewable(4).length);
    });
    it("02", function () {
        assert.equal(10,  pageObj.getPageViewable(40).length);
    });
    it("03", function () {
        assert.equal(4,  pageObj.getPageViewable(4)[3]);
    });
    it("04", function () {
        assert.equal(100,  pageObj.getPageViewable(4)[9]);
    });
    it("05", function () {
        assert.equal(1,  pageObj.getPageViewable(45)[0]);
    });
    it("06", function () {
        assert.equal("…",  pageObj.getPageViewable(45)[1]);
    });
});
