export function handleWord(words) {
  return Array.isArray(words) ? words.join('') : '';
}