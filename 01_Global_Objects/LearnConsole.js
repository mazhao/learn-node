// global object
// 主要学习console的方法
// log ([data], )
// info == log
// error == log but prints to stderr
// warn == error
// dir
// time
// timeEnd
// trace
// assert

// step 1: console.log, console.info, console.error, console.warn, console.trace
var count = 5;
console.log("the count is %d", count);
console.info("the count is %d", count);
console.error("the count is %d", count);
console.warn("the count is %d", count);
console.trace("the count is %d", count);



// step 2: console.dir

var person = {
    name: "Mickale",
    gender: "M",
    address: {
        country: "china",
        province: "zhejiang",
        detailAddress: {  // depth >=2 时候才可以展开输出的对象
            a: " xxx ",
            b: " yyy "
        }
    }
};

// non-enumerable property 定义
Object.defineProperty(person, "hiddenProp", {value: "yes I'm hidden, so TM what! ", enumerable: false});

/* depth */

console.log("depth:1")
console.dir( person, {showHidden: true, depth: 1, colors: true});

console.log("depth:2");
console.dir( person, {showHidden: true, depth: 2, colors: true});


/* colors */
console.log("colors: false");
console.dir(person, {showHidden:true, depth: 2, colors: false});

/* showHidden */

console.log("showHidden:false");
console.dir(person, {showHidden: false, depth: 2, colors: true});

console.log("showHidden:true");
console.dir(person, {showHidden: true, depth:2, colors:true});


console.time('1000-elements');
for (var i = 0; i < 10; i++) {
    console.time("100-elements");
    for (var j = 0; j < 100; j++) {
        ;
    }
    console.timeEnd("100-elements");
}
console.timeEnd('1000-elements');

// label 不存在的时候会输出错误信息
// Error: No such label: 10000-elements
//at Console.timeEnd (console.js:85:11)

console.assert(true, "assert true");
console.assert(false, "assert false");