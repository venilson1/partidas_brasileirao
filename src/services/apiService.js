import { get } from "./httpService";

export async function apiGetMatches(year) {
  const matches = await get(`${year}`);
  return matches;
}