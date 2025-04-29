const artists = {
    "Drake": ["Hotline Bling", "God's Plan", "One Dance"],
    "Adele": ["Hello", "Easy on Me", "Someone Like You"],
    "The Weeknd": ["Blinding Lights", "Starboy", "Save Your Tears"],
    "Burna Boy": ["Last Last", "Ye", "Gbona"]
  };
  
  window.onload = () => {
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
      document.getElementById("main-content").style.display = "flex";
      loadArtistList();
      loadDownloads();
    }, 5000); // 5 seconds
  };
  player.src = `/music/Hotline Bling.mp3`;

  
  function showSection(id) {
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  function loadArtistList() {
    const list = document.getElementById("artistList");
    for (let name in artists) {
      let li = document.createElement("li");
      li.textContent = name;
      li.onclick = () => showArtistSongs(name);
      list.appendChild(li);
    }
  }
  
  function showArtistSongs(name) {
    const songs = artists[name];
    const div = document.getElementById("artistSongs");
    div.innerHTML = `<h2>${name}'s Songs</h2><ul>` +
      songs.map(song => `<li>${song} <button onclick="playSong('${song}')">Play</button> <button onclick="downloadSong('${song}')">Download</button></li>`).join('') +
      `</ul>`;
  }
  
  function playSong(songName) {
    const player = document.getElementById("audioPlayer");
    player.src = `music/${songName}.mp3`; // You need to have this file in a /music folder
    player.play();
  }
  
  function downloadSong(songName) {
    let downloads = JSON.parse(localStorage.getItem("downloads") || "[]");
    if (!downloads.includes(songName)) {
      downloads.push(songName);
      localStorage.setItem("downloads", JSON.stringify(downloads));
      loadDownloads();
      alert(`${songName} added to your downloads`);
    }
  }
  
  function loadDownloads() {
    const list = document.getElementById("downloadList");
    const downloads = JSON.parse(localStorage.getItem("downloads") || "[]");
    list.innerHTML = downloads.map(d => `<li>${d}</li>`).join('');
  }
  
  function handleSearch() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const results = [];
    for (let artist in artists) {
      for (let song of artists[artist]) {
        if (song.toLowerCase().includes(query)) {
          results.push({ song, artist });
        }
      }
    }
  
    const container = document.getElementById("searchResults");
    if (results.length === 0) {
      container.innerHTML = `<p>No results found.</p>`;
      return;
    }
  
    container.innerHTML = "<ul>" +
      results.map(r => `<li>${r.song} by ${r.artist} 
        <button onclick="playSong('${r.song}')">Play</button> 
        <button onclick="downloadSong('${r.song}')">Download</button></li>`).join('') +
      "</ul>";
  }
  
  

  
  const artist = {
    "Drake": [
      { title: "Hotline Bling", image: "cover.jpg" },
      { title: "God's Plan", image: "cover.jpg" },
      { title: "One Dance", image: "cover.jpg" }
    ],
    "Adele": [
      { title: "Hello", image: "cover.jpg" },
      { title: "Easy on Me", image: "cover.jpg" },
      { title: "Someone Like You", image: "cover.jpg" }
    ],
    "The Weeknd": [
      { title: "Blinding Lights", image: "cover.jpg" },
      { title: "Starboy", image: "cover.jpg" },
      { title: "Save Your Tears", image: "cover.jpg" }
    ],
    "Burna Boy": [
      { title: "Last Last", image: "cover.jpg" },
      { title: "Ye", image: "cover.jpg" },
      { title: "Gbona", image: "cover.jpg" }
    ]
  };
  
  window.onload = () => {
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
      document.getElementById("main-content").style.display = "flex";
      loadArtistList();
      loadDownloads();
    }, 5000);
  };
  
  function showSection(id) {
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  function loadArtistList() {
    const list = document.getElementById("artistList");
    list.innerHTML = '';
    for (let name in artists) {
      let li = document.createElement("li");
      li.textContent = name;
      li.onclick = () => showArtistSongs(name);
      list.appendChild(li);
    }
  }
  
  function showArtistSongs(name) {
    const songs = artists[name];
    const div = document.getElementById("artistSongs");
    div.innerHTML = `<h2>${name}'s Songs</h2><ul>` +
      songs.map(song => `
        <li>
          <div>
            <strong>${song.title}</strong><br>
            <img src="images/${song.image}" alt="${song.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-top: 5px;">
          </div>
          <div>
            <button class='play' onclick="playSong('${song.title}')">Play</button> 
            <button class='download' onclick="downloadSong('${song.title}')">Download</button>
          </div>
        </li>
      `).join('') + `</ul>`;
  }
  
  function playSong(songName) {
    const player = document.getElementById("audioPlayer");
    player.src = `music/${songName}.mp3`;
    player.play();
  }
  
  function downloadSong(songName) {
    let downloads = JSON.parse(localStorage.getItem("downloads") || "[]");
    if (!downloads.includes(songName)) {
      downloads.push(songName);
      localStorage.setItem("downloads", JSON.stringify(downloads));
      loadDownloads();
      alert(`${songName} added to your downloads`);
    }
  }
  
  function loadDownloads() {
    const list = document.getElementById("downloadList");
    const downloads = JSON.parse(localStorage.getItem("downloads") || "[]");
    list.innerHTML = downloads.map(d => `<li>${d}</li>`).join('');
  }
  
  function handleSearch() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const results = [];
    for (let artist in artists) {
      for (let song of artists[artist]) {
        if (song.title.toLowerCase().includes(query)) {
          results.push({ ...song, artist });
        }
      }
    }
  
    const container = document.getElementById("searchResults");
    if (results.length === 0) {
      container.innerHTML = `<p>No results found.</p>`;
      return;
    }
  
    container.innerHTML = "<ul>" +
      results.map(r => `<li>
          <div>
            <strong>${r.title}</strong><br>
            <img src="images/${r.image}" alt="${r.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-top: 5px;">
          </div>
          <div>
            <button class='play' onclick="playSong('${r.title}')">Play</button>
            <button class='download' onclick="downloadSong('${r.title}')">Download</button>
          </div>
        </li>`).join('') +
      "</ul>";
  }
  
 