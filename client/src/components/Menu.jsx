
const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis iste facere laudantium voluptas architecto rerum numquam similique quisquam, fuga expedita illum ad adipisci. Repellat ducimus eligendi adipisci dolor culpa!",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Lorem2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis iste facere laudantium voluptas architecto rerum numquam similique quisquam, fuga expedita illum ad adipisci. Repellat ducimus eligendi adipisci dolor culpa!",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lorem3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis iste facere laudantium voluptas architecto rerum numquam similique quisquam, fuga expedita illum ad adipisci. Repellat ducimus eligendi adipisci dolor culpa!",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Lorem4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis iste facere laudantium voluptas architecto rerum numquam similique quisquam, fuga expedita illum ad adipisci. Repellat ducimus eligendi adipisci dolor culpa!",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Lorem5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis iste facere laudantium voluptas architecto rerum numquam similique quisquam, fuga expedita illum ad adipisci. Repellat ducimus eligendi adipisci dolor culpa!",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="post" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu