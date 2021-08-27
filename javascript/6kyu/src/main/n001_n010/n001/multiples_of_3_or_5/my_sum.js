function sumMultiples3Or5(num) {
  if (num < 0) {
    return 0;
  }

  return [...Array(num).keys()]
    .filter(e => (e % 3 === 0) || (e % 5 === 0))
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
}

export default sumMultiples3Or5;
