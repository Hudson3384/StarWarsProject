import { createContext } from "react";

const peopleContext = createContext({
    peopleList: [],
    updatePeopleList: (email) => null
})

export const PeopleProvider = peopleContext.Provider
export default peopleContext