import { mount } from 'vue-test-utils'
import TalkList from '@/components/TalkList'
import store from '@/store'

let wrapper

describe('TalkList', () => {
  beforeEach(() => {
    wrapper = mount(TalkList)
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render correct contents', () => {
    const fistHeadValue = wrapper.find('md-table md-table-head:first-child')

    expect(fistHeadValue.text()).toBe('Titre')
  })

  it('should render correct first data cells', () => {
    const firstCellData = store.state.jsTalkData[0]
    const firstCellBody = wrapper.find('md-table md-table-row:first-child md-table-cell:first-child')

    expect(firstCellBody.text()).toBe(firstCellData.title)
  })
})
