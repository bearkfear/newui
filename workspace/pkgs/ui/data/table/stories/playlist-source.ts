export const playlistSource = `import { createSignal, For } from "solid-js";
import { Table } from "newui";
import "newui/styles.css";
// These modules are colocated with the Table stories.
import { PlaylistRow } from "./playlist-row";
import { playlistTracks } from "./playlist-tracks";
import "./playlist.css";

function Playlist() {
  const [selected, setSelected] = createSignal("love");
  const [playing, setPlaying] = createSignal<string>();
  const [favorites, setFavorites] = createSignal<string[]>(["calabria"]);
  const [saved, setSaved] = createSignal<string[]>(["love"]);
  const toggle = (items: string[], id: string) =>
    items.includes(id) ? items.filter((item) => item !== id) : [...items, id];

  return (
    <Table.Container aria-label="Dance classics playlist">
      <Table.Root class="playlist-table" hoverable>
        <Table.Caption>Playback is a visual preview; no audio is loaded.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Favorite</Table.Head>
            <Table.Head>Song</Table.Head>
            <Table.Head>Artist</Table.Head>
            <Table.Head>Library</Table.Head>
            <Table.Head align="end">Time</Table.Head>
            <Table.Head>Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={playlistTracks}>{(track) => (
            <PlaylistRow
              track={track}
              selected={selected() === track.id}
              playing={playing() === track.id}
              favorite={favorites().includes(track.id)}
              saved={saved().includes(track.id)}
              onSelect={() => setSelected(track.id)}
              onPlay={() => {
                setSelected(track.id);
                setPlaying(playing() === track.id ? undefined : track.id);
              }}
              onFavorite={() => setFavorites(toggle(favorites(), track.id))}
              onSave={() => setSaved(toggle(saved(), track.id))}
            />
          )}</For>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}`;
