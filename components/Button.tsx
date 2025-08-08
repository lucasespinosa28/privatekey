
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
};

export function Button(props: ButtonProps) {
  const { color = "primary", ...rest } = props;
  let buttonStyle = "";
  if (color === "primary") {
    buttonStyle = "bg-blue-600 hover:bg-blue-700";
  } else if (color === "secondary") {
    buttonStyle = "bg-green-600 hover:bg-green-700 mt-6";
  }
  return (
    <button
      {...rest}
      disabled={!IS_BROWSER || props.disabled}
      class={`w-full ${buttonStyle} text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${props.class ?? ""}`}
    >
      {props.children}
    </button>
  );
}
