namespace we {
  export namespace utils {
    export class BetTypeParser {
      public static parse(gametype, bettype: string) {
        switch (gametype) {
          case GameType.LO:
            return this.parseLO(bettype);
          default:
            return {};
        }
      }

      public static parseLO(bettype) {
        const b = bettype.split('@')[0].split('_');
        switch (b[0]) {
          case 'MILSIZEPARITY2':
          case 'THOUSIZEPARITY2':
          case 'HUNSIZEPARITY2':
          case 'TENSIZEPARITY2':
          case 'SINSIZEPARITY2':
          case 'SUMSIZEPARITY':
            return {
              type: i18n.t('lo_fun_bettype_n'),
              group: i18n.t(`lo_fun_betgroup_${b[0]}`),
              field: i18n.t(`lo_fun_betfield_n_${b[1]}`),
            };

          case '123THREESPECIAL':
          case '234THREESPECIAL':
          case '345THREESPECIAL':
            return {
              type: i18n.t('lo_fun_bettype_n3'),
              group: i18n.t(`lo_fun_betgroup_${b[0]}`),
              field: i18n.t(`lo_fun_betfield_n3_${b[1]}`),
            };
          case 'MILLIONNUM':
          case 'THOUSANDNUM':
          case 'HUNDREDNUM':
          case 'TENNUM':
          case 'SINGLENUM':
            return {
              type: i18n.t('lo_fun_bettype_num'),
              group: i18n.t(`lo_fun_betgroup_${b[0]}`),
              field: `${b[1]}`,
            };
          case '12DT2':
          case '13DT2':
          case '14DT2':
          case '15DT2':
          case '23DT2':
          case '24DT2':
          case '25DT2':
          case '34DT2':
          case '35DT2':
          case '45DT2':
            return {
              type: i18n.t('lo_fun_bettype_dt'),
              group: i18n.t(`lo_fun_betgroup_${b[0]}`),
              field: i18n.t(`lo_fun_betfield_dt_${b[1]}`),
            };
          case 'INTEREST1SPECIAL':
            return {
              type: i18n.t('lo_fun_bettype_five1'),
              group: i18n.t(`lo_fun_bettype_five1`),
              field: `${b[1]}`,
            };
          // lo_trad
          // FIVE_STAR
          case '12345OPTIONAL':
          case '12345OPTIONALINPUT':
          case '12345OPTIONALCOM':
          case 'FIVE120':
          case 'FIVE60':
          case 'FIVE30':
          case 'FIVE20':
          case 'FIVE10':
          case 'FIVE5':
            return {
              type: i18n.t('lo_trad.bigTag.FiveStar'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // FOUR_STAR
          case '2345OPTIONAL':
          case '2345OPTIONALINPUT':
          case '2345OPTIONALCOM':
          case '2345FOUR24':
          case '2345FOUR12':
          case '2345FOUR6':
          case '2345FOUR4':
            return {
              type: i18n.t('lo_trad.bigTag.FourStar'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          case '123OPTIONAL':
          case '123OPTIONALINPUT':
          case '123SUMOPTIONAL':
          case '123THREE3':
          case '123THREE6':
          case '123THREECOMBINE':
          case '123SUMGROUP':
          case '123THREEBRAVERYTOW3':
          case '123THREEBRAVERYTOW6':
            return {
              type: i18n.t('lo_trad.bigTag.FirstThree'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // MidThree
          case '234OPTIONAL':
          case '234OPTIONALINPUT':
          case '234SUMOPTIONAL':
          case '234THREE3':
          case '234THREE6':
          case '234THREECOMBINE':
          case '234SUMGROUP':
          case '234THREEBRAVERYTOW3':
          case '234THREEBRAVERYTOW6':
            return {
              type: i18n.t('lo_trad.bigTag.MidThree'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // LastThree
          case '345OPTIONAL':
          case '345OPTIONALINPUT':
          case '345SUMOPTIONAL':
          case '345THREE3':
          case '345THREE6':
          case '345THREECOMBINE':
          case '345SUMGROUP':
          case '345THREEBRAVERYTOW3':
          case '345THREEBRAVERYTOW6':
            return {
              type: i18n.t('lo_trad.bigTag.LastThree'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // TwoStar
          case '45OPTIONAL':
          case '45OPTIONALINPUT':
          case '45SUMOPTIONAL':
          case '12OPTIONAL':
          case '12OPTIONALINPUT':
          case '12SUMOPTIONAL':
          case '45TWOGROUP':
          case '45TWOGROUPINPUT':
          case '45SUMGROUP':
          case '12TWOGROUP':
          case '12TWOGROUPINPUT':
          case '12SUMGROUP':
            return {
              type: i18n.t('lo_trad.bigTag.TwoStar'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // StaticTow
          case '1POSITION':
          case '2POSITION':
          case '3POSITION':
          case '4POSITION':
          case '5POSITION':
            const trans5 = lo.BetFieldTranslationFunction.tradbetfieldtranslate(b[0]);
            return {
              type: i18n.t('lo_trad.bigTag.StaticTow'),
              group: `${trans5.selectType} | ${i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${trans5.betCode}`]}`)}`,
              field: `${b[1]}`,
            };
          // NotPos
          case '345NOTPOS1':
          case '345NOTPOS2':
          case '123NOTPOS1':
          case '123NOTPOS2':
          case '12345NOTPOS1':
          case '12345NOTPOS2':
          case '12345NOTPOS3':
            return {
              type: i18n.t('lo_trad.bigTag.NotPos'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // SIZEPARITY
          case 'LAST2SIZEPARITY':
          case 'FRONT2SIZEPARITY':
          case 'MILSIZEPARITY':
          case 'THOUSIZEPARITY':
          case 'HUNSIZEPARITY':
          case 'TENSIZEPARITY':
          case 'SINSIZEPARITY':
            return {
              type: i18n.t('lo_trad.bigTag.SizeParity'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `lo_fun_betfield_n_${b[1]}`,
            };
          // Interest
          case 'INTEREST1':
          case 'INTEREST2':
          case 'INTEREST3':
          case 'INTEREST4':
            return {
              type: i18n.t('lo_trad.bigTag.Interest'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // DT
          case '12DT':
          case '13DT':
          case '14DT':
          case '15DT':
          case '23DT':
          case '24DT':
          case '25DT':
          case '34DT':
          case '35DT':
          case '45DT':
            return {
              type: i18n.t('lo_trad.bigTag.DragonTiger'),
              group: i18n.t(`lo_trad.smallTag.${we.lo.LoTradBetField[`betfield_${b[0]}`]}`),
              field: `${b[1]}`,
            };
          // AnyTwo
          case '12OPTIONALFREE':
          case '13OPTIONALFREE':
          case '14OPTIONALFREE':
          case '15OPTIONALFREE':
          case '23OPTIONALFREE':
          case '24OPTIONALFREE':
          case '25OPTIONALFREE':
          case '34OPTIONALFREE':
          case '35OPTIONALFREE':
          case '45OPTIONALFREE':
          case '12OPTIONALINPUTFREE':
          case '13OPTIONALINPUTFREE':
          case '14OPTIONALINPUTFREE':
          case '15OPTIONALINPUTFREE':
          case '23OPTIONALINPUTFREE':
          case '24OPTIONALINPUTFREE':
          case '25OPTIONALINPUTFREE':
          case '34OPTIONALINPUTFREE':
          case '35OPTIONALINPUTFREE':
          case '45OPTIONALINPUTFREE':
          case '12SUMOPTIONALFREE':
          case '13SUMOPTIONALFREE':
          case '14SUMOPTIONALFREE':
          case '15SUMOPTIONALFREE':
          case '23SUMOPTIONALFREE':
          case '24SUMOPTIONALFREE':
          case '25SUMOPTIONALFREE':
          case '34SUMOPTIONALFREE':
          case '35SUMOPTIONALFREE':
          case '45SUMOPTIONALFREE':
          case '12TWOGROUPFREE':
          case '13TWOGROUPFREE':
          case '14TWOGROUPFREE':
          case '15TWOGROUPFREE':
          case '23TWOGROUPFREE':
          case '24TWOGROUPFREE':
          case '25TWOGROUPFREE':
          case '34TWOGROUPFREE':
          case '35TWOGROUPFREE':
          case '45TWOGROUPFREE':
          case '12TWOGROUPINPUTFREE':
          case '13TWOGROUPINPUTFREE':
          case '14TWOGROUPINPUTFREE':
          case '15TWOGROUPINPUTFREE':
          case '23TWOGROUPINPUTFREE':
          case '24TWOGROUPINPUTFREE':
          case '25TWOGROUPINPUTFREE':
          case '34TWOGROUPINPUTFREE':
          case '35TWOGROUPINPUTFREE':
          case '45TWOGROUPINPUTFREE':
          case '12SUMGROUPFREE':
          case '13SUMGROUPFREE':
          case '14SUMGROUPFREE':
          case '15SUMGROUPFREE':
          case '23SUMGROUPFREE':
          case '24SUMGROUPFREE':
          case '25SUMGROUPFREE':
          case '34SUMGROUPFREE':
          case '35SUMGROUPFREE':
          case '45SUMGROUPFREE':
            const trans2 = lo.BetFieldTranslationFunction.tradbetfieldtranslate(b[0]);
            return {
              type: `${i18n.t('lo_trad.bigTag.AnyTwo')}`,
              group: `${trans2.selectType} | ${i18n.t(`lo_trad.specialbettype.${we.lo.LoTradBetField[`betfield_${trans2.betCode}`]}`)}`,
              field: `${b[1]}`,
            };
          case '123OPTIONALFREE':
          case '124OPTIONALFREE':
          case '125OPTIONALFREE':
          case '134OPTIONALFREE':
          case '135OPTIONALFREE':
          case '145OPTIONALFREE':
          case '234OPTIONALFREE':
          case '235OPTIONALFREE':
          case '245OPTIONALFREE':
          case '345OPTIONALFREE':
          case '123OPTIONALFREEINPUT':
          case '124OPTIONALFREEINPUT':
          case '125OPTIONALFREEINPUT':
          case '134OPTIONALFREEINPUT':
          case '135OPTIONALFREEINPUT':
          case '145OPTIONALFREEINPUT':
          case '234OPTIONALFREEINPUT':
          case '235OPTIONALFREEINPUT':
          case '245OPTIONALFREEINPUT':
          case '345OPTIONALFREEINPUT':
          case '123SUMOPTIONALFREE':
          case '124SUMOPTIONALFREE':
          case '125SUMOPTIONALFREE':
          case '134SUMOPTIONALFREE':
          case '135SUMOPTIONALFREE':
          case '145SUMOPTIONALFREE':
          case '234SUMOPTIONALFREE':
          case '235SUMOPTIONALFREE':
          case '245SUMOPTIONALFREE':
          case '345SUMOPTIONALFREE':
          case '123THREE3FREE':
          case '124THREE3FREE':
          case '125THREE3FREE':
          case '134THREE3FREE':
          case '135THREE3FREE':
          case '145THREE3FREE':
          case '234THREE3FREE':
          case '235THREE3FREE':
          case '245THREE3FREE':
          case '345THREE3FREE':
          case '123THREE6FREE':
          case '124THREE6FREE':
          case '125THREE6FREE':
          case '134THREE6FREE':
          case '135THREE6FREE':
          case '145THREE6FREE':
          case '234THREE6FREE':
          case '235THREE6FREE':
          case '245THREE6FREE':
          case '345THREE6FREE':
          case '123SUMGROUPFREE':
          case '124SUMGROUPFREE':
          case '125SUMGROUPFREE':
          case '134SUMGROUPFREE':
          case '135SUMGROUPFREE':
          case '145SUMGROUPFREE':
          case '234SUMGROUPFREE':
          case '235SUMGROUPFREE':
          case '245SUMGROUPFREE':
          case '345SUMGROUPFREE':
            const trans3 = lo.BetFieldTranslationFunction.tradbetfieldtranslate(b[0]);
            return {
              type: i18n.t('lo_trad.bigTag.AnyThree'),
              group: `${trans3.selectType} | ${i18n.t(`lo_trad.specialbettype.${we.lo.LoTradBetField[`betfield_${trans3.betCode}`]}`)}`,
              field: `${b[1]}`,
            };
          // AnyFour
          case '1234OPTIONALFREE':
          case '1235OPTIONALFREE':
          case '1245OPTIONALFREE':
          case '1345OPTIONALFREE':
          case '2345OPTIONALFREE':
          case '1234OPTIONALFREEINPUT':
          case '1235OPTIONALFREEINPUT':
          case '1245OPTIONALFREEINPUT':
          case '1345OPTIONALFREEINPUT':
          case '2345OPTIONALFREEINPUT':
          case '1234FOUR24FREE':
          case '1235FOUR24FREE':
          case '1245FOUR24FREE':
          case '1345FOUR24FREE':
          case '2345FOUR24FREE':
          case '1234FOUR12FREE':
          case '1235FOUR12FREE':
          case '1245FOUR12FREE':
          case '1345FOUR12FREE':
          case '2345FOUR12FREE':
          case '1234FOUR6FREE':
          case '1235FOUR6FREE':
          case '1245FOUR6FREE':
          case '1345FOUR6FREE':
          case '2345FOUR6FREE':
          case '1234FOUR4FREE':
          case '1235FOUR4FREE':
          case '1245FOUR4FREE':
          case '1345FOUR4FREE':
          case '2345FOUR4FREE':
            const trans4 = lo.BetFieldTranslationFunction.tradbetfieldtranslate(b[0]);
            return {
              type: i18n.t('lo_trad.bigTag.AnyFour'),
              group: `${trans4.selectType} | ${i18n.t(`lo_trad.specialbettype.${we.lo.LoTradBetField[`betfield_${trans4.betCode}`]}`)}`,
              field: `${b[1]}`,
            };
          default:
            return {
              type: '',
              group: '',
              field: '',
            };
        }
      }
    }
  }
}
