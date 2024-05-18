const getStoredData = () => {
    const storedData = localStorage.getItem('userId');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveStoredData = id => {
    const storedData = getStoredData();
    const exist = storedData.find(storedId => storedId === id);
    if (!exist) {
        storedData.push(id)
        localStorage.setItem('userId', JSON.stringify(storedData))
    }
}
export { getStoredData, saveStoredData }