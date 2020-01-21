namespace we {
  export namespace ui {
    export class BetChip extends core.BaseEUI implements eui.UIComponent, IBetChip {
      protected _value: number;
      protected _chipImage: eui.Image;
      protected _chipValueLabel: ui.LabelImage;
      protected _type: we.core.ChipType;
      protected _highlight: boolean;
      protected _glowFilter: egret.GlowFilter;

      protected _index: number;

      public constructor(value: number = null, index: number = null, type: we.core.ChipType = we.core.ChipType.CLIP, highlight: boolean = false) {
        super('BetChip');
        this._value = value;
        this._index = index;
        this._type = type;
        this._highlight = highlight;
        this.setGlowFilter();
      }

      protected reviseError() {
        this._chipValueLabel.verticalCenter = -0.03 * this.height;
      }

      protected setGlowFilter(
        color: number = 0x33ccff,
        alpha: number = 0.8,
        blurX: number = 35,
        blurY: number = 35,
        strength: number = 2,
        quality: number = egret.BitmapFilterQuality.HIGH,
        inner: boolean = false,
        knockout: boolean = false
      ) {
        this._glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
      }

      protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
      }

      protected mount() {
        this.setValue(this._value, this._index, this._type);
        this.reviseError();
      }

      public setValue(value: number, index: number, type: we.core.ChipType = null) {
        this._value = value;
        this._index = index;

        switch (type) {
          case we.core.ChipType.FLAT:
            this._type = type;
            this._chipValueLabel.text = utils.numberToFaceValue(this._value);
            this._chipImage.source = this.getChipSource(this._type);
            break;
          case we.core.ChipType.BETTING:
            this._type = type;
            this._chipValueLabel.text = '';
            this._chipImage.source = this.getChipSource(this._type);
            break;
          case we.core.ChipType.CLIP:
          default:
            this._type = we.core.ChipType.CLIP;
            this._chipValueLabel.text = utils.numberToFaceValue(this._value);
            this._chipValueLabel.height = this._chipValueLabel.height * 0.6;
            this._chipImage.source = this.getChipSource(this._type);
            break;
        }
      }

      public getValue() {
        return this._value;
      }

      get highlight(): boolean {
        return this._highlight;
      }

      set highlight(value: boolean) {
        this._highlight = value;
        if (value) {
          this._chipImage.filters = [this._glowFilter];
        } else {
          this._chipImage.filters = [];
        }
      }

      set index(value: number) {
        this._index = value;
        this._chipImage.source = this.getChipSource(this._type);
      }

      set labelOffset(value: number) {
        if (this._chipValueLabel) {
          this._chipValueLabel.verticalCenter = value;
        }
      }

      get labelOffset() {
        if (this._chipValueLabel) {
          return this._chipValueLabel.verticalCenter;
        }
        return null;
      }

      set labelSize(value: number) {
        if (this._chipValueLabel) {
          this._chipValueLabel.size = value;
        }
      }

      get labelSize() {
        if (this._chipValueLabel) {
          return this._chipValueLabel.size;
        }
        return null;
      }

      set type(value: number) {
        if (!this._type) {
          this._type = +value;
        }
      }

      get type() {
        return this._type;
      }

      protected getChipSource(type): string {
        let filename: string;

        switch (type) {
          case we.core.ChipType.CLIP:
            filename = we.core.ChipSetInfo.clip + `${this._index + 1}` + '_png';
            break;
          case we.core.ChipType.FLAT:
            filename = we.core.ChipSetInfo.flat + `${this._index + 1}` + '_png';
            break;
          case we.core.ChipType.BETTING:
          default:
            filename = we.core.ChipSetInfo.betting + '_png';
        }

        return filename;
      }
    }
  }
}
