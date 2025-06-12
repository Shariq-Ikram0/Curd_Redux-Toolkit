// "use client";
// import { deleteUser, readUser } from "@/features/userDetailSlice";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ReadModal from "./ReadModal";
// import { useRouter } from "next/router";

// const ReadCard = () => {
//  console.log("ReadCard component rendered");

//   const [id,setId] = useState()
//   const [popUp,setPopup] = useState(false);
//   const router = useRouter();
//   const { users, loading ,searchData} = useSelector((state) => state.app);
//   const dispatch = useDispatch();
  
//   const handleSubmit = ()=>{
//     router('../app/update')
//   }
  
  
//   useEffect(() => {
//     dispatch(readUser());
//   }, [dispatch, searchData]); // ✅ This triggers re-read when searchData changes
  
  
//   if (loading) {
//     return (
//       <h1 className="text-4xl text-center font-semibold mb-4 text-white">
//         Loading...
//       </h1>
//     );
//   }
//   console.log("Redux searchData:", searchData); 

//   return (
//     <>
    
//     {popUp &&  <ReadModal id={id} popUp={popUp} setPopup={setPopup} />} 

//       {users &&
//       users
//        .filter((user) => {
//     if (!searchData.trim()) return true;
//     return user.name.toLowerCase().includes(searchData.toLowerCase());
//   })
//       .map((ele) => (
//           <div key={ele.id} className=" m-8">
//             <div className="bg-white shadow-lg rounded-lg p-6 w-80">
//               <h5 className="text-4xl text-center font-semibold mb-4">
//                 Read Data
//               </h5>
//               <p className="text-gray-700 mb-1">
//                 <span className="font-medium">Name:</span> {ele.name}
//               </p>
//               <p className="text-gray-700 mb-1">
//                 <span className="font-medium">Email:</span> {ele.email}
//               </p>
//               <p className="text-gray-700 mb-1">
//                 <span className="font-medium">Age:</span> {ele.age}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-medium">Gender:</span> {ele.gender}
//               </p>
//               <div className="flex justify-center gap-6 mt-3">
//                 <Link
//                   href={"#"}
//                   className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
//                   onClick={()=>[setId(ele.id),setPopup(true)]}
//                 >
//                   View
//                 </Link>
//                 <Link
               
//                   href={ele.id ? `/edit/${ele.id}` : "#"}
//                   className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
//                 >
//                   Edit
//                 </Link>
//                 <Link
//                   onClick={()=>dispatch(deleteUser(ele.id))}
//                   href={"#"}
//                   className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
//                 >
//                   Delete
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//     </>
//   );
// };

// export default ReadCard;
