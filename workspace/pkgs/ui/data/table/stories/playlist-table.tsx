import { Pause, Play, Shuffle } from "lucide-solid";
import { For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Table } from "../table";
import { PlaylistRow } from "./playlist-row";
import { usePlaylist } from "./playlist-state";
import { playlistTracks } from "./playlist-tracks";
import "./playlist.css";

export function PlaylistTable() {
  const { selected, setSelected, playing, favorites, saved, message, togglePlay, toggle } =
    usePlaylist();
  return (
    <div class="playlist-demo">
      <PlaylistToolbar
        playing={!!playing()}
        onPlay={() => togglePlay(playing() ?? selected())}
        onShuffle={() => {
          const track = playlistTracks[Math.floor(Math.random() * playlistTracks.length)];
          if (track) togglePlay(track.id);
        }}
      />
      <Table.Container aria-label="Dance classics playlist">
        <Table.Root class="playlist-table" hoverable aria-label="Dance classics songs">
          <Table.Caption>
            <span role="status">{message()}</span>
          </Table.Caption>
          <PlaylistHeader />
          <Table.Body>
            <For each={playlistTracks}>
              {(track) => (
                <PlaylistRow
                  track={track}
                  selected={selected() === track.id}
                  playing={playing() === track.id}
                  favorite={favorites().includes(track.id)}
                  saved={saved().includes(track.id)}
                  onSelect={() => setSelected(track.id)}
                  onPlay={() => togglePlay(track.id)}
                  onFavorite={() => toggle(track.id, "favorite")}
                  onSave={() => toggle(track.id, "library")}
                />
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Table.Container>
    </div>
  );
}

function PlaylistToolbar(props: { playing: boolean; onPlay: () => void; onShuffle: () => void }) {
  return (
    <div class="playlist-toolbar">
      <div>
        <p class="playlist-eyebrow">PLAYLIST</p>
        <h2>Dance classics</h2>
        <p class="playlist-secondary">10 songs · Your dance floor favorites</p>
      </div>
      <div class="playlist-controls">
        <Button variant="soft" rounded startIcon={<Shuffle />} onClick={props.onShuffle}>
          Shuffle
        </Button>
        <Button
          rounded
          startIcon={
            <Show when={props.playing} fallback={<Play fill="currentColor" />}>
              <Pause fill="currentColor" />
            </Show>
          }
          onClick={props.onPlay}
        >
          {props.playing ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}

function PlaylistHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.Head>
          <span class="playlist-sr-only">Favorite</span>
        </Table.Head>
        <Table.Head>Song</Table.Head>
        <Table.Head>Artist</Table.Head>
        <Table.Head>
          <span class="playlist-sr-only">Library</span>
        </Table.Head>
        <Table.Head align="end">Time</Table.Head>
        <Table.Head>
          <span class="playlist-sr-only">Actions</span>
        </Table.Head>
      </Table.Row>
    </Table.Header>
  );
}
