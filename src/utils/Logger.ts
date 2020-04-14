namespace we {
  export namespace utils {
    export class Logger {
      private static _logger: Logger;
      private _whitelist: string[] = ['socketcomm']; // white list file and function ['socketcomm.ongamestatusupdate'], white list nothing[''], white list everything []

      public static get Instance(): Logger {
        return this._logger ? this._logger : new Logger();
      }

      private _logmsgmeasurer;

      // set whitelist to string[] of fileName.FunctionName
      public whitelist(list: string[]) {
        this._whitelist = list;
        this._whitelist.forEach(e => {
          e = e.toLowerCase();
        });
      }

      public l(...args) {
        this.log('log', ...args);
      }

      public e(...args) {
        this.log('error', ...args);
      }

      private log(type, ...args) {
        let msg = new Error().stack
          .split('\n')
          [1 /* logger internal */ + 2].trim()
          .replace('at ', '');
<<<<<<< HEAD
        const link = msg.match(/http[^\)]+/)[0];
        msg = msg.replace(link, '').replace(' ()', '');
=======
        const match = msg.match(/http[^\)]+/);
        let link = '';
        if (match && match.length > 0) {
          link = match[0];
          if (link) {
            msg = msg.replace(link, '');
          }
        }
        msg = msg.replace(' ()', '');
>>>>>>> 444879a0bbab436cb6ce3fe63cdad63c6b9da817

        // if whitelist is enabled
        if (this._whitelist.length > 0) {
          // check if the filename.Function is in the whitelist
          let isFound = false;
          this.whitelist(this._whitelist);
          const msglower = msg.toLowerCase();
          this._whitelist.forEach(e => {
            if (msglower.indexOf(e) > -1) {
              isFound = true;
            }
          });
          if (!isFound) {
            return;
          }
        }

        const font = 'font: 12px monospace; font-weight: bold';
        if (!this._logmsgmeasurer) {
          this._logmsgmeasurer = document.createElement('span');
          this._logmsgmeasurer.setAttribute('style', `${font}; position: fixed; top: -9999px`);
          document.body.appendChild(this._logmsgmeasurer);
        }
        this._logmsgmeasurer.innerHTML = link.slice(0, link.lastIndexOf('/'));
        let marleft = this._logmsgmeasurer.clientWidth + 24;

        if (type === 'error') {
          marleft += 10;
        }

        if (window.navigator.userAgent.indexOf('ectron') > 0) {
          // egret player (hardcoded 2)
          marleft /= 2;
        }

        setTimeout(console[type].bind(console, `%c${link} %c=> %c${msg}`, `${font}; margin-left: -${marleft}px`, 'color: #e70', 'color: inherit', args), 0);
      }
    }
  }
}

let logger: we.utils.Logger = we.utils.Logger.Instance;
