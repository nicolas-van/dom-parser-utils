
import * as dpu from './index'

test('base', () => {
  const elem = dpu.htmlElement('<div></div>')
  expect(elem).toBeDefined()
})
