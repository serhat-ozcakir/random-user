import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card.css'
import email from './assets/email.svg'
import location from './assets/location.svg'
import phone from './assets/phone.svg'


function Card1() {
  const [cards, setCards] = useState([]);
  const [refresh, SetRefresh]= useState(true)

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setCards(response.data.results[0]));
    //   .then((response) => console.log(response));
  }, [refresh]);

// useEffect(() => {
//     async function myAPI() {
//       let response =  await axios.get('https://randomuser.me/api/')

//       response = await response.json()
//       SetCards(response)
//     }

//     myAPI()
//   }, [])


  const setRef = ()=>{
      SetRefresh(!refresh)
  }
  return (
   

    <div className="Card">
      <div className="complete">
      <div className="container">
        <div className="image">
          <div>
                 <img src={cards?.picture?.large}className="picture" alt="1"/>
          </div>
          <div className="picture-p">
           <p className="par1">
             {cards?.name?.title + " " + cards?.name?.first + " " + cards?.name?.last}</p>  
          </div>
        </div>

        <div className="email">
          <div>
          <img className="email-logo" src={email} alt="email" />
          </div>
          <div>
          <p className="par">{cards?.email}</p>  
          </div>
        </div>
        
        <div className="phone">
          <div>
          <img className="phone-logo" src={phone} alt="email" />
          </div>
          {/* <div> */}
          <p className="par2">{cards?.phone}</p>  
          {/* </div> */}
        </div>

        <div className="country">
          <div>
          <img className="country-logo" src={location} alt="location" />
          </div>
          <div>
          <p className="par3">{cards?.phone}</p>  
          </div>
        </div>

          <p className="age">Age:{cards?.registered?.age}</p>
          <p className="date">Register Date: {cards?.registered?.date.slice(0,10)}</p>

      </div>
      <button onClick={setRef} type="button" className="button">Random User</button>
      </div>
    </div>




  );
}

export default Card1;