let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let title=document.getElementById("titleid").innerHTML=recipeObj.title;
let img=document.getElementById("imgid").src=recipeObj.imgSrc;

for(i of recipeObj.ingredients){
    let list=document.getElementById("ulid");
    let li=document.createElement("li");
    li.innerHTML=i
    list.appendChild(li);
}
