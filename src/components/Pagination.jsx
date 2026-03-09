import React from "react";
import { usePlant } from "../context/PlantContext";

const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = usePlant();

  return (
    <div className="w-full flex justify-center my-8">
      <div className="join">
        <button className="join-item btn" disabled={currentPage===1} onClick={()=>setCurrentPage(p=>p-1)}>«</button>
        <button className="join-item btn">Page {currentPage}/{totalPages}</button>
        <button className="join-item btn" disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)}>»</button>
      </div>
    </div>
  );
};

export default Pagination;
