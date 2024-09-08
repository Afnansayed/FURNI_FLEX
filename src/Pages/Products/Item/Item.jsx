import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa6';

const Item = ({funnichair}) => {
    const { productName ,productPrice,description,image} = funnichair;
    const discountedPrice = productPrice - (productPrice * 30) / 100;
    return (
        <>
            <section className='bg-base-100 w-full  lg:w-72 mx-auto p-6 shadow-2xl mb-2 text-sm '>
                     <div className='bg-[#f2f2f2] h-auto md:h-48 rounded-lg'>
                        <img src={image} className='h-full' alt="Product picture" />
                     </div>
                     <div className='text-left mt-2 space-y-2 h-72 md:h-40'>
                     <h1 className='text-left text-lg font-semibold '>{productName}</h1>
                     <h1 className='text-lg font-semibold flex flex-col md:flex-row justify-between'><span className=''>$ {discountedPrice}</span> <span className='text-[#838383]'>$ {productPrice}</span> <span className='text-[#B92E2E]'> 30%OFF</span></h1>
                     <h1 className='text-[#838383]'>{description}</h1>
                     </div>
                     <h1 className='bg-[#000000] text-white p-2 rounded-lg flex items-center justify-center'><span className='inline-block mr-2'><FaCartArrowDown/></span> Add to cart</h1>
            </section>
        </>
    );
};

export default Item;