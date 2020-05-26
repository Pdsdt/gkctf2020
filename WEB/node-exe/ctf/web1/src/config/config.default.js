/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {
      client: {
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'fdbaccdb24943a1c1423fc8b09f885a6',
        // 密码
        password: '6be6f545e812a61239d2ce648d452e2a',
        // 数据库名
        database: 'web1',
      },
      app: true,
      agent: false,
    },
    security: {
      csrf: {
        enable: false,
      },
      xss: {
        enable: false,
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588777046986_7734';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};