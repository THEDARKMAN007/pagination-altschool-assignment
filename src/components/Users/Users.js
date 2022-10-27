import "./Users.css";
import { useState, useEffect } from "react";
import api from "../../API/posts.js";
import { Link } from "react-router-dom";

const Users = () => {
  
  
const [button, setButton] = useState([1, 2, 3, 4, 5]);
const [loading, setLoading] = useState(false);
const [arr, setArr] = useState([]);
const [state1, setState1] = useState(null);
const [state2, setState2] = useState(null);
const [state3, setState3] = useState(null);
const [state4, setState4] = useState(null);
const [state5, setState5] = useState(null);
const [disable1, setDisable1] = useState(false)
const [disable2, setDisable2] = useState(false);

  //fetching API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        if (arr.length !== 50) {
          setArr([...arr, response.data.results]);
          }
          if (arr.length === 50) {
            setState1(arr[0]);
            setState2(arr[1]);
            setState3(arr[2]);
            setState4(arr[3]);
            setState5(arr[4]);
            setLoading(true);
        }
        console.log(arr)
      } catch (err) {
        //not in the 200 response range
        if (err.response) {
          console.log(err.response.status);
          console.log(err.response.data);
          console.log(err.response.headers);
        } else {
          console.log(`error: ${err.message}`);
        }
      }
    };
      fetchData();
  }, [arr]);
    
//disabled state
    useEffect(() => {
        if (button[0] === 1) {
          setDisable1(true);
        }
        if (button[button.length - 1] === 5) {
          setDisable2(false);
        }
    },[button])

  //users-info list
  const users =
    state1 &&
    state1.map((each) => {
      return (
        <div key={each.id} className="user">
          <div className="title">
            <p>
              {each.name.title} {each.name.first} {each.name.last}
            </p>
          </div>
          <div>
            <div className="body">
              <div className="img">
                <img src={`${each.picture.large}`} alt={each.name.first} />
              </div>
              <div className="info">
                <p>gender: {each.gender}</p>
                <p>age: {each.dob.age}</p>
                <p>email: {each.email}</p>
                <p>country: {each.location.country}</p>
                <p>phone no: {each.cell}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
   const users2 =
     state2 &&
     state2.map((each) => {
       return (
         <div key={each.id} className="user">
           <div className="title">
             <p>
               {each.name.title} {each.name.first} {each.name.last}
             </p>
           </div>
           <div>
             <div className="body">
               <div className="img">
                 <img src={`${each.picture.large}`} alt={each.name.first} />
               </div>
               <div className="info">
                 <p>gender: {each.gender}</p>
                 <p>age: {each.dob.age}</p>
                 <p>email: {each.email}</p>
                 <p>country: {each.location.country}</p>
                 <p>phone no: {each.cell}</p>
               </div>
             </div>
           </div>
         </div>
       );
     });
     const users3 =
       state3 &&
       state3.map((each) => {
         return (
           <div key={each.id} className="user">
             <div className="title">
               <p>
                 {each.name.title} {each.name.first} {each.name.last}
               </p>
             </div>
             <div>
               <div className="body">
                 <div className="img">
                   <img src={`${each.picture.large}`} alt={each.name.first} />
                 </div>
                 <div className="info">
                   <p>gender: {each.gender}</p>
                   <p>age: {each.dob.age}</p>
                   <p>email: {each.email}</p>
                   <p>country: {each.location.country}</p>
                   <p>phone no: {each.cell}</p>
                 </div>
               </div>
             </div>
           </div>
         );
       });
  const users4 =
         state4 &&
         state4.map((each) => {
           return (
             <div key={each.id} className="user">
               <div className="title">
                 <p>
                   {each.name.title} {each.name.first} {each.name.last}
                 </p>
               </div>
               <div>
                 <div className="body">
                   <div className="img">
                     <img src={`${each.picture.large}`} alt={each.name.first} />
                   </div>
                   <div className="info">
                     <p>gender: {each.gender}</p>
                     <p>age: {each.dob.age}</p>
                     <p>email: {each.email}</p>
                     <p>country: {each.location.country}</p>
                     <p>phone no: {each.cell}</p>
                   </div>
                 </div>
               </div>
             </div>
           );
         });
  const users5 =
           state5 &&
           state5.map((each) => {
             return (
               <div key={each.id} className="user">
                 <div className="title">
                   <p>
                     {each.name.title} {each.name.first} {each.name.last}
                   </p>
                 </div>
                 <div>
                   <div className="body">
                     <div className="img">
                       <img
                         src={`${each.picture.large}`}
                         alt={each.name.first}
                       />
                     </div>
                     <div className="info">
                       <p>gender: {each.gender}</p>
                       <p>age: {each.dob.age}</p>
                       <p>email: {each.email}</p>
                       <p>country: {each.location.country}</p>
                       <p>phone no: {each.cell}</p>
                     </div>
                   </div>
                 </div>
               </div>
             );
           });

  //on-click event handlers
  const click = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "1") {
      setState1(arr[0]);
      setState2(arr[1]);
      setState3(arr[2]);
      setState4(arr[3]);
      setState5(arr[4]);
    } else if (e.target.innerHTML === "2") {
      setState1(arr[5]);
      setState2(arr[6]);
      setState3(arr[7]);
      setState4(arr[8]);
      setState5(arr[9]);
    } else if (e.target.innerHTML === "3") {
      setState1(arr[10]);
      setState2(arr[11]);
      setState3(arr[12]);
      setState4(arr[13]);
      setState5(arr[14]);
    } else if (e.target.innerHTML === "4") {
      setState1(arr[15]);
      setState2(arr[16]);
      setState3(arr[17]);
      setState4(arr[18]);
      setState5(arr[19]);
    } else if (e.target.innerHTML === "5") {
      setState1(arr[20]);
      setState2(arr[21]);
      setState3(arr[22]);
      setState4(arr[23]);
      setState5(arr[24]);
    } else if (e.target.innerHTML === "6") {
      setState1(arr[25]);
      setState2(arr[26]);
      setState3(arr[27]);
      setState4(arr[28]);
      setState5(arr[29]);
    } else if (e.target.innerHTML === "7") {
      setState1(arr[30]);
      setState2(arr[31]);
      setState3(arr[32]);
      setState4(arr[33]);
      setState5(arr[34]);
    } else if (e.target.innerHTML === "8") {
      setState1(arr[35]);
      setState2(arr[36]);
      setState3(arr[37]);
      setState4(arr[38]);
      setState5(arr[39]);
    } else if (e.target.innerHTML === "9") {
      setState1(arr[40]);
      setState2(arr[41]);
      setState3(arr[42]);
      setState4(arr[43]);
      setState5(arr[44]);
    } else if (e.target.innerHTML === "10") {
      setState1(arr[45]);
      setState2(arr[46]);
      setState3(arr[47]);
      setState4(arr[48]);
      setState5(arr[49]);
    }
  };
    const prev = (e) => {
        e.preventDefault();
        if (button[button.length - 1] !== 9) {
          setDisable2(false);
        }
        if (button[0] === 1) {
          setDisable1(false);
        }

    if (button[0] !== 1) {
      setButton((state) => {
        return state.map((each) => {
          return each - 1;
        });
      });
      }
  };
    const next = (e) => {
        e.preventDefault()
       if (button[button.length - 1] === 9) {
         setDisable2(true);
       }
       if (button[0] !== 0) {
         setDisable1(false);
       }
    if (button[button.length - 1] !== 10) {
      setButton((state) => {
        return state.map((each) => {
          return each + 1;
        });
      });
      }
  };
    
  //pagination btn list
  const buttons = button.map((each) => {
    return (
      <button key={each} onClick={click}>
        {each}
      </button>
    );
  });
    
    
  return (
    <div className="Home">
      <Link to="/welcome" className="click-here">
        go back
      </Link>
      
      {
        //user_info display sect.
        loading ? (
        <div className="users_container">
          <div className="main">{users}</div>
          <div className="main">{users2}</div>
          <div className="main">{users3}</div>
          <div className="main">{users4}</div>
          <div className="main">{users5}</div>
        </div>
      ) : (
        <div className="users_container">Loading....{arr.length} of 50</div>
      )}

      <div className="pagination-buttons">
        <button onClick={prev} disabled={disable1 ? true : false}>
          prev
        </button>
        {buttons}
        <button onClick={next} disabled={disable2 ? true : false}>
          next
        </button>
      </div>
    </div>
  );
};

export default Users;
