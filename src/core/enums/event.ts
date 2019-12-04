namespace we {
  export namespace core {
    export const Event = {
      TOGGLE_OVERLAY_PANEL: 'TOGGLE_OVERLAY_PANEL',
      MODE_UPDATE: 'EV_MODE_UPDATE',
      METER_UPDATE: 'EV_METER_UPDATE',
      ENTER_SCENE: 'EV_ENTER_SCENE',
      SWITCH_LANGUAGE: 'i18n_SWITCH_LANGUAGE',
      CONNECT_SUCCESS: 'MQTT_EV_CONNECT_SUCCESS',
      CONNECT_FAIL: 'MQTT_EV_CONNECT_FAIL',
      PLAYER_PROFILE_UPDATE: 'PLAYER_PROFILE_UPDATE',
      TABLE_LIST_UPDATE: 'TABLE_LIST_UPDATE',
      TABLE_INFO_UPDATE: 'TABLE_INFO_UPDATE',
      TABLE_BET_INFO_UPDATE: 'TABLE_BET_INFO_UPDATE',
      PLAYER_BET_INFO_UPDATE: 'PLAYER_BET_INFO_UPDATE',
      PLAYER_BET_RESULT: 'PLAYER_BET_RESULT',
      BALANCE_UPDATE: 'BALANCE_UPDATE',
      ROADMAP_UPDATE: 'ROADMAP_UPDATE',
      BET_SUMMARY_UPDATE: 'BET_SUMMARY_UPDATE',
      LIVE_PAGE_LOCK: 'LIVE_PAGE_LOCK',
      INSUFFICIENT_BALANCE: 'INSUFFICIENT_BALANCE',
      EXCEED_BET_LIMIT: 'EXCEED_BET_LIMIT',
      BET_CHIP_CHANGE: 'BET_CHIP_CHANGE',
    };

    export const MQTT = {
      READY: 'READY',
      TABLE_LIST_UPDATE: 'TABLE_LIST_UPDATE',
      GAME_STATUS_UPDATE: 'GAME_STATUS_UPDATE',
      GAME_STATISTIC_UPDATE: 'GAME_STATISTIC_UPDATE',
      BALANCE_UPDATE: 'BALANCE_UPDATE',
      PLAYER_BET_INFO_UPDATE: 'PLAYER_BET_INFO_UPDATE',
      PLAYER_BET_RESULT: 'PLAYER_BET_RESULT',
      ERROR: 'ERROR',
      CONNECT_SUCCESS: 'MQTT_EV_CONNECT_SUCCESS',
      CONNECT_FAIL: 'MQTT_EV_CONNECT_FAIL',
      TABLE_BET_INFO_UPDATE: 'TABLE_BET_INFO_UPDATE',
      BET_TABLE_LIST_UPDATE: 'BET_TABLE_LIST_UPDATE',
    };
  }
}
