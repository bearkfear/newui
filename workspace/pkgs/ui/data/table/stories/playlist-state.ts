import { createSignal } from "solid-js";
import { playlistTracks } from "./playlist-tracks";

export function usePlaylist() {
  const [selected, setSelected] = createSignal("love");
  const [playing, setPlaying] = createSignal<string>();
  const [favorites, setFavorites] = createSignal<string[]>(["calabria"]);
  const [saved, setSaved] = createSignal<string[]>(["love"]);
  const [message, setMessage] = createSignal(
    "Select a song by its title. Playback is a visual preview; no audio is loaded.",
  );
  const togglePlay = (id: string) => {
    const next = playing() === id ? undefined : id;
    setSelected(id);
    setPlaying(next);
    setMessage(
      `${next ? "Playing preview" : "Paused"}: ${playlistTracks.find((track) => track.id === id)?.title}`,
    );
  };
  const toggle = (id: string, kind: "favorite" | "library") => {
    const setter = kind === "favorite" ? setFavorites : setSaved;
    const values = kind === "favorite" ? favorites() : saved();
    setter(values.includes(id) ? values.filter((value) => value !== id) : [...values, id]);
    setMessage(
      `${values.includes(id) ? "Removed from" : "Added to"} ${kind === "favorite" ? "favorites" : "library"}: ${playlistTracks.find((track) => track.id === id)?.title}`,
    );
  };
  return { selected, setSelected, playing, favorites, saved, message, togglePlay, toggle };
}
