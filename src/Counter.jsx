// import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
// import login1 from "../src/images/login1.png";
// import akhbar from "../src/images/akhbar.png";

// export default function Counter() {
//   const [count, setCount] = useState(10);
// //   const [gamestatus, setGameStatus] = useState("");
//   const [lastplay, setLastPlay] = useState("");

//   const handleAttact = () => {
//     const newCount = count + Math.round(Math.random() * 20-10);
//     console.log("دفعاغ انجام شد");
//     setCount(newCount+count);
//   };

  
//   let gamestatus="";
//   if(count>10){
//       gamestatus="u win";
//   }else if(count<0){
//       gamestatus="u lose"
//   }else{
//       gamestatus="u are playing"
//   } 

//   const handelRandomPlay = () => {
//     const newCount = count - Math.round(Math.random() * 10);
//     console.log("بازی انجام شد");
//     setCount(newCount);
//   };
//   const handleReset = () => {
//     setCount(10);
//     console.log("reset shod");
//   };

//   return (
//     <div className="row text-center">
//       <h1>Game Scrore:{count} </h1>
//       <p>you win</p>
//       <p >Last play:</p>
//       <h3>Game Status: {gamestatus}</h3>
//       <div className="col-6 col-md-3 offset-md-3">
//         <img
//           style={{
//             width: "100%",
//             cursor: "pointer",
//             border: "1px solid green",
//           }}
//           className="p-4 rounded"
//           src={login1}
//           alt=""
//           onClick={handleAttact}
//         />
//       </div>
//       <div className="col-6 col-md-3 offset-md-3">
//         <img
//           style={{
//             width: "100%",
//             cursor: "pointer",
//             border: "1px solid red",
//           }}
//           className="p-4 rounded"
//           src={akhbar}
//           alt=""
//           onClick={handelRandomPlay}
//         />
//       </div>
//       <div className="col-12 col-md-4 offset-md-4">
//         <button
//           className="btn btn-secondary w-100 mt-2"
//           onClick={handelRandomPlay}
//         >
//           Random Play
//         </button>
//         <br />
//         <button className="btn btn-warning w-100 mt-2" onClick={handleReset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
