 const  { User, Blog} = require('./model')



 !(async function(){
       
       const blogListWithUser = await Blog.findAndCountAll({
            order : [ 
                ['id','desc']
            ],
            include:[
                {
                    model:User,
                    attributes:['userName','nickName']
                }
            ]
       })
       
       console.log("blogListWithUser",blogListWithUser.count);

       console.log(blogListWithUser.rows.map(blog =>{
             const bv=blog.dataValues
             bv.user=blog.user.dataValues
            return bv
       }))
       
 })()



//  !(async function(){
    
//     const blogListWithUser = await Blog.findAndCountAll({
//           order:[
//               ['id','desc']
//           ],
//           include:[
//               {
//                   model:User,
//                   attributes:['userName','nickName'],
//                   where:{
//                       userName:'zhangsan'
//                   }
//               }
//           ]
//     })

//     console.log("blogListWithUser", 
//                 blogListWithUser.count,
//                 blogListWithUser.rows.map(
//                     blog =>{
//                         const b=blog.dataValues
//                          b.user=blog.user.dataValues
//                          return b
//                     }
//                 )
//       );
    

//  })()