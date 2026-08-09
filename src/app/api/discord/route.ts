import { NextResponse } from "next/server";

enum status {
  online,
  idle,
  dnd,
  offline,
}

export type LanyardResponse = {
  data: {
    discord_user: {
      id: string;
      username: string;
      discriminator: string;
      avatar: string;
    };
    discord_status: "online" | "dnd" | "idle" | "offline";
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify?: {
      track_id: string;
      song: string;
      artist: string;
      album_art_url: string;
    };
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      timestamps: {
        end: number;
      };
      emoji: {
        name: string;
      };
      created_at: number;
    }[];
    success: boolean;
  };
};

export const dynamic = "force-dynamic";

export const GET = async () => {
  const ID = '1280193416617267251';

  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${ID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: `Lanyard API error: ${res.status}` }, { status: res.status });
    }

    const data: LanyardResponse = await res.json();
    return NextResponse.json<LanyardResponse>(data);
  } catch (error) {
    console.error("Error fetching Discord status:", error);
    return NextResponse.json({ error: "Failed to fetch Discord status" }, { status: 500 });
  }
};
