import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonTabs } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  @ViewChild("tabs") tabs: IonTabs;
  selected = "";
  progress = 42;

  constructor(private router: Router) {}

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  public openSongMenu() {
    this.router.navigate(["song"]);
  }
}
