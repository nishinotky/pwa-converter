// app.js

;(function(){
  const isAlphaNumeric = /^[0-9a-zA-Z_-]+$/
  const emailRe = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

  var app = new Vue({
    el: "#app",

    data: {
      form: {
        name: '',
        short_name: '',
        description: '',
        start_url: '',
        display: '',
        orientation: '',
        background_color: '',
        theme_color: '',
        icon_home: '',
        icon_splash: ''
      },
      maxLength: 12,
      controls: [],
      done: 0,
      activated: {
        name: false,
        short_name: false,
        description: false,
        start_url: false,
        display: false,
        orientation: false,
        background_color: false,
        theme_color: false,
        icon_home: false,
        icon_splash: false
      }
    },
    beforeCreate: function () {
      // $('#loader').delay(900).fadeOut(800);
      var loader = document.getElementById('loader');
      if (!loader.classList.contains('loader_close')) {
        loader.classList.add('loader_close')
      }
    },
    created: function () {
      // controller push
      var max = Object.keys(this.form).length;
      for (let i = 0; i < max; i++) {
        this.controls.push(false);
      }
    },
    computed: {
      validation: function () {
        var form = this.form
        return {
          name: (!!form.name),
          short_name: (!!form.short_name && form.short_name.length <= this.maxLength),
          description: (!!form.description),
          start_url: (!!form.start_url),
          display: (!!form.display),
          orientation: (!!form.orientation),
          background_color: (!!form.background_color),
          theme_color: (!!form.theme_color),
          icon_home: (!!form.icon_home),
          icon_splash: (!!form.icon_splash)
        }
      },
      isAllValid: function () {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      },
      progressWidth: function () {
        return {
          width: (this.done / Object.keys(this.form).length * 100) + '%'
        }
      }
    },
    watch: {
      'form.name': function () {
        this.onChangeData(0, 'name')
        this.activated.name = true
      },
      'form.short_name': function () {
        this.onChangeData(1, 'short_name')
        this.activated.short_name = true
      },
      'form.description': function () {
        this.onChangeData(2, 'description')
        this.activated.description = true
      },
      'form.start_url': function () {
        this.onChangeData(3, 'start_url')
        this.activated.start_url = true
      },
      'form.display': function () {
        this.onChangeData(4, 'display')
        this.activated.display = true
      },
      'form.orientation': function () {
        this.onChangeData(5, 'orientation')
        this.activated.orientation = true
      },
      'form.background_color': function () {
        this.onChangeData(6, 'background_color')
        this.activated.background_color = true
      },
      'form.theme_color': function () {
        this.onChangeData(7, 'theme_color')
        this.activated.theme_color = true
      },
      'form.icon_home': function () {
        this.onChangeData(8, 'icon_home')
        this.activated.icon_home = true
      },
      'form.icon_splash': function () {
        this.onChangeData(9, 'icon_splash')
        this.activated.icon_splash = true
      }
    },
    filters: {
      emptyValidator: function (val) {
        if ( isEmpty(val) ) {
          return '未入力または内容に誤りがあります。';
        }
      }
    },
    methods: {
      errorClassObject (key) {
        var activeCheck;
        if (this.activated[key]) {
          activeCheck = (this.validation[key] == false)
        } else {
          activeCheck = false
        }
        return {
          'is-invalid': activeCheck
        }
      },
      activeClassObject (key) {
        var activeVal;
        if (this.activated[key]) {
          activeVal = this.validation[key]
        } else {
          activeVal = true
        }
        return !activeVal
      },
      onChangeData (index, key) {
        this.controls[index] = this.validation[key];

        let done = 0;
        for (let i = 0; i < this.controls.length; i++) {
          if (this.controls[i]) {
            done++;
          }
        }
        this.done = done;
      },
      doSubmit () {
        var result = document.getElementById('result');
        if (!result.classList.contains('open')) {
          result.classList.add('open')
        }

        // smooth scroll
        var target, targetTop;
        target = result;
        targetTop = (target) ? target.offsetTop : 0;
        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  });

  function isEmpty(value){
    return !value;
  }

  var pres = document.querySelectorAll('pre');
  for (var i = 0; i < pres.length; i++) {
    pres[i].addEventListener("dblclick", function () {
      var selection = getSelection();
      var range = document.createRange();
      range.selectNodeContents(this);
      selection.removeAllRanges();
      selection.addRange(range);
    }, false);
  }

}());
