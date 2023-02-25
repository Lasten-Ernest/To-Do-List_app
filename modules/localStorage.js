export const localStorage = (activities) => {
    localStorage.setItem('todo_list', JSON.stringify(activities));
};

// get local storage activities
export const getLocalStorageactivities = () => {
    const activityList = localStorage.getItem('todo_list')? 
    JSON.parse(localStorage.getItem('todo_list')) : [];
    return activityList;
};

// edit activity
export const editActivity = (text, activityList, activities) => {
    const activityIndex = activityList.index;
    const editActivity = activities[activityIndex-1];
    editActivity.description = text.textContent;
    localStorage(activities);
    return editActivity;
};