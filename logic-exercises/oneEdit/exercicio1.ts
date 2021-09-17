// A diferença entre as duas strings não pode ser maior que 1

// Quando o tamanho for igual, o número de caracteres diferentes não pode ser maior que 1.

// Quando a diferença de tamanho for 1, a menor pode ser inserida na maior.


function isOneEdit(str1: string, str2: string): boolean {
    let len1 = str1.length;
    let len2 = str2.length;

    if((len1) - (len2) > 1 || (len2) - (len1) > 1) {
        return false
    }

    if((len1) > (len2)) {
        return str1.includes(str2)
    }

    if((len2) > (len1)) {
        return str2.includes(str1)
    }

    let i = 0
    let j = 0
    for (i; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            j++
        }
    }

    return j === 1
}