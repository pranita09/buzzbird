const getPostDate = (createdDate) => {
  const datePosted = new Date(createdDate);
  const timeNow = new Date();
  const milliSec = Math.floor(timeNow - datePosted);
  const sec = Math.floor(milliSec / 1000);
  if (sec > 59) {
    const min = Math.floor(sec / 60);
    if (min > 59) {
      const hr = Math.floor(min / 60);
      if (hr > 23) {
        return datePosted.toLocaleDateString("en-us", {
          day: "numeric",
          year: "numeric",
          month: "short",
        });
      } else {
        return hr > 1 ? `${hr} hrs ago` : `${hr} hr ago`;
      }
    } else {
      return min > 1 ? `${min} mins ago` : `${min} min ago`;
    }
  } else {
    return sec > 1 ? `${sec} secs ago` : `${sec} sec ago`;
  }
};

export { getPostDate };
