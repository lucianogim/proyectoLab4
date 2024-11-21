import { inject } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";


export const authGuardFnAdmin = () =>{

    const authService = inject(AuthService)
    const router = inject(Router)


    if(authService.estadoLogeo || localStorage.getItem("tokenAdmin")){
        return true;    
    }else{
        router.navigateByUrl("")
        return false;
    }

}