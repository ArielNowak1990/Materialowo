import  bcrypt from 'bcryptjs';

export const API_URL = 'http://localhost:3000';
export const PAGE_URL = 'http://localhost:3000';


//schedule
// export function sendSchedule (schedule){
//     fetch(`${API_URL}/schedules`,{
//         method: 'POST',
//         body: JSON.stringify(schedule),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(response=>response.json())
//         .then(data=> {
//             console.log(data);
//         })
//         .catch(error=> {
//             console.log(error);
//         });
// }
// export function getSchedule (scheduleID){
//     return fetch(`${API_URL}/schedules/${scheduleID}`)
//         .then(response=> response.json())
//         .then(data=>{
//             console.log(data);
//             return data;
//         })
//         .catch(error=>{
//             console.log(error);
//         })
// }
// export function updateSchedule (schedule, scheduleID){
//     return fetch(`${API_URL}/schedules/${scheduleID}`,{
//             method: "PATCH",
//             body: JSON.stringify(schedule),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//     ).then(response=> response.json())
//         .then(data=>{
//             console.log(data);
//             return data;
//         })
//         .catch(error=>{
//             console.log(error);
//         })
// }
// //Recipe
// export function getRecipes (){
//
//     return fetch(`${API_URL}/recipes`)
//         .then(response=> response.json())
//         .then(data=>{
//             return data;
//         })
//         .catch(error=>{
//             console.log(error);
//         })
// }
// User
// export function updateUserMail (userEmail){
//     fetch(`${API_URL}/user`,{
//         method: "PATCH",
//         body: JSON.stringify(userEmail),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('registered user', data.nameEmail);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

export function addUser (user){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    console.log(user);
    fetch(`${API_URL}/user`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then( window.location.href="http://localhost:3001/app/log")
        .catch(error => console.log(error))
}

export function findUser(name){
    return fetch(`${API_URL}/user?${name}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
}


export function getUser(){
    return fetch(`${API_URL}/user`)
        .then(response => {
            if (response.ok === false) {
                throw new Error("błąd")
            } else {
                return response.json();
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
}