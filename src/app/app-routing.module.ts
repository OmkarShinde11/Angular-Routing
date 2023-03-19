import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './Guards/auth.guard';
import { DeactivateGuard } from './Guards/deactivate.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'Servers',
    component:ServersComponent,
    // canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {
        path:':id/:edit',
        component:EditServerComponent,
        canDeactivate:[DeactivateGuard]
      },
      {
        path:':id',
        component:ServerComponent
      }
    ]
  },
  
  {
    path:'Users',
    component:UsersComponent,
    children:[
      {
        path:':id/:name',
        component:UserComponent
      },
    ]
  },
  // {
  //   path:'not-found',
  //   component:PageNotFoundComponent
  // },
  {
    path:'not-found',
    component:ErrorComponent,
    data:{message:'There is Error in an application'}
  },
  {
    path:'**',
    redirectTo:'/not-found'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
