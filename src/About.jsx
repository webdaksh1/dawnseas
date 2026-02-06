import React from "react";
import "./About.css";

const popularAnimes = [
  {
    title: "Demon Slayer",
    description:
      "Demon Slayer follows Tanjiro Kamado as he battles demons and seeks a cure for his sister. Known for its stunning animation and emotional story.",
    image: "https://imgs.search.brave.com/2GGkq9nFIbDgRV-51MiegE-6y-1hK7l8QfC4LKpr_C4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjQx/MjgzNy5qcGc", 
  },
  {
    title: "One Piece",
    description:
      "One Piece chronicles Monkey D. Luffy’s journey to become the Pirate King across the Grand Line, filled with adventure, friendship, and dreams.",
    image: "https://imgs.search.brave.com/dkEovONSO2OK-sJMQ2VPnxO9H2MzH3RWufKTPszvgQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvbmVuanVtcC5j/b20vai9jb21pY3Mv/X2NvbWljaW1hZ2Uv/b25lcGllY2UxMDYu/anBn",
  },
  {
    title: "Attack on Titan",
    description:
      "Attack on Titan depicts humanity’s struggle for survival against gigantic Titans, blending action, mystery, and unforgettable characters.",
    image: "https://imgs.search.brave.com/KM4qCYTGXkGcAs7FyViqJSCyh2txrg7mYEkmkb025Ts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYXR0/YWNrLW9uLXRpdGFu/LTRrLWZpZXJ5LWVy/ZW4tNTM4YWd5Y3p0/MjRhdm1kdC5qcGc",
  },
  {
    title: "My Hero Academia",
    description:
      "In a world of superpowers, Izuku Midoriya strives to become a top hero, surrounded by intense rivalries and inspiring mentors.",
    image: "https://imgs.search.brave.com/4pYbHs8lr-k3XIvBmOO0SmacQBQeiJHkYipfk_B5YPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lcy53/ZWIuaW1nMy5hY3N0/YS5uZXQvY18zMDBf/MzAwL3BpY3R1cmVz/LzIxLzAyLzE2LzEy/LzQ2LzI3NDk2Mzku/anBn",
  },
];

function About() {
  return (
    <div className="about-section">
      <h2>About Mangas & Animes</h2>
      <p>
        Explore popular mangas and animes captivating audiences worldwide! Here are a few fan favorites:
      </p>
      <div className="anime-list">
        {popularAnimes.map((anime) => (
          <div className="anime-card" key={anime.title}>
            <img src={anime.image} alt={anime.title} className="anime-image" />
            <h3>{anime.title}</h3>
            <p>{anime.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;