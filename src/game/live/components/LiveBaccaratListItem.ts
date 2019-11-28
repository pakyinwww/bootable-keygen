namespace we {
  export namespace live {
    export class LiveBaccaratListItem extends eui.Component {
      public selected: boolean;
      public itemIndex: number;

      private rect: eui.Rect;
      private label: eui.Label;
      private _dealerImage: eui.Image;
      private _bigRoad: we.ba.BALobbyBigRoad;
      private _quickbetPanel: we.live.LiveQuickBetPanel;
      private _quickbetButton: eui.Button;
      private _tableId: string;

      private _originalx: number;
      private _originaly: number;
      public constructor() {
        super();
        this.skinName = utils.getSkin('LiveBaccaratListItem');
        this.touchEnabled = true;
        this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollover, this);
        this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollout, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.mount();
      }

      public childrenCreated() {
        super.childrenCreated();
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x += this.anchorOffsetX;
        this.y += this.anchorOffsetY;
      }

      public onTouchTap() {
        console.log('we.live.LiveBaccartListItem::onclick - tableid' + this._tableId);
        dir.socket.enterTable(this._tableId);
        dir.sceneCtr.goto('ba', { tableid: this._tableId });
      }

      public setTableId(value: string) {
        this._tableId = value;
      }

      get dealerImage() {
        return this._dealerImage;
      }

      set dealerImage(value: eui.Image) {
        this._dealerImage = value;
      }

      get bigRoad() {
        return this._bigRoad;
      }

      set bigRoad(value: we.ba.BALobbyBigRoad) {
        this._bigRoad = value;
      }

      private async mount() {
        try {
          console.log('LiveBaccaratListItem::mount');
          await RES.loadGroup('temp');
        } catch (e) {
          console.log('LiveBaccaratListItem::mount error');
        }
        const imageResName = Math.round(Math.random()) ? 'temp_baccarat_dealer_1' : 'temp_baccarat_dealer_2';
        this._dealerImage.texture = RES.getRes(imageResName);
      }

      private onRollover() {
        console.log('LiveBaccaratListItem::onRollover');
        const tw = TweenMax.to(this, 0.25, { scaleX: 1.05, scaleY: 1.05 });
      }

      private onRollout() {
        const tw = TweenLite.to(this, 0.25, { scaleX: 1, scaleY: 1 });
      }
    }
  }
}
