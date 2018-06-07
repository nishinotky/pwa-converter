// app.js

;(function(){
  const isAlphaNumeric = /^[0-9a-zA-Z_-]+$/
  const emailRe = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

  var app = new Vue({
    el: "#app",

    data: {
      form: {
        name: '',
        shortName: '',
        backgroundColor: '',
        themeColor: ''
      },
      maxLength: 12
    },
    beforeMount: function () {
      var validation = this.validation
      for (key in validation) {
        validation[key] = true
      }
    },
    computed: {
      validation: function () {
        const form = this.form
        return {
          name: (!!form.name),
          shortName: (!!form.shortName && form.shortName.length <= this.maxLength),
          backgroundColor: (!!form.backgroundColor),
          themeColor: (!!form.themeColor)
        }
      },
      isValid: function () {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      },
    },
    filters: {
      emptyValidator: function (val) {
        if ( isEmpty(val) ) {
          return '未入力または内容に誤りがあります。';
        }
      }
    },
    methods: {
      errorClassObject(key) {
        return {
          'is-invalid': (this.validation[key] == false)
        }
      },
      doSubmit() {
        // POST処理
      }
    }
  });

  console.log();

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
