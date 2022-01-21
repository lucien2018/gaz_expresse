<template>
<div>
<img src="/image/footer.png" class="foot"/>
    <div class="container-fluid bac">
        <div class="container ">
          <h1 class="text-center pt-5 mb-3" id="contact">Contact-Us :)</h1>
            <div class="haut mt-4">
              <form class="row g-2">
                <div class="col-sm-6">
                    <label for="inputEmail4" class="form-label">Nom</label>
                    <input type="email" class="form-control" placeholder="Nom">
                </div>
                <div class="col-sm-6">
                    <label for="inputPassword4" class="form-label">Prénom</label>
                    <input type="password" class="form-control" placeholder="Prénom">
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="text" class="form-control"  placeholder="Email">
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Message</label>
                    <textarea class="form-control" id="floatingTextarea"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-success">Envoyez</button>
                </div>
                </form>
            </div>
            <div class="row">
                <div class="col-sm-4">
                <P class="text-center mt-4 mb-5 mod"><i class="bi bi-geo-alt"></i> Abobo N'Dotré</P>
                </div>
                <div class="col-sm-4">
                 <p class="text-center mt-4 mb-5 mod"><i class="bi bi-telephone"></i> +225 0748608703/ +225 0101360135</p>
                </div>
                <div class="col-sm-4 ">
                  <a href="http://wa.me/+2250101360135" class="lien"><p class="text-center mt-4 mb-5 modv"><i class="bi bi-whatsapp"></i> WhatSapp</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.foot{
    position: relative;
    width:100%;
    top:1.8rem;
    margin-left:0;
    margin-right:0;
}
.bac{
    background-color:orange;    
}
.haut{
 margin-left:auto;
 margin-right:auto;
 width:50vw;
}
.lien{
    text-decoration: none;
}
.mod{
    color:white;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    font-size:0.8rem;
}
.modv{
    color: green;
    border-radius:1rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    font-size:0.8rem;
}
.modv:hover{
    color: white;
    background:green;
    border-radius:1rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    font-size:0.8rem;
}
</style>