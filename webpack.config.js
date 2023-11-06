const HtmlWebPackPlugin=require("html-webpack-plugin");
const path=require("path")
module.exports={
    context:__dirname,
    entry:"./src/js/app.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js",
        publicPath:"/"
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
    },
    resolve:{extensions:[".js",".jsx",".ts",".tsx"]},
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
          
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:path.resolve(__dirname,"src/index.html"),
            filename:"index.html",
            hash:true

        })
    ]
}