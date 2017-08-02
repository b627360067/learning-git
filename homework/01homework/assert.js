/**
 * Created by QC.L on 2017/4/20.
 */

const assert = require('0404NodeJS/homework/01homework/assert');
// assert(value 表达式如果表达是不成立 抛出 ','后面的字符串,)
console.assert(1 !== 100, '1绝对不等于100');
//
var a = 2;
var b = 3;
// assert.deepEqual:
// 测试第一个参数是否==第二个参数,如果相等什么都不会抛出,
// 如果不相等抛出AssertionError: 2 deepEqual 3
//
// assert.deepEqual(a,b);
//
//
// assert.deepStrictEqual:
// 他和上面的一样,但是他判断用的是===
// assert.deepStrictEqual(a,b);
//
//
// assert.doesNotThrow
// 第一个参数是function,第三个参数和第二个参数比较类型
// 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者。
// assert.doesNotThrow(function () {
//     console.log(a);
// },TypeError,'aaaa');
//
//
// 判断参数1和参数2是否相等 判断用的是==,不相等抛出AssertionError: 2 == 3
// assert.equal(a,b);
//
// assert.fail会在AssertionError抛出第三个参数
//  判断第三个参数是否是错误的，如果是错误的则抛出错误信息 　
// 如果第三个参数为正确的，那么抛出信息为第三个参数的错误信息。
// assert.fail(a, b, '错误信息', '<');
//
//
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
// assert.ifError(1);
// 测试是否不深度相等。 与 assert.deepEqual() 相反。
// assert.notDeepEqual(a, b);
//
// 测试是否不深度全等。 与 assert.deepStrictEqual() 相反。
// assert.notDeepStrictEqual(a,b);
//
//
//
// 抛出AssertionError: 2 !== 2
// 使用不等运算符（!=）测试是否不相等。
// assert.notEqual(a,b);
// assert.notStrictEqual(a,b);
//
// 括号里的值要是true不提示,如果为false就会提示参数2
// AssertionError: aaa
// assert.ok(0,'aaa');
//
// 使用全等运算符（===）测试是否全等。
// assert.strictEqual(a,b);
//
//
//
// assert.throws(参数1:一定要是个函数, 这里面要写一个正则, 写句话,写什么都行)
// 第二个参数可以是构造函数、正则表达式、或自定义的验证函数
// 如果指定了 第三个参数，则当 block 不抛出错误时，
// 第三个参数 会作为 AssertionError 的错误信息
// assert.throws(function () {
//  console.log(a);
//  },/错了/,'aaaa');

