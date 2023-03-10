import './App.css';
import records from './records.json';
import SimpleImageSlider from "react-simple-image-slider";


function App() {
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

                     <SimpleImageSlider
                           width={1254}
                           height={600}
                           images={record.imagesUrl}
                           showBullets={true}
                           showNavs={true}
                           navMargin = {100}
                           />
                     
                      <br/><br/>
                    
                    
                    </div>
                )
              })
          }
    </div>
  );
}

export default App;
