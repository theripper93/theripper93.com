import * as locDefault from './local/en-US.json';
const navLocal = import(`./local/${navigator.language}.json`) ?? {};

function MergeRecursive(obj1, obj2) {
  for (var p in obj2) {
    try {
      if (obj2[p].constructor == Object) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];

      }

    } catch (e) {
      obj1[p] = obj2[p]; 
    }
  }
  return obj1;
}

const currentLocal = navigator.language === MergeRecursive(locDefault, navLocal);

let sortedMods = [];
let paidMods = [];
let freeMods = [];
for (let [k, v] of Object.entries(currentLocal.modules)) {
  if (v.status == "paid" || v.status == "paidea") {
    paidMods.push(v.name);
  } else {
    freeMods.push(v.name);
  }
}

sortedMods.push(...paidMods.sort(), ...freeMods.sort());

export const premiumMods = async () => {
  const data = await fetch(
    `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListing.json`, { cache: "no-cache" }
  )
    .then((response) => response.json())
    .then((data) => data);

  delete data.announcements;
  return data;
};

export const getGitReadme = async (url, branch) => {
  const readmePath = `${url.replace("github.com", "raw.githubusercontent.com")}${branch ? "/master/README.md".replace("master", branch) : "/master/README.md"}`;
  const readme = await fetch(readmePath, { cache: "no-cache" })
    .then((response) => response.text())
    .then((data) => data);
  console.log(readme);
  return readme;
};

export const moduleData = sortedMods.map((name) => {
  let key;
  for (let [k, v] of Object.entries(currentLocal.modules)) {
    if (v.name == name) {
      key = k;
    }
  }
  let module = currentLocal.modules[key];
  module.statusText = currentLocal[module.status];
  module.id = key;
  return currentLocal.modules[key];
});

export const detectSource = (url) => {
  if (url.includes("youtu")) {
    const videoId = url.split("/").pop();
    return {
      source: "youtube",
      src: `https://www.youtube.com/embed/${videoId}`
    };
  } else if (url.includes("streamable")) {
    const videoId = url.split("/").pop();
    return {
      source: "streamable",
      src: `https://streamable.com/e/${videoId}`
    };
  } else if (url.includes("reddit")) {
    const videoId = url.split("/r/").pop();
    return {
      source: "reddit",
      src: `https://www.redditmedia.com/r/${videoId}?ref_source=embed&amp;ref=share&amp;embed=true`
    };
  }
  return null;
};

export const detectNavType = () => {

  const location = window.location.pathname;
  const path = location.split("/");
  const navType = path[1];
  return navType;

};
