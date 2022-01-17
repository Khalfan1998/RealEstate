import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'bb12726c39msh1b1feb5a33875e3p1bc59djsn03c483cdeda8'
      }
  });
    
  return data;
}