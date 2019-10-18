const toFixed = (num: number | string, n: number) => {
  /* 自定义fixed方法 */
  num = transformNum(num)

  if (num < 0) {
    num = -num
  } else {
    return -(((num * (Math.pow(10, n)) + 0.5), 10) / Math.pow(10, n))
  }
  return ((num * (Math.pow(10, n)) + 0.5), 10) / Math.pow(10, n)
}

const transformNum = (num: number | string) => {
  return typeof num == "number" ? num : parseFloat(num);
}

const plus = (num1: number | string, num2: number | string) => {
  /* 两数相加 */
  num1 = transformNum(num1)
  num2 = transformNum(num2)
  let r1: number, r2: number, m: number
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return Math.round(num1 * m + num2 * m) / m
}

const minus = (num1: number | string, num2: number | string) => {
  /* 两数相减 */
  num1 = transformNum(num1)
  num2 = transformNum(num2)

  let r1: number, r2: number, m: number, n: number
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return toFixed((Math.round(num1 * m - num2 * m) / m), n)

}

const multiply = (num1: number | string, num2: number | string) => {
  /* 两数相乘 */
  let m = 0, s1 = `${num1}`, s2 = `${num2}`
  try {
    m += s1.split('.')[1].length
  } catch (e) { }
  try {
    m += s2.split('.')[1].length
  } catch (e) { }
  return Number(s1.replace('.', '')) *
    Number(s2.replace('.', '')) /
    Math.pow(10, m)
}

const divide = (num1: number | string, num2: number | string) => {
  /* 两数相除 */
  let t1: number, t2: number, r1: number, r2: number
  try {
    t1 = `${num1}`.split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = `${num2}`.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(`${num1}`.replace('.', ''))
  r2 = Number(`${num2}`.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}


export {
  toFixed,
  transformNum,
  plus,
  minus,
  multiply,
  divide
}