import { getDB } from "../utils/DB";

test("1 - get DataBase", async () => {
  expect(await getDB()).toEqual([]);
});
