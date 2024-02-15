import Monster from "../models/monster.model.js"

export const getMonsterFromRepository = async(query) => {
    try{
        const monsters = await Monster.find(query);
        return monsters;
    }catch(e){
        throw Error("Error while fetching monsters")
    }
}

export const updateMonsterInRepository = async (query, update) => {
    try {
      const monster = await Monster.findOneAndUpdate(
        { ...query },
        { ...update },
        { new: true }
      ).lean();
      return monster;
    } catch (e) {
      throw Error("Error while updating superhero");
    } 
  }

export const deleteMonsterFromRepository = async(query) => {
    try{
        const monster = await Monster.findOneAndDelete({...query});
        return monster;
    }catch(e){
        throw Error("Error while deleting a monster");
    }
}

export const createMonstersInRepository = async (payload) => {
    try{
        const newMonster = new Monster(payload);
        const savedMonster = await newMonster.save();
        return savedMonster;
    }catch(e){
        throw Error("Error while creating new monster")
    }
}