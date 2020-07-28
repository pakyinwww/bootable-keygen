namespace we {
  export namespace ro {
    export enum Color {
      GREEN,
      BLACK,
      RED,
    }

    // export enum RACETRACK_INNERFIELD {
    //   TIERS = 'TIERS',
    //   VOISINS = 'VOISINS',
    //   ZERO = 'ZERO',
    //   ORPHELINS = 'ORPHELINS',
    // }

    // export const RACETRACK_INNERFIELD_MAPPING = {
    //   [ro.RACETRACK_INNERFIELD.TIERS]: [
    //     ro.BetField.SEPARATE_5_8,
    //     ro.BetField.SEPARATE_10_11,
    //     ro.BetField.SEPARATE_13_16,
    //     ro.BetField.SEPARATE_23_24,
    //     ro.BetField.SEPARATE_27_30,
    //     ro.BetField.SEPARATE_31_34,
    //   ],
    //   [ro.RACETRACK_INNERFIELD.ORPHELINS]: [ro.BetField.SEPARATE_6_9, ro.BetField.SEPARATE_14_17, ro.BetField.SEPARATE_17_20, ro.BetField.SEPARATE_31_34, ro.BetField.DIRECT_1],
    //   [ro.RACETRACK_INNERFIELD.VOISINS]: [
    //     ro.BetField.STREET_0_2_3,
    //     ro.BetField.SEPARATE_4_7,
    //     ro.BetField.SEPARATE_12_15,
    //     ro.BetField.SEPARATE_18_21,
    //     ro.BetField.SEPARATE_19_22,
    //     ro.BetField.CORNER_25_26_28_29,
    //     ro.BetField.SEPARATE_32_35,
    //   ],
    //   [ro.RACETRACK_INNERFIELD.ZERO]: [ro.BetField.SEPARATE_0_3, ro.BetField.SEPARATE_12_15, ro.BetField.SEPARATE_18_21, ro.BetField.DIRECT_26, ro.BetField.SEPARATE_32_35],
    // };

    export const BETFIELD_MAPPING = {
      [ro.BetField.DIRECT_0]: [ro.BetField.DIRECT_0],
      [ro.BetField.DIRECT_1]: [ro.BetField.DIRECT_1],
      [ro.BetField.DIRECT_2]: [ro.BetField.DIRECT_2],
      [ro.BetField.DIRECT_3]: [ro.BetField.DIRECT_3],
      [ro.BetField.DIRECT_4]: [ro.BetField.DIRECT_4],
      [ro.BetField.DIRECT_5]: [ro.BetField.DIRECT_5],
      [ro.BetField.DIRECT_6]: [ro.BetField.DIRECT_6],
      [ro.BetField.DIRECT_7]: [ro.BetField.DIRECT_7],
      [ro.BetField.DIRECT_8]: [ro.BetField.DIRECT_8],
      [ro.BetField.DIRECT_9]: [ro.BetField.DIRECT_9],
      [ro.BetField.DIRECT_10]: [ro.BetField.DIRECT_10],
      [ro.BetField.DIRECT_11]: [ro.BetField.DIRECT_11],
      [ro.BetField.DIRECT_12]: [ro.BetField.DIRECT_12],
      [ro.BetField.DIRECT_13]: [ro.BetField.DIRECT_13],
      [ro.BetField.DIRECT_14]: [ro.BetField.DIRECT_14],
      [ro.BetField.DIRECT_15]: [ro.BetField.DIRECT_15],
      [ro.BetField.DIRECT_16]: [ro.BetField.DIRECT_16],
      [ro.BetField.DIRECT_17]: [ro.BetField.DIRECT_17],
      [ro.BetField.DIRECT_18]: [ro.BetField.DIRECT_18],
      [ro.BetField.DIRECT_19]: [ro.BetField.DIRECT_19],
      [ro.BetField.DIRECT_20]: [ro.BetField.DIRECT_20],
      [ro.BetField.DIRECT_21]: [ro.BetField.DIRECT_21],
      [ro.BetField.DIRECT_22]: [ro.BetField.DIRECT_22],
      [ro.BetField.DIRECT_23]: [ro.BetField.DIRECT_23],
      [ro.BetField.DIRECT_24]: [ro.BetField.DIRECT_24],
      [ro.BetField.DIRECT_25]: [ro.BetField.DIRECT_25],
      [ro.BetField.DIRECT_26]: [ro.BetField.DIRECT_26],
      [ro.BetField.DIRECT_27]: [ro.BetField.DIRECT_27],
      [ro.BetField.DIRECT_28]: [ro.BetField.DIRECT_28],
      [ro.BetField.DIRECT_29]: [ro.BetField.DIRECT_29],
      [ro.BetField.DIRECT_30]: [ro.BetField.DIRECT_30],
      [ro.BetField.DIRECT_31]: [ro.BetField.DIRECT_31],
      [ro.BetField.DIRECT_32]: [ro.BetField.DIRECT_32],
      [ro.BetField.DIRECT_33]: [ro.BetField.DIRECT_33],
      [ro.BetField.DIRECT_34]: [ro.BetField.DIRECT_34],
      [ro.BetField.DIRECT_35]: [ro.BetField.DIRECT_35],
      [ro.BetField.DIRECT_36]: [ro.BetField.DIRECT_36],
      [ro.BetField.SEPARATE_1_2]: [ro.BetField.DIRECT_1, ro.BetField.DIRECT_2],
      [ro.BetField.SEPARATE_2_3]: [ro.BetField.DIRECT_2, ro.BetField.DIRECT_3],
      [ro.BetField.SEPARATE_4_5]: [ro.BetField.DIRECT_4, ro.BetField.DIRECT_5],
      [ro.BetField.SEPARATE_5_6]: [ro.BetField.DIRECT_5, ro.BetField.DIRECT_6],
      [ro.BetField.SEPARATE_7_8]: [ro.BetField.DIRECT_7, ro.BetField.DIRECT_8],
      [ro.BetField.SEPARATE_8_9]: [ro.BetField.DIRECT_8, ro.BetField.DIRECT_9],
      [ro.BetField.SEPARATE_10_11]: [ro.BetField.DIRECT_10, ro.BetField.DIRECT_11],
      [ro.BetField.SEPARATE_11_12]: [ro.BetField.DIRECT_11, ro.BetField.DIRECT_12],
      [ro.BetField.SEPARATE_13_14]: [ro.BetField.DIRECT_13, ro.BetField.DIRECT_14],
      [ro.BetField.SEPARATE_14_15]: [ro.BetField.DIRECT_14, ro.BetField.DIRECT_15],
      [ro.BetField.SEPARATE_16_17]: [ro.BetField.DIRECT_16, ro.BetField.DIRECT_17],
      [ro.BetField.SEPARATE_17_18]: [ro.BetField.DIRECT_17, ro.BetField.DIRECT_18],
      [ro.BetField.SEPARATE_19_20]: [ro.BetField.DIRECT_19, ro.BetField.DIRECT_20],
      [ro.BetField.SEPARATE_20_21]: [ro.BetField.DIRECT_20, ro.BetField.DIRECT_21],
      [ro.BetField.SEPARATE_22_23]: [ro.BetField.DIRECT_22, ro.BetField.DIRECT_23],
      [ro.BetField.SEPARATE_23_24]: [ro.BetField.DIRECT_23, ro.BetField.DIRECT_24],
      [ro.BetField.SEPARATE_25_26]: [ro.BetField.DIRECT_25, ro.BetField.DIRECT_26],
      [ro.BetField.SEPARATE_26_27]: [ro.BetField.DIRECT_26, ro.BetField.DIRECT_27],
      [ro.BetField.SEPARATE_28_29]: [ro.BetField.DIRECT_28, ro.BetField.DIRECT_29],
      [ro.BetField.SEPARATE_29_30]: [ro.BetField.DIRECT_29, ro.BetField.DIRECT_30],
      [ro.BetField.SEPARATE_31_32]: [ro.BetField.DIRECT_31, ro.BetField.DIRECT_32],
      [ro.BetField.SEPARATE_32_33]: [ro.BetField.DIRECT_32, ro.BetField.DIRECT_33],
      [ro.BetField.SEPARATE_34_35]: [ro.BetField.DIRECT_34, ro.BetField.DIRECT_35],
      [ro.BetField.SEPARATE_35_36]: [ro.BetField.DIRECT_35, ro.BetField.DIRECT_36],
      [ro.BetField.SEPARATE_0_1]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_1],
      [ro.BetField.SEPARATE_0_2]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_2],
      [ro.BetField.SEPARATE_0_3]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_3],
      [ro.BetField.SEPARATE_1_4]: [ro.BetField.DIRECT_1, ro.BetField.DIRECT_4],
      [ro.BetField.SEPARATE_2_5]: [ro.BetField.DIRECT_2, ro.BetField.DIRECT_5],
      [ro.BetField.SEPARATE_3_6]: [ro.BetField.DIRECT_3, ro.BetField.DIRECT_6],
      [ro.BetField.SEPARATE_4_7]: [ro.BetField.DIRECT_4, ro.BetField.DIRECT_7],
      [ro.BetField.SEPARATE_5_8]: [ro.BetField.DIRECT_5, ro.BetField.DIRECT_8],
      [ro.BetField.SEPARATE_6_9]: [ro.BetField.DIRECT_6, ro.BetField.DIRECT_9],
      [ro.BetField.SEPARATE_7_10]: [ro.BetField.DIRECT_7, ro.BetField.DIRECT_10],
      [ro.BetField.SEPARATE_8_11]: [ro.BetField.DIRECT_8, ro.BetField.DIRECT_11],
      [ro.BetField.SEPARATE_9_12]: [ro.BetField.DIRECT_9, ro.BetField.DIRECT_12],
      [ro.BetField.SEPARATE_10_13]: [ro.BetField.DIRECT_10, ro.BetField.DIRECT_13],
      [ro.BetField.SEPARATE_11_14]: [ro.BetField.DIRECT_11, ro.BetField.DIRECT_14],
      [ro.BetField.SEPARATE_12_15]: [ro.BetField.DIRECT_12, ro.BetField.DIRECT_15],
      [ro.BetField.SEPARATE_13_16]: [ro.BetField.DIRECT_13, ro.BetField.DIRECT_16],
      [ro.BetField.SEPARATE_14_17]: [ro.BetField.DIRECT_14, ro.BetField.DIRECT_17],
      [ro.BetField.SEPARATE_15_18]: [ro.BetField.DIRECT_15, ro.BetField.DIRECT_18],
      [ro.BetField.SEPARATE_16_19]: [ro.BetField.DIRECT_16, ro.BetField.DIRECT_19],
      [ro.BetField.SEPARATE_17_20]: [ro.BetField.DIRECT_17, ro.BetField.DIRECT_20],
      [ro.BetField.SEPARATE_18_21]: [ro.BetField.DIRECT_18, ro.BetField.DIRECT_21],
      [ro.BetField.SEPARATE_19_22]: [ro.BetField.DIRECT_19, ro.BetField.DIRECT_22],
      [ro.BetField.SEPARATE_20_23]: [ro.BetField.DIRECT_20, ro.BetField.DIRECT_23],
      [ro.BetField.SEPARATE_21_24]: [ro.BetField.DIRECT_21, ro.BetField.DIRECT_24],
      [ro.BetField.SEPARATE_22_25]: [ro.BetField.DIRECT_22, ro.BetField.DIRECT_25],
      [ro.BetField.SEPARATE_23_26]: [ro.BetField.DIRECT_23, ro.BetField.DIRECT_26],
      [ro.BetField.SEPARATE_24_27]: [ro.BetField.DIRECT_24, ro.BetField.DIRECT_27],
      [ro.BetField.SEPARATE_25_28]: [ro.BetField.DIRECT_25, ro.BetField.DIRECT_28],
      [ro.BetField.SEPARATE_26_29]: [ro.BetField.DIRECT_26, ro.BetField.DIRECT_29],
      [ro.BetField.SEPARATE_27_30]: [ro.BetField.DIRECT_27, ro.BetField.DIRECT_30],
      [ro.BetField.SEPARATE_28_31]: [ro.BetField.DIRECT_28, ro.BetField.DIRECT_31],
      [ro.BetField.SEPARATE_29_32]: [ro.BetField.DIRECT_29, ro.BetField.DIRECT_32],
      [ro.BetField.SEPARATE_30_33]: [ro.BetField.DIRECT_30, ro.BetField.DIRECT_33],
      [ro.BetField.SEPARATE_31_34]: [ro.BetField.DIRECT_31, ro.BetField.DIRECT_34],
      [ro.BetField.SEPARATE_32_35]: [ro.BetField.DIRECT_32, ro.BetField.DIRECT_35],
      [ro.BetField.SEPARATE_33_36]: [ro.BetField.DIRECT_33, ro.BetField.DIRECT_36],
      [ro.BetField.STREET_1_2_3]: [ro.BetField.DIRECT_1, ro.BetField.DIRECT_2, ro.BetField.DIRECT_3],
      [ro.BetField.STREET_4_5_6]: [ro.BetField.DIRECT_4, ro.BetField.DIRECT_5, ro.BetField.DIRECT_6],
      [ro.BetField.STREET_7_8_9]: [ro.BetField.DIRECT_7, ro.BetField.DIRECT_8, ro.BetField.DIRECT_9],
      [ro.BetField.STREET_10_11_12]: [ro.BetField.DIRECT_10, ro.BetField.DIRECT_11, ro.BetField.DIRECT_12],
      [ro.BetField.STREET_13_14_15]: [ro.BetField.DIRECT_13, ro.BetField.DIRECT_14, ro.BetField.DIRECT_15],
      [ro.BetField.STREET_16_17_18]: [ro.BetField.DIRECT_16, ro.BetField.DIRECT_17, ro.BetField.DIRECT_18],
      [ro.BetField.STREET_19_20_21]: [ro.BetField.DIRECT_19, ro.BetField.DIRECT_20, ro.BetField.DIRECT_21],
      [ro.BetField.STREET_22_23_24]: [ro.BetField.DIRECT_22, ro.BetField.DIRECT_23, ro.BetField.DIRECT_24],
      [ro.BetField.STREET_25_26_27]: [ro.BetField.DIRECT_25, ro.BetField.DIRECT_26, ro.BetField.DIRECT_27],
      [ro.BetField.STREET_28_29_30]: [ro.BetField.DIRECT_28, ro.BetField.DIRECT_29, ro.BetField.DIRECT_30],
      [ro.BetField.STREET_31_32_33]: [ro.BetField.DIRECT_31, ro.BetField.DIRECT_32, ro.BetField.DIRECT_33],
      [ro.BetField.STREET_34_35_36]: [ro.BetField.DIRECT_34, ro.BetField.DIRECT_35, ro.BetField.DIRECT_36],
      [ro.BetField.STREET_0_1_2]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_1, ro.BetField.DIRECT_2],
      [ro.BetField.STREET_0_2_3]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_2, ro.BetField.DIRECT_3],
      [ro.BetField.CORNER_1_2_4_5]: [ro.BetField.DIRECT_1, ro.BetField.DIRECT_2, ro.BetField.DIRECT_4, ro.BetField.DIRECT_5],
      [ro.BetField.CORNER_2_3_5_6]: [ro.BetField.DIRECT_2, ro.BetField.DIRECT_3, ro.BetField.DIRECT_5, ro.BetField.DIRECT_6],
      [ro.BetField.CORNER_4_5_7_8]: [ro.BetField.DIRECT_4, ro.BetField.DIRECT_5, ro.BetField.DIRECT_7, ro.BetField.DIRECT_8],
      [ro.BetField.CORNER_5_6_8_9]: [ro.BetField.DIRECT_5, ro.BetField.DIRECT_6, ro.BetField.DIRECT_8, ro.BetField.DIRECT_9],
      [ro.BetField.CORNER_7_8_10_11]: [ro.BetField.DIRECT_7, ro.BetField.DIRECT_8, ro.BetField.DIRECT_10, ro.BetField.DIRECT_11],
      [ro.BetField.CORNER_8_9_11_12]: [ro.BetField.DIRECT_8, ro.BetField.DIRECT_9, ro.BetField.DIRECT_11, ro.BetField.DIRECT_12],
      [ro.BetField.CORNER_10_11_13_14]: [ro.BetField.DIRECT_10, ro.BetField.DIRECT_11, ro.BetField.DIRECT_13, ro.BetField.DIRECT_14],
      [ro.BetField.CORNER_11_12_14_15]: [ro.BetField.DIRECT_11, ro.BetField.DIRECT_12, ro.BetField.DIRECT_14, ro.BetField.DIRECT_15],
      [ro.BetField.CORNER_13_14_16_17]: [ro.BetField.DIRECT_13, ro.BetField.DIRECT_14, ro.BetField.DIRECT_16, ro.BetField.DIRECT_17],
      [ro.BetField.CORNER_14_15_17_18]: [ro.BetField.DIRECT_14, ro.BetField.DIRECT_15, ro.BetField.DIRECT_17, ro.BetField.DIRECT_18],
      [ro.BetField.CORNER_16_17_19_20]: [ro.BetField.DIRECT_16, ro.BetField.DIRECT_17, ro.BetField.DIRECT_19, ro.BetField.DIRECT_20],
      [ro.BetField.CORNER_17_18_20_21]: [ro.BetField.DIRECT_17, ro.BetField.DIRECT_18, ro.BetField.DIRECT_20, ro.BetField.DIRECT_21],
      [ro.BetField.CORNER_19_20_22_23]: [ro.BetField.DIRECT_19, ro.BetField.DIRECT_20, ro.BetField.DIRECT_22, ro.BetField.DIRECT_23],
      [ro.BetField.CORNER_20_21_23_24]: [ro.BetField.DIRECT_20, ro.BetField.DIRECT_21, ro.BetField.DIRECT_23, ro.BetField.DIRECT_24],
      [ro.BetField.CORNER_22_23_25_26]: [ro.BetField.DIRECT_22, ro.BetField.DIRECT_23, ro.BetField.DIRECT_25, ro.BetField.DIRECT_26],
      [ro.BetField.CORNER_23_24_26_27]: [ro.BetField.DIRECT_23, ro.BetField.DIRECT_24, ro.BetField.DIRECT_26, ro.BetField.DIRECT_27],
      [ro.BetField.CORNER_25_26_28_29]: [ro.BetField.DIRECT_25, ro.BetField.DIRECT_26, ro.BetField.DIRECT_28, ro.BetField.DIRECT_29],
      [ro.BetField.CORNER_26_27_29_30]: [ro.BetField.DIRECT_26, ro.BetField.DIRECT_27, ro.BetField.DIRECT_29, ro.BetField.DIRECT_30],
      [ro.BetField.CORNER_28_29_31_32]: [ro.BetField.DIRECT_28, ro.BetField.DIRECT_29, ro.BetField.DIRECT_31, ro.BetField.DIRECT_32],
      [ro.BetField.CORNER_29_30_32_33]: [ro.BetField.DIRECT_29, ro.BetField.DIRECT_30, ro.BetField.DIRECT_32, ro.BetField.DIRECT_33],
      [ro.BetField.CORNER_31_32_34_35]: [ro.BetField.DIRECT_31, ro.BetField.DIRECT_32, ro.BetField.DIRECT_34, ro.BetField.DIRECT_35],
      [ro.BetField.CORNER_32_33_35_36]: [ro.BetField.DIRECT_32, ro.BetField.DIRECT_33, ro.BetField.DIRECT_35, ro.BetField.DIRECT_36],
      [ro.BetField.CORNER_0_1_2_3]: [ro.BetField.DIRECT_0, ro.BetField.DIRECT_1, ro.BetField.DIRECT_2, ro.BetField.DIRECT_3],
      [ro.BetField.LINE_1_6]: [ro.BetField.DIRECT_1, ro.BetField.DIRECT_2, ro.BetField.DIRECT_3, ro.BetField.DIRECT_4, ro.BetField.DIRECT_5, ro.BetField.DIRECT_6],
      [ro.BetField.LINE_4_9]: [ro.BetField.DIRECT_4, ro.BetField.DIRECT_5, ro.BetField.DIRECT_6, ro.BetField.DIRECT_7, ro.BetField.DIRECT_8, ro.BetField.DIRECT_9],
      [ro.BetField.LINE_7_12]: [ro.BetField.DIRECT_7, ro.BetField.DIRECT_8, ro.BetField.DIRECT_9, ro.BetField.DIRECT_10, ro.BetField.DIRECT_11, ro.BetField.DIRECT_12],
      [ro.BetField.LINE_10_15]: [ro.BetField.DIRECT_10, ro.BetField.DIRECT_11, ro.BetField.DIRECT_12, ro.BetField.DIRECT_13, ro.BetField.DIRECT_14, ro.BetField.DIRECT_15],
      [ro.BetField.LINE_13_18]: [ro.BetField.DIRECT_13, ro.BetField.DIRECT_14, ro.BetField.DIRECT_15, ro.BetField.DIRECT_16, ro.BetField.DIRECT_17, ro.BetField.DIRECT_18],
      [ro.BetField.LINE_16_21]: [ro.BetField.DIRECT_16, ro.BetField.DIRECT_17, ro.BetField.DIRECT_18, ro.BetField.DIRECT_19, ro.BetField.DIRECT_20, ro.BetField.DIRECT_21],
      [ro.BetField.LINE_19_24]: [ro.BetField.DIRECT_19, ro.BetField.DIRECT_20, ro.BetField.DIRECT_21, ro.BetField.DIRECT_22, ro.BetField.DIRECT_23, ro.BetField.DIRECT_24],
      [ro.BetField.LINE_22_27]: [ro.BetField.DIRECT_22, ro.BetField.DIRECT_23, ro.BetField.DIRECT_24, ro.BetField.DIRECT_25, ro.BetField.DIRECT_26, ro.BetField.DIRECT_27],
      [ro.BetField.LINE_25_30]: [ro.BetField.DIRECT_25, ro.BetField.DIRECT_26, ro.BetField.DIRECT_27, ro.BetField.DIRECT_28, ro.BetField.DIRECT_29, ro.BetField.DIRECT_30],
      [ro.BetField.LINE_28_33]: [ro.BetField.DIRECT_28, ro.BetField.DIRECT_29, ro.BetField.DIRECT_30, ro.BetField.DIRECT_31, ro.BetField.DIRECT_32, ro.BetField.DIRECT_33],
      [ro.BetField.LINE_31_36]: [ro.BetField.DIRECT_31, ro.BetField.DIRECT_32, ro.BetField.DIRECT_33, ro.BetField.DIRECT_34, ro.BetField.DIRECT_35, ro.BetField.DIRECT_36],
      [ro.BetField.ROW_3]: [
        ro.BetField.ROW_3,
        ro.BetField.DIRECT_3,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_9,
        ro.BetField.DIRECT_12,
        ro.BetField.DIRECT_15,
        ro.BetField.DIRECT_18,
        ro.BetField.DIRECT_21,
        ro.BetField.DIRECT_24,
        ro.BetField.DIRECT_27,
        ro.BetField.DIRECT_30,
        ro.BetField.DIRECT_33,
        ro.BetField.DIRECT_36,
      ],
      [ro.BetField.ROW_2]: [
        ro.BetField.ROW_2,
        ro.BetField.DIRECT_2,
        ro.BetField.DIRECT_5,
        ro.BetField.DIRECT_8,
        ro.BetField.DIRECT_11,
        ro.BetField.DIRECT_14,
        ro.BetField.DIRECT_17,
        ro.BetField.DIRECT_20,
        ro.BetField.DIRECT_23,
        ro.BetField.DIRECT_26,
        ro.BetField.DIRECT_29,
        ro.BetField.DIRECT_32,
        ro.BetField.DIRECT_35,
      ],
      [ro.BetField.ROW_1]: [
        ro.BetField.ROW_1,
        ro.BetField.DIRECT_1,
        ro.BetField.DIRECT_4,
        ro.BetField.DIRECT_7,
        ro.BetField.DIRECT_10,
        ro.BetField.DIRECT_13,
        ro.BetField.DIRECT_16,
        ro.BetField.DIRECT_19,
        ro.BetField.DIRECT_22,
        ro.BetField.DIRECT_25,
        ro.BetField.DIRECT_28,
        ro.BetField.DIRECT_31,
        ro.BetField.DIRECT_34,
      ],
      [ro.BetField.DOZEN_1_12]: [
        ro.BetField.DOZEN_1_12,
        ro.BetField.DIRECT_1,
        ro.BetField.DIRECT_2,
        ro.BetField.DIRECT_3,
        ro.BetField.DIRECT_4,
        ro.BetField.DIRECT_5,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_7,
        ro.BetField.DIRECT_8,
        ro.BetField.DIRECT_9,
        ro.BetField.DIRECT_10,
        ro.BetField.DIRECT_11,
        ro.BetField.DIRECT_12,
      ],
      [ro.BetField.DOZEN_13_24]: [
        ro.BetField.DOZEN_13_24,
        ro.BetField.DIRECT_13,
        ro.BetField.DIRECT_14,
        ro.BetField.DIRECT_15,
        ro.BetField.DIRECT_16,
        ro.BetField.DIRECT_17,
        ro.BetField.DIRECT_18,
        ro.BetField.DIRECT_19,
        ro.BetField.DIRECT_20,
        ro.BetField.DIRECT_21,
        ro.BetField.DIRECT_22,
        ro.BetField.DIRECT_23,
        ro.BetField.DIRECT_24,
      ],
      [ro.BetField.DOZEN_25_36]: [
        ro.BetField.DOZEN_25_36,
        ro.BetField.DIRECT_25,
        ro.BetField.DIRECT_26,
        ro.BetField.DIRECT_27,
        ro.BetField.DIRECT_28,
        ro.BetField.DIRECT_29,
        ro.BetField.DIRECT_30,
        ro.BetField.DIRECT_31,
        ro.BetField.DIRECT_32,
        ro.BetField.DIRECT_33,
        ro.BetField.DIRECT_34,
        ro.BetField.DIRECT_35,
        ro.BetField.DIRECT_36,
      ],

      [ro.BetField.RED]: [
        ro.BetField.RED,
        ro.BetField.DIRECT_1,
        ro.BetField.DIRECT_3,
        ro.BetField.DIRECT_5,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_7,
        ro.BetField.DIRECT_9,
        ro.BetField.DIRECT_12,
        ro.BetField.DIRECT_14,
        ro.BetField.DIRECT_16,
        ro.BetField.DIRECT_18,
        ro.BetField.DIRECT_19,
        ro.BetField.DIRECT_21,
        ro.BetField.DIRECT_23,
        ro.BetField.DIRECT_25,
        ro.BetField.DIRECT_27,
        ro.BetField.DIRECT_30,
        ro.BetField.DIRECT_32,
        ro.BetField.DIRECT_34,
        ro.BetField.DIRECT_36,
      ],

      [ro.BetField.BLACK]: [
        ro.BetField.BLACK,
        ro.BetField.DIRECT_2,
        ro.BetField.DIRECT_4,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_8,
        ro.BetField.DIRECT_10,
        ro.BetField.DIRECT_11,
        ro.BetField.DIRECT_13,
        ro.BetField.DIRECT_15,
        ro.BetField.DIRECT_17,
        ro.BetField.DIRECT_20,
        ro.BetField.DIRECT_22,
        ro.BetField.DIRECT_24,
        ro.BetField.DIRECT_26,
        ro.BetField.DIRECT_28,
        ro.BetField.DIRECT_29,
        ro.BetField.DIRECT_31,
        ro.BetField.DIRECT_33,
        ro.BetField.DIRECT_35,
      ],

      [ro.BetField.ODD]: [
        ro.BetField.ODD,
        ro.BetField.DIRECT_1,
        ro.BetField.DIRECT_3,
        ro.BetField.DIRECT_5,
        ro.BetField.DIRECT_7,
        ro.BetField.DIRECT_9,
        ro.BetField.DIRECT_11,
        ro.BetField.DIRECT_13,
        ro.BetField.DIRECT_15,
        ro.BetField.DIRECT_17,
        ro.BetField.DIRECT_19,
        ro.BetField.DIRECT_21,
        ro.BetField.DIRECT_23,
        ro.BetField.DIRECT_25,
        ro.BetField.DIRECT_27,
        ro.BetField.DIRECT_29,
        ro.BetField.DIRECT_31,
        ro.BetField.DIRECT_33,
        ro.BetField.DIRECT_35,
      ],
      [ro.BetField.EVEN]: [
        ro.BetField.EVEN,
        ro.BetField.DIRECT_2,
        ro.BetField.DIRECT_4,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_8,
        ro.BetField.DIRECT_10,
        ro.BetField.DIRECT_12,
        ro.BetField.DIRECT_14,
        ro.BetField.DIRECT_16,
        ro.BetField.DIRECT_18,
        ro.BetField.DIRECT_20,
        ro.BetField.DIRECT_22,
        ro.BetField.DIRECT_24,
        ro.BetField.DIRECT_26,
        ro.BetField.DIRECT_28,
        ro.BetField.DIRECT_30,
        ro.BetField.DIRECT_32,
        ro.BetField.DIRECT_34,
        ro.BetField.DIRECT_36,
      ],
      [ro.BetField.SMALL]: [
        ro.BetField.SMALL,
        ro.BetField.DIRECT_1,
        ro.BetField.DIRECT_2,
        ro.BetField.DIRECT_3,
        ro.BetField.DIRECT_4,
        ro.BetField.DIRECT_5,
        ro.BetField.DIRECT_6,
        ro.BetField.DIRECT_7,
        ro.BetField.DIRECT_8,
        ro.BetField.DIRECT_9,
        ro.BetField.DIRECT_10,
        ro.BetField.DIRECT_11,
        ro.BetField.DIRECT_12,
        ro.BetField.DIRECT_13,
        ro.BetField.DIRECT_14,
        ro.BetField.DIRECT_15,
        ro.BetField.DIRECT_16,
        ro.BetField.DIRECT_17,
        ro.BetField.DIRECT_18,
      ],
      [ro.BetField.BIG]: [
        ro.BetField.BIG,
        ro.BetField.DIRECT_19,
        ro.BetField.DIRECT_20,
        ro.BetField.DIRECT_21,
        ro.BetField.DIRECT_22,
        ro.BetField.DIRECT_23,
        ro.BetField.DIRECT_24,
        ro.BetField.DIRECT_25,
        ro.BetField.DIRECT_26,
        ro.BetField.DIRECT_27,
        ro.BetField.DIRECT_28,
        ro.BetField.DIRECT_29,
        ro.BetField.DIRECT_30,
        ro.BetField.DIRECT_31,
        ro.BetField.DIRECT_32,
        ro.BetField.DIRECT_33,
        ro.BetField.DIRECT_34,
        ro.BetField.DIRECT_35,
        ro.BetField.DIRECT_36,
      ],
      [ro.BetField.THE_THIRD]: [ro.BetField.SEPARATE_5_8, ro.BetField.SEPARATE_10_11, ro.BetField.SEPARATE_13_16, ro.BetField.SEPARATE_23_24, ro.BetField.SEPARATE_27_30, ro.BetField.SEPARATE_33_36],
      [ro.BetField.ORPHANS]: [ro.BetField.SEPARATE_6_9, ro.BetField.SEPARATE_14_17, ro.BetField.SEPARATE_17_20, ro.BetField.SEPARATE_31_34, ro.BetField.DIRECT_1],
      [ro.BetField.NEIGHBORS_OF_ZERO]: [
        ro.BetField.STREET_0_2_3,
        ro.BetField.STREET_0_2_3,
        ro.BetField.SEPARATE_4_7,
        ro.BetField.SEPARATE_12_15,
        ro.BetField.SEPARATE_18_21,
        ro.BetField.SEPARATE_19_22,
        ro.BetField.CORNER_25_26_28_29,
        ro.BetField.CORNER_25_26_28_29,
        ro.BetField.SEPARATE_32_35,
      ],
      [ro.BetField.ZERO_GAME]: [ro.BetField.SEPARATE_0_3, ro.BetField.SEPARATE_12_15, ro.BetField.DIRECT_26, ro.BetField.SEPARATE_32_35],
    };

    export const BETFIELD_IMAGE_MAPPING = {
      [ro.BetField.DIRECT_0]: 'd_ro_betboard_hover_0_png',
      [ro.BetField.DIRECT_1]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_2]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_3]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_4]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_5]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_6]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_7]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_8]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_9]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_10]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_11]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_12]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_13]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_14]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_15]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_16]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_17]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_18]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_19]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_20]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_21]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_22]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_23]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_24]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_25]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_26]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_27]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_28]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_29]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_30]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_31]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_32]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_33]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_34]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.DIRECT_35]: 'd_ro_betboard_hover_black_square_png',
      [ro.BetField.DIRECT_36]: 'd_ro_betboard_hover_red_square_png',
      [ro.BetField.SEPARATE_1_2]: '',
      [ro.BetField.SEPARATE_2_3]: '',
      [ro.BetField.SEPARATE_4_5]: '',
      [ro.BetField.SEPARATE_5_6]: '',
      [ro.BetField.SEPARATE_7_8]: '',
      [ro.BetField.SEPARATE_8_9]: '',
      [ro.BetField.SEPARATE_10_11]: '',
      [ro.BetField.SEPARATE_11_12]: '',
      [ro.BetField.SEPARATE_13_14]: '',
      [ro.BetField.SEPARATE_14_15]: '',
      [ro.BetField.SEPARATE_16_17]: '',
      [ro.BetField.SEPARATE_17_18]: '',
      [ro.BetField.SEPARATE_19_20]: '',
      [ro.BetField.SEPARATE_20_21]: '',
      [ro.BetField.SEPARATE_22_23]: '',
      [ro.BetField.SEPARATE_23_24]: '',
      [ro.BetField.SEPARATE_25_26]: '',
      [ro.BetField.SEPARATE_26_27]: '',
      [ro.BetField.SEPARATE_28_29]: '',
      [ro.BetField.SEPARATE_29_30]: '',
      [ro.BetField.SEPARATE_31_32]: '',
      [ro.BetField.SEPARATE_32_33]: '',
      [ro.BetField.SEPARATE_34_35]: '',
      [ro.BetField.SEPARATE_35_36]: '',
      [ro.BetField.SEPARATE_0_1]: '',
      [ro.BetField.SEPARATE_0_2]: '',
      [ro.BetField.SEPARATE_0_3]: '',
      [ro.BetField.SEPARATE_1_4]: '',
      [ro.BetField.SEPARATE_2_5]: '',
      [ro.BetField.SEPARATE_3_6]: '',
      [ro.BetField.SEPARATE_4_7]: '',
      [ro.BetField.SEPARATE_5_8]: '',
      [ro.BetField.SEPARATE_6_9]: '',
      [ro.BetField.SEPARATE_7_10]: '',
      [ro.BetField.SEPARATE_8_11]: '',
      [ro.BetField.SEPARATE_9_12]: '',
      [ro.BetField.SEPARATE_10_13]: '',
      [ro.BetField.SEPARATE_11_14]: '',
      [ro.BetField.SEPARATE_12_15]: '',
      [ro.BetField.SEPARATE_13_16]: '',
      [ro.BetField.SEPARATE_14_17]: '',
      [ro.BetField.SEPARATE_15_18]: '',
      [ro.BetField.SEPARATE_16_19]: '',
      [ro.BetField.SEPARATE_17_20]: '',
      [ro.BetField.SEPARATE_18_21]: '',
      [ro.BetField.SEPARATE_19_22]: '',
      [ro.BetField.SEPARATE_20_23]: '',
      [ro.BetField.SEPARATE_21_24]: '',
      [ro.BetField.SEPARATE_22_25]: '',
      [ro.BetField.SEPARATE_23_26]: '',
      [ro.BetField.SEPARATE_24_27]: '',
      [ro.BetField.SEPARATE_25_28]: '',
      [ro.BetField.SEPARATE_26_29]: '',
      [ro.BetField.SEPARATE_27_30]: '',
      [ro.BetField.SEPARATE_28_31]: '',
      [ro.BetField.SEPARATE_29_32]: '',
      [ro.BetField.SEPARATE_30_33]: '',
      [ro.BetField.SEPARATE_31_34]: '',
      [ro.BetField.SEPARATE_32_35]: '',
      [ro.BetField.SEPARATE_33_36]: '',
      [ro.BetField.STREET_1_2_3]: '',
      [ro.BetField.STREET_4_5_6]: '',
      [ro.BetField.STREET_7_8_9]: '',
      [ro.BetField.STREET_10_11_12]: '',
      [ro.BetField.STREET_13_14_15]: '',
      [ro.BetField.STREET_16_17_18]: '',
      [ro.BetField.STREET_19_20_21]: '',
      [ro.BetField.STREET_22_23_24]: '',
      [ro.BetField.STREET_25_26_27]: '',
      [ro.BetField.STREET_28_29_30]: '',
      [ro.BetField.STREET_31_32_33]: '',
      [ro.BetField.STREET_34_35_36]: '',
      [ro.BetField.STREET_0_1_2]: '',
      [ro.BetField.STREET_0_2_3]: '',
      [ro.BetField.CORNER_1_2_4_5]: '',
      [ro.BetField.CORNER_2_3_5_6]: '',
      [ro.BetField.CORNER_4_5_7_8]: '',
      [ro.BetField.CORNER_5_6_8_9]: '',
      [ro.BetField.CORNER_7_8_10_11]: '',
      [ro.BetField.CORNER_8_9_11_12]: '',
      [ro.BetField.CORNER_10_11_13_14]: '',
      [ro.BetField.CORNER_11_12_14_15]: '',
      [ro.BetField.CORNER_13_14_16_17]: '',
      [ro.BetField.CORNER_14_15_17_18]: '',
      [ro.BetField.CORNER_16_17_19_20]: '',
      [ro.BetField.CORNER_17_18_20_21]: '',
      [ro.BetField.CORNER_19_20_22_23]: '',
      [ro.BetField.CORNER_20_21_23_24]: '',
      [ro.BetField.CORNER_22_23_25_26]: '',
      [ro.BetField.CORNER_23_24_26_27]: '',
      [ro.BetField.CORNER_25_26_28_29]: '',
      [ro.BetField.CORNER_26_27_29_30]: '',
      [ro.BetField.CORNER_28_29_31_32]: '',
      [ro.BetField.CORNER_29_30_32_33]: '',
      [ro.BetField.CORNER_31_32_34_35]: '',
      [ro.BetField.CORNER_32_33_35_36]: '',
      [ro.BetField.CORNER_0_1_2_3]: '',
      [ro.BetField.LINE_1_6]: '',
      [ro.BetField.LINE_4_9]: '',
      [ro.BetField.LINE_7_12]: '',
      [ro.BetField.LINE_10_15]: '',
      [ro.BetField.LINE_13_18]: '',
      [ro.BetField.LINE_16_21]: '',
      [ro.BetField.LINE_19_24]: '',
      [ro.BetField.LINE_22_27]: '',
      [ro.BetField.LINE_25_30]: '',
      [ro.BetField.LINE_28_33]: '',
      [ro.BetField.LINE_31_36]: '',
      [ro.BetField.ROW_1]: 'd_ro_betboard_hover_row_1_png',
      [ro.BetField.ROW_2]: 'd_ro_betboard_hover_row_2_png',
      [ro.BetField.ROW_3]: 'd_ro_betboard_hover_row_3_png',
      [ro.BetField.DOZEN_1_12]: 'd_ro_betboard_hover_dozen_png',
      [ro.BetField.DOZEN_13_24]: 'd_ro_betboard_hover_dozen_png',
      [ro.BetField.DOZEN_25_36]: 'd_ro_betboard_hover_dozen_png',
      [ro.BetField.RED]: 'd_ro_betboard_hover_red_png',
      [ro.BetField.BLACK]: 'd_ro_betboard_hover_black_png',
      [ro.BetField.ODD]: 'd_ro_betboard_hover_odd_png',
      [ro.BetField.EVEN]: 'd_ro_betboard_hover_even_png',
      [ro.BetField.SMALL]: 'd_ro_betboard_hover_small_png',
      [ro.BetField.BIG]: 'd_ro_betboard_hover_big_png',
    };

    export const RACETRACK = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

    export const RACETRACK_COLOR = {
      0: Color.GREEN,
      32: Color.RED,
      15: Color.BLACK,
      19: Color.RED,
      4: Color.BLACK,
      21: Color.RED,
      2: Color.BLACK,
      25: Color.RED,
      17: Color.BLACK,
      34: Color.RED,
      6: Color.BLACK,
      27: Color.RED,
      13: Color.BLACK,
      36: Color.RED,
      11: Color.BLACK,
      30: Color.RED,
      8: Color.BLACK,
      23: Color.RED,
      10: Color.BLACK,
      5: Color.RED,
      24: Color.BLACK,
      16: Color.RED,
      33: Color.BLACK,
      1: Color.RED,
      20: Color.BLACK,
      14: Color.RED,
      31: Color.BLACK,
      9: Color.RED,
      22: Color.BLACK,
      18: Color.RED,
      29: Color.BLACK,
      7: Color.RED,
      28: Color.BLACK,
      12: Color.RED,
      35: Color.BLACK,
      3: Color.RED,
      26: Color.BLACK,
    };

    export function getWinningFields(winningField: string) {
      const lightingResult = new Array();
      Object.keys(BETFIELD_MAPPING).map(key => {
        BETFIELD_MAPPING[key].map(value => {
          if (ro.BetField[winningField] === value) {
            if (ro.BETFIELD_IMAGE_MAPPING[key]) {
              lightingResult.push(key);
            }
          }
        });
      });
      return lightingResult;
    }

    export function getNeighbour(num: number, interval: number) {
      if (interval === 0) {
        return [num];
      }

      const index = RACETRACK.indexOf(num);
      const lastElementIndex = RACETRACK.length - 1;
      let computedInterval = interval;

      if (lastElementIndex - computedInterval * 2 <= 0) {
        computedInterval = 18;
      }

      if (index < interval) {
        const diff = computedInterval - index;
        return RACETRACK.slice(RACETRACK.length - diff).concat(RACETRACK.slice(0, computedInterval + index + 1));
      }

      if (index + computedInterval > lastElementIndex) {
        const diff = index + computedInterval - lastElementIndex;
        return RACETRACK.slice(index - computedInterval).concat(RACETRACK.slice(0, diff));
      }

      return RACETRACK.slice(index - interval, index + computedInterval + 1);
    }

    export function num2directfield(num) {
      return `DIRECT_${num}`;
    }

    export function directfield2num(field: string) {
      const split = field.split('_');

      if (split.length !== 2) {
        throw new Error('not an ro direct field');
      }
      if (split[0] !== 'DIRECT') {
        throw new Error('not an ro direct field');
      }

      return parseInt(split[1], 10);
    }
  }
}
