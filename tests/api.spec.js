const request = require('supertest');
const { createApp } = require("../src/index");

describe("get /", () => {
  it("when requested", async () => {
    const app = await createApp();
    const response = await request(app).get("/");
    if (response.status !== 200) {
      throw new Error(response.text);
    }
  });
});
