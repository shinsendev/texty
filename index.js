exports.convert = function(input, gender, params = {}) {
    return replace(input, gender, params);
}

function replace(input, gender, params) {
    const searchPattern = /(<:.*?>)/gm;
    const regex = new RegExp(searchPattern, 'g');

    // const array = [...input.matchAll(searchPattern)];

    function conversion(correspondance, p1, decalage, chaine) {
        console.log(p1);
        console.log(gender);

        // remove tags from code
        // <: 'e', > devient 'e',

        // si '' , '', c'est égal à 'gender' => 'e', ''
        if (gender === 'F') {
            return "e";
        } else {
            return '';
        }
    }


    return input.replace(regex, conversion);
}

