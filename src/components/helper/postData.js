export default async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  
    return response.json();
  }