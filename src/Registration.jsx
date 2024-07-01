import {useState} from 'react';
const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail]= useState('');
  const [contactNo, setContactNo]= useState('');
  const [gender, setGender]= useState('');
  const [subject, setSubject]= useState({
    html5: false,
    CSS3: false,
    JavaScript: false
  });
  const [image, setImage]= useState('');
  const [url, setURL]= useState('');
  const [experience, setExperience]= useState('');
  const [about, setAbout]= useState('');
  const [show, setShow]=useState(false);
  const reset=()=>{
    setShow(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setContactNo('');
    setGender('');
    setSubject({
    html5: false,
    CSS3: false,
    JavaScript: false
    });
    setImage('');
    setURL('');
    setExperience('');
    setAbout('');
  }
  const submit=(e)=>{
    e.preventDefault();
    setShow(true);
  }
 return (
   <div className="container p-3">
     <div className="card p-3">
       <h6 className="text-success fw-bolder mx-auto">Candidate Registration</h6>
       <form onSubmit={submit}>
       <div className ="mb-3">
         <label>First Name</label>
         <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} className="form-control" placeholder="Enter your first name"/>
       </div>
       <div className ="mb-3">
         <label>Last Name</label>
         <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} className="form-control" placeholder="Enter your last name"/>
       </div>
       <div className ="mb-3">
         <label>Email</label>
         <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter your email address" type="email"/>
       </div>
       <div className ="mb-3">
         <label>Contact No</label>
         <input value={contactNo} onChange={(e)=>{setContactNo(e.target.value)}} className="form-control" placeholder="Enter your contact no" type="number"/>
       </div>
       <div className ="mb-3">
         <label>Gender</label>
         <div>
           <div>
              <input onChange={(e)=>{setGender(e.target.value)}} name="gender" className="form-check-input me-2" type="radio" value="male"/>
               <label>Male</label>
           </div>
           <div>
               <input onChange={(e)=>{setGender(e.target.value)}} name="gender" className="form-check-input me-2" type="radio" value="female"/>
               <label>Female</label>
           </div>
           <div>
               <input onChange={(e)=>{setGender(e.target.value)}}name="gender" className="form-check-input me-2" type="radio" value="others"/>
               <label>others</label>
           </div>
         </div>
      </div>
       <div className="mb-3">
         <label>Subject</label>
         <div>
           <div>
             <input onChange={()=>{setSubject({...subject, html5:!subject.html5 })}} className="form-check-input me-2" type="checkbox" value="HTML5" name="subject"/>
             <label>HTML5</label>
           </div>
           <div>
              <input onChange={()=>{setSubject({...subject, css3:!subject.css3})}} className="form-check-input me-2" type="checkbox" value="CSS3" name="subject"/>
              <label>CSS3</label>
           </div>
           <div>
              <input onChange={()=>{setSubject({...subject, javaScript:!subject.javaScript})}} className="form-check-input me-2" type="checkbox" value="JavaScript" name="subject"/>
              <label>JavaScript</label>
           </div>
         </div>
       </div>
       <div className="mb-3">
         <label>Upload profile image</label>
         <input onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}} className="form-control" type="file"/>
       </div>
       <div className="mb-3">
         <label>URL</label>
         <input onChange={(e)=>{setURL(e.target.value)}} className="form-control" placeholder="enter URL"/>
       </div>
       <div className="mb-3">
         <label>Select Your Choice</label>
         <select defaultValue={experience} onChange={(e)=>{setExperience(e.target.value)}} className="form-control">
           <option value="fresher">
             Fresher
           </option>
           <option value="intermediate">
             Intermediate 
           </option>
           <option value="expert">
             Expert 
           </option>
         </select>
       </div>
       <div className="mb-3">
         <label>About</label>
         <textarea value={about} onChange={(e)=>{setAbout(e.target.value)}} className="form-control" placeholder="about yourself"></textarea>
       </div>
       <div className="mb-3 text-center">
         <button className="btn btn-success mx-2" type="submit">Submit</button>
         <button className="btn btn-danger mx-2" onClick={reset} type="reset">Reset</button>
       </div>
       </form>
       {show ? (       <div>
         <h6 className="text-primary fw-bolder mx-auto text-center">Candidate Information</h6>
         <div className='text-center'>
           <img src={image} style={{width: '100px', height: '100px', objectFit:'cover', borderRadius: '50%'}}/>
         </div>
         <table className="table table-bordered w-100">
          <tr>
            <th>First Name</th>
            <td>
              {firstName}
            </td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>
              {lastName}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              {email}
            </td>
          </tr>
          <tr>
            <th>contactNo</th>
            <td>
              {contactNo}
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>
              {gender}
            </td>
          </tr>
          <tr>
            <th>Subject</th>
            <td>
             HTML5: {subject.html5 ? 'yes':'no'},
             CSS3: {subject.css3 ? 'yes':'no'},
             JavaScript: {subject.javaScript ? 'yes':'no'}
            </td>
          </tr>
          <tr>
            <th>URL</th>
            <td>
              {url}
            </td>
          </tr>
          <tr>
            <th>Experience</th>
            <td>
              {experience}
            </td>
          </tr>
          <tr>
            <th>About</th>
            <td>
              {about}
            </td>
          </tr>
         </table>
       </div>) : ""}
     </div>
   </div>
   );
}
export default Registration;