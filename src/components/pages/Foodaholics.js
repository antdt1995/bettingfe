// import "./components/pages/foodaholic.css"
import 'bootstrap/dist/css/bootstrap.css';

export function Foodaholic() {
  return (
    <>
      <div class="logo">
        <img src="logo1.jpg" alt="" />
      </div>

      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <i class="fa fa-home"></i>Home
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Quán ăn theo khu vực
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <ul>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 3
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 4
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 5
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 6
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 7
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 8
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 9
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 10
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 11
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận 12
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Bình Tân
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Tân Phú
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Tân Bình
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Phú Nhuận
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Gò Vấp
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Thủ Đức
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quận Bình Thạnh
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              class="d-block mx-auto"
              src="secretgarden.jpg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block mx-auto"
              src="cocoichibanya.jpg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block mx-auto" src="eddie.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <div class="byarea">
              <form>
                <div class="row">
                  <h1>By Area</h1>
                  <div class="column">
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 1</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 2</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 3</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 4</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 5</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 6</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 7</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 8</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 9</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 10</label>
                    <br />
                  </div>
                  <div class="column">
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 11</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận 12</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Bình Tân</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Tân Phú</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Tân Bình</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Gò Vấp</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Thủ Đức</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Quận Bình Thạnh</label>
                    <br />
                  </div>
                </div>
              </form>
            </div>
            <div class="bydish">
              <form>
                <div class="row">
                  <h1>By Dish</h1>
                  <div class="column">
                    <input type="checkbox" name="" id="" />
                    <label for="">Cơm</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Mì, hủ tiếu</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Bánh mì</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Phở</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Bún bò</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Lẩu</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Sushi</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Dimsum</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">BBQ</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Steak</label>
                    <br />
                  </div>
                  <div class="column">
                    <input type="checkbox" name="" id="" />
                    <label for="">Pizza</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Gà</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Burger</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Pasta</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Thai's cuisine</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Chinese's cuisine</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Korean's cuisine</label>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label for="">Japan's cuisine</label>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-6">
            <div class="review">
              <h3>Restaurant Review</h3>
            </div>
            <div class="post">
              <img src="secretgarden.jpg" alt="" />
              <div class="content">
                <h3>Secret Garden - A small oasis inside Saigon</h3>
                <div>
                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>Hoa Binh
                </div>
                <div>
                  <i class="fa fa-calendar" aria-hidden="true"></i> June 3, 2021
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas congue quisque egestas diam in arcu cursus. Urna
                  condimentum mattis pellentesque id. Phasellus faucibus
                  scelerisque eleifend donec pretium vulputate sapien nec...
                </div>
                <div>
                  <a href="secretgarden.html">
                    <em>Read more</em>
                  </a>
                </div>
              </div>
            </div>
            <div class="post">
              <img src="cocoichibanya.jpg" alt="" />
              <div class="content">
                <h3>Coco Ichibanya - Curry in a rainy day</h3>
                <div>
                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>Hoa Binh
                </div>
                <div>
                  <i class="fa fa-calendar" aria-hidden="true"></i> June 3, 2021
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas congue quisque egestas diam in arcu cursus. Urna
                  condimentum mattis pellentesque id. Phasellus faucibus
                  scelerisque eleifend donec pretium vulputate sapien nec...
                </div>
                <div>
                  <a href="cocoichibanya.html">
                    <em>Read more</em>
                  </a>
                </div>
              </div>
            </div>
            <div class="post">
              <img src="eddie.jpg" alt="" />
              <div class="content">
                <h3>EDDIE'S NEW YORK DELI & D1NER - Back to 1950s</h3>
                <div>
                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>Hoa Binh
                </div>
                <div>
                  <i class="fa fa-calendar" aria-hidden="true"></i> June 3, 2021
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas congue quisque egestas diam in arcu cursus. Urna
                  condimentum mattis pellentesque id. Phasellus faucibus
                  scelerisque eleifend donec pretium vulputate sapien nec...
                </div>
                <div>
                  <a href="eddie.html">
                    <em>Read more</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Foodaholic © 2023</p>
        </footer>
      </div>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
