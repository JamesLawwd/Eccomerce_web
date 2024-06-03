"use client"
import React from 'react'
import Image from 'next/image'

const CartModal = () => {

    const cartItems = false
  return (
    <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <div className=''>
            <Image src="" alt='' width={72} height={96} className='object-cover rounded-md'/>
            <div className=''>
                {/* TOP */}
                <div className=""></div>
            
                {/* TITLE */}
                <div className="">
                    <h3>Prodcut Name</h3>
                    <div className="">Ksh500</div>
                </div>
                {/* DESC */}
                <div className="">
                    available
                </div>
                {/* BOTTOM */}

            </div>
        </div>
      )}
    </div>
  )
}

export default CartModal
