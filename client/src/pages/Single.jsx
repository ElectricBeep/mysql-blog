import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="edit icon" />
            </Link>
            <img src={Delete} alt="delete icon" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam amet doloremque in mollitia quisquam adipisci tenetur saepe quibusdam alias omnis. Omnis, officiis! Vero, explicabo architecto? Dicta commodi ut iusto fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam architecto ad hic! Magni, nisi libero sed exercitationem praesentium dolorum harum consectetur blanditiis nihil tempora, modi nostrum et iste illo.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single