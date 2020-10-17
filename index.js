function getPair() {
  const n = document
    .querySelector('input')
    .value.split('')
    .sort((a, b) => a - b);
  const result = document.querySelector('.result > span');

  let pairCount = 0;
  let i = 0;

  while (i < n.length - 1) {
    if (n[i] == n[i + 1]) {
      pairCount++;
      i = i + 2;
    } else {
      i++;
    }
  }
  alert(`Total pair count is ${pairCount}`);
  result.textContent = pairCount;
}
