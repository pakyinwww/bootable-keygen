namespace we {
  export namespace ro {
    export class LobbyTableLayer extends ui.TableLayer {
      protected _odd_group: eui.Group;
      protected _even_group: eui.Group;
      protected _red_group: eui.Group;
      protected _black_group: eui.Group;

      protected _odd_image: eui.Image;
      protected _even_image: eui.Image;
      protected _red_image: eui.Image;
      protected _black_image: eui.Image;

      protected _odd_label: ui.RunTimeLabel;
      protected _even_label: ui.RunTimeLabel;

      protected _imageSourceMapping: {};

      constructor() {
        super();
        this._betField = ro.BetField;
      }

      protected createMapping() {
        super.createMapping();
        this._imageMapping = {};
        this._imageMapping[ro.BetField.ODD] = this._odd_image;
        this._imageMapping[ro.BetField.EVEN] = this._even_image;
        this._imageMapping[ro.BetField.RED] = this._red_image;
        this._imageMapping[ro.BetField.BLACK] = this._black_image;

        this._imageSourceMapping = {};
        Object.keys(this._imageMapping).map(value => {
          this._imageSourceMapping[value] = [this._imageMapping[value].source, this._imageMapping[value].name];
        });

        this._odd_label.renderText = () => i18n.t('roulette.odd');
        this._even_label.renderText = () => i18n.t('roulette.even');
      }

      public onRollover(fieldName: string) {
        if (this._imageSourceMapping) {
          const colorMatrix = [1, 0, 0, 0, 100, 0, 1, 0, 0, 100, 0, 0, 1, 0, 100, 0, 0, 0, 1, 0];
          const colorFilter = new egret.ColorMatrixFilter(colorMatrix);
          this._imageMapping[fieldName].filters = [colorFilter];
        }
      }

      public onRollout(fieldName: string) {
        this._imageMapping[fieldName].filters = [];
      }

      public clearAllHighlights() {
        this.onRollout(ro.BetField.ODD);
        this.onRollout(ro.BetField.EVEN);
        this.onRollout(ro.BetField.RED);
        this.onRollout(ro.BetField.BLACK);
      }
    }
  }
}
