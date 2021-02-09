exports.convert = function(input, gender, params = {}) {
    return replace(input, gender, params);
}

function replace(input, gender, params) {
    if (!input) {
        return;
    }

    const searchPattern = /(<:(?:if\(.*\).*?|.*?)>)/gm;
    const regex = new RegExp(searchPattern, 'g');

    function conversion(correspondance, p1, decalage, chaine) {
        let result;

        // is it conditional text?
        if (result = p1.match(/<:if\s*\((?<condition>.*?)\)\s*"(?<default>.*?)"\s*,\s*?"(?<else>.*)">/)) {
            return convertCondition(result, params);
        }

        // is it a dynamic value?
        if (result = p1.match(/<:([a-z][a-zA-Z]{1}.*?)>/)) {
            return params[result[1]];
        }

        // is it a gender conversion?
        result = p1.match(/<:'(.*)'(,)['\s]*(.*?)'*>/);

        return convertGender(result, gender);
    }

    return input.replace(regex, conversion);
}

function convertCondition(result, params) {
    let condition = result['groups']['condition'];
    let defaultText = result['groups']['default'];
    let alternativeText = result['groups']['else'];
    let isGranted = checkCondition(condition, params);

    if (isGranted) {
        return defaultText;
    }

    return alternativeText;
}

function checkCondition(condition, params) {
    let parsedCondition = condition.match(/(?<g1>^.*?)\s*(?<comparator>(?:\>|\<|\=){1}[\=]{0,1})\s*(?<g2>\d*)/);
    let g1 = parsedCondition['groups']['g1'];
    let g2 = parsedCondition['groups']['g2'];
    let comparator = parsedCondition['groups']['comparator'];

    if (params[g1]) {
        switch (comparator) {
            case '>':
                return params[g1] > g2;
            case  '<':
                return params[g1] < g2;
            case '=':
                return params[g1] === g2;
            case '<=':
                return params[g1] <= g2;
            case '>=':
                return params[g1] >= g2
        }
    }

    return false;
}

function convertGender(result, gender) {
    if (result[2] === ',') {
        if (gender === 'F') {
            return result[1];
        } else {
            return result[3];
        }
    }
}
