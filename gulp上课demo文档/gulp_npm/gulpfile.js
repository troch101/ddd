/*
 * 
 1.需要安装 gulp  工具
  
  npm install -g gulp       、    cnpm install -g gulp 
  
  2.新建一个项目。cd到这个项目里面，用npm  init --yes 生成一个package.json
  
  
    
  3.新建gulpfile.js  
  
  
  4.安装gulp （包）
  
  	
	npm install gulp --save   /  cnpm install gulp --save  


	5.引入gulp
	
	var gulp = require('gulp');
	
	
	6.配置一个默认任务，验证gulp 是否配置成功
	
	
	
	
	7.压缩js  压缩 css  压缩图片
	
	
	
	//var concat = require('gulp-concat');
	//var clean = require('gulp-clean-css');
	//var rename = require('gulp-rename');
	//
	////压缩js
	//var uglify = require('gulp-uglify');
	//
	////混淆js
	//var obfuscate = require('gulp-obfuscate');
	//
	////开启服务器环境
	//var connect = require('gulp-connect');
	//
	//
	////压缩图片
	//var imageMin = require('gulp-imagemin');
	//
	////postcss
	//var postCss = require('gulp-postcss');
	//var autopre = require('gulp-autoprefixer');
	
	// 注意，当你使用require来引入外部文件的时候，如果是引入的node_modules文件夹里面的文件，就不需要添加任何路径
	// 如果你引入的是自定义的文件，一定要加上路径，如果是当前目录的，一定要加上./ 
	

	
*/


var gulp = require('gulp');   /*需要有这个模块*/


gulp.task('default', function() {
  // 将你的默认的任务代码放在这  
  console.log('gulp 配置成功了');
  
});

 
//安装压缩js的模块  cnpm install gulp-uglify --save

var uglify = require('gulp-uglify');


gulp.task('uglifyJs', function() {
  // 将你的默认的任务代码放在这  
		gulp.src('js/*.js')   /*要压缩的目录*/
        .pipe(uglify())    /*  .pipe 管道   执行完成上面的任务继续执行这个任务*/
        .pipe(gulp.dest('dist/js'));    /*输出*/
  
});