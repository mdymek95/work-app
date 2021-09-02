const square = function (x) {
  return x * x;
}

const fullName = 'Mike Ross';
let firstName;
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName))