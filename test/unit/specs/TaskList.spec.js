import Vue from 'vue'
import TaskList from '@/components/TalkList'

Vue.config.ignoredElements = ['md-table', 'md-table-head', 'md-table-header', 'md-table-body', 'md-table-row', 'md-table-cell']

describe('TaskList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TaskList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('md-table md-table-head:first-child').textContent)
    .toEqual('Titre')
  })
})
