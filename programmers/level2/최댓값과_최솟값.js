/*
* 처음 풀이
* 문제 유형 : 배열 순회
* 시간 복잡도 : O(N)
*   ① split(' ') : 문자열 길이를 L이라고 하면 → O(L)
*   ② .map(Number) : 토큰 개수를 N이라고 하면 → O(N)
*   ③ Math.min(...nums) : 스프레드로 배열을 풀어서 내부적으로 모든 원소 비교 → O(N)
*   ④ Math.max(...nums) : 또 한 번 전체 순회 → O(N)
* 공간 복잡도 : O(N)
*   split() → 문자열 배열 생성 → O(N)
*   map() → 숫자 배열 생성 → O(N)
*   ...nums → 스프레드 시 내부 인자 복사 발생 (엔진 구현에 따라 추가 메모리 사용)
* 단점 : 스프레드 연산자는 내부적으로 인자 개수 제한/메모리 부담이 생길 수 있어서, 입력이 커지면 위험
* min, max 를 두 번 순회 -> 한 번의 for문으로 줄일 수 있음
* */
function solution(s) {
  const nums = s.split(' ').map(Number); // split 을 하면 문자열 배열이 되기 때문에 .map(Number)로 명시적 변환
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}

/*
* 두 번째 풀이
* 시간 복잡도 : O(N)
*   ① split(' ') : 문자열 길이를 L이라 하면 → O(L)
*   ② map(Number) : 토큰 개수를 N이라 하면 → O(N)
*   ③ for 루프 : N-1번 반복 → O(N)
* 공간 복잡도 : O(N)
*   split() → 문자열 배열 생성 → O(N)
*   map() → 숫자 배열 생성 → O(N)
*   min, max → O(1)
* */
function secondSolution(s) {
  const arr = s.split(' ').map(Number);

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current < min) min = current;
    if (current > max) max = current;
  }

  return `${min} ${max}`;
}

/* 추가 정리
* | 입력        | Number() | parseInt() |
  | --------- | -------- | ---------- |
  | ""        | 0        | NaN        |
  | "   "     | 0        | NaN        |
  | null      | 0        | NaN        |
  | undefined | NaN      | NaN        |
  | "10px"    | NaN      | 10         |
  | "08"      | 8        | 8          |
* parseInt는 앞에서부터 읽다가 숫자 아닌 게 나오면 멈춘다.
* */