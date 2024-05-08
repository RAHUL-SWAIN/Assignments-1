import React from 'react'

const array = [
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/71FsaMZaLTL._AC_UL900_SR900,600_.jpg",
        heading : "Batman: The Killing Joke",
        headingLink:"https://www.amazon.in/Batman-Killing-Universe-Original-Blu-ray/dp/B0D357WKSX/ref=zg_bsnr_g_dvd_d_sccl_1/260-3600262-8299769?psc=1",
        para : "Kevin Conroy",
        starvalue :"Blu-ray",
        price : "₹ 3,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/71JNdvfxj5L._AC_UL900_SR900,600_.jpg",
        heading : "Aliens",
        headingLink:"https://www.amazon.in/Aliens-Sigourney-Weaver/dp/B0CSZC9GLJ/ref=zg_bsnr_g_dvd_d_sccl_3/260-3600262-8299769?psc=1",
        para : "Sigourney Weaver",
        starvalue :"Blu-ray",
        price : "₹ 4,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/81LhbpOMMuL._AC_UL900_SR900,600_.jpg",
        heading : "The Departed",
        headingLink:"https://www.amazon.in/Departed-Leonardo-DiCaprio/dp/B0CV95N52L/ref=zg_bsnr_g_dvd_d_sccl_2/260-3600262-8299769?psc=1",
        para : "Kevin Conroy",
        starvalue :"Blu-ray",
        price : "₹ 6,000.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/81a9VTN7vcL._AC_UL900_SR900,600_.jpg",
        heading : "The Wages of Fear",
        headingLink:"https://www.amazon.in/Wages-Fear-Yves-Montand/dp/B0CM9HVCVK/ref=zg_bsnr_g_dvd_d_sccl_4/260-3600262-8299769?psc=1",
        para : "Yves Montand",
        starvalue :"Blu-ray",
        price : "₹ 3,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/81XqgbPdy9L._AC_UL900_SR900,600_.jpg",
        heading : "Gladiator - A Ridley Scott Film (4K UHD) (1-Disc) - Restored & Remastered on 4K Ultra HD",
        headingLink:"https://www.amazon.in/Gladiator-Ridley-1-Disc-Restored-Remastered/dp/B0D1N8C18X/ref=zg_bsnr_g_dvd_d_sccl_5/260-3600262-8299769?psc=1",
        para : "Russell Crowe",
        starvalue :"Blu-ray",
        price : "₹ 8,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/61RkW6yaxuL._AC_UL900_SR900,600_.jpg",
        heading :"Michael Caine's: Alfie (1966) (Uncut | Slipcase Packaging | Region 2 DVD | UK Import)",
        headingLink:"https://www.amazon.in/Michael-Caines-Slipcase-Packaging-Region/dp/B0CVDZZZSM/ref=zg_bsnr_g_dvd_d_sccl_6/260-3600262-8299769?psc=1",
        para : "Michael Caine",
        starvalue :"Blu-ray",
        price : "₹ 4,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/71e169AbmLL._AC_UL320_SR320,320_.jpg",
        heading : "Applo 13- A Ron Howard Film",
        headingLink:"https://www.amazon.in/Apollo-13-Tom-Hanks/dp/B07YP8CMQD/ref=pd_rhf_ee_s_pd_crcd_d_sccl_1_1/260-3600262-8299769?pd_rd_w=NbdPi&content-id=amzn1.sym.785b16db-ca40-46a3-ae75-2b38bb48d1aa&pf_rd_p=785b16db-ca40-46a3-ae75-2b38bb48d1aa&pf_rd_r=1X6YNREMW67H64DMYVRS&pd_rd_wg=H4kfO&pd_rd_r=d561ae52-7ba9-4429-8067-e387c4eb3304&pd_rd_i=B07YP8CMQD&psc=1",
        para : "Tom Hanks",
        starvalue :"Blu-ray",
        price : "₹ 1,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/71UXQnQPYkL._AC_UL320_SR320,320_.jpg",
        heading : "James Cameron's: Avatar (Blu-ray 3D & 2D in 1 Disc)",
        headingLink:"https://www.amazon.in/Avatar-Blu-ray-3D-Sam-Worthington/dp/B01N9514ND/ref=pd_rhf_ee_s_pd_sbs_rvi_d_sccl_2_2/260-3600262-8299769?pd_rd_w=63XnC&content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_r=1X6YNREMW67H64DMYVRS&pd_rd_wg=H4kfO&pd_rd_r=d561ae52-7ba9-4429-8067-e387c4eb3304&pd_rd_i=B01N9514ND&psc=1",
        para : "Sam Worthington (Actor), & 2 More ",
        starvalue :"Blu-ray",
        price : "₹ 2,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/91R9N-YuPcL._AC_UL320_SR320,320_.jpg",
        heading : "Alien: 6-Film Collection",
        headingLink:"https://www.amazon.in/Alien-6-Film-Collection/dp/B073FT8X16/ref=pd_rhf_ee_s_pd_sbs_rvi_d_sccl_2_1/260-3600262-8299769?pd_rd_w=63XnC&content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_r=1X6YNREMW67H64DMYVRS&pd_rd_wg=H4kfO&pd_rd_r=d561ae52-7ba9-4429-8067-e387c4eb3304&pd_rd_i=B073FT8X16&psc=1",
        para : "Alien",
        starvalue :"Blu-ray",
        price : "₹ 3,999.00"
    },
    {
        cardImg : "https://images-eu.ssl-images-amazon.com/images/I/910CZyflfVL._AC_UL320_SR320,320_.jpg",
        heading : "Alien Series: Complete 6-Film Collection: Alien + Aliens + Alien 3 + Alien Resurrection + Prometheus (6-Disc)",
        headingLink : "https://www.amazon.in/Alien-Steelbook-Resurrection-Prometheus-Covenant/dp/B074PD4WMY/ref=pd_rhf_ee_s_pd_sbs_rvi_d_sccl_2_3/260-3600262-8299769?pd_rd_w=63XnC&content-id=amzn1.sym.ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_p=ed04a9b6-f1e8-467f-8e81-e050db1b5151&pf_rd_r=1X6YNREMW67H64DMYVRS&pd_rd_wg=H4kfO&pd_rd_r=d561ae52-7ba9-4429-8067-e387c4eb3304&pd_rd_i=B074PD4WMY&psc=1",
        para : "Various (Actor, Director)  Rated: A (Adults Only) ",
        starvalue :"Blu-ray",
        price : "₹ 8,999.00"
    },
];

function AmazonFilmCard() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
        {
            array.map((e) => {
                return (
                    <div style={{border:"2px solid #000",borderRadius:"4%", width:"300px", marginBottom:"20px"}}>
                        <img height={"250px"} src={e.cardImg} alt='' />
                        <h3><a style={{textDecoration:"none"}} href={e.headingLink}>{e.heading}</a></h3>
                        <h6>{e.para}</h6>
                        <h6>{e.starvalue}</h6>
                        <h2>{e.price}</h2>
                    </div>
                );
            })
        }
    </div>
  )
}

export default AmazonFilmCard;