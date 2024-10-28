// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import {
//   getUserItems,
//   createSwapRequest,
// } from "../services/apiRequests/swapApiRequests";
// import ItemCard from "../components/cards/ItemCard";

// export default function SwapRequest() {
//   const [unsoldItems, setUnsoldItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [newItemDetails, setNewItemDetails] = useState({
//     name: "",
//     description: "",
//     image: "",
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const history = useHistory();
//   useEffect(() => {
//     async function fetchUserItems() {
//       try {
//         const items = await getUserItems(); // API call to get unsold items
//         setUnsoldItems(items);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load unsold items.");
//         setLoading(false);
//       }
//     }
//     fetchUserItems();
//   }, []);
//   const handleSubmit = async () => {
//     try {
//       if (selectedItem) {
//         await createSwapRequest({ item: selectedItem });
//       } else if (newItemDetails.name) {
//         await createSwapRequest({ item: newItemDetails });
//       } else {
//         setError("Please select an item or provide new item details.");
//       }
//       history.push("/dashboard"); // Redirect to dashboard after successful request
//     } catch (err) {
//       setError("Failed to create swap request.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-semibold mb-4">Create Swap Request</h1>

//       {loading ? (
//         <p>Loading your items...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <>
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">
//               Select an Item for Swap
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {unsoldItems.map((item) => (
//                 <ItemCard
//                   key={item._id}
//                   item={item}
//                   onClick={() => setSelectedItem(item)}
//                 />
//               ))}
//             </div>
//             <div className="mt-6">
//               <h3 className="text-xl">Or Add a New Item</h3>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Item Name"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={newItemDetails.name}
//                   onChange={(e) =>
//                     setNewItemDetails({
//                       ...newItemDetails,
//                       name: e.target.value,
//                     })
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Item Description"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={newItemDetails.description}
//                   onChange={(e) =>
//                     setNewItemDetails({
//                       ...newItemDetails,
//                       description: e.target.value,
//                     })
//                   }
//                 />
//                 <input
//                   type="file"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   onChange={(e) =>
//                     setNewItemDetails({
//                       ...newItemDetails,
//                       image: e.target.files[0],
//                     })
//                   }
//                 />
//               </form>
//             </div>
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
//             >
//               Submit Swap Request
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
