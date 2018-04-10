//side nav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider
const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac,{
    data:{
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamacia": null,
        "Europe": null
    }
});

// material boxed = gallery
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

