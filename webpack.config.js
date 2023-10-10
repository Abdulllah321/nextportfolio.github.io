const path = require("path");

module.exports = {
  entry: "./src/_app.js", // Update with your entry file path
  output: {
    path: path.resolve(__dirname, "dist"), // Update with your output directory path
    filename: "project.js", // Update with your output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", 
      },
      {
        test: /\.webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192, // You can adjust the limit value as needed
            name: "[name].[ext]",
            outputPath: "video/", // Specify the output directory for the videos
            publicPath: "public/video", // Specify the public URL path for the videos
          },
        },
      },
      // Add any additional rules for other file types (e.g., CSS, images, etc.)
    ],
  },
  // Add any additional configuration options as needed
};
