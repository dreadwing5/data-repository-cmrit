const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index: [
      "./public/js/utils/AutoFill.js",
      "./public/js/utils/QuillConfig.js",
      "./public/js/utils/ValidateForm.js",
      "./public/js/utils/UpdateForm.js",
      "./public/js/utils/ModalWindow.js",
      "./public/js/utils/Utils.js",
      "./public/js/utils/Textbox.js",
      "./public/js/utils/Date.js",
      "./public/js/utils/Sidebar.js",
    ],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/public/dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
