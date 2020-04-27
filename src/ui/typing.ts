// This file contains we.ui typing definitions.
namespace we {
  export namespace ui {
    // Components
    export interface ILobbyRoad {
      // updateRoadData(roadmapData: any);

      updateLobbyRoadData(roadmapData: any);
      updateSideBarRoadData(roadmapData: any);
      setTableInfo?(tableInfo: data.TableInfo);
    }

    export interface IAdvancedRoad {
      tableInfo;
      update(roadmapData: any);
    }

    export interface IAnalysis {
      tableId: string;
      updateTableBetInfo();
      updateRoad();
    }

    export interface IListItemHelper {
      // updateRoadData(roadmapData: any);
      generateTableLayer?(node: eui.Component): TableLayer;
      generateChipLayer?(node: eui.Component): ChipLayer;
      generateRoadmap(node: eui.Component): ILobbyRoad & eui.Component;
      generateAdvancedRoad?(node: eui.Component): IAdvancedRoad;
      generateAnalysis?(node: eui.Component): IAnalysis;
      generateResultMessage?(node: eui.Component): IGameResultMessage;
      generateResultDisplay?(node: eui.Component): IResultDisplay;
    }

    export interface IRunTimeComponent extends egret.DisplayObject {
      render(): void;
    }

    export interface IResultDisplay {
      updateResult(gameData: data.GameData);
      reset();

      visible: boolean;
    }

    export interface IQuickBetAnimButton {
      tween(direction: boolean, isAnimate?: boolean);
    }

    export interface IBetChip {
      getValue();
      setValue(value: number, index: number); // update the chip appearance according to the value
      draw();
      highlight: boolean; // indicate whether the chip is being selected
      type: number;
    }

    // Opt
    export interface IOverlayOpt {
      class: string;
      replace?: boolean;
      args?: any[];
    }

    export interface IMessageDialogOpt {
      [button: string]: {
        text: string;
        onClick?: () => Promise<any>;
      };
    }

    // Panel
    export interface ITransitable {
      content: egret.DisplayObject;
    }

    export interface IDropdown {
      dropdownScroller: ui.Scroller;
    }

    export interface ISwipeable {
      moveArea: egret.DisplayObject;
      content: egret.DisplayObject;
      onSwipeFinished(): void;
    }

    export interface IPoppable {
      content: egret.DisplayObject;
      close: egret.DisplayObject;
      toggler: egret.DisplayObject;
      setToggler(toggler: egret.DisplayObject, onToggleCallback?: (value: boolean) => void);
      removeToggler(toggler: egret.DisplayObject);
    }

    export interface IDraggable {
      moveArea: egret.DisplayObject;
      panelName: string;
    }

    export interface IAutoRemove {
      content: egret.DisplayObject;
      removeSelf: (isAnimate?: boolean) => void;
    }

    // Scroller
    export interface ICollapsible {
      setToggler(toggler: egret.DisplayObject, onToggleCallback?: (value: boolean) => void);
      removeToggler(toggler: egret.DisplayObject);
    }

    // Notification
    export interface INotificationController {
      notificationList: data.Notification[];
    }
  }
}
