// import React, { useEffect, useState } from "react";
// import { getRandomUser } from "../../Utility/api";

// export default function Exercis() {
//   const [instructor, setInstructor] = useState(null);
//   const [studentCount, setStudentCount] = useState(0);

//   useEffect(() => {
//     console.log("component did mount");

//     const fetchData = async () => {
//       try {
//         const response = await getRandomUser();
//         console.log(response);

//         const instructorData = {
//           name: response.data.first_name + " " + response.data.last_name,
//           email: response.data.email,
//           phone: response.data.phone_number,
//         };

//         setInstructor(instructorData);
//       } catch (error) {
//         console.error("خطا در دریافت اطلاعات:", error);
//       }
//     };

//     fetchData();

//     return () => {
//       console.log("component will unmount");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("component did update");
//   });

//   const addStudent = () => setStudentCount((prev) => prev + 1);
//   const removeStudent = () => setStudentCount((prev) => (prev > 0 ? prev - 1 : 0));

//   return (
//     <>
//       {instructor && (
//         <div className="p-3">
//           <span className="h4 text-success">
//             Instructor:
//             <i className="bi bi-toggle-off btn btn-success btn-sm">
//               <br />
//               Name: {instructor.name}
//               <br />
//               Email: {instructor.email}
//               <br />
//               Phone: {instructor.phone}
//               <br />
//             </i>
//           </span>
//         </div>
//       )}
//       <div className="p-3">
//         <span className="h4 text-success">Students</span>
//         <br />
//         <div>Student Count: {studentCount}</div>
//         <button className="btn btn-success btn-sm" onClick={addStudent}>
//           add Student
//         </button>
//         <button className="btn btn-danger btn-sm" onClick={removeStudent}>
//           remove Student
//         </button>
//       </div>
//     </>
//   );
// }
