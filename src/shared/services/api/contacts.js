import { instance } from "./auth";

export const getPhone = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

export const deletePhone = async (id) => {
 await instance.delete(`/contacts/${id}`);
return id;
};

export const addPhone = async (data) => {
  const { data: result } = await instance.post("/contacts", data);
  return result;
};
