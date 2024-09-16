let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("Add Tadk",(e)=>{
    e.preventDefault()
    console.log("button clicked")
    formValidation()
})
let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank "
        console.log("failure")
    }else{
        console.log("success")
        msg.innerHTML = ""
        acceptData()
    }
};
let data = {}
let acceptData = () => {
    data["text"]=input.value
    console.log(data)
    createPost()
}
let createPost =() =>{
 posts.innerHTML='<span class ="task">${task} </span><button class="editpost" onclick="editPost(this)">Edit</button> <button class="deletepost onclick="deletePost(this)">Delete</button>'
input.value=""
}
let deletePost =(e)=>{
    e.parentElement.parentElement.remove()
}
let editPost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElementremove
}