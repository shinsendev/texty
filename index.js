exports.convert = function(input, gender, params = {}) {
    return replace(input, gender, params);
}

function replace(input, gender, params) {
    const searchPattern = /(<:.*?>)/gm;
    const regex = new RegExp(searchPattern, 'g');

    // const array = [...input.matchAll(searchPattern)];

    function conversion(correspondance, p1, decalage, chaine) {
        const result = p1.match(/<:'(.*)'(,)'*(.*?)'*>/);

        // if it is a ', it means it's a gender conversion
        if (result[2] === ',') {
            if (gender === 'F') {
                return result[1];
            } else {
                return result[3];
            }
        }
    }

    return input.replace(regex, conversion);
}

