import './App.css';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let result = await fetch('https://carbookingalb-538637861.ap-south-1.elb.amazonaws.com/api/attractions');
      let jsonResult = await result.json();
      // console.log(jsonResult[0].imagesUrl);
      setRecords(jsonResult);
    }

    fetchData()
  }, []);



  return (
    <div className="App">
          <p className = "heading">TOURIST ATTRACTIONS</p>

          {
              records&&records.map( record => {
                return(
                  <div className="box">
                    <div className = "name">{record.name}</div>
                    <br/>
                      <div className="summary">{record.summary}<br/></div>
                      <br/>
                      <div className="detailed">{record.detailed}<br/></div>
                      <br/><br/>
                    <Carousel>
                    { record.imagesUrl&&record.imagesUrl.map(images => {
                      return(
                        <div>
                        <img className='images' src = {images}></img>
                          </div>
                        
                      )
                     }
                    )
                    }
                    </Carousel>
                    
                     
                      <br/><br/>
                    
                    
                    </div>
                )
              })
          }
    </div>
  );
}
export default App