document.querySelector("button").addEventListener("click",function()
{
    document.querySelector(".img1").setAttribute("src","load.gif");
var ran=Math.floor((Math.random()*2)+1);
console.log(ran);
if(ran==1)
{
    setTimeout(() => {
        document.querySelector(".img1").setAttribute("src","jpg1.jpg"); 
    }, 1000);
    

}
else{
    setTimeout(() => {
        document.querySelector(".img1").setAttribute("src","jpg4.jpg"); 
    }, 1000);
}
});