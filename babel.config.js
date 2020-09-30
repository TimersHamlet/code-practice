/*
 * @Description: 
 * @Version: 1.0
 * @Author: timershamlet
 * @Date: 2020-09-30 15:12:11
 * @LastEditors: timershamlet
 * @LastEditTime: 2020-09-30 15:22:18
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript',
  ]
};
