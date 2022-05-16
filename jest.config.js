module.exports = {
  setupFiles: ["dotenv/config"],
  setuptFilesAfterEnv: ["./src/tests/support/jest.teardown.js"],
};
