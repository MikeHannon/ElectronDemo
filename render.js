const electron = require('electron')
const {remote} = electron
const {Menu} = remote
const {ipcRenderer} = electron

// sets up our menu bar @ top!
const menu = Menu.buildFromTemplate(
  [
    {
      label: 'Electron',
      submenu:  [
                  {
                    label: 'About Electron',
                    click: function(){
                        console.log("click");
                        ipcRenderer.send("hello", "Some data");
                    }
                  }
                ]
    }
  ]
)
window.$ = window.jQuery = require("./bower_components/jquery/dist/jquery.js");
$('#intro').click(function(){
  // ipcRenderer.send('intro');
  $.ajax({
    method: "get",
    url: "http://pokeapi.co/api/v2/pokemon/"+$('#pokeindex').val(),
    success:function(data){
      console.log(data)
      $('body').append(
      '<img src='+data.sprites.front_shiny+'>'
      )
    }
  }
  );
  console.log('intro!')
})

Menu.setApplicationMenu(menu)
