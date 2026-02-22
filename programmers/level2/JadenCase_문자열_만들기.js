// 처음 풀이 🚫
function solution(s) {
  // 문자열 -> 배열화 (틀린 이유 : 다시 합칠 때 공백을 복원해줘야 하는데 그 로직이 빠짐)
  const arr = s.split(' ');
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    // 문자열 중간에 공백이 연속으로 나올 경우 (나름) 그 공백을 유지하려고 넣은 로직
    if (arr[i] === '') answer += arr[i];
    // 첫 글자가 숫자일 경우 그냥 넘어가기 위한 로직 (틀린 이유 : arr[i][0]는 항상 string이다. typeof '1' 은 'string'
    if (typeof arr[i][0] === 'number') answer += arr[i];
    // 첫 글자가 문자일 경우 대문자로 바꾸고 추가하려는 로직 (틀린 이유 : 문자열을 배열처럼 인덱스로 각 문자에 접근할 경우 '읽기 전용'이라 값을 바꾸려 해도 무시됨)
    if (typeof arr[i][0] === 'string') {
      arr[i][0].toUpperCase();
      answer += arr[i];
      // 의도대로 하려면 : arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    // 첫 글자만 처리하면 끝이 아님. 나머지 알파벳은 소문자 처리가 필요함.
  }

  return answer
}

/* 두 번째 풀이
* 주요 아이디어 : 문자열을 split 하지 않고 한 글자씩 꺼내서 순회하며 처리한다.
* 문제 유형 : 문자열 변환
* 시간 복잡도 : O(N) -> 문자열 길이 N번 만큼 for 루프가 돈다
* 공간 복잡도
*   결과 문자열(answer) : O(N) (입력 길이 N에 비례하는 결과 문자열을 생성하므로)
*   그 외 보조 변수(isStart, ch, i) : O(1) (고정 개수, 즉 상수 개수이므로)
* */
function secondSolution(s) {
  let answer = '';
  let isStart = true; // 단어의 시작인가?

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // 공백일 경우 (연속 공백도 처리 가능)
    if (ch === ' ') {
      answer += ' ';
      isStart = true; // 공백 이후에는 단어 첫 글자가 나오므로 true 처리
      continue; // 현재 반복의 나머지 부분을 건너뛰고 반복문의 다음 순환으로 즉시 이동
    }

    if (isStart) {
      // 단어 첫 글자: 알파벳이면 대문자, 숫자면 그대로
      answer += ch.toUpperCase(); // 숫자일 경우 '3'.toUpperCase() 처리가 되므로 에러가 안나고 그대로 '3'이 반환됨
      isStart = false;
    } else {
      // 단어 나머지: 무조건 소문자
      answer += ch.toLowerCase(); // 나머지에 대문자가 있을 수 있으므로 소문자 처리 필수!
    }
  }

  return answer;
}