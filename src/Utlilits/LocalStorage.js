export const saveTolocalStorage = (key, value) =>{
    try{
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch(error){
        console.log("Error saving Item", error);
        
    }
};
export const loadFromLocalStorage = (key , defaultValue)=>{
    try{
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
    }
    catch (error){
        console.log("Error to load data", error);
        return defaultValue
        
    }
}