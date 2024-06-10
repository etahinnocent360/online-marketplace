import { Client, Account, Databases, Storage } from "appwrite";

//set endpoint
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('664cb97300376fecdc29');

export const account = new Account(client);

//Database
export const databases = new Databases(client);

//storage
export const storage = new Storage(client);
