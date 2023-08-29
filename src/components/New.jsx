import React from 'react'
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function New() {

  const Profile = (name)=>{
    alert(`${name}'s profile has been deleted...`)
  }

    const profile = [{
        NAME : "Sujani",
        PHONE : "9880883045",
        EMAIL : "Sujani@gmail.com",
        DOB : "09/07/2001",
        ADDRESS : "Udupi",
        IMAGE : 'https://tse2.mm.bing.net/th?id=OIP.CiQkh1UgFfdQm1KDVPYLdAHaHa&pid=Api&P=0&h=180'
    },

    {
        NAME : "Raksha",
        PHONE : "9834568712",
        EMAIL : "Raksha@gmail.com",
        DOB : "11/06/2001",
        ADDRESS : "Karkala",
        IMAGE : 'https://tse1.mm.bing.net/th?id=OIP.mpXg7tyCFEecqgUsoW9eQwHaHk&pid=Api&P=0&h=180'
    }]

  return (
    <>
    <div>

    <table class="table">
               <thead>
               <tr>
               <th scope="col">Sl.No</th>
               <th scope="col">IMAGE</th>
                 <th scope="col">NAME</th>
                 <th scope="col">PHONE</th>
                 <th scope="col">EMAIL</th>
                 <th scope="col">DOB</th>
                 <th scope="col">ADDRESS</th>
                 <th scope="col">ACTIONS</th>
               </tr>
               </thead>
  
<tbody>
    {profile.map((person, index) => {
        return(
            <>
                        <tr key={index} className="table-danger">
                            <td>{index+1}</td>
                            <td><img src={person.IMAGE}
                            alt=""
                            style={{width:"45px", height:"45px"}}
                            class="rounded-circle"/></td>
                            <td>{person.NAME}</td>
                            <td>{person.PHONE}</td>
                            <td>{person.EMAIL}</td>
                            <td>{person.DOB}</td>
                            <td>{person.ADDRESS}</td>
                            <td>
<Button type="button" class="btn btn-success m-2" data-bs-toggle="modal"  data-bs-target={`#view${index}`} startIcon={<VisibilityIcon />}>VIEW</Button>
<Button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={`#edit${index}`} startIcon={<EditIcon />}>EDIT</Button>
<Button type="button" class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={`#delete${index}`} startIcon={<DeleteIcon />}>DELETE</Button>
</td>
</tr>


<div
  class="modal fade"
  id={`view${index}`}
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Profile</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src={person.IMAGE} alt="" width="100px" height="100px"/>
                    <p><strong>NAME : </strong>{person.NAME}</p>
                    <p><strong>PHONE : </strong>{person.PHONE}</p>
                    <p><strong>EMAIL : </strong>{person.EMAIL}</p>
                    <p><strong>DOB : </strong>{person.DOB}</p>
                    <p><strong>ADDRESS : </strong>{person.ADDRESS}</p>
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>


<div
  class="modal fade"
  id={`edit${index}`}
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Edit</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
            <label for="name" class="col-form-label">NAME</label>
            <input type="text" class="form-control" id="name" value={person.NAME}/>
          </div>
          <div class="mb-3">
            <label for="phone" class="col-form-label">PHONE</label>
            <input type="text" class="form-control" id="phone" value={person.PHONE}/>
          </div>
          <div class="mb-3">
            <label for="email" class="col-form-label">EMAIL</label>
            <input type="text" class="form-control" id="email" value={person.EMAIL}/>
          </div>
          <div class="mb-3">
            <label for="dob" class="col-form-label">DOB</label>
            <input type="text" class="form-control" id="dob" value={person.DOB}/>
          </div>
          <div class="mb-3">
            <label for="address" class="col-form-label">ADDRESS</label>
            <input type="text" class="form-control" id="address" value={person.ADDRESS}/>
          </div>
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div
  class="modal fade"
  id={`delete${index}`}
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <p>Are you sure to delete {person.NAME}'s profile!!!</p>
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>Profile(`${person.NAME}`)} type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

</>





    )
    })}
           
</tbody>
</table>




</div>
    </>
    
  )
}
