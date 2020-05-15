namespace we {
  export namespace di {
    export class ChipLayer extends we.ui.ChipLayer {
      // group
      protected _bigrow_1: eui.Group;
      protected _bigrow_2: eui.Group;
      protected _bigrow_3: eui.Group;
      protected _odd_group: eui.Group;
      protected _even_group: eui.Group;
      protected _big_group: eui.Group;
      protected _small_group: eui.Group;
      protected _sum_4_group: eui.Group;
      protected _sum_5_group: eui.Group;
      protected _sum_6_group: eui.Group;
      protected _sum_7_group: eui.Group;
      protected _sum_8_group: eui.Group;
      protected _sum_9_group: eui.Group;
      protected _sum_10_group: eui.Group;
      protected _sum_11_group: eui.Group;
      protected _sum_12_group: eui.Group;
      protected _sum_13_group: eui.Group;
      protected _sum_14_group: eui.Group;
      protected _sum_15_group: eui.Group;
      protected _sum_16_group: eui.Group;
      protected _sum_17_group: eui.Group;
      protected _triple_1_group: eui.Group;
      protected _triple_2_group: eui.Group;
      protected _triple_3_group: eui.Group;
      protected _triple_4_group: eui.Group;
      protected _triple_5_group: eui.Group;
      protected _triple_6_group: eui.Group;
      protected _triple_all_group: eui.Group;
      protected _double_1_group: eui.Group;
      protected _double_2_group: eui.Group;
      protected _double_3_group: eui.Group;
      protected _double_4_group: eui.Group;
      protected _double_5_group: eui.Group;
      protected _double_6_group: eui.Group;
      protected _combine_1_2_group: eui.Group;
      protected _combine_1_3_group: eui.Group;
      protected _combine_1_4_group: eui.Group;
      protected _combine_1_5_group: eui.Group;
      protected _combine_1_6_group: eui.Group;
      protected _combine_2_3_group: eui.Group;
      protected _combine_2_4_group: eui.Group;
      protected _combine_2_5_group: eui.Group;
      protected _combine_2_6_group: eui.Group;
      protected _combine_3_4_group: eui.Group;
      protected _combine_3_5_group: eui.Group;
      protected _combine_3_6_group: eui.Group;
      protected _combine_4_5_group: eui.Group;
      protected _combine_4_6_group: eui.Group;
      protected _combine_5_6_group: eui.Group;
      protected _specific_1_group: eui.Group;
      protected _specific_2_group: eui.Group;
      protected _specific_3_group: eui.Group;
      protected _specific_4_group: eui.Group;
      protected _specific_5_group: eui.Group;
      protected _specific_6_group: eui.Group;

      protected _odd_betChipStack: ui.BetChipStack;
      protected _even_betChipStack: ui.BetChipStack;
      protected _big_betChipStack: ui.BetChipStack;
      protected _small_betChipStack: ui.BetChipStack;
      protected _sum_4_betChipStack: ui.BetChipStack;
      protected _sum_5_betChipStack: ui.BetChipStack;
      protected _sum_6_betChipStack: ui.BetChipStack;
      protected _sum_7_betChipStack: ui.BetChipStack;
      protected _sum_8_betChipStack: ui.BetChipStack;
      protected _sum_9_betChipStack: ui.BetChipStack;
      protected _sum_10_betChipStack: ui.BetChipStack;
      protected _sum_11_betChipStack: ui.BetChipStack;
      protected _sum_12_betChipStack: ui.BetChipStack;
      protected _sum_13_betChipStack: ui.BetChipStack;
      protected _sum_14_betChipStack: ui.BetChipStack;
      protected _sum_15_betChipStack: ui.BetChipStack;
      protected _sum_16_betChipStack: ui.BetChipStack;
      protected _sum_17_betChipStack: ui.BetChipStack;
      protected _triple_1_betChipStack: ui.BetChipStack;
      protected _triple_2_betChipStack: ui.BetChipStack;
      protected _triple_3_betChipStack: ui.BetChipStack;
      protected _triple_4_betChipStack: ui.BetChipStack;
      protected _triple_5_betChipStack: ui.BetChipStack;
      protected _triple_6_betChipStack: ui.BetChipStack;
      protected _triple_all_betChipStack: ui.BetChipStack;
      protected _double_1_betChipStack: ui.BetChipStack;
      protected _double_2_betChipStack: ui.BetChipStack;
      protected _double_3_betChipStack: ui.BetChipStack;
      protected _double_4_betChipStack: ui.BetChipStack;
      protected _double_5_betChipStack: ui.BetChipStack;
      protected _double_6_betChipStack: ui.BetChipStack;
      protected _combine_1_2_betChipStack: ui.BetChipStack;
      protected _combine_1_3_betChipStack: ui.BetChipStack;
      protected _combine_1_4_betChipStack: ui.BetChipStack;
      protected _combine_1_5_betChipStack: ui.BetChipStack;
      protected _combine_1_6_betChipStack: ui.BetChipStack;
      protected _combine_2_3_betChipStack: ui.BetChipStack;
      protected _combine_2_4_betChipStack: ui.BetChipStack;
      protected _combine_2_5_betChipStack: ui.BetChipStack;
      protected _combine_2_6_betChipStack: ui.BetChipStack;
      protected _combine_3_4_betChipStack: ui.BetChipStack;
      protected _combine_3_5_betChipStack: ui.BetChipStack;
      protected _combine_3_6_betChipStack: ui.BetChipStack;
      protected _combine_4_5_betChipStack: ui.BetChipStack;
      protected _combine_4_6_betChipStack: ui.BetChipStack;
      protected _combine_5_6_betChipStack: ui.BetChipStack;
      protected _specific_1_betChipStack: ui.BetChipStack;
      protected _specific_2_betChipStack: ui.BetChipStack;
      protected _specific_3_betChipStack: ui.BetChipStack;
      protected _specific_4_betChipStack: ui.BetChipStack;
      protected _specific_5_betChipStack: ui.BetChipStack;
      protected _specific_6_betChipStack: ui.BetChipStack;

      protected _groupHoverMapping: {};

      constructor() {
        super();
        this._betField = di.BetField;
      }

      protected createMapping() {
        super.createMapping();
        this._mouseAreaMapping = {};
        this._mouseAreaMapping[di.BetField.ODD] = this._odd_group;
        this._mouseAreaMapping[di.BetField.EVEN] = this._even_group;
        this._mouseAreaMapping[di.BetField.BIG] = this._big_group;
        this._mouseAreaMapping[di.BetField.SMALL] = this._small_group;
        this._mouseAreaMapping[di.BetField.SUM_4] = this._sum_4_group;
        this._mouseAreaMapping[di.BetField.SUM_5] = this._sum_5_group;
        this._mouseAreaMapping[di.BetField.SUM_6] = this._sum_6_group;
        this._mouseAreaMapping[di.BetField.SUM_7] = this._sum_7_group;
        this._mouseAreaMapping[di.BetField.SUM_8] = this._sum_8_group;
        this._mouseAreaMapping[di.BetField.SUM_9] = this._sum_9_group;
        this._mouseAreaMapping[di.BetField.SUM_10] = this._sum_10_group;
        this._mouseAreaMapping[di.BetField.SUM_11] = this._sum_11_group;
        this._mouseAreaMapping[di.BetField.SUM_12] = this._sum_12_group;
        this._mouseAreaMapping[di.BetField.SUM_13] = this._sum_13_group;
        this._mouseAreaMapping[di.BetField.SUM_14] = this._sum_14_group;
        this._mouseAreaMapping[di.BetField.SUM_15] = this._sum_15_group;
        this._mouseAreaMapping[di.BetField.SUM_16] = this._sum_16_group;
        this._mouseAreaMapping[di.BetField.SUM_17] = this._sum_17_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_1] = this._triple_1_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_2] = this._triple_2_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_3] = this._triple_3_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_4] = this._triple_4_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_5] = this._triple_5_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_6] = this._triple_6_group;
        this._mouseAreaMapping[di.BetField.TRIPLE_ALL] = this._triple_all_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_1] = this._double_1_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_2] = this._double_2_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_3] = this._double_3_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_4] = this._double_4_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_5] = this._double_5_group;
        this._mouseAreaMapping[di.BetField.DOUBLE_6] = this._double_6_group;
        this._mouseAreaMapping[di.BetField.COMBINE_1_2] = this._combine_1_2_group;
        this._mouseAreaMapping[di.BetField.COMBINE_1_3] = this._combine_1_3_group;
        this._mouseAreaMapping[di.BetField.COMBINE_1_4] = this._combine_1_4_group;
        this._mouseAreaMapping[di.BetField.COMBINE_1_5] = this._combine_1_5_group;
        this._mouseAreaMapping[di.BetField.COMBINE_1_6] = this._combine_1_6_group;
        this._mouseAreaMapping[di.BetField.COMBINE_2_3] = this._combine_2_3_group;
        this._mouseAreaMapping[di.BetField.COMBINE_2_4] = this._combine_2_4_group;
        this._mouseAreaMapping[di.BetField.COMBINE_2_5] = this._combine_2_5_group;
        this._mouseAreaMapping[di.BetField.COMBINE_2_6] = this._combine_2_6_group;
        this._mouseAreaMapping[di.BetField.COMBINE_3_4] = this._combine_3_4_group;
        this._mouseAreaMapping[di.BetField.COMBINE_3_5] = this._combine_3_5_group;
        this._mouseAreaMapping[di.BetField.COMBINE_3_6] = this._combine_3_6_group;
        this._mouseAreaMapping[di.BetField.COMBINE_4_5] = this._combine_4_5_group;
        this._mouseAreaMapping[di.BetField.COMBINE_4_6] = this._combine_4_6_group;
        this._mouseAreaMapping[di.BetField.COMBINE_5_6] = this._combine_5_6_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_1] = this._specific_1_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_2] = this._specific_2_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_3] = this._specific_3_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_4] = this._specific_4_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_5] = this._specific_5_group;
        this._mouseAreaMapping[di.BetField.SPECIFIC_6] = this._specific_6_group;

        Object.keys(this._mouseAreaMapping).map(value => {
          mouse.setButtonMode(this._mouseAreaMapping[value], true);
        });

        this._betChipStackMapping = {};
        this._betChipStackMapping[di.BetField.ODD] = this._odd_betChipStack;
        this._betChipStackMapping[di.BetField.EVEN] = this._even_betChipStack;
        this._betChipStackMapping[di.BetField.BIG] = this._big_betChipStack;
        this._betChipStackMapping[di.BetField.SMALL] = this._small_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_4] = this._sum_4_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_5] = this._sum_5_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_6] = this._sum_6_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_7] = this._sum_7_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_8] = this._sum_8_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_9] = this._sum_9_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_10] = this._sum_10_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_11] = this._sum_11_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_12] = this._sum_12_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_13] = this._sum_13_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_14] = this._sum_14_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_15] = this._sum_15_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_16] = this._sum_16_betChipStack;
        this._betChipStackMapping[di.BetField.SUM_17] = this._sum_17_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_1] = this._triple_1_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_2] = this._triple_2_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_3] = this._triple_3_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_4] = this._triple_4_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_5] = this._triple_5_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_6] = this._triple_6_betChipStack;
        this._betChipStackMapping[di.BetField.TRIPLE_ALL] = this._triple_all_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_1] = this._double_1_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_2] = this._double_2_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_3] = this._double_3_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_4] = this._double_4_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_5] = this._double_5_betChipStack;
        this._betChipStackMapping[di.BetField.DOUBLE_6] = this._double_6_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_1_2] = this._combine_1_2_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_1_3] = this._combine_1_3_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_1_4] = this._combine_1_4_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_1_5] = this._combine_1_5_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_1_6] = this._combine_1_6_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_2_3] = this._combine_2_3_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_2_4] = this._combine_2_4_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_2_5] = this._combine_2_5_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_2_6] = this._combine_2_6_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_3_4] = this._combine_3_4_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_3_5] = this._combine_3_5_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_3_6] = this._combine_3_6_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_4_5] = this._combine_4_5_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_4_6] = this._combine_4_6_betChipStack;
        this._betChipStackMapping[di.BetField.COMBINE_5_6] = this._combine_5_6_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_1] = this._specific_1_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_2] = this._specific_2_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_3] = this._specific_3_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_4] = this._specific_4_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_5] = this._specific_5_betChipStack;
        this._betChipStackMapping[di.BetField.SPECIFIC_6] = this._specific_6_betChipStack;

        this._groupHoverMapping = {};
        Object.keys(we.ro.BETFIELD_MAPPING).map(value => {
          this._groupHoverMapping[value] = we.ro.BETFIELD_MAPPING[value];
        });
      }

      protected isExceedBetLimit(fieldAmounts: {}, betLimit: data.BetLimitSet) {
        for (const key of Object.keys(fieldAmounts)) {
          if (fieldAmounts[key] > betLimit.maxlimit) {
            return true;
          }
        }
        return false;
      }

      public onGridRollover(fieldName: string) {
        this._tableLayer.onRollover(fieldName);
      }

      public onGridRollout(fieldName: string) {
        this._tableLayer.onRollout(fieldName);
      }

      public async animateToState(collapsed: boolean) {
        const time = 3000;
        const tweenPromises = [];

        egret.Tween.removeTweens(this);

        Object.keys(this).map(value => {
          if (this[value] instanceof egret.DisplayObject && this[value] !== this._tableLayer) {
            console.log('chiplayer dice', value, this[value]);
            egret.Tween.removeTweens(this[value]);
          }
        });

        /*
        for (let i = 1; i <= 3; i += 1) {
          const promise = new Promise(resolve => {
            egret.Tween.get(this[`_label_group_${i}`])
              .to({ scaleY: collapsed ? 0 : 1 }, 125)
              .call(resolve);
          });
          tweenPromises.push(promise);
        }
        */
        const border = 2;
        const sizeTransform = {};
        // row 1
        sizeTransform['_bigrow_1'] = [
          { height: 143 }, // collapse
          { height: 150 }, // expand
        ];
        // row 2
        sizeTransform['_bigrow_2'] = [
          { height: 64, y: 144 }, // collapse
          { height: 67, y: 179 }, // expand
        ];
        // row 3
        sizeTransform['_bigrow_3'] = [
          { height: 64, y: 209 }, // collapse
          { height: 109, y: 273 }, // expand
        ];
        // perform first 3 row transform
        Object.keys(sizeTransform).forEach(group => {
          const promise = new Promise(resolve => {
            egret.Tween.get(this[group])
              .to(collapsed ? sizeTransform[group][0] : sizeTransform[group][1], 125)
              .call(resolve);
          });
          tweenPromises.push(promise);
        });
        // transform dices in row 3
        /*
        this._bigrow_3.$children.forEach(child => {
          if (!(child instanceof eui.Group)) {
            return;
          }
          const innerGroup = child.$children[0] as eui.Group;
          innerGroup.layout = collapsed ? new eui.HorizontalLayout() : new eui.VerticalLayout();
          innerGroup.scaleX = collapsed ? 0.75 : 1;
          innerGroup.scaleY = collapsed ? 0.75 : 1;
          logger.l(innerGroup);
        });
*/
        // transform last row
        (() => {
          for (let i = 1; i <= 6; i += 1) {
            const promise = new Promise(resolve => {
              egret.Tween.get(this[`_specific_${i}_group`])
                .to(
                  {
                    width: collapsed ? 228 : 197,
                    height: collapsed ? 64 : 68,
                    x: (collapsed ? 0 : 196) + (collapsed ? 228 : 197) * (i - 1) + border,
                    y: collapsed ? 274 : 411,
                  },
                  125
                )
                .call(resolve);
            });
            tweenPromises.push(promise);
          }
        })();
        // transform last row bg odd
        // transform last row bg
        // transform this.height lastly
        (() => {
          const promise = new Promise(resolve => {
            egret.Tween.get(this)
              .to({ height: collapsed ? 338 : 473, anchorOffsetY: collapsed ? -(473 - 338) : 0 }, 125)
              .call(resolve);
          });
          tweenPromises.push(promise);
        })();

        await Promise.all(tweenPromises);
      }

      protected restructureChildren() {
        /*
        Object.keys(this._betChipStackMapping).forEach(value => {
          const chipStack = this._betChipStackMapping[value];
          if (this._betChipStackMapping[value]) {
            let parent = chipStack.parent;
            if (parent !== this) {
                  chipStack.verticalCenter = NaN;
                  chipStack.horizontalCenter = NaN;

                  let x = parent.width * 0.5;
                  let y = parent.height * 0.5;

                  while (parent !== this) {
                    x += parent.x;
                    y += parent.y;
                    parent = parent.parent;
                  }
                  chipStack.x = x;
                  chipStack.y = y;
                  chipStack.width = 0;
                  chipStack.height = 0;
                  chipStack.validateNow();
                  this.addChild(chipStack);
              }
          }
        });
              */
      }
    }
  }
}
