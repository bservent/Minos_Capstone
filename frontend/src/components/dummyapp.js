import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'

const App = ()=>{
    const [data, setData] = useState([])
    const [loaded, setLoaded]= useState(false)
    const [placeholder, setPlaceholder] = useState("Loading")

    useEffect(() => {
        fetch("api/lead")
        .then(response => {
          if (response.status > 400) {
            return this.setState(() => {
              return { placeholder: "Something went wrong!" };
            });
          }
          return response.json();
        })
        .then(data => {
          this.setState(() => {
            return {
              data,
              loaded: true
            };
          });
        });
      });
      return (
        <ul>
          {data.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} - {contact.email}
              </li>
            );
          })}
        </ul>
      );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);