export const getDate = ({ year: y, indexMonth: m, day: d }) => {
   const dateMilliseconds = new Date(y, m, d);
   const year = dateMilliseconds.getFullYear();
   const month = String(dateMilliseconds.getMonth() + 1).padStart(2, '0');
   const day = String(dateMilliseconds.getDate()).padStart(2, '0');

   return `${year}-${month}-${day}`;
};
