import { makePersistable } from 'mobx-persist-store';

const { getAll } = require('API/api');
const { makeAutoObservable, runInAction } = require('mobx');

class CoronavirusStore {
   isLoading = false;
   statistic = [];
   error = '';
   isShowModal = false;
   userCountry = '';
   filter = '';
   isSort = false;
   page = 1;

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      makePersistable(this, {
         name: 'stats',
         properties: ['statistic'],
         storage: window.localStorage,
      });
   }

   async getStatistic() {
      this.isLoading = true;
      try {
         const statistic = await getAll();
         runInAction(() => (this.statistic = statistic));
      } catch (e) {
         runInAction(() => (this.error = e.message));
      } finally {
         runInAction(() => (this.isLoading = false));
      }
   }

   setIsShowModal(bool) {
      this.isShowModal = bool;
   }

   setUserCountry(userCountry) {
      this.userCountry = userCountry;
   }

   setFilter(value) {
      this.filter = value;
   }

   setSort(value) {
      this.isSort = value;

      const toTop = (a, b) => a - b;
      const toDown = (a, b) => b - a;

      this.isSort
         ? this.statistic.sort(({ cases: { total: a } }, { cases: { total: b } }) =>
              toTop(a, b)
           )
         : this.statistic.sort(({ cases: { total: a } }, { cases: { total: b } }) =>
              toDown(a, b)
           );
   }

   setPage() {
      this.page += 1;
   }

   pagination() {
      const perPage = 8;
      const end = this.page * perPage;

      if (end + perPage >= this.statistic.length) {
         return { end: this.statistic.length, isShowBtn: false };
      }

      return { end, isShowBtn: true };
   }
}

export const coronavirusStore = new CoronavirusStore();
