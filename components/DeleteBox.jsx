import React from "react";

const DeleteBox = ({handleDelete, handleCancel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-[1000000]">
        <div className="bg-white  p-4 rounded-[12px] flex flex-col w-[300px] gap-4">
          <h2 className="text-darkBlue font-[700]">Delete comment</h2>
          <p className="text-grayBlue text-[14px]">
              Are you sure you want to delete this comment? This will remove the comment
              and can't be undone.
          </p>
          <div className="flex gap-4">
            <button onClick={handleCancel} className="bg-grayishBlue h-10 hover:bg-lightGray cursor-pointer rounded-md text-white p-1 w-[120px] text-center font-[700]">NO, CANCEL</button>
            <button onClick={handleDelete} className="bg-softRed hover:bg-paleRed cursor-pointer rounded-md text-white p-1 h-10 w-[120px] text-center font-[700]">YES, DELETE</button>
          </div>
        </div>
    </div>
  );
};

export default DeleteBox;
