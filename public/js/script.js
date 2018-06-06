// app.js

;(function(){
  const isAlphaNumeric = /^[0-9a-zA-Z_-]+$/
  const emailRe = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

  var app = new Vue({
    el: "#app",

    data: {
      inputText: {
        name: '',
        shortName: '',
        backgroundColor: '',
        themeColor: ''
      },
      maxLength: 12
    },
    computed: {
      validation: function () {
        const inputText = this.inputText
        return {
          name: (!!inputText.name),
          shortName: (!!inputText.shortName && inputText.shortName.length <= this.maxLength),
          backgroundColor: (!!inputText.backgroundColor),
          themeColor: (!!inputText.themeColor)
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
    return !value || value == '';
  }

}());
