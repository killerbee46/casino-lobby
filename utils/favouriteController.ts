import { Toast } from "@ant-design/react-native";
import { gameData, GameDataType } from "./gameData"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const getAllGames = async () => {
  try {
    const value = await AsyncStorage.getItem('favourites');
    return value != null ? JSON.parse(value) : gameData;
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};

export const getAllFavouriteGames = async () => {
    try {
      const value = await AsyncStorage.getItem('favourites');
      const temp = value != null ? JSON.parse(value) : gameData;
      const favourites = temp?.filter((f:GameDataType)=> f.isFavorite === true)
      return favourites || []
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  };

export const setFavourite = async (id:string) => {
    const games = await getAllGames()
        try {
            const requestedGameIndex = games?.findIndex((f:GameDataType)=> f.id === id)
    games[requestedGameIndex].isFavorite = true
    await AsyncStorage.setItem('favourites',JSON.stringify(games))
    Toast.success("Added to Favourites")
          } catch (error) {
            console.error('Error setting item:', error);
          }
  };

  export const removeFromFavourite = async (id:string) => {
    const games = await getAllGames()
        try {
            const requestedGameIndex = games?.findIndex((f:GameDataType)=> f.id === id)
    games[requestedGameIndex].isFavorite = false
    await AsyncStorage.setItem('favourites',JSON.stringify(games))
    Toast.fail("Removed from Favourite")
          } catch (error) {
            console.error('Error setting item:', error);
          }
  };