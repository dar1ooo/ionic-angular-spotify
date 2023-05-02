import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import albums from "../../assets/mockdata//albums";
@Component({
  selector: "app-song",
  templateUrl: "song.page.html",
  styleUrls: ["song.page.scss"],
})
export class SongPage {
  data = null;
  public showTitle = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get("title");
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? "-" : "") + char.toLowerCase();
    });
  }

  @HostListener("ionScroll", ["$event"]) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;
    if (scrollTop > 370) {
      this.showTitle = true;
    } else {
      this.showTitle = false;
    }
  }
}
