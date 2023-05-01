import { Component } from "@angular/core";
import { Router } from "@angular/router";

import heavyRotation from "../../assets/mockdata/heavyRotation.json";
import jumpBackIn from "../../assets/mockdata/jumpBackIn.json";
import recentlyPlayed from "../../assets/mockdata/recentlyPlayed.json";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data = [
    {
      title: "Recently played",
      albums: recentlyPlayed,
    },
    {
      title: "Heavy rotation",
      albums: heavyRotation,
    },
    {
      title: "Jump back in",
      albums: jumpBackIn,
    },
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true,
  };

  constructor(private router: Router) {}

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/home/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? "-" : "") + char.toLowerCase();
    });
  }

  public openSettings(): void {
    this.router.navigateByUrl(`/settings`);
  }
}
