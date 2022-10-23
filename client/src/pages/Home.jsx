import { Link } from "react-router-dom";

const Home = () => {
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
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="post" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home