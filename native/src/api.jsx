
//Function that fetches the blog posts from the address
export async function fetchResults(props){
   try{
     const api ='http://localhost:4000/posts'
     const response = await fetch(api)
     const results = sortPosts(response)
     return( results )

   }catch(e){
     alert(e)
   }

}

//function to sort the posts by date in reverse order
function sortPosts(posts){

  //sort the retrieved posts by date in reverse chronological
  const sorted = posts.sort((a, b) => a.publishedAt - b.publishedAt)

  return sorted
}
