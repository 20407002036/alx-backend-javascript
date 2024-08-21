export default function getResponseFromAPI() {
  const promise = new Promise(((resolve, reject) => {
    const a = 1 + 1;
    if (a === 2) {
      resolve('Stuff worked!');
    } else {
      reject(Error('It broke'));
    }
  }));
  return promise;
}
