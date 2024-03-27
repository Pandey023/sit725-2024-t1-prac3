const cardList = [
    {
        title: "Deadpool 2",
        image: "thumb-1920-189378.jpg",
        link: "About Deadpool 2",
        desciption: "Desciption about Deadpool 2"
    },
    {
        title: "Deadpool 3",
        image: "rahal-nejraoui-deapdool-3-poster-4-by-rahalarts.jpg",
        link: "About Deadpool 3",
        desciption: "Desciption about Deadpool 3"
    }
]

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text card-desc-color">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitForm();
    })
})