const { User , Blog } =require('./model')


!(async function(){
      const zhangsan = await User.create({
            userName:'zhangsan',
            password:'123',
            nickName:'张三'
      })
})()