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