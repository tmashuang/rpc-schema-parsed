import { getDocs } from "./docs.js";

export const rpc = async () => {
  const docs = await getDocs()
    const json = await docs.json()
    return json;
}