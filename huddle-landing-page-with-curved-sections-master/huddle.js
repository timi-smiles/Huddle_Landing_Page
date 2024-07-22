"use strict"
const message = document.createElement('p');
document.addEventListener('DOMContentLoaded',function(){

    function clear(){
        message.innerHTML = ""
    }
    
    document.querySelector('#subscribe').disabled = true
    document.querySelector('#subscribe').style.opacity = '0.5'

    document.querySelector('#text').onkeyup = function(){
        if (document.querySelector('#text').value ==="" ){
            document.querySelector('#subscribe').disabled = true
            document.querySelector('#subscribe').style.opacity = '0.5'
        }
        else{
            document.querySelector('#subscribe').disabled = false
            document.querySelector('#subscribe').style.opacity = '1'
        }
    }

    document.querySelector('form').onsubmit = function(){
        
        const email = document.querySelector('#text').value
        console.log(email)
        if (!email.includes('@')){
            message.innerHTML = 'check your email please'
            message.style.cssText=`color:red;margin-top:10px;margin-left:10px`
            document.querySelector('#text').style.cssText = `border:1px solid red`
            document.querySelector('form').append(message)
        }
        else{
            message.innerHTML = 'Success'
            setTimeout(clear,3000)
            message.style.cssText=`color:green;margin-top:10px;margin-left:10px`
            document.querySelector('#text').style.cssText = `border:none`
            document.querySelector('#text').value =""
            document.querySelector('form').append(message)
        }
        return false;
    }
    
})