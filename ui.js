class UI{
    constructor(){
        this.profilContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profilContainer.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://fakeimg.pl/250x100/">
                </div>
                <div class="col-md-9">
                    <h4>İletişim Bilgileri</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            İsim: ${profile.name}
                        </li>
                        <li class="list-group-item">
                        Kullanıcı Adı: ${profile.username}
                        </li>
                        <li class="list-group-item">
                        Email: ${profile.email}
                        </li>
                        <li class="list-group-item">
                        Adres: 
                        ${profile.address.street}
                        ${profile.address.city}
                        ${profile.address.zipcode}
                        ${profile.address.suite}
                        </li>
                        <li class="list-group-item">
                        Telefon: ${profile.phone}
                        </li>
                        <li class="list-group-item">
                        İnternet Sitesi: ${profile.website}
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
        `;
    }

    showAlert(text){
        this.alert.style.visibility = "visible";
        this.alert.innerHTML= `
        ${text} bulunamadı!
        `;
    }

    clear(){
        this.profilContainer.innerHTML = "";
        this.alert.style.visibility = "hidden";
    }

}