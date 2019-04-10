var expect = require("chai").expect;
getDB = require("./utils/DB").getDB;

describe("#DB", function() {
  // async/await can be used.
  it("works with async/await", async () => {
    const data = await getDB();
    expect(data[0].p1.name).to.be.a("Mike");
  });
});
