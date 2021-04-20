import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ButtonService {
  buttonCSS = {
    padding: "6px 16px",
    border: "solid 1px",
    borderStyle: "none",
    borderRadius: "3px",
    boxShadow: "2px 2px 6px grey",
    outline: "none",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    lineHeight: "1.75",
    alignItems: "center",
    boxSizing: "border-box",
    userSelect: "none",
    fontWeight: "500",
    backgroundColor: "transparent",
  };
}
