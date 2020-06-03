namespace we {
  export namespace ui {
    export class MobileSideGameList extends Panel {
      private _layoutRefer: eui.Group;
      private _tabs: eui.TabBar;
      private _tabSource;
      private _tabArrayCollection: eui.ArrayCollection;
      private _viewStack: eui.ViewStack;

      private _btnAlreadyBet: ui.GamePanelTabButton;
      private _btnGoodRoad: ui.GamePanelTabButton;
      private _btnAllGame: ui.GamePanelTabButton;

      protected _lblBetHint: ui.RunTimeLabel;

      protected _betTableList: TableList;
      protected _goodRoadTableList: TableList;
      protected _allTableList: TableList;
      protected _allGameList: string[] = [];
      protected _betList: string[] = [];
      protected _goodRoadList: string[] = [];

      // protected fixedTab: string[] = ['allGame', 'bet', 'goodroad'];
      protected _pageIds: string = 'bet';

      protected _txt_title: RunTimeLabel;
      protected _selected: number = 0;

      constructor() {
        super('GamePanelSkin');
        this.poppableAddon = new PoppableAddonBottomSilder(this);
      }

      protected onOrientationChange() {
        this.arrangeComponents();
      }

      protected initOrientationDependentComponent() {
        // this._txt_title.renderText = () => `${i18n.t('sidegamelist_title')}`;
        this._lblBetHint.renderText = () => i18n.t('mobile_game_panel_bet_hint_label');

        this.initTabs();
        this.initPage();

        this.setTab(this._selected);
        this.addEventListeners();

        this.poppableAddon.updateContentPos();
        if (!this.poppableAddon.isShow) {
          this.poppableAddon.hide(true);
        }
      }

      protected clearOrientationDependentComponent() {
        super.clearOrientationDependentComponent();
        this.removeEventListeners();
      }

      protected arrangeComponents() {
        this.currentState = env.orientation.toLowerCase();
        this.validateNow();
        this._betTableList.layout = this.getLayout();
        this._goodRoadTableList.layout = this.getLayout();
        this._allTableList.layout = this.getLayout();
      }

      protected destroy() {
        super.destroy();
        this.removeEventListeners();
      }
      protected addEventListeners() {
        dir.evtHandler.addEventListener(core.Event.TOGGLE_SIDE_GAMELIST, this.show, this);
        // listen to table list update
        dir.evtHandler.addEventListener(core.Event.TABLE_LIST_UPDATE, this.onTableListUpdate, this);
        // listen to good road list update
        dir.evtHandler.addEventListener(core.Event.MATCH_GOOD_ROAD_TABLE_LIST_UPDATE, this.onGoodRoadTableListUpdate, this);
        // listen to bet list update
        dir.evtHandler.addEventListener(core.Event.BET_TABLE_LIST_UPDATE, this.onBetTableListUpdate, this);

        utils.addButtonListener(this._btnAlreadyBet, this.onClickBet, this);
        utils.addButtonListener(this._btnGoodRoad, this.onClickGoodRoad, this);
        utils.addButtonListener(this._btnAllGame, this.onClickAllGame, this);

        this._tabs.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateView, this);
      }

      protected removeEventListeners() {
        dir.evtHandler.removeEventListener(core.Event.TOGGLE_SIDE_GAMELIST, this.show, this);
        // listen to table list update
        dir.evtHandler.removeEventListener(core.Event.TABLE_LIST_UPDATE, this.onTableListUpdate, this);
        // listen to good road list update
        dir.evtHandler.removeEventListener(core.Event.MATCH_GOOD_ROAD_TABLE_LIST_UPDATE, this.onGoodRoadTableListUpdate, this);
        // listen to bet list update
        dir.evtHandler.removeEventListener(core.Event.BET_TABLE_LIST_UPDATE, this.onBetTableListUpdate, this);

        utils.removeButtonListener(this._btnAlreadyBet, this.onClickBet, this);
        utils.removeButtonListener(this._btnGoodRoad, this.onClickGoodRoad, this);
        utils.removeButtonListener(this._btnAllGame, this.onClickAllGame, this);

        this._tabs.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateView, this);
      }

      protected initPage() {
        // create bet table list
        this._betTableList.isFreezeScrolling = true;
        this._betTableList.extendHeight = 250;
        this._betTableList.isAnimateItemTransition = true;
        // this._betTableList.itemRenderer = MobileSideListBetItemHolder;
        this._betTableList.itemRendererFunction = item => {
          const tableInfo = env.tableInfos[item];
          switch (tableInfo.gametype) {
            //  switch (0) {
            case we.core.GameType.BAC:
            case we.core.GameType.BAI:
            case we.core.GameType.BAS:
            case we.core.GameType.BAM:
              return ba.MobileSideListBetItemHolder;
            case we.core.GameType.RO:
            case we.core.GameType.ROL:
              return ro.MobileSideListBetItemHolder;
            case we.core.GameType.DI:
              return di.MobileSideListBetItemHolder;
            case we.core.GameType.LW:
              return lw.MobileSideListBetItemHolder;
            case we.core.GameType.DT:
              return dt.MobileSideListBetItemHolder;
            default:
              throw new Error('Invalid Game Type');
          }
        };

        // create good road list
        this._goodRoadTableList.isFreezeScrolling = true;
        this._goodRoadTableList.extendHeight = 250;
        this._goodRoadTableList.isAnimateItemTransition = true;
        // this._goodRoadTableList.itemRenderer = MobileSideListItemHolder;
        this._goodRoadTableList.itemRendererFunction = item => {
          const tableInfo = env.tableInfos[item];
          switch (tableInfo.gametype) {
            //  switch (0) {
            case we.core.GameType.BAC:
            case we.core.GameType.BAI:
            case we.core.GameType.BAS:
            case we.core.GameType.BAM:
              return ba.MobileSideListItemHolder;
            case we.core.GameType.RO:
            case we.core.GameType.ROL:
              return ro.MobileSideListItemHolder;
            case we.core.GameType.DI:
              return di.MobileSideListItemHolder;
            case we.core.GameType.LW:
              return lw.MobileSideListItemHolder;
            case we.core.GameType.DT:
              return dt.MobileSideListItemHolder;
            default:
              throw new Error('Invalid Game Type');
          }
        };

        // create all game list
        this._allTableList.isFreezeScrolling = true;
        this._allTableList.extendHeight = 250;
        this._allTableList.isAnimateItemTransition = true;
        // this._allTableList.itemRenderer = MobileSideListItemHolder;
        this._allTableList.itemRendererFunction = item => {
          const tableInfo = env.tableInfos[item];
          switch (tableInfo.gametype) {
            //  switch (0) {
            case we.core.GameType.BAC:
            case we.core.GameType.BAI:
            case we.core.GameType.BAS:
            case we.core.GameType.BAM:
              return ba.MobileSideListItemHolder;
            case we.core.GameType.RO:
            case we.core.GameType.ROL:
              return ro.MobileSideListItemHolder;
            case we.core.GameType.DI:
              return di.MobileSideListItemHolder;
            case we.core.GameType.LW:
              return lw.MobileSideListItemHolder;
            case we.core.GameType.DT:
              return dt.MobileSideListItemHolder;
            default:
              throw new Error('Invalid Game Type');
          }
        };

        this.setBetList();
        this.setGoodRoadList();
      }

      protected initTabs() {
        // const tabList = [...this.fixedTab, ...utils.EnumHelpers.values(core.LiveGameTab)];
        const tabList = utils.EnumHelpers.values(core.LiveGameTab);

        this._tabSource = tabList.map(tab => {
          switch (tab) {
            // case 'bet':
            // case 'goodroad':
            //   return {
            //     tab,
            //     text: `sidegamelist_tab_${tab}`,
            //     count: 0,
            //   };

            default:
              return {
                tab,
                text: `live.gametype.${tab}`,
              };
          }
        });

        this._tabs.itemRenderer = MobileSideGameListItemRenderer;
        this._tabArrayCollection = new eui.ArrayCollection(this._tabSource);
        this._tabs.dataProvider = this._tabArrayCollection;
        this._tabs.requireSelection = true;
      }

      protected getLayout() {
        const layout = this._layoutRefer.layout;
        const clone: eui.LayoutBase = new eui.TileLayout();
        for (const key in layout) {
          clone[key] = layout[key];
        }
        clone.useVirtualLayout = true;
        return clone;
      }

      protected updateView() {
        if (!this._tabs) {
          return;
        }

        this._selected = this._tabs.selectedIndex;
        // const type: string = this._tabs.selectedItem.tab;

        switch (this._pageIds) {
          case 'bet':
            this._viewStack.selectedIndex = 0;
            break;

          case 'goodroad':
            this._viewStack.selectedIndex = 1;
            break;

          // case 'allGame':
          //   this.setAllTableList(-1);
          //   this._viewStack.selectedIndex = 0;
          //   break;

          default:
            this.setAllTableList(this._tabs.selectedIndex);
            this._viewStack.selectedIndex = 2;
            break;
        }

        this._btnAlreadyBet.focus = this._pageIds === 'bet';
        this._btnAllGame.focus = this._pageIds === 'allGame';
        this._btnGoodRoad.focus = this._pageIds === 'goodroad';
      }

      protected setTab(idx: number) {
        this._tabs.selectedIndex = idx;
        this.updateView();
      }

      protected onTableListUpdate(evt: egret.Event) {
        const tableList = evt.data;
        this._allGameList = tableList;
        this.updateView();
      }

      protected setAllTableList(filterIdx = -1) {
        this._allTableList.setGameFiltersByTabIndex(filterIdx);
        this._allTableList.setTableList(this._allGameList, true);
      }
      protected setBetList() {
        this._betTableList.setTableList(this._betList);
        const count = this._betList.length;
        // const item = this._tabSource.find(i => i.tab === 'bet');
        // const idx = this._tabSource.indexOf(item);
        // item.count = count;
        // this._tabArrayCollection.replaceItemAt(item, idx);
        this._btnAlreadyBet.setBadge(count);
      }
      protected setGoodRoadList() {
        this._goodRoadTableList.setTableList(this._goodRoadList);
        const count = this._goodRoadList.length;
        // const item = this._tabSource.find(i => i.tab === 'goodroad');
        // const idx = this._tabSource.indexOf(item);
        // item.count = count;
        // this._tabArrayCollection.replaceItemAt(item, idx);
        this._btnGoodRoad.setBadge(count);
      }

      protected onClickBet() {
        this._pageIds = 'bet';
        this.updateView();
      }

      protected onClickGoodRoad() {
        this._pageIds = 'goodroad';
        this.updateView();
      }

      protected onClickAllGame() {
        this._pageIds = 'allGame';
        this.updateView();
      }

      protected onGoodRoadTableListUpdate(evt: egret.Event) {
        const tableList = evt.data;
        this._goodRoadList = tableList;
        this.setGoodRoadList();
      }

      protected onBetTableListUpdate(evt: egret.Event) {
        const tableList = evt.data;
        this._betList = tableList;
        this.setBetList();
      }
    }
  }
}
