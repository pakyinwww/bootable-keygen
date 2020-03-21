// TypeScript file
namespace we {
  export namespace utils {
    export class OrientationManager {
      protected stage: egret.Stage;

      constructor(stage: egret.Stage) {
        this.stage = stage;
        window.onorientationchange = () => {
          this.onRotate((<any>screen).orientation.angle);
        };
        this.onRotate((<any>screen).orientation.angle, true);
      }

      public onRotate(angle: number, isInit: boolean = false) {
        if (angle === 0) {
          // portrait
          env.orientation = egret.OrientationMode.PORTRAIT;
          this.stage.setContentSize(1242, 2292);
        } else {
          // landscape
          env.orientation = egret.OrientationMode.LANDSCAPE;
          this.stage.setContentSize(2292, 1242);
        }
        if (!isInit) {
          dir.evtHandler.dispatch(core.Event.ORIENTATION_UPDATE);
        }
      }
    }
  }
}
