
// register

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/users`,reqBody)
}
// export const loginApi = async(reqBody)=>{
//     return await commonApi('POST',`${serverUrl}/users`,reqBody)
// }
// api to add data to booking
export const addBookingDetailApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/bookings`,reqBody)
}
// api to get booking data
export const getBookingDetailApi = async()=>{
    return await commonApi('GET',`${serverUrl}/bookings`)
}