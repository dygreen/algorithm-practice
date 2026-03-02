/*
* 풀이
* 주요 아이디어 : 1부터 n까지 순서대로 1씩 더하면서 n과 동일하면 count++, n보다 크면 break
* 문제 유형 : 완전 탐색 (연속 구간 탐색) - 시작점에서 연속으로 더해봄
* 시간 복잡도 : O(n²)
*   바깥 루프 : O(n)
*   안쪽 루프 : O(n)
*   o(n) * o(n)
* 공간 복잡도 : O(1)
* */
function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) break;
    }
  }

  return count;
}