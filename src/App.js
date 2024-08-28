import React, {useState, useEffect} from 'react';
// import { getAllCustomers, post, put, deleteById } from './data' 
import './App.css';
import CustomerList from './components/CustomerList';
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm';
import { getAll, post, put, deleteById } from './restdb';
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
    getAll(setCustomers);
    // setCustomers(getAllCustomers);
  }

  useEffect(getCustomers, [customerDetails]);

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
    const postOpCallback = () => {
      setCustomerDetails(blankCustomer);
    }
    if(customerDetails.id >= 0){
      deleteById(customerDetails, postOpCallback);
    }
    setCustomerDetails(blankCustomer);
  }

let handleSave = function () {
  const postOpCallback = () => {
    setCustomerDetails(blankCustomer);
  }
  if (addOrUpdate === 'Add') {
    post(customerDetails, postOpCallback);
  }
  if (addOrUpdate === 'Update') {
    put(customerDetails, postOpCallback);
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
