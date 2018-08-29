import Vue from 'vue';
import Vuex from 'vuex';

import { getItem, setItem } from './utils/index';
import request from './utils/request';
import { 
  SET_SUBJECTS, 
  UPDATE_FORMS, 
  SET_STORE,
  GET_STORE, 
} from './utils/mutation-types.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    store: null,
    subjectList: [], // 存储科目列表 [{ id: 1, name: '国学' }]
    forms: {
      mobile: '', // 手机号
      sms: '', // otpcode
      person: '', // 联系人
      age: '', // 年龄
      amt: '', // 费用
      subed: {}, // 选择的科目 {id: {id: 1, name: '国学'}}
    },
  },
  mutations: {
    [SET_STORE](state, { store }) {
      if (typeof store != 'object') return;

      state.store = store;
      setItem('store', store);
    },
    [GET_STORE](state, {}) {
      state.store = state.store || getItem('store');
    },
    [SET_SUBJECTS](state, { list }) {
      state.subjectList = list;
    },
    [UPDATE_FORMS](state, { attr }) {
      state.forms = { ...state.forms, ...attr };
      setItem('forms', state.forms);
    }
  },
  actions: {
    async getSubject({ commit, state }, { storeId }) {
      const params = {
        data: {
          storeId,
        }
      };
      await request.ajax('/selections/get-store-subjects', params).then(res => {
        if (res && res.code == 0) {
          commit('SET_SUBJECTS', { list: res.data.subjects });
        }
      });
    }
  },
});
