import {
  Fira_Sans,
  Inter,
  Lilita_One,
  Roboto_Mono,
  Spicy_Rice,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const fira_sans = Fira_Sans({
  subsets: ["cyrillic-ext"],
  weight: "500",
});

export const spicy_rice = Spicy_Rice({
  weight: "400",
  subsets: ["latin"],
});

export const lilita_one = Lilita_One({ weight: "400", subsets: ["latin"] });
