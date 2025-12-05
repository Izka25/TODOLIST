export const getExampleTasks = async () => {
    const response = await fetch("/TODOLIST/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};