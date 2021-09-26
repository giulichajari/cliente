import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "side-nav",
  styleUrls: ["./sidenav.component.scss"],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  @Input()
  isExpanded!: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "Home", name: "Escritorio", icon: "dashboard" },
    { link: "Clientes", name: "Cliente", icon: "storage" }
  ];
}