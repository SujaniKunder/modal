import React from 'react'
import image from './suj.jpeg';
import img from './empty.jpg'

export default function Demo() {
  
  return (
    <div>
       

       <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      <th scope="col">Address</th>
    </tr>
    
  </thead>
  <tbody>
    
    <tr className="table-warning">
      
      <th scope="row">Sujani</th>
      <td>9880883045</td>
      <td>sujani@gmail.com</td>
      <td>09/07/2001</td>
      <td>Udupi</td>
      <td>
    <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
  VIEW
</button>


<button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  EDIT
</button>
<button className="btn btn-danger m-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
    </td>
    </tr>
    

    <tr className="table-primary">
      <th scope="row">Raksha</th>
      <td>8569321575</td>
      <td>raksha@gmail.com</td>
      <td>13/09/2001</td>
      <td>Bangalore</td>
      <td>
    <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
  VIEW
</button>

<button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  EDIT
</button>
<button class="btn btn-danger m-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
    </td>
    </tr>

    <tr className="table-danger">
      <th scope="row">Seema</th>
      <td>8962547102</td>
      <td>seema@gmail.com</td>
      <td>20/10/2000</td>
    <td>Karkala</td>
      <td>
    <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
  VIEW
</button>

<button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  EDIT
</button>
<button class="btn btn-danger m-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
    </td>
    </tr>
    
    
    
  </tbody>
</table>







<div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img src={image} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Sujani</p>
      <p ><b>Phone</b> : 9880883045</p>
    <p ><b>Email</b>  : sujani@gmail.com</p>
    <p ><b>DOB</b> : 09/07/2001</p>
    <p ><b>Address</b> : Udupi</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>

<div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img src={img} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Raksha</p>
    <p ><b>Phone</b>  :  8569321575</p>
    <p ><b>Email</b> : raksha@gmail.com</p>
    <p ><b>DOB</b> : 13/09/2001</p>
    <p ><b>Address </b>: Bangalore</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>

<div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">EDIT PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img src={img} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Seema</p>
      <p ><b>Phone</b> : 8962547102</p>
    <p ><b>Email</b>  : radha@gmail.com</p>
    <p ><b>DOB </b>: 20/10/2000</p>
    <p ><b>Address</b> : Karkala</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>




<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Phone:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Email:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">DOB:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
        </form>
    

    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>





<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure to delete this profile!!!
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Deleted!..</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Profile is deleted!
      </div>
      
    </div>
  </div>
</div>


  </div>





  )
}