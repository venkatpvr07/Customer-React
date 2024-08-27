import React, {useState, useEffect} from 'react';
import { getAllCustomers, post, put, deleteById } from './data' 
import './App.css';
import CustomerList from './components/CustomerList';
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm';
// import data from './data';

function App() {
  // const data = {}
  // let addOrUpdate = data.length>0 ? "Update" : "Add"
  let blankCustomer = { "id": null, "name": "", "email": "", "password": "" };
  const [customers, setCustomers] = useState([]);
  const [customerDetails, setCustomerDetails] = useState(blankCustomer);
  let addOrUpdate = (customerDetails.id !== null) ? 'Update' : 'Add';
 
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
      <CustomerList customerDetails = {customerDetails} customers = {customers} handleListClick = {handleListClick}/>
      <CustomerAddUpdateForm addOrUpdate = {addOrUpdate} customerDetails = {customerDetails} handleCancel = {handleCancel} handleDelete = {handleDelete} handleInputChange = {handleInputChange} handleSave = {handleSave} />
    </>
      );
}

export default App;
