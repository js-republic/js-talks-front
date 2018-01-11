import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import * as types from '@/store/types'
import { state } from '@/store/mutations'
import TalkList from '@/components/TalkList'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store

const fakeStore = {
  state,
  getters: {
    [types.TALKS]: ({talks}) => talks
  },
  mutations: {},
  actions: {},
  strict: true
}

describe('TalkList', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = shallow(TalkList, { localVue, store })
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render correct contents', () => {
    const fistHeadValue = wrapper.find('md-table md-table-head:first-child')

    expect(fistHeadValue.text()).toBe('Titre')
  })

  it('should render correct first data cells', () => {
    console.log(store.state.talks)
    const firstCellData = store.state.talks[0]
    const firstCellBody = wrapper.find('md-table-cell:first-child')

    expect(firstCellBody.text()).toBe(firstCellData.title)
  })
})
