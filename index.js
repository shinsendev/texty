exports.convert = function(input, gender, params = {}) {
    return replace(input, gender, params);
}

function replace(input, gender, params) {
    if (!input) {
        return;
    }

    const searchPattern = /(<:.*?>)/gm;
    const regex = new RegExp(searchPattern, 'g');

    function conversion(correspondance, p1, decalage, chaine) {
        let result;

        // is it a dynamic value?
        if ( result = p1.match(/<:([a-z][a-zA-Z]{1}.*?)>/)) {
            return params[result[1]];
        }

        // is it a gender conversion?
        result = p1.match(/<:'(.*)'(,)['\s]*(.*?)'*>/);

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
