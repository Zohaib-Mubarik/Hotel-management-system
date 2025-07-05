const API_URL = 'https://localhost:7219/api/employee';

export const getAllEmployees = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Failed to fecth all Employees', error);
    }
};

export const getEmployeeById = async (id) => {
    try {
        // const newurl = API_URL + "/" + id;
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch Employee with id ${id}:`, error);
      return null;
    }
  };


  export const createEmployee = async (Employee) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Employee),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to create Employee:', error);
      return null;
    }
  };
  
  export const updateEmployee = async (id, Employee) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Employee),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to update Employee with id ${id}:`, error);
      return null;
    }
  };
  
 export const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Failed to delete Employee with id ${id}:`, error);
      return null;
    }
  };