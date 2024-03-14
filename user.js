  let obj = {
    img : "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
    names: "umavathi",
    age: 21,
    degree: "ece",
    skills: ["html", "css", "js", "java"],
  };
  let img=document.getElementById("imgid").src=obj.img;
  let namee = document.getElementById("empname").textContent=`Name : ${obj.names}`;
  let age = document.getElementById("age").textContent=`Age : ${obj.age}`;
  let deg = document.getElementById("degree").textContent=`Degree : ${obj.degree}`;
  for(let i of  obj.skills){
    let list=document.getElementById("lid");
    let li=document.createElement("li");
    li.innerHTML=i;
    list.appendChild(li)
  }
