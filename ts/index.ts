import { Uu, Uish } from 'pollenium-uvaursi'
import fs from 'fs'
import prompt from 'prompt-promise'


export class Forgetmenot {

  constructor(readonly dirPath: string) {}

  private getPath(key: string) {
    return `${this.dirPath}/${key}.ts`
  }

  private getIsSet(key: string): boolean {
    return fs.existsSync(this.getPath(key))
  }

  async set(struct: { key: string, value: Uish }): Promise<void> {
    const key = struct.key
    const value = Uu.wrap(struct.value)
    const isSet = this.getIsSet(key)
    if (isSet) {
      const answer = await prompt(`${key} is set. Overwrite? (y/n): `)
      if (answer !== 'y') {
        return
      }
    }
    fs.writeFileSync(this.getPath(key),
      `import { Uu } from 'pollenium-uvaursi'`
      + `\nexport const ${key} = Uu.fromHexish('${value.toHex()}')`
    )
    prompt.finish()
  }

}
