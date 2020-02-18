import { Uu, Uish } from 'pollenium-uvaursi'
import fs from 'fs'
import prompt from 'prompt-promise'

export class Forgetmenot {

  constructor(readonly dirPath: string) {}

  getPath(key: string) {
    return `${this.dirPath}/${key}.hex.js`
  }

  getIsSet(key: string): boolean {
    return fs.existsSync(this.getPath(key))
  }

  get(key: string): Uu | null {
    if (!this.getIsSet(key)) {
      return null
    }
    const hex = require(this.getPath(key))
    return Uu.fromHexish(hex)
  }

  async set(key: string, value: Uish): Promise<void> {
    const currentValue = this.get(key)
    if (currentValue !== null) {
      const answer = await prompt(`${key} is set to ${currentValue.toHex()}. Override? (y/n): `)
      if (answer !== 'y') {
        return
      }
    }
    fs.writeFileSync(this.getPath(key), `module.exports = '${Uu.wrap(value).toHex()}'`)
  }

}
