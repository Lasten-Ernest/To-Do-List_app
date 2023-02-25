import { localStorage, getLocalStorageactivities } from "./localStorage.js";

const removeActivity = (activityIndex) => {
    const activityInStore = getLocalStorage();
    const currntActivities = activityInStore.filter(
        (index) => activityInStore.indexOf(index) !== activityIndex,
    );
    for (let i = 0; i<currntActivities.length;){
    i = i+1;
    currntActivities[i].index = currntActivities.indexOf(currntActivities[i])+1;
}
localStorage(currntActivities);
}

export default removeActivity;