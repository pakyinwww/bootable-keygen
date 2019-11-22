namespace we {
  export namespace ba {
    export class BABigRoadIcon extends BARoadIconBase {
      private iconFaceArr: egret.DisplayObjectContainer[];
      private iconText: egret.TextField;
      private playerDot: egret.Shape;
      private bankerDot: egret.Shape;
      private iconFace: egret.DisplayObjectContainer;
      private tieLine: egret.Shape;
      private playerDotDark: egret.Shape;
      private bankerDotDark: egret.Shape;
      private tieLineDark: egret.Shape;

      public constructor(size: number = 30) {
        super(size);
        this.initGraphics();
        this.setByObject({});
      }

      protected initGraphics() {
        this.iconFaceArr = new Array<egret.DisplayObjectContainer>();
        this.iconFace = new egret.DisplayObjectContainer();
        this.iconText = new egret.TextField();
        this.tieLine = new egret.Shape();
        this.playerDot = new egret.Shape();
        this.bankerDot = new egret.Shape();
        this.tieLineDark = new egret.Shape();
        this.playerDotDark = new egret.Shape();
        this.bankerDotDark = new egret.Shape();

        this.addChild(this.iconFace);
        this.addChild(this.tieLine);
        this.addChild(this.tieLineDark);
        this.addChild(this.iconText);
        this.addChild(this.playerDot);
        this.addChild(this.bankerDot);
        this.addChild(this.playerDotDark);
        this.addChild(this.bankerDotDark);

        const colors = [0xdd0000, 0x0000dd, 0xaa0000, 0x0000aa];
        const iconSize = this.size;
        const circleRadius = (this.size / 2) * 0.8;
        const offset = (iconSize - circleRadius * 2) / 2;

        // const tfStroke = [0xffffff, 0xffffff, 0xffffff]

        // draw the dark modes
        for (let d = 0; d < 2; d++) {
          // draw the icon faces
          for (let i = 0; i < 2; i++) {
            const face = new egret.DisplayObjectContainer();
            const circle = new egret.Shape();
            circle.graphics.lineStyle(3, colors[i + d * 2], 1, true);
            circle.graphics.drawCircle(circleRadius + offset, circleRadius + offset, circleRadius);
            circle.graphics.endFill();
            face.addChild(circle);
            face.visible = false;
            this.iconFaceArr.push(face);
            this.iconFace.addChild(face);
          }
        }

        // draw the icon text
        this.iconText.textAlign = egret.HorizontalAlign.CENTER;
        this.iconText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.iconText.textColor = 0x000000; // colors[2];
        this.iconText.text = '2';
        this.iconText.width = this.size;
        this.iconText.height = this.size;
        this.iconText.size = Math.floor(this.size * 0.5);
        this.iconText.fontFamily = 'Helvetica';

        // draw the tie line
        this.tieLine.graphics.lineStyle(4, 0xffffff, 1, true);
        this.tieLine.graphics.moveTo(iconSize - offset, offset * 4);
        this.tieLine.graphics.lineTo(offset * 4, iconSize - offset);
        this.tieLine.graphics.lineStyle(2, 0x00aa00, 1, true);
        this.tieLine.graphics.moveTo(iconSize - offset, offset * 4);
        this.tieLine.graphics.lineTo(offset * 4, iconSize - offset);

        this.tieLineDark.graphics.lineStyle(4, 0xffffff, 1, true);
        this.tieLineDark.graphics.moveTo(iconSize - offset, offset * 4);
        this.tieLineDark.graphics.lineTo(offset * 4, iconSize - offset);
        this.tieLineDark.graphics.lineStyle(2, 0x00aa00, 1, true);
        this.tieLineDark.graphics.moveTo(iconSize - offset, offset * 4);
        this.tieLineDark.graphics.lineTo(offset * 4, iconSize - offset);

        const dotRadius = iconSize * 0.15;
        const dotOffset = iconSize * 0.2;
        this.bankerDot.graphics.lineStyle(1, 0xffffff, 1);
        this.bankerDot.graphics.beginFill(0xff0000, 1);
        this.bankerDot.graphics.drawCircle(dotOffset, dotOffset, dotRadius);
        this.bankerDot.graphics.endFill();

        this.bankerDotDark.graphics.lineStyle(1, 0xffffff, 1);
        this.bankerDotDark.graphics.beginFill(0xff0000, 1);
        this.bankerDotDark.graphics.drawCircle(dotOffset, dotOffset, dotRadius);
        this.bankerDotDark.graphics.endFill();

        this.playerDot.graphics.lineStyle(1, 0xffffff, 1);
        this.playerDot.graphics.beginFill(0x0000ff, 1);
        this.playerDot.graphics.drawCircle(iconSize - dotOffset, iconSize - dotOffset, dotRadius);
        this.playerDot.graphics.endFill();

        this.playerDotDark.graphics.lineStyle(1, 0xffffff, 1);
        this.playerDotDark.graphics.beginFill(0x0000ff, 1);
        this.playerDotDark.graphics.drawCircle(iconSize - dotOffset, iconSize - dotOffset, dotRadius);
        this.playerDotDark.graphics.endFill();
      }

      public setByObject(value: any) {
        this.reset();

        if (value.V != null) {
          const useDarkMode = this.darkModeNumber === 0 ? 0 : 2;

          if (value.V === 'b') {
            this.iconFaceArr[0 + useDarkMode].visible = true;
          } else if (value.V === 'p') {
            this.iconFaceArr[1 + useDarkMode].visible = true;
          }

          if (this.darkModeNumber === 0) {
            if (!value.T) {
              //
            } else if (value.T > 1) {
              this.tieLine.visible = true;
              this.iconText.text = value.T;
            }
            this.bankerDot.visible = value.B === 1;
            this.playerDot.visible = value.P === 1;
          } else {
            if (!value.T) {
              //
            } else if (value.T > 1) {
              this.tieLineDark.visible = true;
              this.iconText.text = value.T;
            }
            this.bankerDotDark.visible = value.B === 1;
            this.playerDotDark.visible = value.P === 1;
          }
        }
      }

      public reset() {
        for (const face of this.iconFaceArr) {
          face.visible = false;
        }
        this.iconText.text = '';

        this.tieLine.visible = false;
        this.bankerDot.visible = false;
        this.playerDot.visible = false;

        this.tieLineDark.visible = false;
        this.bankerDotDark.visible = false;
        this.playerDotDark.visible = false;
      }
    }
  }
}
