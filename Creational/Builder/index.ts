enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg',
}

interface IResolution {
  width: number
  height: number
}

interface IImageConversion extends IResolution {
  format: ImageFormat
}

class ImageBuilder {
  private formats: ImageFormat[] = []
  private resoltions: IResolution[] = []

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) return this
    this.formats.push(ImageFormat.Png)
    return this
  }

  addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) return this
    this.formats.push(ImageFormat.Jpeg)
    return this
  }

  addResolution(width: number, height: number) {
    this.resoltions.push({ width, height })
    return this
  }

  build(): IImageConversion[] {
    const result: IImageConversion[] = []
    for (const resoltion of this.resoltions) {
      for (const format of this.formats) {
        result.push({
          format,
          width: resoltion.width,
          height: resoltion.height,
        })
      }
    }
    return result
  }
}

console.log(
  new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(1920, 1080)
    .addResolution(600, 400)
    .build()
)
