module.exports = function toReadable (n) {
      let str = '';
    let count = n.toString().length;
    if (n === 0) return "zero";


    let digits = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",

    }
    switch (count) {
        case 1: {
            str = digits[n];
            break;
        }
        case 2: {
            if (n <= 20) str = digits[n];
            else if (n % 10 === 0) str = digits[n];
            else str = digits[Math.trunc(n / 10) * 10] + " " + digits[n % 10];
            break;
        }
        case 3: {
            if (n % 100 === 0) str = digits[Math.trunc(n / 100)] + " " + digits[100];
            else if ((Math.trunc(n / 10) % 10) === 1) str = digits[Math.trunc(n / 100)] + " " + digits[100] + " " + digits[n % 100];
            else if (n % 10 === 0) str = digits[Math.trunc(n / 100)] + " " + digits[100] + " " + digits[n % 100];
            else if (Math.trunc(n / 10) % 10 === 0) str = digits[Math.trunc(n / 100)] + " " + digits[100] + " " + digits[n % 10];
            else str = digits[Math.trunc(n / 100)] + " " + digits[100] + " " + digits[(Math.trunc(n / 10) % 10) * 10] + " " + digits[n % 10];
            break;
        }
        default: break;
    }
    return str;
}
