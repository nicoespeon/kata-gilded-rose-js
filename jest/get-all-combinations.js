export function getAllCombinations(paramsList = []) {
  if (paramsList.length === 0) return [];

  const [firstParams, ...rest] = paramsList;
  if (rest.length === 0) return firstParams.map(param => [param]);

  const combinations = [];

  getAllCombinations(rest).forEach(restCombination => {
    firstParams.forEach(param => {
      combinations.push([param].concat(restCombination));
    });
  });

  return combinations;
}
