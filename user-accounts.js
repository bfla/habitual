// ddpClient = require('ddp')

// // User Accounts
// function login() {
//   AsyncStorage.getItem('loginToken')
//   .then(_loginWithToken);
// }

// function _loginWithToken(token) {
//   let loggedIn = false;
  
//   if (token) {
//     ddpClient.call('login' [{resume: token}], function (err, res) {
//       if (res) {
//         AsyncStorage.setItem('userId', res.id);
//         AsyncStorage.setItem('loginToken', res.token);
//         AsyncStorage.setItem('loginTokenExpires', res.loginTokenExpires);

//         loggedIn = true;
//         resolve(loggedIn);
//       } else {
//         resolve(loggedIn);
//       }
//     });
//   } else {
//     resolve(loggedIn);
//   }
// }

// function getUserId() {
//   AsyncStorage.getItem('userId');
// }

// module.exports = {
//   login: login,
//   // logout: logout,
//   userId: getUserId
// }
