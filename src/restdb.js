const baseURL = 'http://localhost:4000/customers';

export async function getAll(setCustomers) {
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchData(baseURL);
}

export async function post(customer, postOpCallback) {
    const postCustomer = async (url) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(customer),
                headers: {"Content-Type": "application/json"}
            });
            if (!response.ok) {
                throw new Error(`Error posting data: ${response.status}`);
            }
            await response.json();
            postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    postCustomer(baseURL);
}

export async function put(customer, postOpCallback) {
    const putCustomer = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(customer),
                headers: {"Content-Type": "application/json"}
            });
            if (!response.ok) {
                throw new Error(`Error putting data: ${response.status}`);
            }
            await response.json();
            postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    putCustomer(baseURL + '/' + customer.id);
}

export async function deleteById(customer, postOpCallback) {
    const deleteCustomer = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error(`Error deleting data: ${response.status}`);
            }
            await response.json();
            postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    deleteCustomer(baseURL + '/' + customer.id);
}

export async function search(searchTerm) {
    const search = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error(`Error deleting data: ${response.status}`);
            }
            const listdata = await response.json();
            const data = listdata.filter(searchTerm);
            console.log(data);
            // postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    search(baseURL);
}