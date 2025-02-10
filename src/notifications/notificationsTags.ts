import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate(){
    // OneSignal.User.addTags({
    //     user_name: "Igor",
    //     user_email: "igor.cassolli@tlsv.com.br"
    // });
}

export function tagCartUpdate(itemsCount: string){
    OneSignal.User.addTag("cart_items_count", itemsCount);
}