'use strict';

var teams = new Map();
teams.set('LG', '트윈스');
teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');
teams.set('기어', '타이거스');
teams.set('한화', '이글스');
teams.set('롯데', '자이언트');

console.log(teams.has('SK'));
console.log(teams.get('LG'));