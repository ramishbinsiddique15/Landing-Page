
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('left').addEventListener('click', function() {
        document.querySelector('aside').style.right = '0';
        console.log('fas');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('right').addEventListener('click', function() {
        document.querySelector('aside').style.right = '-80%';
        console.log('fas');
    });
});
