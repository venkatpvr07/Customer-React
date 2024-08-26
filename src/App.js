import './App.css';
import data from './data';

function App() {
  // const data = {}
  let addOrUpdate = data.length>0 ? "Update" : "Add"
  const handleListClick = function(){
    console.log("in handleListClick()");
  }

  const handleDelete = function(){
    console.log("in handleDelete()");
  }

  const handleSave = function(){
    console.log("in handleSave()");
  }

  const handleCancel = function(){
    console.log("in handleCancel()");
  }
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
           {data.map(
              (item, index) => {
                return (<tr key={item.id} 
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
                  <td><input type = "text" id = "username" name = "username" placeholder='customer name' required></input></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="email">Email</label></td>
                  <td><input type = "text" id = "email" name = "email" placeholder='name@company.com' required></input></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="password">Password</label></td>
                  <td><input type = "text" id = "password" name = "password" placeholder='password' required></input></td>
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
