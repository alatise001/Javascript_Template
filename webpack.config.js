import { resolve } from "path"

export const mode = "development"
export const entry = "./src/index.js"
export const output = {
  path: resolve(__dirname, "dist/assets"),
  filename: "bundle.js" //"[name].js"
}
export const watch = true
export const module = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        },
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }
  ],
}
