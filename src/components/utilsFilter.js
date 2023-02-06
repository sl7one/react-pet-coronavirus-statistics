export const utilsFilter = (sorted, list, filter) => {
  let result = [];

  if (sorted !== 'init') {
    result = [
      ...list.sort(({ TotalConfirmed: a }, { TotalConfirmed: b }) => {
        return sorted ? Number(a) - Number(b) : Number(b) - Number(a);
      }),
    ];
  } else {
    // eslint-disable-next-line
    result = list;
  }

  if (!filter) {
    return list;
  } else {
    return list.filter(({ Country: country }) =>
      country.toLowerCase().includes(filter.toLowerCase())
    );
  }
};
