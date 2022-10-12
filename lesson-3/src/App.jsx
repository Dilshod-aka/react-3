import React, {useState, useRef} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Input from "./components/UI/input";
import TableRow from "./components/UI/TableRow";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () =>{

  const [userName,setUserName]=useState("");
  const [age, setAge]=useState("");

  const st=useRef();
  console.log(st.current);
  

  const [data, setData]=useState([
    {id:1, isname: "Soliha", age:17},
    {id:2, isname: "Muslima", age:14},
    {id:3, isname: "Manzura", age:17},
  ]);

  const check={
    user: userName.trim().length===0,
    age: age.trim().length===0
  }
 
  function addUser(){

    const newUser={
      id: uuidv4(),
      isname:userName,
      age:age
    };

    if(check.user || check.age){
      toast.error('Please fill input')
    } else{
      setData([...data, newUser]);
      localStorage.setItem('data', JSON.stringify(data))
      toast.info("Successfully Adder User",
      {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
    }
    setData([...data,newUser]);

    setUserName("");
    setAge("");

  }


  return (
    <>
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
                </tr>
              </thead>
  
                <tbody>
                   { data.map((item,index)=>{
                      return (
                        <TableRow num={index+1} data={item} key={item.id}/>
                      );
                     })}
              </tbody>
        
          </table>
        </div>
          </section>
       </main>
       <Footer/>

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