import React, { useState } from "react";
import ReactDOM from "react-dom";
import AddSongForm from "../components/AddSongForm";
import SongTable from "../components/SongTable";
import EditSongForm from "../components/EditSongForm";
// Dummy data

function EditPlaylist() {
  const songsData = [
    {
      id: 0,
      artist: "Britney Spears",
      title: "Toxic"
    },
    {
      id: 1,
      artist: "Beyonce",
      title: "Single Ladies"
    },
    {
      id: 2,
      artist: "Rihanna",
      title: "Disturbia"
    },
    {
      id: 3,
      artist: "Halsey",
      title: "Without Me"
    },
    {
      id: 4,
      artist: "Ariana Grande",
      title: "Side to Side"
    }
  ];

  const initialFormState = { id: null, artist: "", title: "" };

  const [songs, setSongs] = useState(songsData);
  const [editing, setEditing] = useState(false);
  const [currentSong, setCurrentSong] = useState(initialFormState);

  const addSong = song => {
    song.id = Date.now();
    setSongs([...songs, song]);
  };
  const removeSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const editRow = song => {
    setEditing(!editing);
    setCurrentSong({ id: song.id, artist: song.artist, title: song.title });
  };

  const updateSong = (id, updatedSong) => {
    setEditing(false);
    setSongs(songs.map(song => (song.id === id ? updatedSong : song)));
  };

  return (
    <div className="playlist">
      <h2>Editing Playlist</h2>
      {editing ? (
        <div>
          <h2>Edit Song</h2>
          <EditSongForm
            editing={editing}
            setEditing={setEditing}
            currentSong={currentSong}
            updateSong={updateSong}
          />
        </div>
      ) : (
        <div>
          <h2>Add Songs</h2>
          <AddSongForm addSong={addSong} />
        </div>
      )}

      <h2>View Songs</h2>
      <SongTable
        songs={songs}
        removeSong={removeSong}
        editRow={editRow}
      />
    </div>
  );
}
export default EditPlaylist;
