/**
 * 1. write function getStoredData = () =>{}
 * 2. store data in a variable form local Storage exlmple: const storedData = localStorage.setItems("key-name");
 * 3. if (storedData || ডাটা যদি থাকে){return Json.Parse(StoredData)} না থাকলে return []; ফাকা অ্যারে।
 * 4. write function saveLocalStorage = id => { const storedData = getStoredData()}
 * 5. check 
 * 
 */

const getStoredJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job-applications');
    if (storeJobApplication) {
        return JSON.parse(storeJobApplication)
    }
    return [];
}
const saveJobApplication = id =>{
    const storeJobApplications = getStoredJobApplication();
    const exists = storeJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storeJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storeJobApplications))
    }
}
export { getStoredJobApplication, saveJobApplication }