import React from 'react'

 function YoutubeCard(props){
  const  {imgLink , heading , views , days  } = props;
  return (
    <div style={{margin:"6px"}}>
        <img src={props.imgLink} alt='Hanuman image' style={{borderRadius:"15px"}} />
        <h4 style={{textAlign:"center"}}>{props.heading}</h4>
        <div style={{textAlign:"center" , marginBottom:"4px"}}>
            <span>{props.views}</span><span>{props.days}</span>
        </div>
    </div>

 
  )
}
export default YoutubeCard;
