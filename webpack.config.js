var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:"./src/app.js",
	output:{
		path:"F:\\php\\web\\demo-six\\dist",
		filename:"js/[name].bundle.js" //js --> dist/js
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html", //生成文件的位置和文件名称 根据output的path指定路径
			template:"index.html",// 入口的模板文件，默认路径根目录
			inject:"body" // 最后生成script代码 注入 index.html入口文件的位置 body
		})
	]
}