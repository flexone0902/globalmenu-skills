



//各li要素のコンテンツを取得
let contentsbox = [];
const contentbox = document.getElementById("contentbox");
//console.log(contentbox);
contentbox.querySelectorAll(".contents").forEach(content =>{
    //console.log(content);
    contentsbox.push(content);
});



//グローバルメニューの各要素を取得
const mainBranch = document.getElementById("main-branch");
let libox = [];
mainBranch.querySelectorAll('li').forEach(li =>{
libox.push(li);
});


let setindex = null;

libox.forEach((li, index) => {

    li.addEventListener("click", function(){

        if(setindex == index){
            contentsbox[index].style.display = "none";
            setindex = null;

        }else{

            contentsbox.forEach((content, i) => {
                content.style.display = (i === index) ? 'block' : 'none';
                setindex = index;

              });

        }

    });

});



