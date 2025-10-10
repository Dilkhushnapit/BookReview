import { createContext, use, useState } from "react";
import { doctors } from "../assets/assets";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData,setUserData]=useState(false);
  const[bookData,setBookData]=useState(false);


  const getBooksData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/book/bookslist");
      if (data.success) {
        setBooks(data.books);
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getBooksData();
  }, []);
 
  



//   useEffect(() => {
//     getBooksData();
//   }, []);





  const value = {
    bookData,
    setBookData,


    books,
    token,
    books,
    setBooks,
    setToken,
    backendUrl,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
