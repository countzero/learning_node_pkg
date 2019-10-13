/**
 * Wraps an input with two guillemets.
 *
 * @param  {String} input The raw text input.
 * @return {String}       The wrapped text.
 */
const quote = function (input) {
    return `« ${input} »`;
}

module.exports = {
    quote,
};
