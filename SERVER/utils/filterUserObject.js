const filterUserObject = (user, ...allowedFields) => {
  const newObj = {};
  Object.keys(user).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = user[el];
  });
  return newObj;
}

module.exports = filterUserObject;