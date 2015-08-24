// new Buffer(size) size <= kMaxLength
// new Buffer(array)
// new Buffer(buffer)
// new Buffer(str[, encoding]) encoding default to utf8
//
//========================
// Class Method
//========================
// Buffer.isEncoding(encoding)
// Buffer.isBuffer(buffer)
// Buffer.byteLength(string[, encoding])

str = '\u00bd + \u00bc = \u00be';

console.log(str + ": " + str.length + " characters, " +
    Buffer.byteLength(str, 'utf8') + " bytes");

// Buffer.concat(list[, totalLength])

// Buffer.compare(buf1, buf2)
//  - same as buf1.compare(buf2)

//========================
// Instance Method
//========================

// buf.length Buffer一旦初始化就不能再修改长度,所以length这个属性不可以修改,修改后会造成不可预期的结果(代码内部处理的不一致).

buf = new Buffer(1234);
console.log(buf.length);

buf.write("some string", 0, "ascii");
console.log(buf.length);

buf = new Buffer(10);
buf.write("abcdefghj", 0, "ascii");
console.log(buf.length); // 10
buf = buf.slice(0,5);
console.log(buf.length); // 5

// buf.write(string[, offset][, length][, encoding])#
buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));




// buf.writeUIntLE(value, offset, byteLength[, noAssert])#
// buf.writeUIntBE(value, offset, byteLength[, noAssert])#
// buf.writeIntLE(value, offset, byteLength[, noAssert])#
// buf.writeIntBE(value, offset, byteLength[, noAssert])#
var b = new Buffer(6);
b.writeUIntBE(0x1234567890ab, 0, 6);
console.log(b);

// buf.readUIntLE(offset, byteLength[, noAssert])#
// buf.readUIntBE(offset, byteLength[, noAssert])#
// buf.readIntLE(offset, byteLength[, noAssert])#
// buf.readIntBE(offset, byteLength[, noAssert])#
b = new Buffer(6);

b.writeUInt16LE(0x90ab, 0);
b.writeUInt32LE(0x12345678, 2);
var str = b.readUIntLE(0, 6).toString(16);
console.log(str);


b = new Buffer(6);

b.writeUInt16BE(0x90ab, 0);
b.writeUInt32BE(0x12345678, 2);
var str = b.readUIntLE(0, 6).toString(16);
console.log(str);

//  buf.toString([encoding][, start][, end])
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97; // 97 is ASCII a
}
console.log(buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5)); // outputs: abcde
console.log(buf.toString('utf8',0,5)); // outputs: abcde
console.log(buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// buf.toJSON()
var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
// '{"type":"Buffer","data":[116,101,115,116]}'

var copy = JSON.parse(json, function(key, value) {
    return value && value.type === 'Buffer'
        ? new Buffer(value.data)
        : value;
});

console.log(copy);

// buf[index]
str = "node.js";
buf = new Buffer(str.length);

for (var i = 0; i < str.length ; i++) {
    buf[i] = str.charCodeAt(i);
}

console.log(buf);
console.log(buf.toString("utf8"));

// buf.equals(otherBuffer)
// buf.compare(otherBuffer)
// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]);

buf1 = new Buffer(26);
buf2 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
    buf1[i] = i + 97; // 97 is ASCII a
    buf2[i] = 33; // ASCII !
}

buf1.copy(buf2, 8, 16, 20);
console.log(buf2.toString('ascii', 0, 25));

//
buf = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97; // 97 is ASCII a
}

buf.copy(buf, 0, 4, 10);
console.log(buf.toString());

// buf.slice([start][, end])

var buf1 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
    buf1[i] = i + 97; // 97 is ASCII a
}

var buf2 = buf1.slice(0, 3);
console.log(buf2.toString('ascii', 0, buf2.length));
buf1[0] = 33;
console.log(buf2.toString('ascii', 0, buf2.length));


//buf.readUInt8(offset[, noAssert])#
var buf = new Buffer(4);

buf[0] = 0x3;
buf[1] = 0x4;
buf[2] = 0x23;
buf[3] = 0x42;

for (ii = 0; ii < buf.length; ii++) {
    console.log(buf.readUInt8(ii));
}


