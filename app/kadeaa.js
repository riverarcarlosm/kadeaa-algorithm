module.exports.init = function(number) {
  let keys = ["Kadeeans", "IT", "Kadeaa"];
  let str = "";
  let check = function(index, x) {
    if (keys[index]) return keys[index];
    return x;
  };
  for (i = 1; i < number + 1; i++) {
    let index = Math.min(i % 3, 1) + Math.min(i % 5, 1) * 2;
    str += check(index, i) + " ";
  }
  return str.trim();
};
