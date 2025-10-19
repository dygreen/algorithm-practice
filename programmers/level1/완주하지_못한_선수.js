/*
* 해시
* 시간복잡도: O(n)
* */

// 처음 풀이
function solution(participant, completion) {
  const hash = {};
  for (const name of participant) {
    hash[name] = (hash[name] || 0) + 1;
  }
  for (const name of completion) {
    hash[name]--;
  }
  for (const name in hash) {
    if (hash[name] > 0) return name;
  }
}

// 두번째 풀이 - Map 활용
// ✨Map : 해시 테이블 전용 구조 (순수 키-값 컨테이너, 키 삽입/삭제에 최적화됨)
function solutionSecond(participant, completion) {
  const map = new Map();

  for (const name of participant) {
    map.set(name, (map.get(name) || 0) + 1);
  }

  for (const name of completion) {
    map.set(name, map.get(name) - 1);
    if (map.get(name) === 0) map.delete(name); // 0이면 지워 메모리 절약
  }

  // 남은 key가 미완주자
  // (문제 보장상 정확히 하나만 남음)
  for (const [name] of map) return name;
  // return map.keys().next().value;
}