import React from 'react'

function HolidayCard({imgLink , alt , heading , para , paraLink}) {
  return (
    <div>
        <div style={{border:"2px solid pink",width:"350px"}}>
            <img src={imgLink} alt={alt} />
            <h2>{heading}</h2>
            <p>{para}</p>
            <a href={paraLink}>Read More</a>
        </div>
    </div>
  )
}

export default HolidayCard;