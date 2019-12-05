namespace we {
  export namespace ui {
    export class Nav extends core.BaseEUI {
      private _lantern: NavLantern;
      private _time: eui.Label;
      private _user: eui.Label;
      private _profilePrc: eui.Image;
      private _userInfo_toggle: eui.Group;
      private _userInfo: Popper;
      private _menu_toggle: eui.Image;
      private _menu: Popper;
      private _balance: RunTimeLabel;

      private _timeInterval: number;

      public constructor() {
        super('Nav');
      }

      protected mount() {
        // this._userInfo.setToggler(this._userInfo_toggle);
        // this._userInfo.dismissOnClickOutside = true;

        this._menu.setToggler(this._menu_toggle);
        this._menu.dismissOnClickOutside = true;

        this._balance.renderText = () => `${dir.meterCtr.getLocal('balance')}`;
        dir.meterCtr.register('balance', this._balance);
        if (env.balance) {
          dir.meterCtr.rackTo('balance', env.balance, 0);
        }
        this.addListeners();
      }

      private addListeners() {
        dir.evtHandler.addEventListener(core.Event.ENTER_SCENE, this.onSceneChange, this);
        this._timeInterval = setInterval(this.onUpdateTimer.bind(this), 1000);
      }

      private onSceneChange(e) {
        switch (dir.sceneCtr.currScene.sceneHeaderPlacement) {
          case 'right':
            this._lantern.alignToLeft();
            this._time.textAlign = 'left';
            this.currentState = 'left';
            break;

          case 'left':
            this._lantern.alignToRight();
            this._time.textAlign = 'right';
            this.currentState = 'right';
            break;
        }
      }

      private onUpdateTimer() {
        this._time.text = moment(env.currTime).format('YYYY/MM/DD HH:mm:ss');
      }
    }
  }
}
