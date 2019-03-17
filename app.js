window.onload=function(){
init();
};
const selectArticle=function(){
    let whichClass=this;
//    console.log(whichClass.classList)
    document.querySelector('.section__article-start').classList.remove('active2');
    document.querySelector('.section__article-prace').classList.remove('active2');
    document.querySelector('.section__article-kontakt').classList.remove('active2');
    if(whichClass.classList[0]==="menu__start"){
        document.querySelector('.section__article-start').classList.add('active2');
    }
    else if(whichClass.classList[0]==="menu__projekty"){
        document.querySelector('.section__article-prace').classList.add('active2');
    }
    else if(whichClass.classList[0]==="menu__kontakt"){
        document.querySelector('.section__article-kontakt').classList.add('active2');
    }
    document.querySelector('.menu__start').classList.remove('active');
    document.querySelector('.menu__projekty').classList.remove('active');
    document.querySelector('.menu__kontakt').classList.remove('active');
    whichClass.classList.add('active');
    
}
const init=function(){
    document.querySelector('.menu__start').addEventListener('click',selectArticle);
    document.querySelector('.menu__projekty').addEventListener('click',selectArticle);
    document.querySelector('.menu__kontakt').addEventListener('click',selectArticle);
}