function CustomerAddUpdateForm(props) {
    const addOrUpdate = props.addOrUpdate;
    const customerDetails = props.customerDetails;
    const handleCancel = props.handleCancel;
    const handleDelete = props.handleDelete;
    const handleInputChange = props.handleInputChange;
    const handleSave = props.handleSave; 
    return (
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
    );
};

export default CustomerAddUpdateForm;


