
//目的　グローバルメニューをクリックした時に、それに対応するidのコンテンツを表示させる。クリック下要素以外は非表示にする



//各li要素のコンテンツを取得

let contentsbox = [];
const contentbox = document.getElementById("contentbox");
//console.log(contentbox);
contentbox.querySelectorAll(".contents").forEach(content =>{
    //console.log(content);
    contentsbox.push(content);
});
//console.log(contentsbox[0].id);


// for(let i = 0; i < contentsbox.lenght; i++){

// }


//グローバルメニューの各要素を取得
const mainBranch = document.getElementById("main-branch");
//console.log(mainBranch);
//取得
let libox = [];
mainBranch.querySelectorAll('li').forEach(li =>{
    //console.log(li.id); // liのidを取得

// if(li.id == 1){
//     console.log("test1");
//     return;
// }else if(li.id == 2){
//     console.log("test2");
//     return;
// }else if(li.id == 3){
//     console.log("test3");
//     return;
// }else {
//     console.log("test");
// }

libox.push(li);
});

//console.log(libox);

const liboxId = document.getElementById(libox[0].id);

const contentsboxId = document.getElementById(contentsbox[0].id);    
console.log(contentsboxId);

liboxId.addEventListener("click", function(){
    contentsboxId.classList.toggle("contents");
});



