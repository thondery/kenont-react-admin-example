import group from './group'
import _ from 'lodash'

export default [
  {
    id         : 1,
    _id        : '59eff898ad11d6623959289a',
    username   : 'admin',
    email      : 'admin@xx.com',
    password   : 'admin888',
    accesskey  : '3c5d1893-546b-4292-9616-240772e4d655',
    createAt   : '2017-10-25T02:36:08.032Z',
    group      : _.find(group, { id: 1 })
  }
]