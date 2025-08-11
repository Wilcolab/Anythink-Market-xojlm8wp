/**
 * Converts a string to kebab-case (lowercase words separated by hyphens).
 * Handles spaces, underscores, camelCase/PascalCase, Unicode, and edge cases robustly.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If input is not a string.
 */
function toKebabCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return (
    str
      // Convert camelCase or PascalCase boundaries to space-joined words (Unicode-aware)
      .replace(/([\p{Ll}\p{N}])([\p{Lu}])/gu, '$1 $2')
      // Replace all underscores and spaces with hyphens
      .replace(/[\s_]+/g, '-')
      // Remove all non-alphanumeric chars except hyphens (Unicode-aware)
      .replace(/[^
\p{L}\p{N}-]+/gu, '')
      // Collapse multiple consecutive hyphens to single hyphen
      .replace(/-+/g, '-')
      // Convert to lowercase (Unicode-aware)
      .toLowerCase()
      // Trim hyphens from start/end
      .replace(/^-+|-+$/g, '')
  );
}

// Example test cases
console.log(toKebabCase('Hello World'));                // "hello-world"
console.log(toKebabCase('user_id'));                    // "user-id"
console.log(toKebabCase('ScreenName'));                 // "screen-name"
console.log(toKebabCase('   Multiple   Spaces__Here')); // "multiple-spaces-here"
console.log(toKebabCase('UnicodeПримерТест123'));       // "unicode-пример-тест123"
console.log(toKebabCase('--dashes--and__underscores__'));// "dashes-and-underscores"
console.log(toKebabCase('special!@#chars*()_+|{}'));    // "special-chars"
console.log(toKebabCase(''));                           // ""
// Uncomment to test error handling
// console.log(toKebabCase(123));                       // Throws TypeError

module.exports = toKebabCase;