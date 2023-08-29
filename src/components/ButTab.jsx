import React from 'react'
import imagee from './suj.jpeg';
import imgg from './empty.jpg'
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function() {

    const ProfilD1 = (a)=>{
        alert(`${a}'s profile has been deleted...`)
      }

    const ProfilD2 = (b)=>{
        alert(`${b}'s profile has been deleted...`)
      }
      const ProfilD3 = (c)=>{
        alert(`${c}'s profile has been deleted...`)
      }

    const profile1 = [{
        NAME : "Sujani",
        PHONE : "9880883045",
        EMAIL : "Sujani@gmail.com",
        DOB : "09/07/2001",
        ADDRESS : "Udupi"
    }]

    const profile2 = [{
        NAME : "Raksha",
        PHONE : "9834568712",
        EMAIL : "Raksha@gmail.com",
        DOB : "11/06/2001",
        ADDRESS : "Karkala"
    }]
    
    const profile3 = [{
        NAME : "Seema",
        PHONE : "9756341297",
        EMAIL : "Seema@gmail.com",
        DOB : "04/07/2002",
        ADDRESS : "Mangalore"
    }]

  return (
        <>
        <div>
    <table class="table">
               <thead>
               <tr>
                 <th scope="col">NAME</th>
                 <th scope="col">PHONE</th>
                 <th scope="col">EMAIL</th>
                 <th scope="col">DOB</th>
                 <th scope="col">ADDRESS</th>
                 <th scope="col">ACTIONS</th>
               </tr>
               </thead>
  
<tbody>
    {profile1.map((sujani, index) => {
        return(
                        <tr key={index} className="table-warning">
                            <td>{sujani.NAME}</td>
                            <td>{sujani.PHONE}</td>
                            <td>{sujani.EMAIL}</td>
                            <td>{sujani.DOB}</td>
                            <td>{sujani.ADDRESS}</td>
                            <td>
<Button type="button" class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdropF" startIcon={<VisibilityIcon />}>VIEW</Button>
<Button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#staticEdit" startIcon={<EditIcon />}>EDIT</Button>
<Button type="button" class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#staticDeleteSujani" startIcon={<DeleteIcon />}>DELETE</Button>
</td>
</tr>
    )
    })}

    {profile2.map((raksha, index) =>{
     return(
                        <tr key={index} className="table-primary">
                            <td>{raksha.NAME}</td>
                            <td>{raksha.PHONE}</td>
                            <td>{raksha.EMAIL}</td>
                            <td>{raksha.DOB}</td>
                            <td>{raksha.ADDRESS}</td>
                            <td>
<Button type="button" class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdropS" startIcon={<VisibilityIcon />}>VIEW</Button>
<Button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#staticEdit" startIcon={<EditIcon />}>EDIT</Button>
<Button type="button" class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#staticDeleteRaksha" startIcon={<DeleteIcon />}>DELETE</Button>
                            </td>
                            </tr>
    )
    })}

    {profile3.map((seema, index) =>{
    return(
                        <tr key={index} className="table-danger">
                            <td>{seema.NAME}</td>
                            <td>{seema.PHONE}</td>
                            <td>{seema.EMAIL}</td>
                            <td>{seema.DOB}</td>
                            <td>{seema.ADDRESS}</td>
                            <td>
<Button type="button" class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdropT" startIcon={<VisibilityIcon />}>VIEW</Button>
<Button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#staticEdit" startIcon={<EditIcon />}>EDIT</Button>
<Button type="button" class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#staticDeleteSeema" startIcon={<DeleteIcon />}>DELETE</Button>
                            </td>
                            </tr>
    )
    })}              
</tbody>
</table>



<div
  className="modal fade"
  id="staticBackdropF"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sujani</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
      <img src={imagee} alt="" width="100px" height="100px"/>
      {profile1.map((sujani1)=>{
        return(
            <div>
                    <p><strong>NAME : </strong>{sujani1.NAME}</p>
                    <p><strong>PHONE : </strong>{sujani1.PHONE}</p>
                    <p><strong>EMAIL : </strong>{sujani1.EMAIL}</p>
                    <p><strong>DOB : </strong>{sujani1.DOB}</p>
                    <p><strong>ADDRESS : </strong>{sujani1.ADDRESS}</p>
                </div>
        )
      })}
      </div>

      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>

    </div>
  </div>
</div>


<div
  className="modal fadee"
  id="staticBackdropS"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Raksha</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
      <img src={imgg} alt="" width="100px" height="100px"/>
      {profile2.map((raksha1)=>{
        return(
            <div>
                    <p><strong>NAME : </strong>{raksha1.NAME}</p>
                    <p><strong>PHONE : </strong>{raksha1.PHONE}</p>
                    <p><strong>EMAIL : </strong>{raksha1.EMAIL}</p>
                    <p><strong>DOB : </strong>{raksha1.DOB}</p>
                    <p><strong>ADDRESS : </strong>{raksha1.ADDRESS}</p>
                </div>
        )
      })}
      </div>

      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>



<div
  className="modal fadeee"
  id="staticBackdropT"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Seema</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
      <img src={imgg} alt="" width="100px" height="100px"/>
      {profile3.map((seema1)=>{
        return(
            <div>
                    <p><strong>NAME : </strong>{seema1.NAME}</p>
                    <p><strong>PHONE : </strong>{seema1.PHONE}</p>
                    <p><strong>EMAIL : </strong>{seema1.EMAIL}</p>
                    <p><strong>DOB : </strong>{seema1.DOB}</p>
                    <p><strong>ADDRESS : </strong>{seema1.ADDRESS}</p>
                </div>
        )
      })}
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
  id="staticEdit"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">EDIT PROFILE</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>


      <div class="modal-body">
      <form>
      <div class="mb-3">
            <label for="name" class="col-form-label">NAME</label>
            <input type="text" class="form-control" id="name"/>
          </div>
          <div class="mb-3">
            <label for="phone" class="col-form-label">PHONE</label>
            <input type="text" class="form-control" id="phone"/>
          </div>
          <div class="mb-3">
            <label for="email" class="col-form-label">EMAIL</label>
            <input type="text" class="form-control" id="email"/>
          </div>
          <div class="mb-3">
            <label for="dob" class="col-form-label">DOB</label>
            <input type="text" class="form-control" id="dob"/>
          </div>
          <div class="mb-3">
            <label for="address" class="col-form-label">ADDRESS</label>
            <input type="text" class="form-control" id="address"/>
          </div>
          </form>
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
  id="staticDeleteSujani"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">DELETE PROFILE</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Are you sure to delete this profile!!!</div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>ProfilD1("sujani")} type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>

<div
  class="modal fade"
  id="staticDeleteRaksha"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">DELETE PROFILE</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Are you sure to delete this profile!!!</div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>ProfilD2("Raksha")} type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>

<div
  class="modal fade"
  id="staticDeleteSeema"
  data-mdb-backdrop="static"
  data-mdb-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">DELETE PROFILE</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Are you sure to delete this profile!!!</div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>ProfilD3("Seema")} type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>

</div>
</>
)
}
