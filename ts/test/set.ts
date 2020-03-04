import { Forgetmenot } from '../'
import { Uu } from 'pollenium-uvaursi'

const forgetmenot = new Forgetmenot(`${__dirname}/../../ts/test/db`)

forgetmenot.set({
  key: 'x',
  value: Uu.genRandom(4)
})
