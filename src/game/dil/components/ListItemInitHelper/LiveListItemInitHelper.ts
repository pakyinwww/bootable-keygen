namespace we {
  export namespace dil {
    export class LiveListItemInitHelper implements ui.IListItemHelper {
      public generateTableLayer(node: eui.Component) {
        const tableLayer = new dil.TableLayer();
        if (node.name === 'AdvancedTableLayerNode') {
          tableLayer.skinName = `skin_desktop.dil.LiveListAdvancedItemTableLayerSkin`;
        } else {
          tableLayer.skinName = `skin_desktop.dil.LiveListItemTableLayerSkin`;
        }
        const idx = node.parent.getChildIndex(node);
        node.parent.addChildAt(tableLayer, idx);
        return tableLayer;
      }

      public generateChipLayer(node: eui.Component) {
        const chipLayer = new dil.ChipLayer();
        if (node.name === 'AdvancedChipLayerNode') {
          chipLayer.skinName = `skin_desktop.dil.LiveListAdvancedItemChipLayerSkin`;
        } else {
          chipLayer.skinName = `skin_desktop.dil.LiveListItemChipLayerSkin`;
        }
        const idx = node.parent.getChildIndex(node);
        node.parent.addChildAt(chipLayer, idx);
        return chipLayer;
      }

      public generateRoadmap(node: eui.Component) {
        // const bigRoad = new di.DiLobbyBeadRoad();
        const bigRoad = dir.lobbyRoadPool.get(core.GameType.DIL);
        const idx = node.parent.getChildIndex(node);
        node.parent.addChildAt(bigRoad, idx);
        bigRoad.drawGridBg(576, 139);
        return bigRoad;
      }

      public generateAnalysis(node: eui.Component) {
        // const analysis = new di.Analysis();
        const analysis = dir.analysisPool.get(core.GameType.DIL);
        const idx = node.parent.getChildIndex(node);
        node.parent.addChildAt(analysis, idx);
        return analysis;
      }

      public generateAdvancedRoad(node: eui.Component) {
        // const advancedRoad = new di.AdvancedRoad();
        const advancedRoad = dir.advancedRoadPool.get(core.GameType.DIL);
        const idx = node.parent.getChildIndex(node);
        node.parent.addChildAt(advancedRoad, idx);
        return advancedRoad;
      }

      public getPlaceholder() {
        return 'd_lobby_placeholder_gof_sb_jpg';
      }

      public getAdvancedPlaceholder() {
        return 'd_lobby_pro_placeholder_gof_sb_jpg';
      }
    }
  }
}
