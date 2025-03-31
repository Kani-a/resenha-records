import { useState } from "react";

function Albumn(){
    const [disc, setDisc] = useState(0)
      
        
    let track =[
        {
            name: "Noiz",
            sound: "@/assets/music/EmicidaNoiz.mp4",
            img: "@/assets/images/emicidaoglorioso.jpg",
            singer: "Emicida",
        },
        {
            name: "Musica1",
            sound: "@/assets/music/EmicidaTriunfo.mp4",
            img: "@/assets/images/sla.jpg",
            singer: "Emicida",
        },
        {
            name: "Not Like Us",
            sound: "@/assets/music/notlikeus.mp3",
            img: "@/assets/images/notlikeus.jpg",
            singer: "Kendrick Lamar",
        },
        {
            name: "Flowers",
            sound: "@/assets/music/flowers.mp3",
            img: "@/assets/images/miley.jpg",
            singer: "Miley Cyrus",
        },
        {
            name: "Kill Bill",
            sound: "@/assets/music/killbill.mp3",
            img: "@/assets/images/sza.jpg",
            singer: "SZA",
        },
        {
            name: "As It Was",
            sound: "@/assets/music/asitwas.mp3",
            img: "@/assets/images/harry.jpg",
            singer: "Harry Styles",
        },
        {
            name: "Titãs",
            sound: "@/assets/music/titas.mp3",
            img: "@/assets/images/titas.jpg",
            singer: "O Terno",
        },
        {
            name: "Vampiro",
            sound: "@/assets/music/vampiro.mp3",
            img: "@/assets/images/matue.jpg",
            singer: "Matuê",
        },
        {
            name: "47",
            sound: "@/assets/music/vampiro.mp3",
            img: "@/assets/images/matue.jpg",
            singer: "Xamã",
        }
    
    ]
    let indice = disc;
    const max = track.length;
    const min = max-max;
    
    const  next =() =>{
            setDisc(indice+=1)
    }
 
    
    
    const prev = () =>{
        if(indice != min){
            setDisc(indice-=1);
        }
    }

    const  Thumb = ()=>{
        if(indice >= max){
            indice=0;
        }
        return(
        <>
            <h1>{indice+" : "+track[indice].name +"-"+ track[indice].singer}</h1>
            <img src={track[indice].img} alt="musicCover"/>
        </>
        )
    }
    
    // TO-DO: fazer funçao q rendenriza as informaoes do albumn

    return(
        <>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            
        
            <Thumb/>
        </>
    )
}

export default Albumn;