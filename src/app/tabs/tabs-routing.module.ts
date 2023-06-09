import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () => import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "search",
        loadChildren: () => import("../search/search.module").then((m) => m.SearchPageModule),
      },
      {
        path: "library",
        loadChildren: () => import("../library/library.module").then((m) => m.LibraryPageModule),
      },
      {
        path: "settings",
        loadChildren: () => import("../settings/settings.module").then((m) => m.SettingsPageModule),
      },
      {
        path: "song/:title",
        loadChildren: () => import("../song/song.module").then((m) => m.SongPageModule),
      },
      {
        path: "home/:title",
        loadChildren: () => import("../album/album.module").then((m) => m.AlbumPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
