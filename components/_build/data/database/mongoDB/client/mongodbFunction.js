export default (data => {
  const userId = data.userId || false;
  const collection = data.collection || false;
  const fnName = data.fnName || false;
  const payload = data.payload || false;

  if (userId && collection && fnName && payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const url = "".concat(window.apiURL, "MongoDB/").concat(collection, "/").concat(fnName);
        const dbData = await fetch(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            userId,
            payload
          })
        });
        const dbDataJson = await dbData.json();
        resolve(dbDataJson);
      } catch (error) {
        reject(error);
      }
    });
  } else {
    throw new Error("Missing nesseasry params ".concat({
      userId,
      collection,
      fnName,
      payload
    }));
  }
});