import { getCookie } from "./UserServices";
const API_URL = 'https://localhost:7219/api/room';
const ROOM_CATEGORY_API_URL = 'https://localhost:7219/api/roomcategory';


const fetchWithAuth = async (url, options = {}) => {
  const token = getCookie('token');

  if (!token) {
      throw new Error('No token found');
  }

  const headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
  };

  const response = await fetch(url, {
      ...options,
      headers,
  });

  if (!response.ok) {
      throw new Error('Request failed');
  }

  return response.json();
};




export const getAllRooms = async () => {
  



  try {
    return await fetchWithAuth(API_URL);
    
  } catch (error) {
    console.error('Failed to fetch all Rooms:', error);
    return null;
  }
};

export const getAllRoomsCategory = async () => {
  



  try {
    return await fetchWithAuth(ROOM_CATEGORY_API_URL);
    
  } catch (error) {
    console.error('Failed to fetch all products:', error);
    return null;
  }
};

export const getRoomById = async (id) => {
  try {
    return await fetchWithAuth(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Failed to fetch Room with id ${id}:`, error);
    return null;
  }
};


  export const createRoom = async (Room) => {
    try {
      return await fetchWithAuth(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Room),
      });
    } catch (error) {
      console.error('Failed to create Room:', error);
      return null;
    }
  };
  
  export const updateRoom = async (id, Room) => {
    try {
      return await fetchWithAuth(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Room),
      });
    } catch (error) {
      console.error(`Failed to update room with id ${id}:`, error);
      return null;
    }
  };
  
 export const deleteRoom = async (id) => {
  try {
    return await fetchWithAuth(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(`Failed to delete room with id ${id}:`, error);
    return null;
  }
};