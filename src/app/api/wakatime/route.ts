import { NextResponse } from "next/server";

type WakatimeRes = {
  data: {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
      end: string;
      end_date: string;
      end_text: string;
      start: string;
      start_date: string;
      start_text: string;
      timezone: string;
    };
    text: string;
    timeout: number;
    total_seconds: number;
  };
};

export const GET = async () => {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY!).toString(
            "base64"
          )}`,
        },
      },
    );

    if (!res.ok) {
      return NextResponse.json({ error: `HTTP error! status: ${res.status}` }, { status: res.status });
    }

    const data: WakatimeRes = await res.json();

    return NextResponse.json({
      seconds: data.data.total_seconds,
    });
  } catch (error) {
    // Type assertion for error
    const errorMessage = (error as Error).message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

