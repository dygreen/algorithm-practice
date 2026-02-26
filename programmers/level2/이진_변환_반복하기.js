/*
* 주요 아이디어 : 0의 개수는 s.length - 1의 개수
* 따라서 0을 실제로 제거한 문자열을 만들 필요가 없다
*
* 시간 복잡도 : O(N)
*   for문에서 문자열 길이만큼 한 번 순회
*   2진수 변환 시 : N → logN → loglogN → ... 형태로 급격히 감소
* 공간 복잡도 : O(N)
*   count, zeros, ones -> O(1)
*   2진수 변환하면서 새로운 문자열 매번 생성 -> 최대 크기는 최초 N, 이후는 급격히 감소
* */
function solution(s) {
  // 반복 횟수
  let count = 0;
  // 0의 개수
  let zeros = 0;

  while (s !== 1) {
    // 1의 개수 -> 반복문 재실행마다 초기화되어야 하므로 반복문 내부에 위치
    let ones = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") ones++;
    }
    zeros += (s.length - ones); // 제거된 0의 개수 누적
    s = ones.toString(2); // 길이를 2진수로 변환
    count++;
  }

  return [count, zeros];
}