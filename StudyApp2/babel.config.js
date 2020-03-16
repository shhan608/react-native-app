module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    ]
  ]
};
