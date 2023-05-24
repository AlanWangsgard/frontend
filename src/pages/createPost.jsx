export default function CreatePost(){
    

    function createPost(a){
        // const $file = document.querySelector(".file")

    // console.log($file)
        console.log(a)
        console.log(document.querySelector('.description').value)
        fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
            text: document.querySelector('.description').value,
            image: a
        }),
        headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
    })
    }
      
    // $file.addEventListener("change", (event) => {
        function convert(){
            const $file = document.querySelector(".file")
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
          
        }
      };

    return(
        <>
        <form className="form" encType="multipart/form-data">
        <textarea className="description"></textarea>
        <input type="file" name="image" className="file"/>
        <input className="button" onClick={convert} type="button"/>
        </form>
        </>
    )
}