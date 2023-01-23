const fetchData=async()=>{
    try{
        const res=await axios("https://jsonplaceholder.typicode.com/posts");
        return res.data;
    }catch(err){
        throw Error("data is not loaded.");
    }
}

const postElements=document.querySelector(".posts");
const loadAll=async()=>{
    const posts=await fetchData();
    posts.map((post)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
           <h4>${post.title}</h4>
           <p>${post.body}</p>
        `;
        postElements.appendChild(postElement);
    });
};
loadAll();