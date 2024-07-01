import { useState, useEffect } from 'react';
import axios from 'axios';

interface Author {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    axios.get<{ data: Author[] }>('https://reqres.in/api/users')
      .then((response) => {
        setAuthors(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching authors:', error);
      });
  }, []);

  return {
    authors,
  };
};

export default useAuthors;
