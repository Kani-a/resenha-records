import track from "@/albumn.js"

export default function SoundThumbnail(){
    const trackName = track[0].name;
    const trackSound = track[0].sound;
    const trackImg = track[0].img;

    return(
    <>
        <img src={trackImg}/>
        <h1>
            {trackName}
        </h1>
        <button onClick={() => console.log(trackImg)
        }>🐸boneca ambalabu🐸</button>
    </>
    );
}