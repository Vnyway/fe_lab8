import React from "react";

const GoodsCard = ({ id, title, price, bids, category }) => {
  return (
    <div className="flex flex-col gap-[20px] relative shadow-sm p-[10px] rounded-[10px] hover:shadow-md">
      <img src={`./images/product_${id}.jpg`} alt={title} />
      <div className="absolute top-[5px] left-[5px] bg-primary rounded-full size-[90px] flex justify-center items-center">
        <span className="text-white text-[20px] font-[700]">{price}$</span>
      </div>
      <h3 className="font-[600] text-[27px] h-[70px]">{title}</h3>
      <div className="flex justify-between items-center text-text">
        <span>{category}</span>
        <span>{bids} bids</span>
      </div>
      <button className="px-[30px] py-[10px] bg-[#f8f9fa]">Submit a Bid</button>
    </div>
  );
};

export default GoodsCard;
