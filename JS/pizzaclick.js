function openpopmenu(){

    swal({
  title: "Are you sure?",
  text: "You give details is true🙄",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})

.then((willDelete) => {
  if (willDelete) {
    swal("Your details submit successfull!💥", {
      icon: "success",
    });
  } else {
    swal("Wrong details is your responsibility!💥");
  }
});
    }

  function detailssubmit(){
    swal("Add Your Order!", "You clicked the button!", "success");
  }