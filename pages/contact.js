import React , {useState} from 'react';


const contact = () => {

  
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');
    const [desc ,setDesc] = useState('' );
  const handleSubmit = (e)=>{
    e.preventDefault();


    const data = {name , email , phone ,desc};

    fetch('http://localhost:3000/api/postcontact' ,{

      method: 'POST',
      headers: {
        'Content-Type' : 'application/json', 
      },
      body : JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);

        alert("thanks for submitting form");

        setPhone('');
        setName('');
        setDesc('');
        setEmail('');

      })
      .catch((error)=> {
        console.error('Error:' , error);
      } ) ;
    
    
  }
  

  const handleChange = (e)=>{

    if(e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setDesc(e.target.innertext)
    }
    else if(e.target.name == 'name'){
      setName(e.target.value)
    }
    

  }



  return (
    <div className='mx-10' >
        <h1>Contact Us</h1>
        <hr />
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name" >Enter your name    </label>
                <input type="text" value = {name}  onChange={handleChange} className="form-control bg-red-200 my-4 w-96" id="name" name='name' aria-describedby="emailHelp" />
            </div>
             <div >
                 <label htmlFor="email" >Email address   </label>
                <input type="email" value = {email}   onChange={handleChange}  className="form-control  bg-red-200 my-4 w-96 " name='email' id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
            </div>
            
            <div >
                <label htmlFor="phone " >  Phone </label> 
                <input type="phone" value = {phone}  onChange={handleChange}   className="form-control bg-red-200 my-4 " name='phone' id="phone" />
            </div>
            <div >
                <label htmlFor="desc">Elaborate your concern    </label>
                <textarea   value = {desc}  onChange = {handleChange}  className="form-control my-4" placeholder="Write your concern here" name='desc' id="desc"   />
            </div> 
            <button type="submit" className="bg-red-400 btn btn-primary my-4">Submit</button>
        </form> 
    </div>


  )
}

export default contact
