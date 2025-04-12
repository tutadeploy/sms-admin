const a = 'Hello! Your package has arrived, but delivery is pending due to incomplete address information. Please update it here: [https://www.usprhome.com]';

// 计算字符串的字节长度
const calculateByteLength = (str) => {
  const blob = new Blob([str]);
  return blob.size;
};

const byteLength = calculateByteLength(a);
console.log(`字符串的字节长度: ${byteLength} 字节`);