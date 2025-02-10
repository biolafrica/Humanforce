export default {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)" // Ensure Jest doesn't ignore Axios
  ],
  testEnvironment: "jsdom"
};
