import _ from 'lodash';

export const joinSampleAndResult = (samples: any[], result: any[]): any[] => {
  const resultArray = _.cloneDeep(samples);
  let i = 0;
  while (i <= resultArray.length - 1) {
    resultArray[i].push(result[i]);
    i++;
  }
  return resultArray;
};
