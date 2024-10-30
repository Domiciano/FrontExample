const ctx = document.getElementById('myChart');
  
const plot = (dataInputA, dataInputB) => {
    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label:'Eje X',
          data: dataInputA,
          borderWidth: 4,
          showLine: true
        },{
            label:'Eje Y',
            data: dataInputB,
            borderWidth: 2,
            showLine: true
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}



const getEvaluationById = async (id)=>{
    let fs = 260;
    let response = await fetch(`http://localhost:8080/evaluation/${id}`);
    let objeto = await response.json();
    let array = objeto.readings.accelerometer;

    let accDataX = [];
    let accDataY = [];

    let time = 0;
    for(let i=0 ; i<array.length ; i++){
        let pointA = {x:time,y:array[i].y};
        let pointB = {x:time,y:array[i].x};
        accDataX.push(pointB);
        accDataY.push(pointA);
        time += (1000/fs);
    }
    plot(accDataX, accDataY);
}

getEvaluationById(1);