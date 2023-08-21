const randomID = (ids) => {
  if (!ids.length) return 1;
  for (const i in ids) {
    let num = Number(i);
    if (ids[num + 1] - ids[num] !== 1) {
      return ids[num] + 1;
    }
  }
  return ids[ids.length - 1] + 1;
};

module.exports = randomID;
