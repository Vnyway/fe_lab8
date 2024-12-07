import React from "react";
import Heading from "./Heading";
import { goods } from "../constants";
import GoodsCard from "./GoodsCard";

const Goods = () => {
  return (
    <section className="container mx-auto mt-[80px]">
      <Heading center={true} title="Current Auctions" desc="AUCTION" />
      <div className="grid grid-cols-4 gap-[20px] mt-[60px]">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            bids={item.bids}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Goods;
