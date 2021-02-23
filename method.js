/*  const 定数 = 配列.メソッド((引数) => 処理) */


/* push */
/* 配列の最後に新しい要素を追加するメソッド */

/* forEach */
/* 配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッド */
/* 配列内の要素が1つずつ順番にアロー関数の引数に代入され、処理が繰り返し実行されます。 */
/* 配列 = [要素1, 要素2, 要素3]; */
/* 配列.forEach((引数) => {処理}) */
const numbers = [1,2,3];
numbers.forEach((number) => {console.log(number);});
/*              |→　　　　　コールバック関数　　　  ←| */
numbers.forEach((number) => {
    console.log(number);
});

/* find */
/* 条件式に合う1つ目の要素を配列の中から取り出すメソッド */
const numbers = [1, 3, 5, 7];
const foundNumber = numbers.find((number) => {
    return number > 3;
});
console.log(fondNumber);
/* 3より大きい1つ目の要素である5がfoundNumberに代入されコンソールに出力 */
/* findメソッドは条件に合う要素が見つかった時に終了するので、条件に合う最初の1つの要素しか取り出せません。 */

/* 配列の要素がオブジェクトの場合もfindメソッドを使うことができます。 */
const characters = [
    {id : 1, name: "にんじゃわんこ"},
    {id : 2, name: "ひつじ仙人"}
];
const foundCharacter = characters.find((character /* オブジェクト */)　=> {
    return character.id === 1; /* オブジェクトのプロパティ */
});
console.log(foundCharacter);

/* filter */
/* 記述した条件に合う要素のみを取り出して新しい配列を作成するメソッド */
/* 「3より大きい数字」をすべて取り出し */
const numbers = [1, 3, 5, 7];
const filteredNumbers = numbers.filter((number) => {
    return number > 3;
});
console.log(filteredNumbers);

/* 配列の要素がオブジェクトの場合もfilterメソッドを使う */
const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ベイビーわんこ", age: 5},
    {name: "ひつじ仙人", age:100}
];
const filteredCharacters = characters.filter((character /* オブジェクト */)　=> {
    return character.age > 10; /* オブジェクトのプロパティ */
});
console.log(filteredCharacters);


/* map */
/* 配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッド */
/* 配列numbersの全ての要素を2倍した要素を持つ、新しい配列を作成 */

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(doubledNumbers);

/* mapメソッドもこれまでのメソッドと同様に、配列のオブジェクト要素に対しても使うことができます。 */
/* mapでfirstNameプロパティとlastNameプロパティを繋げる処理 */
const names = [
    {firstName: "Kate", lastName: "Jones"},
    {firstName: "Brian", lastName: "smith"}
];
const fullNames = names.map((name) => {
    return name.firstName + name.lastName;
});
console.log(fullNames);
