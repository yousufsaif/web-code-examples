document.getElementById('search').addEventListener('keyup', function () {
    var value = this.value.toLowerCase();
    console.log(value);

    var sortPlates = document.querySelectorAll('.person');
    sortPlates.forEach(function (sortPlate) {
        var nameText = sortPlate.querySelector('.name').textContent.toLowerCase();
        var deptText = sortPlate.querySelector('.dept').textContent.toLowerCase();  //You may add the ext no. below
        if (nameText.indexOf(value) !== -1 || deptText.indexOf(value) !== -1) {     //you may add an alternative search criteria here
            sortPlate.style.display = '';
        } else {
            sortPlate.style.display = 'none';
        }
    });
});
