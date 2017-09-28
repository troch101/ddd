/*
 * 
 1.需要安装 gulp  工具
  
  npm install -g gulp 
  
  2.新建一个项目。cd到这个项目里面，用npm  init --yes 生成一个package.json
  
  
    
  3.新建gulpfile.js  
  
  
  4.安装gulp （包）
  
  	
	npm install gulp --save   /  cnpm install gulp --save  


	5.引入gulp
	
	var gulp = require('gulp');
	
	
	6.配置一个默认任务，验证gupl 是否配置成功
	
	
	
*/


var gulp = require('gulp');


gulp.task('default', function() {
  // 将你的默认的任务代码放在这  
  console.log('gulp 配置成功了');
  
});


