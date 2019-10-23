namespace enums {
  export const mqtt = {
    subscribe: {
      READY: 'READY',
      TABLE_LIST_UPDATE: 'TABLE_LIST_UPDATE',
      GAME_STATUS_UPDATE: 'GAME_STATUS_UPDATE',
      GAME_STATISTIC_UPDATE: 'GAME_STATISTIC_UPDATE',
      BALANCE_UPDATE: 'BALANCE_UPDATE',
      PLAYER_BET_INFO_UPDATE: 'PLAYER_BET_INFO_UPDATE',
      ERROR: 'ERROR',
    },

    event: {
      CONNECT_SUCCESS: 'MQTT_EV_CONNECT_SUCCESS',
      CONNECT_FAIL: 'MQTT_EV_CONNECT_FAIL',
    },
  };
}
