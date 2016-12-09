// Internal messages api interface
import { Favorite } from "../components/favorites/favorites.types";

export enum MessageType {
  APP_STATE,
  APP_STATE_SYNC,
  MENU_TRANSLATE_VENDOR,
  MENU_TRANSLATE_FAVORITE,
}

export interface Message {
  type: MessageType
  payload?: any
}

export interface MenuTranslateVendorPayload {
  vendor: string
}

export interface MenuTranslateFavoritePayload extends MenuTranslateVendorPayload, Favorite {
}