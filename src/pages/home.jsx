import Nav from './nav'
let file = "C:/Users/alanw/OneDrive/Desktop/senior project/smsbackend/images"
export default function Home(){
    return (
    <>
    <Nav />
    <div className='posts'>
        <div>
            <p className='postName'>Steeve yeet</p>
            
            <img src={file}></img>
            <p className='postBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum pulvinar erat. Nulla dignissim imperdiet libero, sed porta nisl imperdiet eget. Phasellus sit amet molestie lorem, nec accumsan enim. Cras ac velit a nisi cursus vestibulum. Phasellus in velit ligula. Sed tincidunt ultricies sagittis. Nulla ullamcorper, nisi a lobortis fermentum, magna neque varius lorem, sit amet molestie diam tortor a odio. Morbi vel leo eget nunc cursus volutpat. Aliquam sed euismod dui, et accumsan erat. Etiam cursus eu nibh at congue. Duis dictum ligula sit amet maximus convallis.</p>
        </div>
    </div>
    </>
    )
}