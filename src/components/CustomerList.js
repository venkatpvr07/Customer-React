function CustomerList(props) {
    const customerDetails = props.customerDetails;
    const customers = props.customers;
    const handleListClick = props.handleListClick;
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
    );
};

export default CustomerList;