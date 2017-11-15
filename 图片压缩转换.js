(function getFiles() {

    var files = document.querySelector("#files");
    files.addEventListener('change',function (e) {
        var reader = new FileReader(),
            img = new Image(),
            //选择的文件对象
            file = e.target.files[0];

        reader.onload = function (e) {
            img.src = e.target.result;
        }
        //选择的文件是图片
        if(file.type.indexOf("image") == 0){
            reader.readAsDataURL(file);
        }
        console.log(reader);
    },false)
    
})();

function filesReader() {
    var reader = new FileReader(), 
        img = new Image();

        reader.onload = function (e) {
            img.src = e.target.result;
        }
}

function urltoImage(url,width,height) {//图片url,画布宽度，画布高度
    var img = new Image();
    img.src = url;
    img.onload = function () {
        //图片加载后的操作
        //判断图片的宽高比
        var oHeight = this.height;
        var oWidth = this.width;
        var o = oHeight / oWidth;

        //画布的宽高
        var mid = height / width;

        if(o>mid){//图片高度超
            this.width = width*rem;
            this.height = height*rem*o;
        }else{
            this.width = width * rem/o;
            this.height = height * rem;
        }

        imgtoCanvas(img,this.width,this.height);
    }
}

function imgtoCanvas(img,x,y) {//图片DOM，canvas的宽，canvas的高
    
    var cvs = document.getElementById("canvas");
    var cxt = cvs.getContext("2d");

    cvs.height = y;
    cvs.width = x;

    ctx.clearRect(0, 0, x, y);
    ctx.drawImage(img, 0, 0, x, y);
}