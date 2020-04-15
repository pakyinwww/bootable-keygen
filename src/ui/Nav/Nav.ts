namespace we {
  export namespace ui {
    export class Nav extends core.BaseEUI {
      private _lantern: NavLantern;
      private _time: eui.Label;
      private _user: eui.Label;
      private _profile_toggle: eui.Group;
      private _profile: Panel;
      private _menu_toggle: eui.Image;
      private _menu: Panel;
      private _slider_toggle: ui.BaseImageButton;
      private _balance: RunTimeLabel;

      private _profilePrc: eui.Image;
      private _refreshButton: ui.BaseImageButton;
      // from Monitor.ts
      private _liveSidePanel: ui.LiveSidePanel;
      private _sideGameList: ui.MobileSideGameList;
      private _common_listpanel: ui.BaseImageButton;
      private _navMobileSilder: ui.NavMobileSilder;
      private _mDropdown: ui.MobileDropdown;
      private _overlay: ui.Overlay;

      // this is the background color which the alpha will change when scrolling
      private _background: eui.Rect;

      private _timeInterval: number;

      public constructor() {
        super('Nav');
      }

      protected mount() {
        this.initNav();
      }

      protected initNav() {
        if (this._profile) {
          this._profile.setToggler(this._profile_toggle);
          this._profile.dismissOnClickOutside = true;
        }
        if (this._menu) {
          this._menu.setToggler(this._menu_toggle);
          this._menu.dismissOnClickOutside = true;
        }

        this._balance.renderText = () => `${dir.meterCtr.getLocal('balance')}`;
        dir.meterCtr.register('balance', this._balance);
        if (!isNaN(env.balance)) {
          dir.meterCtr.rackTo('balance', env.balance, 0);
        }
        this._timeInterval = setInterval(this.onUpdateTimer.bind(this), 1000);

        // GameListButton
        if (env.isMobile) {
          if (!this._overlay) {
            this._overlay = new ui.Overlay();

            this._navMobileSilder = new ui.NavMobileSilder();
            this._mDropdown = new ui.MobileDropdown();

            dir.layerCtr.overlay.addChild(this._navMobileSilder);
            dir.layerCtr.overlay.addChild(this._overlay);
            dir.layerCtr.overlay.addChild(this._mDropdown);
          }

          this._sideGameList = new ui.MobileSideGameList();
          this._sideGameList.bottom = 0;
          this._sideGameList.setToggler(this._common_listpanel);
          this._sideGameList.isPoppable = true;
          this._sideGameList.dismissOnClickOutside = true;

          dir.layerCtr.overlay.addChild(this._sideGameList);
        }

        this.addListeners();
      }

      private addListeners() {
        if (env.isMobile) {
          utils.addButtonListener(this._slider_toggle, this.onClickSliderToggle, this);
          dir.evtHandler.addEventListener(core.Event.ENTER_SCENE, this.onSceneChange, this);
          // this._lantern.alignToLeft();
        } else {
          dir.evtHandler.addEventListener(core.Event.ENTER_SCENE, this.onSceneChange, this);
        }
        // listen to the event dispatched by some particular scroller and update the background alpha
        // dir.evtHandler.addEventListener(core.Event.UPDATE_NAVBAR_OPACITY, this.onBackgroundOpacityUpdate, this);
      }

      private onSceneChange(e = null) {
        if (!env.isMobile) {
          switch (dir.sceneCtr.currScene.sceneHeaderPlacement) {
            case 'Lobby':
              this._lantern.alignToRight();
              this._time.textAlign = 'right';
              this.currentState = 'Lobby';
              break;

            case 'Game':
              this._lantern.alignToLeft();
              this._time.textAlign = 'left';
              this.currentState = 'Game';
              break;
          }
        } else {
          switch (dir.sceneCtr.currScene.sceneHeaderPlacement) {
            case 'Lobby':
              this._lantern.visible = true;

              this._profilePrc.visible = true;
              this.currentState = 'Lobby';
              break;

            case 'Game':
              this._lantern.visible = false;

              this._profilePrc.visible = false;
              this.currentState = 'Game';
              break;
          }
        }
      }

      private onClickSliderToggle() {
        dir.evtHandler.dispatch(core.Event.TOGGLE_SILDER_MENU);
      }

      private onUpdateTimer() {
        this._time.text = utils.formatTime(env.currTime / Math.pow(10, 3));
      }

      protected onBackgroundOpacityUpdate(evt: egret.Event) {
        const value = evt.data;
        if (this._background) {
          this._background.alpha = value;
        }
      }

      protected onOrientationChange() {
        dir.layerCtr.overlay.removeChild(this._sideGameList);
        // dir.layerCtr.overlay.removeChild(this._navMobileSilder);
        // dir.layerCtr.overlay.removeChild(this._overlay);
        // dir.layerCtr.overlay.removeChild(this._mDropdown);
        super.onOrientationChange();
        this.onSceneChange();
        this.initNav();
        this.invalidateState();
      }
    }
  }
}
