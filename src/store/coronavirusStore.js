import { makePersistable } from 'mobx-persist-store';

const { getAll } = require('API/api');
const { makeAutoObservable, runInAction } = require('mobx');

class CoronavirusStore {
   isLoading = false;
   statistic = [];
   error = '';
   isShowModal = false;
   userTarget = {};
   filter = '';
   isSort = false;

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

   setIsShowModal(bool, countryInfo = {}) {
      this.isShowModal = bool;
      this.userTarget = countryInfo;
   }

   setFilter(value) {
      this.filter = value;
   }

   setSort(value) {
      this.isSort = value;
   }
}

export const coronavirusStore = new CoronavirusStore();
