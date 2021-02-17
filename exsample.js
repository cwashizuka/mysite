/* ◆引数 */
const 定数名 = (第1引数, 第2引数, ...) => {
	// 処理
}
/* 関数の呼び出し */
定数名();

/* ◆オブジェクト */
	const 定数名 = 関数()
	↓
	const 定数名 = () =>     /* ←アロー関数 */

const 定数名 = {
	プロパティ名: () => {
		処理
	}
};
/* 関数の呼び出し */
定数名.プロパティ名();

/* ◆オブジェクト */
const 定数名 = {オブジェクト};
オブジェクト→{プロパティ:値, プロパティ:値};
console.log{定数名.プロパティ名}

/* コンストラクタ */
class クラス名{
	constructor(){
	クラスの中に追加	
	}
}

class クラス名{
	constructor() {
		this.プロパティ名 = 値;
	}
}
const クラス名 = new 定数();
console.log(constructorで設定した値);

/* メソッド */
class クラス名{
	constructor(){

	}
	メソッド名(){
		行いたい処理
	}
}

const インスタンス = new 定数(引数1, 引数2);
インスタンス.メソッド()

/* this */
/* メソッド内でインスンタスの値を使用する */
/* this.プロパティ名() */

/* 継承 extends*/
/* class 子クラス extends 親クラス {} */

/* 戻り値　return */

/* コンストラクタのオーバーライド super() */
/* 親クラスのコンストラクタが引数を受け取る場合には、「super」の後ろの丸括弧「( )」に引数を渡す */
/* super(引数) */

/* export default クラス名;　→　エクスポート（出力）*/
/* 他のファイルで定義されているクラスを使用するにはインポート（読込）  →*/
/* import クラス名 from "./ファイル名"; */

/* 値のエクスポート */
/* export default 定数名;   エクスポート  */
/* import 定数名 from "./ファイル名";  インポート */
/* デフォルトエクスポートは1ファイル1つの値のみ */


/* 複数の値をエクスポートしたい場合 「名前付きエクスポート」*/
/* import { 値の名前 } from "./ファイル名"; */
/* export { 名前1, 名前2 };   1つのファイルから複数のエクスポート */


/* 相対パス */
/* ドット1つの「./」  ファイルと同じディレクトリ */
/* 1つ上の階層に戻る場合はドット2つの「../」 */


/* パッケージ */
/* import 定数名 from "パッケージ名";   インポート  パッケージを自分のプログラムで使う */

import chalk from "chalk";
console.log(chalk.yellow("Hello World"));
console.log(chalk.bgCyan("Hello World"));

import readlineSync from "readline-sync";
readlineSync.question("名前を入力してください:");

import readlineSync from "readline-sync";
const name = readlineSync.question("名前を入力してください:");
console.log(`${name}と入力されました`);

/* 整数を入力 */
const age = readlineSync.qewstionlnt("年齢を入力してください:")

/* 学習I～V */

/* 続く */