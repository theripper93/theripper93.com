import * as locDefault from '../local/en-US.json';

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

let _premiumMods = null;

export const premiumMods = async () => {
  if(_premiumMods) return _premiumMods;
  const data = await fetch(
    `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListing.json`, { cache: "no-cache" }
  )
    .then((response) => response.json())
    .then((data) => data);

  delete data.announcements;
  _premiumMods = data;
  return _premiumMods;
};

export const getGitReadme = async (url, branch) => {
  const readmePath = `${url.replace("github.com", "raw.githubusercontent.com")}${branch ? "/master/README.md".replace("master", branch) : "/master/README.md"}`;
  const readme = await fetch(readmePath, { cache: "no-cache" })
    .then((response) => response.text())
    .then((data) => data);
  return readme;
};

let _navLocal = null;
let _locData = null;

export const locData = async () => {
  if(_locData) return _locData;
  let navLocal = {};
  if(!_navLocal) {
  try{
    navLocal = await import(`../local/${navigator.language}.json`)
    _navLocal = navLocal;
  }catch(e){
    _navLocal = {}
  }
  }else{
    navLocal = _navLocal;
  }

  const currentLocal = MergeRecursive({...locDefault}, {...navLocal});

  const faqs = currentLocal.faqs;
  const troubleshooting = currentLocal.troubleshooting;
  const issues = currentLocal.issues;
  
  let sortedMods = [];
  let paidMods = [];
  let freeMods = [];
  for (let v of Object.values(currentLocal.modules)) {
    if (v.status == "paid" || v.status == "paidea") {
      paidMods.push(v.name);
    } else {
      freeMods.push(v.name);
    }
  }
  
  sortedMods.push(...paidMods.sort(), ...freeMods.sort());
  sortedMods = sortedMods.map((name) => {
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
  _locData = {modules: sortedMods, faqs, troubleshooting, issues}
  return _locData
};

export const detectSource = (url, autoplay = true) => {
  if (url.includes("youtu")) {
    const videoId = url.split("/").pop();
    return {
      source: "youtube",
      src: `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}`,
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

export const detectNavType = (location) => {
  return location.hash ? location.hash : location.pathname;
};
