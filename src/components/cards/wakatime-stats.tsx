import { LogosVisualStudioCode } from "@/components/icons/vscode";
import { Code2 } from "lucide-react";
import useSWR from "swr";
import { Spinner } from "@/components/spinner"; // Untuk menampilkan spinner loading

// Fungsi fetcher untuk useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const WakatimeStats = () => {
  const { data, error, isLoading } = useSWR("/api/wakatime", fetcher);

  if (isLoading) {
    return (
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <Spinner className="w-8 h-8 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <p>Error fetching data!</p>
      </div>
    );
  }

  return (
    <a
      href="https://wakatime.com/@daf7ccde-7d3c-432c-a540-4c99be774860"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <LogosVisualStudioCode className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50" />
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          {Math.round(data.seconds / 3600)}h
        </span>
        <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span>
      </div>
    </a>
  );
};
