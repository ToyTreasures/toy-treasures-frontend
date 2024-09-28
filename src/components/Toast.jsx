import React from "react";

const Toast = ({ message, type = "success" }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed bottom-5 right-5 ${bgColor} text-white p-3 rounded-md shadow-md flex items-center justify-between`}>
      <div className="font-sans text-sm mr-2">{message}</div>
      <div className="flex-shrink-0">
        {type === "success" ? (
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.795 8.342l-5.909 9.545a1 1 0 0 1-1.628 0l-3.182-4.909a1 1 0 0 1 1.629-1.165l2.556 3.953L14.165 7.51a1 1 0 0 1 1.63 1.165z"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Toast;
