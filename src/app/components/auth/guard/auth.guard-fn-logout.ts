import { inject } from "@angular/core";
import { Router } from "@angular/router";


export const authGuardFnLogout = () =>{

    const router = inject(Router)

    if(localStorage.getItem("token") || localStorage.getItem("tokenAdmin")){
        return true;    
    }else{
        router.navigateByUrl("")
        return false;
    }

}