import { ArrowDown, Check, Ellipsis, Pause, Play, Plus, Star } from "lucide-solid";
import { Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { DropdownMenu } from "../../../actions/dropdown-menu/dropdown-menu";
import { Table } from "../table";
import type { PlaylistTrack } from "./playlist-tracks";

export type PlaylistRowProps = {
  track: PlaylistTrack;
  selected: boolean;
  playing: boolean;
  favorite: boolean;
  saved: boolean;
  onSelect: () => void;
  onPlay: () => void;
  onFavorite: () => void;
  onSave: () => void;
};

function TrackDetails(props: PlaylistRowProps) {
  return (
    <div class="playlist-track">
      <div class="playlist-cover" data-tone={props.track.tone}>
        <span aria-hidden="true">{props.track.cover}</span>
        <Button
          class="playlist-play"
          variant="ghost"
          size="sm"
          iconOnly
          aria-label={`${props.playing ? "Pause" : "Play"} ${props.track.title}`}
          aria-pressed={props.playing}
          onClick={props.onPlay}
        >
          <Show when={props.playing} fallback={<Play fill="currentColor" />}>
            <Pause fill="currentColor" />
          </Show>
        </Button>
      </div>
      <div class="playlist-details">
        <button
          type="button"
          class="playlist-title"
          aria-pressed={props.selected}
          onClick={props.onSelect}
        >
          {props.track.title}
          <Show when={"explicit" in props.track}>
            <span class="playlist-explicit" title="Explicit">
              E
            </span>
          </Show>
        </button>
        <span class="playlist-secondary">{props.track.album}</span>
      </div>
    </div>
  );
}

function TrackMenu(props: PlaylistRowProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="playlist-menu" aria-label={`Actions for ${props.track.title}`}>
        <Ellipsis size={20} aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item value="play" onSelect={props.onPlay}>
          {props.playing ? "Pause" : "Play"}
        </DropdownMenu.Item>
        <DropdownMenu.Item value="select" onSelect={props.onSelect}>
          Select track
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="favorite" onSelect={props.onFavorite}>
          {props.favorite ? "Remove from favorites" : "Add to favorites"}
        </DropdownMenu.Item>
        <DropdownMenu.Item value="save" onSelect={props.onSave}>
          {props.saved ? "Remove from library" : "Add to library"}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export function PlaylistRow(props: PlaylistRowProps) {
  return (
    <Table.Row selected={props.selected} data-playing={props.playing ? "" : undefined}>
      <Table.Cell class="playlist-favorite-cell">
        <Button
          class="playlist-favorite"
          variant="ghost"
          size="xs"
          iconOnly
          aria-label={`Favorite ${props.track.title}`}
          aria-pressed={props.favorite}
          onClick={props.onFavorite}
        >
          <Star size={15} fill={props.favorite ? "currentColor" : "none"} />
        </Button>
      </Table.Cell>
      <Table.Head scope="row">
        <TrackDetails {...props} />
      </Table.Head>
      <Table.Cell class="playlist-artist">
        <span>{props.track.artist}</span>
      </Table.Cell>
      <Table.Cell class="playlist-library-cell">
        <Button
          class="playlist-library"
          variant="ghost"
          size="xs"
          iconOnly
          aria-label={`Save ${props.track.title} to library`}
          aria-pressed={props.saved}
          onClick={props.onSave}
        >
          <Show when={props.saved} fallback={<Plus size={18} />}>
            <Show when={props.selected} fallback={<Check size={18} />}>
              <ArrowDown size={18} />
            </Show>
          </Show>
        </Button>
      </Table.Cell>
      <Table.Cell align="end" class="playlist-duration">
        {props.track.duration}
      </Table.Cell>
      <Table.Cell class="playlist-actions">
        <TrackMenu {...props} />
      </Table.Cell>
    </Table.Row>
  );
}
