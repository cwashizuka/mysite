/* コールバック関数 */
/* 関数名(引数); */
/* 引数に渡される関数 
文字列
数値
真偽値
関数
*/

/*
const call = (引数名) => {　　関数が引数に代入される
    処理
};
call (関数名);  関数を引数に渡す
*/
const printWanko = () => {
    console.log("忍者わんこ");
};

const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    callback(); /* 関数が呼び出される */
};

call(printWanko /* 関数の定義そのものを指す */);


/* 関数を直接引数の中で定義する */
const call = (callback)　/* 2.関数をcallbackに代入 */ => {
    console.log("コールバック関数を呼び出します。");
    callback();　/* 3.関数callbackを呼び出す */
};

call(() => {　　　/* 1. 引数で関数を定義して関数callを呼び出す */
    conasole.log("忍者わんこ")
}); 



const printWanko = () => {
    console.log("にんじゃわんこ");
  };
  
  const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    callback();
  };
  
  call(printWanko);
  
  // 引数で関数を定義して渡してください
  call(() => {
    console.log("ひつじ仙人");
  });

/* コールバック関数で、引数を渡す */
/* 普通の関数 */
const introduce = (name) => {
    console.log(name);
};
introduce("忍者わんこ")

/* コールバック関数 */
const introduce = (callback) => {
    callback("忍者わんこ");
}
introduce ((name) => {
    console.log(name);
});

/* ２つ以上の引数を渡し */
const introduce = (callback) => {
    callback("にんじゃわんこ", 14);  /* 引数を2つ渡している */
};
introduce((name, age) => {　　/* 引数を2つ受け取る関数を定義 */
    console.log(`${name}は${age}歳です。`);
});


/*  */
var height = 1.67;
var weight = 64;

// この下にコードを書いてください
console.log(`BMIは${weight / height / height}です。`);

console.log(`適正体重は${height * height * 22}gです`);