module.exports = function toReadable(number) {
    let cifr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]



    let cifrb = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]
    let chislo = number;
    let hundred = 'hundred';

    let len = number.toString().length;

    if (number < 10) {
        return cifr[number];
    } else
        if (number < 20) {
            return cifr[number];
        } else
            if (number < 100) {

                let z = number + '';
                z = z.split('');
                cifr[z[1]] = ' ' + cifr[z[1]];
                if (cifr[z[1]] == ' zero') cifr[z[1]] = '';
                return cifrb[z[0]] + cifr[z[1]];
            }
            else
                if (number < 1000) {
                    let z = number + '';
                    z = z.split('');



                    z[0] = cifr[z[0]] + ' hundred '

                    if (z[1] == 0 && z[2] == 0) {
                        return z[0].substring(0, z[0].length - 1);

                    }
                    else if (z[1] == 0) {
                        z[1] = z[2];
                        return z[0] + cifr[z[1]]

                    } else if (z[1] == 1) {
                        z[1] = z[1] + '' + z[2];
                        return z[0] + cifr[z[1]]

                    } else {
                        cifr[z[2]] = ' ' + cifr[z[2]];
                        if (cifr[z[2]] == ' zero') cifr[z[2]] = '';
                        return z[0] + cifrb[z[1]] + cifr[z[2]];
                    }
                }
}
