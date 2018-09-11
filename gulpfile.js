let gulp=require("gulp");
let minify=require("gulp-babel-minify");
let cleanCss=require("gulp-clean-css");
let connect=require("")
gulp.task("minify",()=>{
    gulp.src("./build/*.js")
    .pipe(minify({
        mangle:{
            keepClassName:true
        }
    }))
    .pipe(gulp.dest("./dist"));
})
gulp.task("cleanCss",()=>{

})
gulp.task("server",()=>{
    connect.server({
        root:"dist",
        port:8080,
        livereload:true
    })
})




let $ =require("jquery");
module.exports={
    print:function(){
        $.each();
    }
}

import $ from "jquery";
export default{
    print:function(){
        $.each();
    }
}

define(["jquery"],function($){
    return{
        print:function(){
            $.each();
        }
    }
}