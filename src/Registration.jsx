const Registration = () => {
 return (
   <div className="container p-3">
     <div className="card p-3">
       <h6 className="text-success fw-bolder mx-auto">Candidate Registration</h6>
       <div className ="mb-3">
         <label>First Name</label>
         <input className="form-control" placeholder="Enter your first name"/>
       </div>
       <div className ="mb-3">
         <label>Last Name</label>
         <input className="form-control" placeholder="Enter your last name"/>
       </div>
       <div className ="mb-3">
         <label>Email</label>
         <input className="form-control" placeholder="Enter your email address" type="email"/>
       </div>
       <div className ="mb-3">
         <label>Contact No</label>
         <input className="form-control" placeholder="Enter your contact no" type="number"/>
       </div>
       <div className ="mb-3">
         <label>Gender</label>
         <div>
           <div>
              <input name="gender" className="form-check-input me-2" type="radio" value="male"/>
               <label>Male</label>
           </div>
           <div>
               <input name="gender" className="form-check-input me-2" type="radio" value="female"/>
               <label>Female</label>
           </div>
           <div>
               <input name="gender" className="form-check-input me-2" type="radio" value="others"/>
               <label>others</label>
           </div>
         </div>
      </div>
       <div className="mb-3">
         <label>Subject</label>
         <div>
           <div>
             <input className="form-check-input me-2" type="checkbox" value="HTML5" name="subject"/>
             <label>HTML5</label>
           </div>
           <div>
              <input className="form-check-input me-2" type="checkbox" value="CSS3" name="subject"/>
              <label>CSS3</label>
           </div>
           <div>
              <input className="form-check-input me-2" type="checkbox" value="JavaScript" name="subject"/>
              <label>JavaScript</label>
           </div>
         </div>
       </div>
       <div className="mb-3">
         <label>Upload Resume</label>
         <input className="form-control" type="file"/>
       </div>
       <div className="mb-3">
         <label>URL</label>
         <input className="form-control" placeholder="enter URL"/>
       </div>
       <div className="mb-3">
         <label>Select Your Choice</label>
         <select className="form-control">
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
         <textarea className="form-control" placeholder="about yourself"></textarea>
       </div>
       <div className="mb-3 text-center">
         <button className="btn btn-success mx-2" type="submit">Submit</button>
         <button className="btn btn-danger mx-2" type="reset">Reset</button>
       </div>
     </div>
   </div>
   );
}
export default Registration;