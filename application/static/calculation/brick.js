function brick(){
    var resetButton = document.getElementById('reset');
    var inputs = [document.getElementById('w_length'), 
                document.getElementById('w_width'), 
                document.getElementById('w_thick'),
                document.getElementById('b_length'),
                document.getElementById('b_width'),
                document.getElementById('b_height'),
                document.getElementById('total_brick'),
                document.getElementById('cement_amount'),
                document.getElementById('sand_amount')];

    resetButton.addEventListener('click', function() {
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        }
        // reset the select option to C.M 1:4
        document.getElementById('input').selectedIndex = 1
    });
}