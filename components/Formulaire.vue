<template>
  <div class="tout">
  <h1 class="mt-4 text-center">Démander un Service</h1>
   <div class="container mt-3">
    <div class="row">
      <div class="col-sm-6 shadow bg-trensparent pt-3 pb-3">
       <ValidationObserver ref="form">
          <Form class="row g-3"  @submit.prevent="onSubmit">
              <div class="col-sm-6">
              <ValidationProvider name="Nom" rules="required|alpha" v-slot="{ errors }">
               <label  class="form-label">Nom<span class="text-danger">*</span></label>
                <input v-model="nom" placeholder="Nom" name="Nom" type="text" class="form-control"/>
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
              <div class="col-sm-6">
              <ValidationProvider name="prenom" rules="required|alpha" v-slot="{ errors }">
                <label for="inputPassword4" class="form-label">Prénom <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="Prenom" placeholder="Prénom" id="prenom">
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
              <div class="col-12">
              <ValidationProvider name="telephone" rules="required|numeric" v-slot="{ errors }">
                <label for="inputAddress" class="form-label">Téléphone <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" v-model="telephone" placeholder="Téléphone" id="telephone">
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
               <div class="col-sm-4">
               <ValidationProvider name="service" rules="required" v-slot="{ errors }">
                <label for="inputState" class="form-label">Services <span class="text-danger">*</span></label>
                <select id="services" v-model="service" class="form-select">
                  <option selected>Achat</option>
                  <option>Réchargement</option>
                </select>
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
              <div class="col-sm-4">
              <ValidationProvider name="article" rules="required" v-slot="{ errors }">
                <label for="inputState" class="form-label">Bouteille/Articles<span class="text-danger">*</span></label>
                <select id="article" v-model="article" class="form-select">
                  <option selected>Simam</option>
                  <option >Oryx</option>
                  <option >OLibya</option>
                  <option >Total</option>
                  <option >Oryx Enegie</option>
                  <option >Pétro Ivoire</option>
                  <option >Raccord pour gaz</option>
                  <option >Kit complet B12</option>
                  <option >Réducteur Métalique</option>
                  <option >Kit d'entête B6</option>
                </select>
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
               <div class="col-sm-4">
                <label for="inputState" class="form-label">Type de Bouteilles</label>
                <select id="type" v-model="type" class="form-select">
                  <option selected>B6</option>
                  <option>B12</option>
                </select>
              </div>
              <div class="col-12 h-100" id="map">

              </div>
              <div class="col-sm-4">
              <ValidationProvider name="longitude" rules="required" v-slot="{ errors }">
                <label for="inputState" class="form-label">Longitude<span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="longitude"  placeholder="longitude" id="localisation">
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
              <div class="col-sm-4">
              <ValidationProvider name="latitude" rules="required" v-slot="{ errors }">
                <label for="inputState" class="form-label">Latitude <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="latitude"  placeholder="Latitude" id="localisation">
                <span class="text-danger mt-3">{{ errors[0] }}</span>
              </ValidationProvider>
              </div>
              <div class="col-sm-4">
               <label class="form-label"></label>
               <a @click="locatorButtonPressed" class="btn btn-warning bou mt">Ma position</a>
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-warning bou">Valider</button>
              </div>
            </form>
          </ValidationObserver>
      </div>
      <div class="col-sm-6 mt-2">
      <img class="mx-auto form1" src="/image/form1.png">
      </div>
    </div>
   </div>
  </div>
</template>

<style>
.tout{
background: url('/image/form.png');
background-repeat: no-repeat;
background-size:100% 100%;
}
.form1{
  height:25rem;
}
.mt{
 margin-top:1.9rem; 
}
</style>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {

 components: {

   ValidationObserver,
   ValidationProvider
  },

 data(){
   return{
     nom:'',
     prenom:'',
     telephone:'',
     service:'',
     Article:'',
     type:'',
     latitude:'',
     longitude:'',
     visible: false,
     message:'',
   }
 },
    /*async mounted() {
      // Map initalization
      const google = await gmapsInit()
      this.map = new google.maps.Map(
        document.getElementById('g-map'),
        this.mapOptions
      )
      // Add click event
      google.maps.event.addListener(this.map, 'click', e => {
        // function call not working
        that.createInfoWindow(e.latLng)
      })
    },*/
    methods: {

      locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
          },
          error => {
            console.log(error.message);
          },
      )
    },

    /*async createInfoWindow(latLng) {
          const google = await gmapsInit()
          const infoWindow = new google.maps.InfoWindow({
            content: 'InfoWindow',
            position: latLng
          })
          infoWindow.open(this.map)
        },*/

        onSubmit () {
          this.$refs.form.validate().then(success => {
            if (!success) {
              return;
            }

            alert('Form has been submitted!');

            // Resetting Values
            this.firstName = this.lastName = this.email = '';

            // Wait until the models are updated in the UI
            this.$nextTick(() => {
              this.$refs.form.reset();
            });
          });
        }
      }
}
</script>
