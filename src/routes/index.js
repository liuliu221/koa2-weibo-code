const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


router.get('/profile/:username', async (ctx,next)=>{
     const { username } = ctx.params
     ctx.body={
         title:"koa2 json",
        username
     }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx,next) =>{
      const { userName, pageIndex} =ctx.params
        ctx.body={
            title:"koa2 json",
            userName,
            pageIndex
        }
})

module.exports = router
