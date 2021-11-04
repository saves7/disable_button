window.onload = function (){
    let btn_count = document.querySelector('input[name=count]');
    let btn_block = document.querySelector('input[name=block]');
    let btn_unblock = document.querySelector('input[name=unblock]');
    let count_result = document.querySelector('.count-result');
    let count = 0;

    btn_count.onclick = function () {
        count+=1;
        count_result.innerHTML = count+'';
    }

    btn_block.onclick = function (){
        btn_count.setAttribute('disabled', 'disabled');
    }

    btn_unblock.onclick = function (){
        btn_count.removeAttribute('disabled');
    }



}