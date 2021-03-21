var counter = 0,
  check1 = 0,
  check2 = 0,
  check3 = 0,
  totalPT = 0,
  totalPR = 0,
  totalPO = 0;

$(document).ready(function () {

  $('.content3').hide();

  $("div > input[type=radio]").click(function () {
    var thisParent = $(this).closest(".option");
    var prevClicked = thisParent.find(":checked");
    var currentObj = $(this);
    prevClicked.each(function () {
      if (!$(currentObj).is($(this))) {
        $(this).prop("checked", false);
      }
    });
  });

  $('.radio').change(function () {
    counter++
    var parent = "." + $(this).closest('.option').parent().prop('className');
    var superParent = $(this).closest('.option').parent().parent();
    var supremeParent = $(this).closest('.option').parent().closest('.qc').parent().parent().prop('className');
    var supersupremeParent = "." + $(this).closest('.option').parent().closest('.qc').parent().parent().parent().prop('className');
    if ($(supersupremeParent).attr("class") === "PT_ul") {
      totalPT = parseFloat(totalPT) + parseFloat($(this).val());
    } else if ($(supersupremeParent).attr("class") === "PO_ul") {
      totalPO = parseFloat(totalPO) + parseFloat($(this).val());
    } else if ($(supersupremeParent).attr("class") === "PR_ul") {
      totalPR = parseFloat(totalPR) + parseFloat($(this).val());
    }
    compileQuestion(counter);
    $(parent).attr("name", "answered");
    $(parent).hide('5000');
    $(superParent).hide('6000');
    switcher(supremeParent);
  });

  // window.addEventListener("keydown", function (event) {
  //   if (event.defaultPrevented) {
  //     return;
  //   }

  //   switch (event.key) {
  //     case "a":
  //       $("#yes").prop('checked', true);
  //       $("#maybe").prop('checked', false);
  //       $("#probably").prop('checked', false);
  //       $("#barely").prop('checked', false);
  //       $("#no").prop('checked', false);
  //       break;
  //     case "s":
  //       $("#yes").prop('checked', false);
  //       $("#maybe").prop('checked', true);
  //       $("#probably").prop('checked', false);
  //       $("#barely").prop('checked', false);
  //       $("#no").prop('checked', false);
  //       break;
  //     case "d":
  //       $("#yes").prop('checked', false);
  //       $("#maybe").prop('checked', false);
  //       $("#probably").prop('checked', true);
  //       $("#barely").prop('checked', false);
  //       $("#no").prop('checked', false);
  //       break;
  //     case "f":
  //       $("#yes").prop('checked', false);
  //       $("#maybe").prop('checked', false);
  //       $("#probably").prop('checked', false);
  //       $("#barely").prop('checked', true);
  //       $("#no").prop('checked', false);
  //       break;
  //     case "g":
  //       $("#yes").prop('checked', false);
  //       $("#maybe").prop('checked', false);
  //       $("#probably").prop('checked', false);
  //       $("#barely").prop('checked', false);
  //       $("#no").prop('checked', true);
  //       break;
  //     default:
  //       break;
  //   }
  // });

  TurnOff();
});

function compileQuestion(input) {
  if (counter >= 0 && counter <= 3) {
    $(".PT_Title").show();
    $(".PO_Title").hide();
    $(".PR_Title").hide();
  } else if (counter > 3 && counter < 17) {
    $(".PT_Title").hide();
    $(".PO_Title").show();
    $(".PR_Title").hide();
  } else if (counter >= 18) {
    $(".PT_Title").hide();
    $(".PO_Title").hide();
    $(".PR_Title").show();
  }
  if ($("." + input).attr("name") === "") {
    $("." + input).closest(".qc").show();
  }
  if (input >= 24) {
    $(".PR_Title").hide('5000');
    $('.content3').show();
    drawWithInputValue(this.totalPR, this.totalPO, this.totalPR);
  }
}

function switcher(input) {
  switch (input) {
    case "portability_qc":
      if (check1 >= 3) {
        $(".PT_Title").hide('5000');
      } else {
        check1++;
      }
      break;
    case "reusability_qc":
      if (check1 >= 3) {
        $(".PT_Title").hide('5000');
      } else {
        check1++;
      }
      break;
    case "interoperability_qc":
      if (check1 >= 3) {
        $(".PT_Title").hide('5000');
      } else {
        check1++;
      }
      break;
    case "correctness_qc":
      if (check2 >= 14) {
        $(".PO_Title").hide('5000');
      } else {
        check2++;
      }
      break;
    case "reliability_qc":
      if (check2 >= 14) {
        $(".PO_Title").hide('5000');
      } else {
        check2++;
      }
      break;
    case "efficiency_qc":
      if (check2 >= 14) {
        $(".PO_Title").hide('5000');
      } else {
        check2++;
      }
      break;
    case "integrity_qc":
      if (check2 >= 14) {
        $(".PO_Title").hide('5000');
      } else {
        check2++;
      }
      break;
    case "usability_qc":
      if (check2 >= 14) {
        $(".PO_Title").hide('5000');
      } else {
        check2++;
      }
      break;
    case "maintainability_qc":
      if (check3 >= 6) {
        $(".PR_Title").hide('5000');
      } else {
        check3++;
      }
      break;
    case "flexibility_qc":
      if (check3 >= 6) {
        $(".PR_Title").hide('5000');
      } else {
        check3++;
      }
      break;
    case "testability_qc":
      if (check3 >= 6) {
        $(".PR_Title").hide('5000');
      } else {
        check3++;
      }
      break;
    default:
      break;
  }
}

function TurnOff() {
  for (var i = 0; i < 24; i++) {
    var qc = $('.' + i).closest('.qc').prop('className');
    $('.' + qc).hide();
  }
  $(".PO_Title").hide();
  $(".PR_Title").hide();
  if ($(".0").attr("name") === "") {
    $(".0").closest('.qc').show();
  }
}

function moveToPage(name) {
  var checker = false;

  for (var i = 0; i < 24; i++) {
    if ($("." + i).attr("name") === "") {
      checker = true;
      i = 24;
    } else if ($("." + i).attr("name") !== "") {
      checker = false;
      i = 24;
    }
  }

  if (checker === true) {
    localStorage.clear();
    localStorage.setItem('setId', name);
    passValuePage();
  } else if (checker === false) {
    alert("Refresh the page then choose your Test");
  }
}

function passValuePage() {
  var getId = localStorage.getItem('setId');
  if (getId !== "") {
    // $('html,body').animate({
    //   scrollTop: $("." + getId).offset().top
    // }, 'smooth');
    titleChecker(getId);
  }
  localStorage.clear();
}

function titleChecker(input) {
  switch (input) {
    case "PT_Title":
      $(".PT_Title").show('5000');
      $(".PO_Title").hide('5000');
      $(".PR_Title").hide('5000');
      $(".0").closest('.qc').show('5000');
      $(".4").closest('.qc').hide('5000');
      $(".18").closest('.qc').hide('5000');
      counter = 0;
      break;
    case "PO_Title":
      $(".PO_Title").show('5000');
      $(".PT_Title").hide('5000');
      $(".PR_Title").hide('5000');
      $(".0").closest('.qc').hide('5000');
      $(".4").closest('.qc').show('5000');
      $(".18").closest('.qc').hide('5000');
      counter = 4;
      break;
    case "PR_Title":
      $(".PR_Title").show('5000');
      $(".PO_Title").hide('5000');
      $(".PT_Title").hide('5000');
      $(".0").closest('.qc').hide('5000');
      $(".4").closest('.qc').hide('5000');
      $(".18").closest('.qc').show('5000');
      counter = 18;
      break;
    default:
      break;
  }
}