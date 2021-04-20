import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  buttonCSS={
    padding:"6px 16px",
    border:"solid 1px",
    borderStyle:"none",
    borderRadius:"3px",
    boxShadow:"2px 2px 6px grey",
    outline:"none",
    letterSpacing:"0.02857em",
    textTransform:"uppercase",
    lineHeight:"1.75",
    alignItems:"center",
    boxSizing:"border-box",
    userSelect:"none",
    fontWeight:"500",
    backgroundColor:"transparent"
  }
  // customButtonCSS={
  //   padding:"6px 16px",
  //   color: "#fff",
  //   fontSize:"0.875rem",
  //   minWidth:"64px",
  //   fontWeight:"500",
  //   borderRadius:"4px",
  //   letterSpacing:"0.02857em",
  //   textTransform:"uppercase",
  //   lineHeight:"1.75",
  //   transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //   transitionProperty: "background-color, box-shadow, border",
  //   transitionDuration: "250ms, 250ms, 250ms",
  //   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)",
  //   transitionDelay: "0ms, 0ms, 0ms"
  // }
}
