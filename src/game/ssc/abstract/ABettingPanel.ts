// TypeScript file
namespace we {
  export namespace lo {
    export abstract class ABettingPanel extends core.BaseEUI implements IBettingPanel {
      public _currentBettingTable: ABettingTable;
      protected _bettingControl: ABettingControlBar;
      public _noteControl: ANoteControlPanel;

      public _currentGameRound: string;
      private _isStateBet: boolean = false; // is current state allow betting
      private _isBetCodeValidate: boolean = false; // is current bettingData valid(local checking)
      private _isBetLimitValidate: boolean = false; // validate betlimit from server

      public _timer: eui.Label;

      public set isStateBet(value) {
        this._isStateBet = value;
      }

      public get isStateBet(): boolean {
        return this._isStateBet;
      }

      public set isBetCodeValidate(value) {
        this._isBetCodeValidate = value;
      }

      public get isBetCodeValidate(): boolean {
        return this._isBetCodeValidate;
      }

      public set isBetLimitValidate(value) {
        this._isBetLimitValidate = value;
      }

      public get isBetLimitValidate(): boolean {
        return this._isBetLimitValidate;
      }

      protected init() {
        if (this._bettingControl) {
          this._bettingControl.bettingPanel = this;
          this._bettingControl.init();
        }
        if (this._noteControl) {
          this._noteControl.bettingPanel = this;
          this._noteControl.init();
        }

        this._isBetCodeValidate = false;
        this._isBetLimitValidate = true;
      }

      protected initComponents() {
        this.init();
        super.initComponents();
        this.addEventListeners();
      }

      protected destroy() {
        super.destroy();
        this.removeEventListeners();
      }

      protected addEventListeners() {
        dir.evtHandler.addEventListener(core.Event.SWITCH_LANGUAGE, this.updateText, this);
      }

      protected removeEventListeners() {
        dir.evtHandler.removeEventListener(core.Event.SWITCH_LANGUAGE, this.updateText, this);
      }

      protected updateText() {}

      protected clearCurrentBettingTable() {
        if (this._currentBettingTable) {
          this.clearNote();
          this._currentBettingTable.bettingPanel = null;
          this._currentBettingTable.dispose();
        }
      }

      public clearNote() {
        this._currentBettingTable.clearData();
        if (this._bettingControl) {
          this._bettingControl.noteCount = 0;
        }
      }

      protected initCurrentBettingTable() {
        this._currentBettingTable.bettingPanel = this;
      }

      public refreshCurrentBettingTable() {}

      public onInputChanged() {
        // console.log('Lottery input changed');
        // update current input note count and current bet amount in _bettingControl
        if (!this._bettingControl) {
          return;
        }
        this._isBetCodeValidate = true;
        this._bettingControl.noteCount = this._currentBettingTable.totalNoteCount;
      }

      protected betFieldMapping(betFields: string[], isMultiple: boolean = false) {
        // const unitBet = this._bettingControl ? this._bettingControl.unitBet : 10; // temp workaround when bettingControl not exist
        const unitBet = this._bettingControl.unitBet;
        const multiplier = this._bettingControl.multiplier;

        if (isMultiple) {
          return betFields.map(betField => `${betField}@${unitBet}#${multiplier}`);
        }

        return betFields.map(betField => `${betField}@${unitBet}`);
      }

      protected generateNoteData(): TradNoteData[] {
        const rawBetFields = this._currentBettingTable.betFields;
        const finalbetFields = this.betFieldMapping(rawBetFields);
        // TODO: generateNoteData using unitBet, multiplier of ABettingControlBar and the betField and noteCount of ABettingTable and store at _notes
        const tradNoteDataArray = [];
        for (let i = 0; i < finalbetFields.length; i++) {
          const tradNoteData = new TradNoteData();
          tradNoteData.field = finalbetFields[i];
          tradNoteData.count = this._currentBettingTable.noteCount[i];
          tradNoteData.multiplier = this._bettingControl.multiplier;
          tradNoteDataArray.push(tradNoteData);
        }

        return tradNoteDataArray;
      }

      protected placeBet(notes: TradNoteData[]) {
        const betdetails = this.generateBetDetail(notes);
        const roundbetdetals = this.generateCurrentBetRoundBetDetail();
        // let s = '';
        // for (let i = 0; i < betdetails.length; i++) {
        //   s += betdetails[i].field + ' , amount = ' + betdetails[i].amount;
        // }

        dir.evtHandler.dispatchEventWith('on_lottery_traditional_bet', false, { bets: betdetails, rounds: roundbetdetals }, false);
        this._noteControl.clearAllNotes();

        // dir.socket.bet(this._tableId, bets);
        // TODO: send out betdetails
      }

      // protected generateRoundBetDetail(notes: TradNoteData[]): data.RoundBetDetail{
      //   //
      // }

      protected generateBetDetail(notes: TradNoteData[]): data.BetCommand[] {
        // TODO: generate betDetails using TradNoteDatas
        //
        const betDetailArray: data.BetCommand[] = [];
        for (let i = 0; i < notes.length; i++) {
          const field = notes[i].field + '#' + notes[i].multiplier;
          const amount = parseInt(notes[i].field.split('@')[1], 10) * notes[i].count;
          betDetailArray.push({ amount, field });
        }

        return betDetailArray;
      }

      public confirmBet() {
        const notes = this._noteControl.notes;
        this.placeBet(notes);
      }

      public instantBet() {
        const notes = this.generateNoteData();
        this.placeBet(notes);
      }

      public addNotes() {
        // add notes to _noteControl
        const notes = this.generateNoteData();
        if (!this._noteControl) {
          return;
        }

        this._noteControl.addNotes(notes);
        // const tempbetdails = [
        //   {
        //     field: '34OptionalFree_564_708@200',
        //     count: 9,
        //     multiplier: 1,
        //   },
        // ];
      }

      public validateBetLimit() {
        // temp list of betlimits, need to receive from server
        // const tempMap = we.lo.tempBetLimitsMap;
        if (this._currentBettingTable.betFields.length === 0) {
          return;
        }

        const noteDataArray = this.generateNoteData();
        const betDetails = this.generateBetDetail(noteDataArray);
        const roundBetDetailArray = this.generateCurrentBetRoundBetDetail();
        // send validation

        // if success
        this.isBetLimitValidate = true;
      }

      public generateChaseBetRoundBetDetail(): data.LotteryBetCommand[] {
        // chaseBet
        return [];
      }

      public generateCurrentBetRoundBetDetail(): data.LotteryBetCommand[] {
        // let lotteryBetCommandArray : data.LotteryBetCommand[] = [];
        const lotteryBetCommand: data.LotteryBetCommand = { roundid: this._currentGameRound, multiplier: 1, stopChaseIfWon: false };

        return [lotteryBetCommand];
      }

      public onBettingControlBarUnitBetUpdate(betFields: string[]) {
        // this.betFieldMapping(betFields);
      }

      public chaseBet() {
        // TODO
      }

      // SceneControl
      public setBetRelatedComponentsEnabled(enable: boolean) {
        this._isStateBet = enable;
        this.validateBetButtons();
      }

      public validateBetButtons() {
        if (!this._bettingControl || !this._noteControl) {
          return;
        }

        // console.log('isStateBet :' + this._isStateBet + 'isBetLimit :' + this._isBetLimitValidate + 'isBetCode :' + this._isBetCodeValidate);

        if (this._isBetLimitValidate && this._isBetCodeValidate) {
          this._bettingControl.setAddBetFieldsButton(true);
          if (this._isStateBet) {
            this._bettingControl.setInstantBetButton(true);
          } else {
            this._bettingControl.setInstantBetButton(false);
          }
        } else {
          this._bettingControl.setAddBetFieldsButton(false);
          this._bettingControl.setInstantBetButton(false);
        }

        if (this._isStateBet) {
          this._noteControl.setConfirmBetButton(true);
        } else {
          this._noteControl.setConfirmBetButton(false);
        }
      }

      public onEnablePanel(enable: boolean) {
        this.touchEnabled = enable;
      }
    }
  }
}
