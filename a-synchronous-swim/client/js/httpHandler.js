(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    //console.log('pic--->', formData)
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + "/upload_background",
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        console.log(file);
        console.log("success");
        //window.location = window.location.href;
      }
    });
  };

  const getCommand = () => {
    $.ajax({
      type: 'GET',
      data: null,
      url: serverUrl + '/get_command',
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        console.log('move ' + data.toString());
        SwimTeam.move(data.toLowerCase());
      }
    });
  };

  const getBackground = () => {
    $.ajax({
      type: 'GET',
      data: null,
      url: serverUrl + '/get_background',
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // console.log(JSON.stringify(data));
      }
    });
  };

  setInterval(getCommand, 500);
  getBackground();


  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }
    ajaxFileUplaod(file);
  });

})();
