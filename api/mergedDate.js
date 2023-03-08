import { getLangVocabs, getSingleLang } from "./langData";
import { getSingleVocab } from "./vocabData";

const getCardDetails = (firebaseKey) => new Promise((resolve, reject) => {
    getLangVocabs(firebaseKey).then((vocabObject) => {
      const vocabsInside = vocabObject.map((vocab) => getSingleVocab(vocab.firebaseKey));
      Promise.all(vocabsInside).then(() => {
        getSingleLang(firebaseKey).then((langObject) => resolve({ vocabObject, langObject }));
      });
    }).catch(reject);
  });

  export default getCardDetails;
