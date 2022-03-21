import { RouterModule, Routes } from "@angular/router";
import { PlayersListComponent } from "./players-list/players-list.component";


const routes: Routes = [
    {
        path: 'players',
        component: PlayersListComponent
    },
];

export const PlayersRoutingModule = RouterModule.forChild(routes);