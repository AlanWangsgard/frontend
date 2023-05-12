export default function Image(){

    function listen(){

        document.getElementById(".button").addEventListener("click", function(event){
            event.preventDefault()
          });
        }
        
    function upload(){
        console.log("hello")
        let forml = document.querySelector(".form")
        console.log(new FormData(document.querySelector(".form")))
        fetch("http://localhost:3000/posts/image", {
            method: "POST",
            body: new FormData(forml)
        })
    }

    return (
    <>
        
            <form className="form" encType="multipart/form-data" onLoad={listen}>
                <input type="file" name="image" className="file"/>
                <input className="button" onClick={upload} type="button"/>
            </form>
    </>
    )
}