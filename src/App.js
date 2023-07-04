import React, { useState } from "react";
import axios from "axios"; 

const App = () => {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState([]);

 async function handleSearch() {
    try{
     const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "8fb387c2",
            s : name
          }
      })
      setMovie(response.data.Search)
    }catch(error){
      console.log(error)
    }

  }


  return(
    <div>
        <input type="text" placeholder="Enter your name"
           onChange={(e) => setName(e.target.value)}
        /> 
        <button onClick={handleSearch}>Submit</button>

        <ul>
            {
              movie.length > 0 && 
              (movie.map((item) => (
                 <div>
                    <li>{item.Title}</li>
                    <img src={item.Poster} alt={item.Title} />
                 </div>
              )))
            }
        </ul>

    </div>
  )
}

export default App;