const fetchPost = async (name) => {
    const res = await fetch(`https://www.reddit.com/r/${name}.json`);
  
    if (!res.ok) {
      throw new Error(`Could not fetch!!! recived status: ${res.status}`);
    }
  
    return res.json();
  };

  export default fetchPost