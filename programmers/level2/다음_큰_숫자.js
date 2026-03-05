/*
* 주요 아이디어 : 주어진 숫자에 1씩 더하면서 1의 갯수가 동일할 경우 반복문 멈추기
* 문제 유형 : 완전 탐색
* 시간 복잡도 : 1의 개수 세기 = O(log N), 반복문 = O(N) -> O(N log N)
* 공간 복잡도 : O(log n) 또는 O(1)
* */

function solution(n) {
  function countOnes(x) {
    let c = 0;
    for (const ch of x.toString(2)) {
      if (ch === '1') c++;
    }
    return c;
  }

  const target = countOnes(n);

  for (let i = n + 1; i <= 1000000; i++) {
    if (countOnes(i) === target) return i;
  }
}