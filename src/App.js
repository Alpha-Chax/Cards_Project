import React from "react";
import Card from "./Components/Cards";
import Mdata from"./Mdata"
import "./App.css"


function ncard(val) {
  return(
    <Card
      imgurl={val.imgurl}
      title={val.title}
      body={val.body}
      />
  )
}


function App() {
  
  return (
    <div className="App">
      <h1 id="Main-heading">Must Watch Movies Of All Time</h1>
    {Mdata.map(ncard)};
    </div>
  )
}

export default App