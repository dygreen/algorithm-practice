/*
* 문제 유형 : 스택
* 인접한 쌍 제거
* 제거 후 새로운 인접 관계 발생
* 이전 상태 기억 필요
* 시간 복잡도: O(N)
* 공간 복잡도: O(N)
* */

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (stack.length > 0 && stack[stack.length - 1] === current) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0 ? 1 : 0;
}