import './home.css';
import Img from '../img/img.png';

function Home() {
  return (
    <div>
        <div className="content">
            <div className="textBox">
                <h2>It's not just Coffee<br />It's a <span>Starbucks</span></h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div className="imgBox">
                <img src={Img} />
            </div>
        </div>
        <ul className="sci">
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </div>
  );
}

export default Home;
