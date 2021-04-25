export const arrayToCsvString = (arrays: any[][]): string => {
  let output = '';
  for (const array of arrays) {
    const row = array.join(',');
    output = output + row + '\n';
  }
  return output;
};
