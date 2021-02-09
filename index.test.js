const texty = require('./index');

test('convert gender when F', () => {
    const input = "<p>Toute votre vie, vous vous êtes occupé<:'e',> des autres, infirmi<:'ère','er'> depuis vos 18 ans, vous avez toujours exercé ce métier sans interruption.</p>";
    const output  = "<p>Toute votre vie, vous vous êtes occupée des autres, infirmière depuis vos 18 ans, vous avez toujours exercé ce métier sans interruption.</p>";
    expect(texty.convert(input, 'F', {})).toBe(output);
})

test('convert gender when M', () => {
    const input = "<p>Toute votre vie, vous vous êtes occupé<:'e',> des autres, infirmi<:'ère','er'> depuis vos 18 ans, vous avez toujours exercé ce métier sans interruption.</p>";
    const output  = "<p>Toute votre vie, vous vous êtes occupé des autres, infirmier depuis vos 18 ans, vous avez toujours exercé ce métier sans interruption.</p>";
    expect(texty.convert(input, 'M')).toBe(output);
})

test('convert dynamic text', () => {
    const input = "<:name> is a person.";
    const output = "Okita is a person.";
    expect(texty.convert(input, 'F', {"name": "Okita"})).toBe(output);
})

test('convert conditional text', () => {
    const input = '<:if(sanity > 4)"You read the article", "You try to read but you don\'t understand anything">!!!';
    const output = 'You read the article!!!';
    const output2 = 'You try to read but you don\'t understand anything!!!';
    expect(texty.convert(input, 'M', {"sanity": 6})).toBe(output2);
})