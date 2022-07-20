import { createStore } from "vuex" 
import auth from './modules/auth';
import images from "./modules/images";

const store = createStore({
   state:{
      name: "Vue"
   },
   modules: {
      auth,
      images
   }
})

export default store