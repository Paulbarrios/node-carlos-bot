const Telegraf = require ('telegraf');

const bot = new Telegraf('516551398:AAExf-IPWm3em7Itmi14mFWSD8JJgMtRBIA');
bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Hola, soy de instagram. te escribo por si quieres que te demos dinero gratis.')

})


bot.hears('hi', (ctx) => ctx.reply('que te calles pesaoooo'))


bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

console.log('hasta aqui bien')

bot.startPolling()