const input = "<p>Vous êtes un<:'es','a'> ancien<:'e',> athlète de haut niveau.</p><p> Malheureusement, vous avez dû renoncer à participer à cause d'une blessure.</p><p>Après la vie vous a rattrapé et vous êtes finalement devenue coach puis gérant.e d'une salle de sport.</p>";

function conversion(correspondance, p1, decalage, chaine) {
    let split = p1.split("'");

    // remove first and last part
    // split = split.slice(1);
    // split.pop();

    console.log(split);
    return 'e';
}

function replace(input) {
    const searchPattern = /(<:.*?>)/gm;
    const searchRegExp = new RegExp(searchPattern, 'g');

    // const array = [...input.matchAll(searchPattern)];
    // console.log(array);

    const replaceWith = "e";

    return input.replace(searchRegExp, conversion);
}

function replaceGender() {
}

console.log("%c" + replace(input), "color:green");
