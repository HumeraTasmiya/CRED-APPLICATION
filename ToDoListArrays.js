let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")
let postArray =[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
});
let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank ";
    }else{
        msg.innerHTML = "";
        addPost();
    }
};
let addPost=()=>{
    postArray.push(input.value);
    renderPosts();
    input.value="";
};
let renderPosts=()=>{
    posts.innerHTML="";
    postArray.forEach((post, index)=>{
        const li =document.createElement('li');
        li.innerHTML +='<span calss="task">${task}<button class="editbtn" onclick="editbtn(${index})">Edit</button><button class"deletebtn" onclick="deletebtn(${index})">Delete</button></span>'
        posts.appendChild(li);
        input.value='';
    });

};
let deletebtn=(index)=>{
    postArray.splice(index,1);
    renderPosts();
};
let editbtn=(index)=>{
    input.value=postArray[index];
    deletebtn(index);
};
