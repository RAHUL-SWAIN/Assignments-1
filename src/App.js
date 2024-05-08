import logo from './logo.svg';
import './App.css';
import CopyApp from './CopyApp';
import  YoutubeCard  from './Components/Youtube/YoutubeCard';
import Header from './Components/Youtube/Header';
import News from './Components/cricbuzz/news'
import Properties from './Components/props/Properties';
import Example from './Components/IRCTC/Example';
import HolidayCard from './Components/IRCTC/HolidayCard';
import AmazonFilmCard from './Components/AmazonCard/AmazonFilmCard';

function App() {
  return (
    <div>
      {/* <Header />
      <div style={{display:"flex", flexWrap:'wrap'}}>
        <YoutubeCard imgLink='https://i.ytimg.com/vi/CW6jDJdmloo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuA32vulBzdBjjQmxWhKxs-5_4ow'
                    heading ='Hanuman Chalisha'
                      views = '8.4k views'
                       days = '10 days before'        
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/lR5OARai9Zk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplY7e2bNI87XlLgPCxvGe8pxG2w' 
                     heading ='Bajrang Bali Song'
                     views = '7.4k views .'
                    days = '18 days before'
        />
       
        <YoutubeCard imgLink='https://i.ytimg.com/vi/eJOEGy3mRNA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEZPhwo4t2pXZyNbEbRGFnorvabQ'
                    heading ='Maruti (Bajrangbali)'
                      views = '9.4k views .'
                       days = '1 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/YTptpjXs9PU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWX8BPQkSvKP1rnqaFIj0CbsoSFw'
                     heading ='BajrangBali Chalisha '
                     views = '10k views .'
                      days = '2 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/2LszahPxU8k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtbGkmXlfVtugUCuA5AbHe_U2cfQ'
                       heading ='Sri Ram Nabami Special'
                       views = '11.4k views  .'
                        days = '6 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/A9ylUHD_Fh0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqzHIHXT7CEzXECMiBbAMwCYbJgQ' 
                      heading ='Sankat Mochana Hanuman'
                      views = '8.9k views .'
                       days = '15 days before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/VKusGEauZ4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPgn8-XYiWFr5x5z9SMrzZGqKxEA'
                      heading ='Hanuman Chalisha Audio Version'
                      views = '7.4k views'
                       days = '2 months before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/-T63Pondfv4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfGGIa-A_K9eZdRyIS06XeKDfM8A'
                      heading ='Hanuman Chalisha'
                      views = '8.4k views'
                      days = '10 days before'
        />        
      </div> */}





      {/* <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c457704/ct-2025-pcb-earmarks-lahore-a.jpg"
            heading="CT 2025: PCB earmarks Lahore as sole venue for India games"
            para="The eight-team 50-over competition is expected to kick off in mid-February next year, with Karachi and Rawalpindi being the other designated venues"
            urlLink="https://www.cricbuzz.com/cricket-news/130301/typical-t20-wickets-icc-comes-clean-on-drop-in-turf"
            urlText='Typical T20 wickets - ICC comes clean on drop-in turf'
        />    


      <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c456794/breakdown-to-open-with-kohli.jpg"
            heading="Breakdown: To open with Kohli or not and the Dube flexibility"
            para="The takeaways from the 15-member India squad announced for the 2024 T20 World Cup"
            urlLink="https://www.cricbuzz.com/cricket-news/130290/indian-team-to-leave-for-us-on-may-21"
            urlText='Indian team to leave for US on May 21'
      />
       <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c457545/lsg-maximise-a-rare-bowling-da.jpg"
            heading="LSG maximise a rare bowling day"
            para="IPL 2024 has been about pushing the envelope with the bat but LSG defied the trend with smart bowling in favourable conditions, making it more than just another day for batter"
            urlLink='https://www.cricbuzz.com/cricket-news/130296/all-round-stoinis-stars-in-lsgs-fighting-win'
            urlText="All-round Stoinis stars in LSG's fighting win"
      />
      <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c453678/kohli-reacts-to-censure-over-h.jpg"
            heading="Kohli reacts to censure over his spin strike-rate"
            para="The star RCB batter scored 61 of his 70 runs against Titans' spin trio at a strike-rate of 179.41"
            urlLink="https://www.cricbuzz.com/cricket-news/130271/will-jacks-six-a-thon-wrecks-titans"
            urlText='Will Jacks six-a-thon wrecks Titans'
      />
      <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c456220/dc-submit-to-kkrs-dominant-al.jpg"
            heading="DC submit to KKR's dominant all-round display"
            urlLink='https://www.cricbuzz.com/cricket-news/130285/varun-glad-to-finally-thrive-in-different-times-in-ipl'
            urlText="Varun glad to finally thrive in 'different' times in IPL"
            
          
      /> */}





      
      {/* <Properties name='Rahul'
                    x = 'Frontend Developer'
                    y = 'Odisha'
        /> */}



      {/* <div style={{display:"flex", gap:"20px"}}>
          <Example Course="Raact JS" Student="Rahul" />  
          <Example Course="Javascript" Student="Rahul Swain" />  
          <Example Course="Angular" Student="Swain" />  
      </div> */}



     {/* <div style={{display:"flex" , flexWrap:"wrap" , gap:"20px"}}>
      
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/exterior.jpg'
                         alt='Maharajas Express'
                     heading="Mharajas Express"
                         para="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World "
                     paraLink="https://www.the-maharajas.com/"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Thailand.jpg'
                         alt='International Packages'
                     heading="International Packages"
                         para="Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience."
                     paraLink="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Kashmir.jpg'
                         alt='Domestic Packages'
                     heading="Domestic Packages"
                         para="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"
                     paraLink="https://www.irctctourism.com/"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg'
                         alt='Bharat Gaurav Tourist Train'
                     heading="Bharat Gaurav Tourist Train"
                         para="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days."
                     paraLink="https://www.irctctourism.com/bharatgaurav"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Manali.jpg'
                         alt='Rail Tour Packages'
                     heading="Rail Tour Packages"
                         para="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available."
                     paraLink="https://www.irctctourism.com/#/tourpkgs"
      /> 
     </div> */}


     <div>
      <h2 style={{textAlign:"center",color:"deeppink"}}><u>FILM CARD IN AMAZON</u></h2>
       <AmazonFilmCard />
      
     </div>
    
    </div>
  );
}

export default App;
