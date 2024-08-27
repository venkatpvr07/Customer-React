import React, {useState, useEffect} from 'react';
import { getAllCustomers, post, put, deleteById } from './data' 
import './App.css';
// import data from './data';

function App() {
  // const data = {}
  // let addOrUpdate = data.length>0 ? "Update" : "Add"
  let blankCustomer = { "id": null, "name": "", "email": "", "password": "" };
  const [customers, setCustomers] = useState([]);
  const [customerDetails, setCustomerDetails] = useState(blankCustomer);
  let addOrUpdate = (customerDetails.id >= 0) ? 'Update' : 'Add';
 
  const getCustomers = function() {
    console.log("inside getCustomers()");
    setCustomers(getAllCustomers);
  }

  useEffect(getCustomers, []);

  const handleListClick = function(item){
    console.log("in handleListClick() and item is: ", item);
    if(customerDetails.id === item.id){
      setCustomerDetails(blankCustomer);
    }else{
      setCustomerDetails(item);
    }
  }

  const handleInputChange = function (e) {
    console.log("in handleInputChange() and target is: ", e.target);
    const name = e.target.name;
    const value = e.target.value;
    let newcustomerDetails = {...customerDetails}
    newcustomerDetails[name] = value;
    console.log("name is" , newcustomerDetails);
    setCustomerDetails(newcustomerDetails);
  }

  let handleCancel = function () {
    console.log("in onCancelClick()");
    setCustomerDetails(blankCustomer);
  }

  let handleDelete = function () {
    if(customerDetails.id >= 0){
      deleteById(customerDetails.id);
    }
    setCustomerDetails(blankCustomer);
  }

let handleSave = function () {
  if (addOrUpdate === 'Add') {
    post(customerDetails);
  }
  if (addOrUpdate === 'Update') {
    put(customerDetails.id, customerDetails);
  }
  setCustomerDetails(blankCustomer);
}

//   const handleDelete = function(){
//     console.log("in handleDelete()");
//   }

//   const handleSave = function(){
//     console.log("in handleSave()");
//   }

//   const handleCancel = function(){
//     console.log("in handleCancel()");
//   }
  return (
    <>
      <div className="Boxed">
      <h3>
        Customer List
      </h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
           {customers.map(
              (item, index) => {
                return (<tr key={item.id}
                className={ (item.id === customerDetails.id )?'selected': ''}
                onClick={()=>handleListClick(item)} 
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>);
              }
            )}
        </tbody>
      </table>
    </div>
      <div className='boxed'>
        <h3>
          {addOrUpdate}
        </h3>
            <form id="customerdetails">
              <table>
                <tbody>
                  <tr>
                  <td><label htmlFor="username">Name</label></td>
                  <td><input type = "text" id = "username" name = "name" value={customerDetails.name} onChange={(e) => handleInputChange(e)} placeholder='customer name' required></input></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="email">Email</label></td>
                  <td><input type = "text" id = "email" name = "email" value={customerDetails.email} onChange={(e) => handleInputChange(e)} placeholder='name@company.com' required></input></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="password">Password</label></td>
                  <td><input type = "text" id = "password" name = "password" value={customerDetails.password} onChange={(e) => handleInputChange(e)} placeholder='password' required></input></td>
                  </tr>
                  {/* <tr>
                    <td colSpan="2"></td>
                    <td><button name="delete" onClick={handleDelete}>Delete</button></td>
                    <td><button name="save" onClick={handleSave}>Save</button></td>
                    <td><button name="cancel" onClick={handleCancel}>Cancel</button></td>
                  </tr> */}
                </tbody>
              </table>
              <button name="delete" onClick={handleDelete}>Delete</button>
              <button name="save" onClick={handleSave}>Save</button>
              <button name="cancel" onClick={handleCancel}>Cancel</button>
            </form>
      </div>
    </>
      );
}

export default App;
