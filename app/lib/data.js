const url = 'https://673d146b4db5a341d833f71e.mockapi.io/blogs'

export const fetchBlogs = async() => {
    let data = await fetch(url, { next: {revalidate: 10} })
    // let posts = await data.json();
    // console.log('posts: ', posts);

}

export const fetchBlog = async(id) => {
    let data = await fetch(`${url}/${id}`)
    let blog = await data.json();
}