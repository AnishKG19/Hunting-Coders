import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const slug = () => {

    const [blog , setBlog] = useState();
    const router = useRouter();
    useEffect(()=>{
        if(!router.isReady){
            return ;
        }
        
        const {slug} = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
            return a.json();
        })
        .then((parsed)=>{
            setBlog(parsed)
        })
    } , [router , isReady])



  return (
    <div>

        <h1>this is slug</h1>
        <h1>{blog&& blog.title}</h1>
        
        <hr />

        <div>
            {blog && blog.content} 
            
        </div>
      <h1>Title of the page is {slug} </h1>
      <div>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Fuga nostrum 
         libero excepturi tenetur dignissimos. 
         Assumenda officia fugiat delectus? 
         Illo, doloribus!</div>
    </div>
  )
}

export default [slug]
