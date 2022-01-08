import React from "react";

export default function Login(){

    return(
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4">
            <div className="shrink-0">
            {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
            </div>
            <div>
            <div className="text-xl font-bold text-black">ChitChat</div>
            <p className="text-xs text-black">You have a new message!</p>
            </div>
      </div>
    )
}