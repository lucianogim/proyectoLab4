import { inject } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";


export const authGuardFn = () =>{

    const authService = inject(AuthService)
    const router = inject(Router)

    if(authService.estadoLogeo || localStorage.getItem("token")){
        return true;    
    }else{
        router.navigateByUrl("")
        return false;
    }

}