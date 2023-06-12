import { Client, Account, Databases, Storage } from "appwrite";

//set endpoint
const client = new Client();

client
  .setEndpoint("https://appwrite.online-marketplace-sepia.vercel.app")
  .setProject(import.meta.env.VITE_PROJECT);

export const account = new Account(client);

//Database
export const databases = new Databases(client);

//storage
export const storage = new Storage(client);
