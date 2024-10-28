// // swapApiRequests.js

// import axios from "axios";

// class SwapApiRequests {
//   constructor() {
//     this.api = axios.create({
//       baseURL: "http://localhost:5000/api/v1/swaps",
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     });
//   }

//   async getSentSwapRequests(userId) {
//     const response = await this.api.get(`/sent/${userId}`);
//     return response.data;
//   }

//   async getReceivedSwapRequests(userId) {
//     const response = await this.api.get(`/received/${userId}`);
//     return response.data;
//   }

//   async acceptSwapRequest(requestId) {
//     const response = await this.api.patch(`/accept/${requestId}`);
//     return response.data;
//   }

//   async rejectSwapRequest(requestId) {
//     const response = await this.api.patch(`/reject/${requestId}`);
//     return response.data;
//   }
// }

// export default new SwapApiRequests();
