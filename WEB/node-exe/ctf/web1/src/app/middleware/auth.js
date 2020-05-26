const crypto = require('crypto');
const md5 = require('js-md5');
module.exports = (options, app) => {
    async function decrypt(key, iv, crypted) {
        return new Promise((resolve, reject) => {
            crypted = new Buffer.from(crypted, 'hex').toString('binary');
            var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
            var decoded = decipher.update(crypted, 'binary', 'utf8');
            decoded += decipher.final('utf8');
            resolve(decoded);
        })
    };
    return async function auth(ctx, next) {
        const token = ctx.header.token;
        const key = '31169fedc9a20ecf'
        const iv = 'd96adeefaa0102a9'
        try {
            let result = await decrypt(key,iv,token)
            const hash = md5(JSON.stringify(ctx.request.body))
            if (result!=hash) {
                console.log('hash')
                throw 'hash';
            }
            if (Date.parse(new Date)-ctx.request.body.timestamp>=2000||Date.parse(new Date)<ctx.request.body.timestamp) {
                console.log(Date.parse(new Date),ctx.request.body.timestamp)
                throw 'time';
            }
            if (String(ctx.request.body.id).indexOf(' ')!=-1) {
                console.log('space')
                throw 'space';
            }
        }catch(err) {
            console.log(err)
            ctx.throw('HaHa Hacker!!!',403)
        }
        await next();
    }
}