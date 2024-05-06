
function Header(){

    const name = 'Rahul';
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <div style={{margin:'20px  20px'}}>
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_maY5gfTwV_K6BRKc_GVF_H374JikwcSTYwNiUrINUEMQ=s176-c-k-c0x00ffffff-no-rj" alt="Hanuman" style={{borderRadius:"50%"}} />
               
            </div>
            <div>
                 <h1>Jai Hanuman </h1>
                 <span>@jaihanuman |</span>
                 <span>105K subscribers |</span>
                 <span>123 videos | </span>
                 <span>{name}</span>
                 <p>Hanuman is a deep spiritual symbol for all those who seek to reach liberation from sufferin....</p>
                 <h1>
                    <button style={{backgroundColor:"black" ,color:"white",padding:"10px 30px",borderRadius:"20px"}}>Subscribe</button>
                 </h1>
            </div>
         
                
           
        </div>
    );
}

export default Header;