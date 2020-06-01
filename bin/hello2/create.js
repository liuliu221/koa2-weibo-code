const { User, Blog} = require('./model')



!(async function(){
    const zhangsan = await User.create({
           userName:'zhangsan',
           password:'123',
           nickName:'张三'
    })
    console.log('zhangsan: ' , zhangsan.dataValues)

    const zhangsanId= zhangsan.dataValues.id
    
    const lisi = await User.create({
           userName:'lisi',
           password:'123456',
           nickName: '李四'
    })

    console.log("lisi : " , lisi.dataValues)
    const lisiId= lisi.dataValues.id

    const blog1= await Blog.create({
          title:'标题1',
          content:'内容1',
          userId:zhangsanId
    })

    console.log(blog1.dataValues)

    const blog2= await Blog.create({
          title:'标题2',
          content:'内容2',
          userId:lisiId
    })
    
    console.log(blog2.dataValues);
    
    
})()