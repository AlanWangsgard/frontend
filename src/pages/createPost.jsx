import Nav from "./nav"
export default function CreatePost(){
    

    function createPost(a){
        // const $file = document.querySelector(".file")

    // console.log($file)
        // console.log(a)
        // console.log(document.querySelector('.description').value)
        fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
            text: document.querySelector('.postDescription').value,
            user: sessionStorage.getItem('userName'),
            image: a
        }),
        headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
    })
    location.href="http://localhost:5173/"
    }
      
    // $file.addEventListener("change", (event) => {
        function convert(){
            const $file = document.querySelector(".postFile")
        const selectedfile = $file.files;
        if (selectedfile.length > 0) {
          const [imageFile] = selectedfile;
          const fileReader = new FileReader();
          fileReader.onload = () => {
            const srcData = fileReader.result;
            // console.log('base64:', srcData)
            createPost(srcData)
    
          };
    
          fileReader.readAsDataURL(imageFile);
          
        }else{
          createPost('n/a')
        }
      };

    return(
        <>
        <Nav />
        <form className="postForm" encType="multipart/form-data">
        <textarea className="postDescription" rows="5"></textarea>
        <input type="file" name="image" className="postFile"/>
        <input className="postButton" onClick={convert} type="button" value="Create Post"/>
        </form>
        </>
    )
}