function display(fun, num){
    var f = fun(num);
    while(num--){
        console.log(f.next());
    }

}

function *fibA(num){
    var x = 0;
    var y = 1;
    while(x < num)
    {
        yield x;
        var tmp = x;
        x = y;
        y += tmp;
    }
}

function *fibB(num){
    var x = 0;
    var y = 1;
    while(num--)
    {
        yield x;
        var tmp = x;
        x = y;
        y += tmp;
    }
}

display(fibA,9);
display(fibB,9);

function gitData(url){
    var data = fetch(url)
    .then((data) => {return data.json()})
    .then((res)=>{
        var arr = res;
        arr.map((e)=>{
            document.write(e.name);
        })
    })
    .catch((err)=>console.log(err));
    return data;
}
var data = gitData("https://jsonplaceholder.typicode.com/users");
console.log(data);
data.then((res)=>console.log(res));
