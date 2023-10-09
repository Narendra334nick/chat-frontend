export const saveToLocalStore = async (key:string,data:any) =>{
  localStorage.setItem(key, JSON.stringify(data));
}

export const getItemFromLocalStorage = async (key:string)=>{
  const data = await localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}