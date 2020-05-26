'use strict';
const crypto = require('crypto');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'hi, egg';
  }
  /**
   * 加密方法
   * @param key 加密key
   * @param iv       向量
   * @param data     需要加密的数据
   * @returns string
   */
  async encrypt(key, iv, data) {
    return new Promise((resolve, reject) => {
      var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
      var crypted = cipher.update(data, 'utf8', 'binary');
      crypted += cipher.final('binary');
      crypted = new Buffer.from(crypted, 'binary').toString('hex');
      resolve(crypted);
    })
  };

  /**
   * 解密方法
   * @param key      解密的key
   * @param iv       向量
   * @param crypted  密文
   * @returns string
   */
  async decrypt(key, iv, crypted) {
    return new Promise((resolve, reject) => {
      crypted = new Buffer.from(crypted, 'hex').toString('binary');
      var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
      var decoded = decipher.update(crypted, 'binary', 'utf8');
      decoded += decipher.final('utf8');
      resolve(decoded);
    })
  };
  async encryptToken(text){
    const key = '31169fedc9a20ecf'
    const iv = 'd96adeefaa0102a9'
    return await this.encrypt(key,iv,text)
  }
  async decryptToken(text){
    const key = '31169fedc9a20ecf'
    const iv = 'd96adeefaa0102a9'
    return await this.decrypt(key,iv,text)
  }
  async validateToken() {
    const {ctx,app} = this;
    const token = ctx.request.body.token;
    ctx.body = ctx.request.body;
  }
  async getStore() {

  }
  async buyFlag() {
    const {ctx,app} = this;
    if (ctx.request.body.id==3) {
      return ctx.body = 'You Can`t buy this flag'
    }
    const sql = `SELECT * FROM flag_content WHERE id = "${ctx.request.body.id}"`
    console.log(sql)
    const result = await app.mysql.query(sql);
    ctx.body = result;
  }
}

module.exports = HomeController;