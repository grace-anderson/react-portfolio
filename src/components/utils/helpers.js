export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// export function checkPassword(input) {
//   const passw = /^[A-Za-z]\w{7,14}$/;
//   if (input.match(passw)) {
//     return true;
//   }
//   return false;
// }

export function validateName(input) {
  if (input.length <= 3) {
    return true;
  }
  return false;
}

export function validateMessage(input) {
  if (input.length < 1) {
    return true;
  }
  return false;
}

