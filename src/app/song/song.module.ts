import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SongPage } from "./song.page";

import { SharedDirectivesModule } from "../directives/shared-directives.module";
import { SongPageRoutingModule } from "./song-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: SongPage }]),
    SongPageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [SongPage],
})
export class SongPageModule {}
