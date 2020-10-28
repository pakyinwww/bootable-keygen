namespace we {
  export namespace dil {
    export class AdvancedRoad extends ui.AdvancedRoad {
      // protected _tableInfo: data.TableInfo;

      public beadRoad: we.dil.DilBeadRoad;

      protected _roadmapControl: we.dil.DilRoadmapControl;

      public analysis: we.ui.IAnalysis;

      protected totalCount: number;

      public constructor(skin?: string) {
        super(skin);
      }

      // public set tableInfo(value: data.TableInfo) {
      //   this._tableInfo = value;
      // }

      // public get tableInfo() {
      //   return this._tableInfo;
      // }

      // protected mount() {
      //   this.init();
      // }

      protected initRoad() {
        const roundRect = new we.ui.RoundRectShape();
        roundRect.x = roundRect.y = 2;
        roundRect.cornerTL_TR_BL_BR = '8,8,8,8';
        roundRect.fillColor = '0x1c1c1e';
        roundRect.strokeColor = 0x3a3f48;
        roundRect.fillAlpha = 1;

        roundRect.width = 854;
        roundRect.height = 246;
        this.addChild(roundRect);

        this.roadsContainer = new egret.DisplayObjectContainer();
        this.roadsContainer.x = 16;
        this.roadsContainer.y = 16;
        this.addChild(this.roadsContainer);

        this.roadsContainerRT = new egret.RenderTexture();
        this.roadsContainerDisplay = new egret.Bitmap();
        this.roadsContainerDisplay.texture = this.roadsContainerRT;
        this.roadsContainerDisplay.x = 16;
        this.roadsContainerDisplay.y = 16;
        this.addChild(this.roadsContainerDisplay);

        this.beadRoad = new DilBeadRoad(3, 12, 56, 1, 12, 18, 0x262a2b, 1);
        this.beadRoad.x = 0;
        this.beadRoad.y = 0;
        this.beadRoad.initRoadData();
        this.roadsContainer.addChild(this.beadRoad);

        // dir.evtHandler.addEventListener(core.Event.SWITCH_LANGUAGE, this.changeLang, this);

        // this.changeLang();
      }

      public changeLang() {}

      // render text by tableInfo
      public update() {
        if (this.tableInfo) {
          if (!this._roadmapControl) {
            this._roadmapControl = new we.dil.DilRoadmapControl(this._tableInfo.tableid);
            this._roadmapControl.setRoads(this.beadRoad, null, null, null);
          }
          if (this._roadmapControl) {
            this._roadmapControl.setTableInfo(this._tableInfo);
            this._roadmapControl.updateRoadData();
          }
          if (this.tableInfo.gamestatistic) {
            // this.bankerCountLabel.text = this.tableInfo.gamestatistic.bankerCount.toString();
            // this.playerCountLabel.text = this.tableInfo.gamestatistic.playerCount.toString();
            // this.tieCountLabel.text = this.tableInfo.gamestatistic.tieCount.toString();
            // this.bankerPairCountLabel.text = this.tableInfo.gamestatistic.bankerPairCount.toString();
            // this.playerPairCountLabel.text = this.tableInfo.gamestatistic.playerPairCount.toString();
            // this.totalCount = this.tableInfo.gamestatistic.totalCount;
            // this.changeLang();
          }
        }
        super.update();
      }

      // called by BaRoadmapControl
      /*
      public setPredictIcons(b1: any, b2: any, b3: any, p1: any, p2: any, p3: any) {
        this.iconBankerBigEye.setByObject(b1);
        this.iconBankerSmall.setByObject(b2);
        this.iconBankerCockroach.setByObject(b3);

        this.iconPlayerBigEye.setByObject(p1);
        this.iconPlayerSmall.setByObject(p2);
        this.iconPlayerCockroach.setByObject(p3);

        this.update();
      }*/

      public destroy() {
        super.destroy();

        this.beadRoad.dispose();

        // if (dir.evtHandler.hasEventListener(core.Event.SWITCH_LANGUAGE)) {
        //   dir.evtHandler.removeEventListener(core.Event.SWITCH_LANGUAGE, this.changeLang, this);
        // }
      }
    }
  }
}
