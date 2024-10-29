import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';



const blog = (props) => {

  console.log(props)
  const [blogs, setBlogs] = useState( props.allblogs );
  const [count, setCount] = useState(2)
 const  fetchMoreData = async () => {
    // if (this.state.items.length >= 500) {
    //   this.setState({ hasMore: false });
    //   return;
    // }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    // setTimeout(() => {
    //   this.setState({
    //     items: this.state.items.concat(Array.from({ length: 20 }))
    //   });
    // }, 500);

    let d = await fetch('http://localhost:3000/api/blogs?count=${count+2}')

    setCount(count+2)
    
    let data  = await d.json()
    setBlogs(data)


  };





  // useEffect(() => {
  //   console.log("Use effect is running");

  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //     .then((parsed) => {
  //       console.log(parsed)

  //       setBlogs(parsed)
  //     })
  // }, [])


  return <>
    this is blog

    <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading here...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >



    {blogs.map((blogitem) => {
      return <div key={blogitem.title}>
        <Link href={`/blogpost/${blogitem.slug}`} >
          <div  className='bg-red-200 font-bold text-center text-2xl m-10'>
            {blogitem.title}
          </div>
          <div>{blogitem.content} </div>
          <div>
            {blogitem.author}
          </div>
        </Link>
      </div>
    })}

    </InfiniteScroll>
  </>

};

export async function getServerSideProps() {

  let data = await fetch('http://localhost:3000/api/blogs')
  let allblogs = await data.json()
  
  return {
    props: { allblogs },
  }
}
export default blog;
