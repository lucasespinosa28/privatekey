import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Copy(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="ml-4 bg-gray-600 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded text-sm"
    >
      Copy
    </button>
  );
}
