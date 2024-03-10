import { useEffect, useState } from "react";
import axios from "axios";
import ParcelCard from "./ParcelCard";
import { PlusCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
// import { postApiCall } from "../utils/apiCaller";

const Parcel = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');



  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get(
          'https://demo.zfcourier.xyz/api/v/1.0.0/parcels',
          {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          }
        );
        // handle if response is successful
        setOrders(response.data.content);
        // console.log(response.data.content);
        // handle errors
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData(); 
  }, [token]); 

  return (
    <div className="">
      <div className="w-full p-3 flex justify-end rounded-lg border-1 border-white mb-3">
        <Link to = '/create'>
        <div
          className="flex justify-center items-center gap-2 w-[182px] h-9 bg-emerald-500 rounded-md text-white px-4 py-0 cursor-pointer select-none"
        >
          <PlusCircle />
          <span className="text-[16px]">Add New Parcel</span>
        </div>
        </Link>
      </div>
      {orders.map((order) => (
        <ParcelCard
          key={order._id} // Add a unique key to each ParcelCard
          order={order}
          
        />
      ))}
    </div>
  );
};

export default Parcel;
