import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import yourPlaylists from "../../assets/mockdata/heavyRotation.json";
import jumpBackIn from "../../assets/mockdata/jumpBackIn.json";
import recentlyPlayed from "../../assets/mockdata/recentlyPlayed.json";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public welcomeMessage: string = "";

  public data = [
    {
      title: "Your Playlists",
      albums: yourPlaylists,
    },
    {
      title: "Jump back in",
      albums: jumpBackIn,
    },
    {
      title: "Recently played",
      albums: recentlyPlayed,
    },
  ];

  public opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true,
  };

  public optsBadges = {
    slidesOffsetBefore: 20,
    slidesPerView: 5,
    freeMode: true,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setWelcomeMessage();
  }

  public openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/home/${titleEscaped}`);
  }

  // Helper function for image names
  public dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? "-" : "") + char.toLowerCase();
    });
  }

  public openSettings(): void {
    this.router.navigateByUrl(`/tabs/settings`);
  }

  public setWelcomeMessage(): void {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.welcomeMessage = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      this.welcomeMessage = "Good afternoon";
    } else {
      this.welcomeMessage = "Good evening";
    }
  }
}
