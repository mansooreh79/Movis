import React, { useState } from "react";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  const fetchFilms = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=fa-IR");
    const data = await response.json();
    setFilms(data.results);
  };

  const fetchSeries = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=YOUR_API_KEY&language=fa-IR");
    const data = await response.json();
    setSeries(data.results);
  };

  useEffect(() => {
    fetchFilms();
    fetchSeries();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <a href="#">صفحه اصلی</a>
          <a href="#">فیلم‌ها</a>
          <a href="#">سریال‌ها</a>
          <a href="#">پروفایل</a>
        </nav>
      </header>
      <main>
        <section class="new-releases">
          <h2>جدیدترین فیلم‌ها و سریال‌ها</h2>
          {films.map((film) => (
            <a href="#">
              <img src={film.poster_path} alt={film.title} />
              <h3>{film.title}</h3>
              <p>{film.overview}</p>
            </a>
          ))}
        </section>
        <section class="search">
          <h2>جستجو</h2>
          <form action="#">
            <input type="text" placeholder="عنوان فیلم یا سریال" />
            <button type="submit">جستجو</button>
          </form>
        </section>
      </main>
      <footer>
        <p>© 2023 سایت فیلم و سریال</p>
      </footer>
    </div>
  );
};

export default Home;
