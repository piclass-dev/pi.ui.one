export class colorMatch {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }
}

export class rgbColor {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

export class graColorTable {
  constructor(colorList) {
    this.colorArray = new Array();
    for (var i = 1; i <= colorList.length - 1; i++) {
      var section = colorList[i].position - colorList[i - 1].position;
      var stepR = (colorList[i].color.r - colorList[i - 1].color.r) / section;
      var stepG = (colorList[i].color.g - colorList[i - 1].color.g) / section;
      var stepB = (colorList[i].color.b - colorList[i - 1].color.b) / section;
      for (var j = 0; j <= section; j++) {
        this.colorArray.push(new rgbColor(parseInt(colorList[i - 1].color.r + stepR * j), parseInt(colorList[i - 1].color.g + stepG * j), parseInt(colorList[i - 1].color.b + stepB * j)))
      }
    }
  }
}
