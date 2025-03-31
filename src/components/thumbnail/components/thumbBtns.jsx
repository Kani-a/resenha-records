import { useState } from "react";
export default function ThumbnailButtons(){
// ao avançar ou retroceder um albumn corre uma o indice +1 || -1 de uma dicionario, o dicionario deve ter a imagen da thumb e a musica em si 
;
    const [play,setPlay] =  useState(false);
    
    //TO-DO: como fazer os botoes pasar entre as musicas
    // supostamente é os eu fazer o next aumentar o index da array "track", mas como eu vou passar esse valor entre os componentes
    return(
    <>

        <button>
            prev
        </button>



        <button >
            PlayPause
        </button>

        <button>
            next
        </button>
    </>)
}