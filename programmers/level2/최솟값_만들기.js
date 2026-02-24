/*
* 풀이
* 주요 아이디어 : 최소 누적합을 만들려면 최솟값 * 최댓값이어야 되므로 오름차순, 내림차순 정렬을 해서 누적합을 구한다.
* 시간 복잡도 :
*   A.sort((x,y)=>x-y) → O(N log N) *정렬
*   B.sort((x,y)=>y-x) → O(N log N)
*   for 루프 누적합 → O(N)
*   합치면 O(N log N + N log N + N) → O(N log N)
* 공간 복잡도 : O(N)
* */
function solution(A,B){
  let sum = 0;
  const a = A.sort((x, y) => x - y);
  const b = B.sort((x, y) => y - x);

  for (let i = 0; i < a.length; i++) {
    sum += (a[i] * b[i])
  }

  return sum
}

/*
* 다른 풀이
* sum, a, b 와 같은 변수를 만들지 않고도 바로 풀 수 있는 방법
* sort() 는 원본을 바꾸므로 따로 변수를 사용 안해도 됨
* reduce() 로 누적합 구현
* */
function anotherSolution(A,B){
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
