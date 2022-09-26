export const drawItem = (item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("card");

  if (item.type === "image") {
    const itemImage = document.createElement("img");
    itemImage.classList.add("image");
    itemImage.src = item.file;
    itemElement.appendChild(itemImage);
  }
  if (item.type === "audio") {
    const itemAudio = document.createElement("audio");
    itemAudio.classList.add("sound");
    itemAudio.src = item.file;
    itemAudio.controls = true;
    itemElement.appendChild(itemAudio);
  }
  if (item.type === "video") {
    const itemAudio = document.createElement("video");
    itemAudio.classList.add("video");
    itemAudio.src = item.file;
    itemAudio.controls = true;
    itemElement.appendChild(itemAudio);
  }
  const itemTitle = document.createElement("h4");
  itemTitle.classList.add("title");
  itemTitle.textContent = item.title;
  itemElement.appendChild(itemTitle);

  return itemElement;
};
