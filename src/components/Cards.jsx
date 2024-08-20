import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt={item.title}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs. {item.price}</div>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200"
              >
                Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
