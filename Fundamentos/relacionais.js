Console.log('01)', '1' == 1)
Console.log('02)', '1' === 1)
Console.log('03)', '3' != 3)
Console.log('04)', '3' !== 3)

Console.log('05)', 3 < 2)
Console.log('06)', 3 > 2)
Console.log('07)', 3 <= 2)
Console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
Console.log('09)', d1 === d2)
Console.log('10)', d1 == d2)
Console.log('11)', d1.getTime() === d2.getTime())

Console.log('12)', undefined == null)
Console.log('13)', undefined === null)