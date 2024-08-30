import React, { useState } from "react";
import Pagination from "./Pagination";

function CustomerList(props) {
    const customerDetails = props.customerDetails;
    const customers = props.customers;
    const handleListClick = props.handleListClick;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const lastIndex = (currentPage + 1) * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentCustomers = customers.slice(firstIndex, lastIndex);

    // const handlePageChange = (event) => {
    //     setCurrentPage(event.selected);
    // }

    return(
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
           {currentCustomers.map(
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
      <Pagination currentPage = {currentPage} totalPages={Math.ceil(customers.length / itemsPerPage)} setCurrentPage={setCurrentPage} />
    </div>
    );
};

export default CustomerList;