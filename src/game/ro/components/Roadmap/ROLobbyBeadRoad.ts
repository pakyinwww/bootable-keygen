namespace we {
  export namespace ro {
    export class ROLobbyBeadRoad extends ui.Panel implements we.ui.ILobbyRoad {
      protected beadRoad: ROBeadRoad;

      private roadGridSize: number = 40;
      private roadCol: number = 10;
      private roadRow: number = 3;
      private roadIndentX: number = 0;
      private roadIndentY: number = 0;
      private roadOffsetX: number = 0;
      private roadOffsetY: number = 0;
      private roadEmptyColor: number = 0x000000;
      private roadEmptyAlpha: number = 1;
      private roadScale: number = 1;

      public constructor() {
        super();
        this.cacheAsBitmap = true;
      }

      protected childrenCreated() {
        super.childrenCreated();
        this.init();
      }

      protected init() {
        this.beadRoad = new ROBeadRoad(this.roadRow, this.roadCol, this.roadGridSize, 1, this.roadOffsetX, this.roadOffsetY, this.roadEmptyColor, this.roadEmptyAlpha);
        this.beadRoad.x = this.roadIndentX;
        this.beadRoad.y = this.roadIndentY;
        this.beadRoad.scaleX = this.beadRoad.scaleY = this.roadScale;

        const rdata: any = [];
        this.beadRoad.parseRoadData(rdata);
        this.addChild(this.beadRoad);
      }

      public updateRoadData(roadmapData: data.RoadmapData) {
        if (roadmapData) {
          if (this.beadRoad) {
            this.beadRoad.parseRoadData(roadmapData.inGame.bead);
          }
        }
      }

      public updateLobbyRoadData(roadmapData: data.RoadmapData) {
        if (roadmapData) {
          if (this.beadRoad) {
            this.beadRoad.parseRoadData(roadmapData.inGame.bead);
          }
        }
      }

      public updateSideBarRoadData(roadmapData: data.RoadmapData) {
        if (roadmapData) {
          if (this.beadRoad) {
            this.beadRoad.parseRoadData(roadmapData.inGame.bead);
          }
        }
      }

      public dispose() {}
    }
  }
}
