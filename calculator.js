function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function equal() {
    var exp = document.form.textview.value;
    if(exp && exp.indexOf('^') == -1){
        document.form.textview.value = eval(exp)
    }
    else if (exp.indexOf('^') !== -1){
        var arg1 = exp.split('^')[0]
        var arg2 = exp.split('^')[1]
        document.form.textview.value = Math.pow(arg1, arg2)
    }
}
function sqrt(){
    var exp = document.form.textview.value;
    if(exp){
        equal()
        document.form.textview.value = Math.sqrt(document.form.textview.value)
    }
}
function exp(){
    var exp = document.form.textview.value;
    if(exp){
        equal()
        document.form.textview.value = Math.exp(document.form.textview.value)
    }
}
function c() {
    document.form.textview.value = '';
}
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
}