import axios from "axios";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { useQuery } from "react-query";
import Item from "../Item/Item";


const Products = () => {

     const  {data: furnichairs = [], refetch} = useQuery({
        queryKey: ['furnichairs'],
        queryFn: async () => {
            const res = await axios.post(`http://localhost:5000/furnichairs`);
            return res.data;
        }
     })
  return (
    <>
      <div className="drawer lg:drawer-open pt-12 max-w-6xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          {/* All Products Maping and rendering here */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 px-4">
            {furnichairs.map((funnichair) => (
              <Item key={funnichair._id} funnichair={funnichair}></Item>
            ))}
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn  bg-[#1e99f5] m-2 drawer-button  lg:hidden absolute right-0 top-0"
          >
            <MdMenuOpen />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu border-r-2 shadow-md text-base-content min-h-full w-64 p-4 bg-[#1e99f5] md:bg-[#ffffff]">
            {/* Sidebar content here */}
               <div className="space-y-4">
                    <h3 className="border-b-2  p-2 text-center text-lg   md:text-[#717171] hover:text-[#ffffff] hover:bg-[#000000] ">Rocking Chair</h3>
                    <h3 className="border-b-2  p-2 text-center text-lg md:text-[#717171] hover:text-[#ffffff] hover:bg-[#000000]">Slide Chair</h3>
                    <h3 className="border-b-2  p-2 text-center text-lg md:text-[#717171] hover:text-[#ffffff] hover:bg-[#000000]">Slide Chair</h3>
                   
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
