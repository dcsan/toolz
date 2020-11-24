
import { readCsvFile } from '../FileUtils'
const debug = require('debug-levels')('TestRunner')

test('loading csv', async () => {
  let blob: any[] = await readCsvFile('../data/inputs/test.csv', __dirname)
  debug.log('blob', blob)
  expect(blob[0].tag).toBe('READ')
  expect(blob[0].text).toBe('I need to read more')
})

