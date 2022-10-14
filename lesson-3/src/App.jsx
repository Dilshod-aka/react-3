import React, {useState, useRef, useContext} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Input from "./components/UI/input";
import TableRow from "./components/UI/TableRow";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comp1 from "./components/Extra/Comp1";
import context from "./context";

const App = () =>{
  const [userName,setUserName]=useState("");
  const [age, setAge]=useState("");
  const [message,setMessage]=useState("React js deveolper");
  const [info,setInfo]=useState({
    item1:"itemm1",
    item2:"item2",
    item3:"item3"
  })

  const st=useRef();
  const btn=useRef();

  
  

  const [data, setData]=useState([]);

  const check={
    user: userName.trim().length===0,
    age: age.trim().length===0,
  }
 
  function addUser(){

    
    const newUser={
      id: uuidv4(),
      isname:userName,
      age:age,
    };

    if(check.user || check.age){
      toast.error('Please fill input')
    } else{
      setData([...data, newUser]);
      toast.info("Successfully Adder User");
    }
    setUserName("");
    setAge("");
  }

  

  function deleteUser(id){

    const  newarray= data.filter((item)=>{
      return item.id!==id
    })
    setData(newarray);

    console.log(data);   
  }

  
  return (
    <>
    <context.Provider value={{message,info}}>

    <Navbar/>

<main>
   <section>
   <div className="row">
   <div className="col-12">
     <div className="card w-75 mx-auto bg-info shadow p-5" ref={st}>
          <Input 
          val={userName} 
          setVal={setUserName} 
          type={"text"} 
          pl={"Enter username"}
          />

          <Input 
          val={age} 
          setVal={setAge} 
          type={"text"} 
          pl={"Enter username"}
          />
          
          <button className="btn btn-primary w-75 mx-auto" onClick={()=>addUser()}> 
             ADD INFO
          </button>

     </div>
   </div>
 </div>
 <div className="col-12 my-5 bg-light w-75 mx-auto p-5">
   <h3 className="text-center text-danger">
     USER lIST
   </h3>
   <table className="table table-striped table-hover">
     
       <thead>
         <tr>
           <th>ID</th> <th>Name</th> <th>Age</th> 
           <th>Delete</th>
         </tr>
       </thead>

         <tbody>
            {data.map((item,index)=>{
               return (
                 <TableRow num={index+1} data=
                 {item} key={item.id}
                 del={deleteUser}/>
               );
              })}
       </tbody>
   </table>
 </div>
  
   </section>
</main>
<Footer/>
    </context.Provider>

       <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />
    </>
  );
};

export default App;