import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./SortPopup.module.scss";
import { options } from "../../lib/data";
import { Button } from "@/shared/ui/Button/Button";

export function SortPopup({ current, onSelect }) {
  return Stack({
    direction: "column",
    className: styles.popup,
    children: options.map((label) =>
      Button({
        text: label,
        className: `${styles.popup__option} ${label === current ? styles.popup__option_active : ""}`,
        onClick: () => {
          onSelect(label)
        },
      })
    ),
  });
}
