var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Riya";
    var text = "Hi";
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  });
});

describe("generateLocationMessage", () => {
  it("should send correct location object", () => {
    var from = "Riya";
    var latitude = 12;
    var longitude = 77;
    var url = "https://www.google.com/maps?q=12,77";
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe("number");
    expect(message).toMatchObject({ from, url });
  });
});
