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
  progress = 90;

  constructor(private router: Router) {}

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  public openSongMenu() {
    this.router.navigate(["song"]);
  }

  public openAlbum(): void {
    const titleEscaped = "WHEN%20WE%20ALL%20FALL%20ASLEEP,%20WHERE%20DO%20WE%20GO%3F";
    this.router.navigateByUrl(`/tabs/song/${titleEscaped}`);
  }
}
