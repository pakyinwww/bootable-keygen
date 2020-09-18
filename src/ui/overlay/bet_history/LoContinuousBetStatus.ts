namespace we {
  export namespace overlay {
    export class LoContinuousBetStatus extends ui.Panel {
      protected _txt_round: eui.Label;
      protected _txt_rate: eui.Label;
      protected _txt_status: eui.Label;
      protected _txt_cancel: eui.Label;

      protected _list: eui.DataGroup;
      protected _arrcol: eui.ArrayCollection;

      protected _btn_allCancel: ui.RoundRectButton;

      constructor(data) {
        super('LoContinuousBetStatus');
      }

      protected mount() {
        this._txt_round = i18n.t('overlaypanel_bethistorylottery_continuousbet_round');
        this._txt_rate = i18n.t('overlaypanel_bethistorylottery_continuousbet_rate');
        this._txt_status = i18n.t('overlaypanel_bethistorylottery_continuousbet_status');
        this._txt_cancel = i18n.t('overlaypanel_bethistorylottery_continuousbet_cancel');

        this._btn_allCancel.label.text = i18n.t('overlaypanel_bethistorylottery_continuousbet_allcancel');

        this._arrcol = new eui.ArrayCollection();
        this._list.dataProvider = this._arrcol;
        this._list.itemRenderer = LoContinuousBetStatusIR;

        utils.addButtonListener(this._btn_allCancel, this.onAllCancel, this);
      }

      protected onAllCancel() {}
    }
  }
}
